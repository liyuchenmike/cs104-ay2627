import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import narration from "./week1-narration.mjs";

const root = process.cwd();
const deck = path.join(root, "lecture-notes", "1-logical-reasoning-part1.pptx");
const work = path.join(root, "video-work", "week-01");
const pdfDir = path.join(work, "pdf");
const slidesDir = path.join(work, "slides");
const clipsDir = path.join(work, "clips");
const audioDir = path.join(work, "audio");
const textDir = path.join(work, "text");
const outputDir = path.join(root, "docs", "assets", "video");
const outputVideo = path.join(outputDir, "week-01-logical-reasoning-v3.mp4");
const unmasteredVideo = path.join(work, "week-01-unmastered.mp4");
const outputVtt = path.join(outputDir, "week-01-logical-reasoning.vtt");
const outputChapters = path.join(outputDir, "week-01-chapters.json");
const outputTranscript = path.join(outputDir, "week-01-transcript.txt");
const cover = path.join(root, "docs", "assets", "images", "week-01-cover.webp");
const pdf = path.join(pdfDir, "week-01-powerpoint.pdf");
const ttsPython = path.join(root, ".voice-venv", "bin", "python");
const ttsScript = path.join(root, "tools", "generate-f5-audio.py");
const ttsManifest = path.join(work, "tts-manifest.json");
const modelCache = path.join(root, "voice-work", "model-cache");
const voiceReference = path.join(root, "record.m4a");
const voiceReferenceText = "Hello, and welcome to CS 104. In this course, we will learn how careful reasoning help us understand arguments, solve problems.";
const reuseVoiceAudio = process.env.REUSE_VOICE_AUDIO === "1";

for (const dir of [pdfDir, slidesDir, clipsDir, audioDir, textDir]) {
  if (dir === audioDir && reuseVoiceAudio) continue;
  fs.rmSync(dir, { recursive: true, force: true });
}
for (const dir of [work, pdfDir, slidesDir, clipsDir, audioDir, textDir, outputDir, modelCache]) {
  fs.mkdirSync(dir, { recursive: true });
}

if (!fs.existsSync(ttsPython)) throw new Error("Create .voice-venv and install f5-tts before building the video.");
if (!fs.existsSync(voiceReference)) throw new Error("The private voice reference record.m4a is missing.");

run("osascript", [
  "-e", "tell application \"Microsoft PowerPoint\"",
  "-e", `open POSIX file \"${deck}\"`,
  "-e", "delay 3",
  "-e", `save active presentation in POSIX file \"${pdf}\" as save as PDF`,
  "-e", "close active presentation saving no",
  "-e", "quit",
  "-e", "end tell"
]);
run("pdftoppm", ["-png", "-r", "144", pdf, path.join(slidesDir, "slide")]);

const renderedSlides = fs.readdirSync(slidesDir).filter(name => name.endsWith(".png")).sort(numericSort);
if (renderedSlides.length < 50) throw new Error(`Expected 50 rendered slides; found ${renderedSlides.length}.`);

run("magick", [slidePath(1), "-resize", "1920x1080", "-quality", "86", cover]);

const speechManifest = narration.map((segment, index) => ({
  name: String(index + 1).padStart(2, "0"),
  text: segment.narration.replace(/\s+/g, " ").trim(),
  speed: segment.chapter === "Summary and next steps" ? 1.0 : 1.03
}));
fs.writeFileSync(ttsManifest, JSON.stringify(speechManifest, null, 2) + "\n");
if (reuseVoiceAudio) {
  const completedAudio = fs.readdirSync(audioDir).filter(name => name.endsWith(".wav"));
  if (completedAudio.length !== narration.length) {
    throw new Error(`Expected ${narration.length} reusable audio segments; found ${completedAudio.length}.`);
  }
} else {
  run(ttsPython, [ttsScript, ttsManifest, audioDir, voiceReference, voiceReferenceText], {
    env: {
      HF_HOME: modelCache,
      MPLCONFIGDIR: path.join(root, "voice-work", "matplotlib"),
      XDG_CACHE_HOME: path.join(root, "voice-work", "cache"),
      PYTORCH_ENABLE_MPS_FALLBACK: "1"
    }
  });
}

let timeline = 0;
const cues = [];
const chapterStarts = [];
const concatLines = [];
let previousChapter = null;

