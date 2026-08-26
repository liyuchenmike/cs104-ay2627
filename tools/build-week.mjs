import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { reportValidation, validateWorkflow } from "../skills/cs104-weekly-production/scripts/validate_workflow.mjs";

const root = process.cwd();
const options = parseArgs(process.argv.slice(2));
const weekNumber = normalizeWeek(options.week);
const weekId = `week-${String(weekNumber).padStart(2, "0")}`;
const phase = options.renderOnly ? "source" : "authoring";
const preflight = await validateWorkflow({ root, week: weekNumber, phase });
const preflightCode = reportValidation(preflight);
if (preflightCode !== 0) process.exit(preflightCode);

const configFile = path.join(root, "course", "weeks", weekId, "week.json");
if (!fs.existsSync(configFile)) deviation(`missing week config: ${configFile}`);
const config = JSON.parse(fs.readFileSync(configFile, "utf8"));
const workflow = JSON.parse(fs.readFileSync(path.join(root, "workflow", "week-production.json"), "utf8"));
const deck = path.join(root, "lecture-notes", weekId, "lecture.pptx");
const work = path.join(root, "video-work", weekId);
const pdfDir = path.join(work, "pdf");
const slidesDir = path.join(work, "slides");
const clipsDir = path.join(work, "clips");
const audioDir = path.join(work, "audio");
const textDir = path.join(work, "text");
const publicDir = path.join(root, "docs", "weeks", weekId, "assets");
const outputVideo = path.join(publicDir, "lecture.mp4");
const outputVtt = path.join(publicDir, "captions.vtt");
const outputChapters = path.join(publicDir, "chapters.json");
const cover = path.join(publicDir, "cover.webp");
const pdf = path.join(pdfDir, "lecture.pdf");
const unmasteredVideo = path.join(work, "unmastered.mp4");
const ttsPython = path.join(root, ".voice-venv", "bin", "python");
const ttsScript = path.join(root, "tools", "generate-f5-audio.py");
const ttsManifest = path.join(work, "tts-manifest.json");
const modelCache = path.join(root, "voice-work", "model-cache");
const voiceReference = path.join(root, workflow.voiceReference);
const voiceReferenceTranscript = path.join(root, workflow.voiceReferenceTranscript);
const deckHashBefore = sha256(deck);

for (const dir of [pdfDir, slidesDir, clipsDir, audioDir, textDir]) {
  const preserveAudio = dir === audioDir && (options.reuseAudio || options.continueAudio);
  const preserveForRenderOnly = options.renderOnly && ![pdfDir, slidesDir].includes(dir);
  if (!preserveAudio && !preserveForRenderOnly) fs.rmSync(dir, { recursive: true, force: true });
}
for (const dir of [work, pdfDir, slidesDir, clipsDir, audioDir, textDir, publicDir, modelCache]) fs.mkdirSync(dir, { recursive: true });

renderPowerPoint();
const renderedSlides = fs.readdirSync(slidesDir).filter(name => name.endsWith(".png")).sort(numericSort);
if (renderedSlides.length !== config.expectedSlides) deviation(`PowerPoint rendered ${renderedSlides.length} slides; expected ${config.expectedSlides}`);
if (sha256(deck) !== deckHashBefore) deviation("PowerPoint source content changed during rendering");
run("magick", [slidePath(1), "-resize", `${workflow.video.width}x${workflow.video.height}`, "-quality", "86", cover]);

if (options.renderOnly) {
  console.log(JSON.stringify({ week: weekId, renderer: workflow.renderer, slides: renderedSlides.length, pdf, cover }, null, 2));
  process.exit(0);
}

if (!fs.existsSync(ttsPython)) deviation("the approved .voice-venv F5-TTS environment is missing");
if (!fs.existsSync(voiceReference)) deviation(`private voice reference is missing: ${workflow.voiceReference}`);
if (!fs.existsSync(voiceReferenceTranscript)) deviation(`private voice reference transcript is missing: ${workflow.voiceReferenceTranscript}`);
const voiceText = fs.readFileSync(voiceReferenceTranscript, "utf8").trim();
if (!voiceText) deviation("private voice reference transcript is empty");

const narrationFile = path.join(root, "course", "weeks", weekId, "narration.mjs");
const narration = (await import(`${pathToFileURL(narrationFile).href}?build=${fs.statSync(narrationFile).mtimeMs}`)).default;
const speechManifest = narration.map((segment, index) => ({
  name: String(index + 1).padStart(2, "0"),
  text: segment.narration.replace(/\s+/g, " ").trim(),
  speed: segment.chapter === "Summary and next steps" ? workflow.tts.summarySpeed : workflow.tts.regularSpeed,
  nfe_step: workflow.tts.nfeStep
}));
fs.writeFileSync(ttsManifest, JSON.stringify(speechManifest, null, 2) + "\n");