for (let index = 0; index < narration.length; index += 1) {
  const segment = narration[index];
  const name = String(index + 1).padStart(2, "0");
  const textFile = path.join(textDir, `${name}.txt`);
  const audioFile = path.join(audioDir, `${name}.wav`);
  const clipFile = path.join(clipsDir, `${name}.mp4`);
  fs.writeFileSync(textFile, segment.narration.replace(/\s+/g, " ").trim() + "\n");
  const duration = probeDuration(audioFile) + 0.35;

  if (segment.chapter !== previousChapter) {
    chapterStarts.push({ title: segment.chapter, time: Number(timeline.toFixed(2)) });
    previousChapter = segment.chapter;
  }

  run("ffmpeg", [
    "-y", "-loglevel", "error",
    "-loop", "1", "-framerate", "2", "-i", slidePath(segment.slide),
    "-i", audioFile,
    "-vf", "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=white,format=yuv420p",
    "-af", "loudnorm=I=-16:LRA=11:TP=-1.5,alimiter=limit=0.84:level=false",
    "-c:v", "libx264", "-preset", "medium", "-crf", "29", "-tune", "stillimage",
    "-c:a", "aac", "-b:a", "112k", "-ar", "48000",
    "-t", duration.toFixed(3), "-movflags", "+faststart", clipFile
  ]);

  const start = timeline;
  timeline += duration;
  const captionText = segment.narration.replace(/\s+/g, " ").trim();
  const chunks = splitCaptionText(captionText, 12);
  const totalWords = chunks.reduce((sum, chunk) => sum + chunk.split(/\s+/).length, 0);
  let cueStart = start;
  chunks.forEach((chunk, chunkIndex) => {
    const words = chunk.split(/\s+/).length;
    const cueEnd = chunkIndex === chunks.length - 1
      ? timeline
      : cueStart + (duration * words / totalWords);
    cues.push({ start: cueStart, end: cueEnd, text: chunk });
    cueStart = cueEnd;
  });
  concatLines.push(`file '${clipFile.replaceAll("'", "'\\''")}'`);
}

const concatFile = path.join(work, "concat.txt");
fs.writeFileSync(concatFile, concatLines.join("\n") + "\n");
run("ffmpeg", ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", concatFile, "-c", "copy", "-movflags", "+faststart", unmasteredVideo]);
run("ffmpeg", [
  "-y", "-loglevel", "error", "-i", unmasteredVideo,
  "-c:v", "copy", "-af", "loudnorm=I=-18:LRA=11:TP=-2",
  "-c:a", "aac", "-b:a", "112k", "-ar", "48000",
  "-movflags", "+faststart", outputVideo
]);
fs.rmSync(unmasteredVideo, { force: true });

const vtt = ["WEBVTT", "", ...cues.flatMap((cue, index) => [
  String(index + 1),
  `${formatTimestamp(cue.start)} --> ${formatTimestamp(cue.end)}`,
  cue.text,
  ""
])].join("\n");
fs.writeFileSync(outputVtt, vtt);
fs.writeFileSync(outputChapters, JSON.stringify({ duration: timeline, chapters: chapterStarts }, null, 2) + "\n");
fs.writeFileSync(outputTranscript, narration.map(segment => `${segment.chapter.toUpperCase()}\n\n${segment.narration.replace(/\s+/g, " ").trim()}`).join("\n\n") + "\n");

console.log(JSON.stringify({ outputVideo, outputVtt, outputTranscript, outputChapters, duration: timeline, chapters: chapterStarts }, null, 2));

function slidePath(number) {
  const suffix = String(number).padStart(2, "0");
  const match = renderedSlides.find(name => name.endsWith(`-${suffix}.png`));
  if (!match) throw new Error(`Missing rendered slide ${number}.`);
  return path.join(slidesDir, match);
}

function numericSort(a, b) {
  const number = value => Number(value.match(/(\d+)\.png$/)?.[1] || 0);
  return number(a) - number(b);
}

function probeDuration(file) {
  const result = spawnSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", file], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(result.stderr || `ffprobe failed for ${file}`);
  return Number(result.stdout.trim());
}

function formatTimestamp(seconds) {
  const milliseconds = Math.max(0, Math.round(seconds * 1000));
  const hours = Math.floor(milliseconds / 3_600_000);
  const minutes = Math.floor((milliseconds % 3_600_000) / 60_000);
  const secs = Math.floor((milliseconds % 60_000) / 1000);
  const millis = milliseconds % 1000;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}.${String(millis).padStart(3, "0")}`;
}

function splitCaptionText(text, maxWords) {
  const chunks = [];
  for (const sentence of text.split(/(?<=[.!?])\s+/)) {
    const words = sentence.trim().split(/\s+/).filter(Boolean);
    for (let index = 0; index < words.length; index += maxWords) {
      chunks.push(words.slice(index, index + maxWords).join(" "));
    }
  }
  return chunks;
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    env: { ...process.env, ...(options.env || {}) }
  });
  if (result.status !== 0) throw new Error(`${command} failed with exit code ${result.status}.`);
}