if (options.reuseAudio) {
  const completedAudio = fs.readdirSync(audioDir).filter(name => name.endsWith(".wav"));
  if (completedAudio.length !== narration.length) deviation(`expected ${narration.length} reusable audio segments; found ${completedAudio.length}`);
} else {
  run(ttsPython, [ttsScript, ttsManifest, audioDir, voiceReference, voiceText], {
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
    "-loop", "1", "-framerate", String(workflow.video.frameRate), "-i", slidePath(segment.slide),
    "-i", audioFile,
    "-vf", `scale=${workflow.video.width}:${workflow.video.height}:force_original_aspect_ratio=decrease,pad=${workflow.video.width}:${workflow.video.height}:(ow-iw)/2:(oh-ih)/2:color=white,format=yuv420p`,
    "-af", "loudnorm=I=-16:LRA=11:TP=-1.5,alimiter=limit=0.84:level=false",
    "-c:v", "libx264", "-preset", "medium", "-crf", "29", "-tune", "stillimage",
    "-c:a", "aac", "-b:a", "112k", "-ar", String(workflow.video.audioSampleRate),
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
    const cueEnd = chunkIndex === chunks.length - 1 ? timeline : cueStart + (duration * words / totalWords);
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
  "-c:v", "copy", "-af", `loudnorm=I=${workflow.video.integratedLoudness}:LRA=11:TP=${workflow.video.truePeak}`,
  "-c:a", "aac", "-b:a", "112k", "-ar", String(workflow.video.audioSampleRate),
  "-movflags", "+faststart", outputVideo
]);
fs.rmSync(unmasteredVideo, { force: true });
const finalDuration = probeDuration(outputVideo);

const vtt = ["WEBVTT", "", ...cues.flatMap((cue, index) => [
  String(index + 1),
  `${formatTimestamp(cue.start)} --> ${formatTimestamp(Math.min(cue.end, finalDuration))}`,
  cue.text,
  ""
])].join("\n");
fs.writeFileSync(outputVtt, vtt);
fs.writeFileSync(outputChapters, JSON.stringify({ duration: finalDuration, chapters: chapterStarts }, null, 2) + "\n");

const complete = await validateWorkflow({ root, week: weekNumber, phase: "complete" });
const completeCode = reportValidation(complete);
if (completeCode !== 0) process.exit(completeCode);
console.log(JSON.stringify({ week: weekId, outputVideo, outputVtt, outputChapters, duration: finalDuration, chapters: chapterStarts }, null, 2));

function renderPowerPoint() {
  spawnSync("xattr", ["-d", "com.apple.quarantine", deck], { stdio: "ignore" });
  run("open", ["-a", "Microsoft PowerPoint", deck]);
  run("osascript", [
    "-e", "tell application \"Microsoft PowerPoint\"",
    "-e", "set tries to 0",
    "-e", "repeat while (count of presentations) is 0 and tries < 30",
    "-e", "delay 1",
    "-e", "set tries to tries + 1",
    "-e", "end repeat",
    "-e", "if (count of presentations) is 0 then error \"PowerPoint did not open the canonical lecture deck.\"",
    "-e", "if name of active presentation is not \"lecture.pptx\" then error \"PowerPoint opened a non-canonical presentation.\"",
    "-e", `if (count of slides of active presentation) is not ${config.expectedSlides} then error \"PowerPoint slide count differs from week.json.\"`,
    "-e", `save active presentation in POSIX file "${appleEscape(pdf)}" as save as PDF`,
    "-e", "close active presentation saving no",
    "-e", "end tell"
  ]);
  run("pdftoppm", ["-png", "-r", "144", pdf, path.join(slidesDir, "slide")]);
}

function slidePath(number) {
  const suffix = String(number).padStart(2, "0");
  const match = renderedSlides.find(name => name.endsWith(`-${suffix}.png`));
  if (!match) deviation(`missing PowerPoint-rendered slide ${number}`);
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
    for (let index = 0; index < words.length; index += maxWords) chunks.push(words.slice(index, index + maxWords).join(" "));
  }
  return chunks;
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function appleEscape(value) {
  return value.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
}

function normalizeWeek(value) {
  const match = String(value ?? "").match(/^(?:week-)?0*([1-9]\d*)$/i);
  if (!match) throw new Error("Pass --week as a positive number or week-NN.");
  return Number(match[1]);
}

function parseArgs(argv) {
  const parsed = { week: null, renderOnly: false, reuseAudio: false, continueAudio: false };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--week") parsed.week = argv[++index];
    else if (token === "--render-only") parsed.renderOnly = true;
    else if (token === "--reuse-audio") parsed.reuseAudio = true;
    else if (token === "--continue-audio") parsed.continueAudio = true;
    else throw new Error(`Unknown argument: ${token}`);
  }
  if (parsed.reuseAudio && parsed.continueAudio) throw new Error("Choose either --reuse-audio or --continue-audio.");
  return parsed;
}

function deviation(message) {
  console.error("WORKFLOW_DEVIATION_APPROVAL_REQUIRED");
  console.error(`- ${message}`);
  process.exit(2);
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { stdio: "inherit", env: { ...process.env, ...(options.env || {}) } });
  if (result.status !== 0) throw new Error(`${command} failed with exit code ${result.status}.`);
}
