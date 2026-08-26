#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const phases = new Set(["source", "authoring", "complete"]);
const canonicalWorkDirs = ["audio", "clips", "pdf", "slides", "text"];
const canonicalWorkFiles = new Set(["concat.txt", "tts-manifest.json"]);
const canonicalPublicAssets = new Set(["cover.webp", "lesson.js", "lecture.mp4", "captions.vtt", "chapters.json"]);

export async function validateWorkflow({ root = process.cwd(), week, phase = "complete" }) {
  const projectRoot = path.resolve(root);
  const weekNumber = normalizeWeek(week);
  const weekId = `week-${String(weekNumber).padStart(2, "0")}`;
  const errors = [];
  const add = message => errors.push(message);

  if (!phases.has(phase)) throw new Error(`Unknown phase: ${phase}`);

  cleanupApprovedRootMetadata(projectRoot);
  checkForbiddenRoot(projectRoot, add);
  checkLectureSources(projectRoot, add);
  checkLegacyTools(projectRoot, add);
  checkSharedPublicAssets(projectRoot, add);

  const sourceDeck = path.join(projectRoot, "lecture-notes", `${weekId}.pptx`);
  requireFile(sourceDeck, add, "canonical source deck");
  checkIgnored(projectRoot, sourceDeck, add, "source deck");

  const courseDir = path.join(projectRoot, "course", "weeks", weekId);
  const configFile = path.join(courseDir, "week.json");
  const narrationFile = path.join(courseDir, "narration.mjs");
  let config = null;

  if (fs.existsSync(configFile)) {
    try {
      config = JSON.parse(fs.readFileSync(configFile, "utf8"));
      validateConfig(config, weekId, weekNumber, add);
      if (fs.existsSync(sourceDeck) && Number.isInteger(config.expectedSlides)) {
        const packagedSlides = countPptxSlides(sourceDeck);
        if (packagedSlides !== config.expectedSlides) add(`source deck has ${packagedSlides} slides; week.json requires ${config.expectedSlides}`);
      }
    } catch (error) {
      add(`cannot read ${relative(projectRoot, configFile)}: ${error.message}`);
    }
  }

  const publicDir = path.join(projectRoot, "docs", "weeks", weekId);
  const publicAssets = path.join(publicDir, "assets");
  const redirect = path.join(projectRoot, "docs", "weeks", `${weekId}.html`);
  const workDir = path.join(projectRoot, "video-work", weekId);

  if (phase !== "source") {
    requireFile(configFile, add, "week config");
    requireFile(narrationFile, add, "narration module");
    requireFile(path.join(publicDir, "index.html"), add, "public lesson page");
    requireFile(path.join(publicAssets, "lesson.js"), add, "interactive lesson script");
    requireFile(redirect, add, "compatibility redirect");
    checkExactEntries(courseDir, new Set(["week.json", "narration.mjs"]), add, `${weekId} course folder`);
    checkAllowedEntries(publicDir, new Set(["index.html", "assets"]), add, `${weekId} public folder`);
    checkAllowedEntries(publicAssets, canonicalPublicAssets, add, `${weekId} public assets`);
    checkWorkShape(workDir, add);

    if (fs.existsSync(narrationFile) && config) {
      try {
        const imported = await import(`${pathToFileURL(narrationFile).href}?validation=${fs.statSync(narrationFile).mtimeMs}`);
        const narration = imported.default;
        if (!Array.isArray(narration) || narration.length === 0) add("narration.mjs must export a non-empty default array");
        else narration.forEach((segment, index) => {
          if (!Number.isInteger(segment.slide) || segment.slide < 1 || segment.slide > config.expectedSlides) add(`narration segment ${index + 1} references invalid slide ${segment.slide}`);
          if (typeof segment.chapter !== "string" || !segment.chapter.trim()) add(`narration segment ${index + 1} has no chapter`);
          if (typeof segment.narration !== "string" || segment.narration.trim().split(/\s+/).length < 5) add(`narration segment ${index + 1} has insufficient narration text`);
        });
      } catch (error) {
        add(`cannot import narration.mjs: ${error.message}`);
      }
    }
  }

  if (phase === "complete") {
    for (const dir of canonicalWorkDirs) requireDirectory(path.join(workDir, dir), add, `${weekId} ${dir} directory`);
    for (const file of canonicalWorkFiles) requireFile(path.join(workDir, file), add, `${weekId} ${file}`);
    requireFile(path.join(workDir, "pdf", "lecture.pdf"), add, "PowerPoint PDF export");
    for (const asset of canonicalPublicAssets) requireFile(path.join(publicAssets, asset), add, `${weekId} public ${asset}`);

    if (config && fs.existsSync(narrationFile)) {
      try {
        const narration = (await import(`${pathToFileURL(narrationFile).href}?complete=${fs.statSync(narrationFile).mtimeMs}`)).default;
        const counts = {
          audio: countMatching(path.join(workDir, "audio"), /\.wav$/),
          clips: countMatching(path.join(workDir, "clips"), /\.mp4$/),
          slides: countMatching(path.join(workDir, "slides"), /\.png$/),
          text: countMatching(path.join(workDir, "text"), /\.txt$/)
        };
        if (counts.audio !== narration.length) add(`audio count ${counts.audio} does not match ${narration.length} narration segments`);
        if (counts.clips !== narration.length) add(`clip count ${counts.clips} does not match ${narration.length} narration segments`);
        if (counts.text !== narration.length) add(`text count ${counts.text} does not match ${narration.length} narration segments`);
        if (counts.slides !== config.expectedSlides) add(`rendered slide count ${counts.slides} does not match ${config.expectedSlides}`);
      } catch (error) {
        add(`cannot validate complete narration outputs: ${error.message}`);
      }
    }

    const video = path.join(publicAssets, "lecture.mp4");
    if (fs.existsSync(video) && fs.statSync(video).size < 1_000_000) add("public lecture.mp4 is unexpectedly small");
    const captions = path.join(publicAssets, "captions.vtt");
    if (fs.existsSync(captions) && !fs.readFileSync(captions, "utf8").startsWith("WEBVTT")) add("public captions.vtt is invalid");
    const chapters = path.join(publicAssets, "chapters.json");
    if (fs.existsSync(chapters)) validateChapters(chapters, add);
    scanPublicPrivacy(publicDir, add);
    checkIgnored(projectRoot, workDir, add, "video work folder");
  }

  return { root: projectRoot, week: weekId, phase, errors };
}

function cleanupApprovedRootMetadata(root) {
  try {
    fs.rmSync(path.join(root, ".DS_Store"), { force: true });
  } catch (_error) {
    // checkForbiddenRoot reports the deviation when the approved cleanup cannot complete.
  }
}

export function reportValidation(result) {
  if (result.errors.length) {
    console.error("WORKFLOW_DEVIATION_APPROVAL_REQUIRED");
    result.errors.forEach(error => console.error(`- ${error}`));
    return 2;
  }
  console.log(`Workflow valid: ${result.week} (${result.phase}).`);
  return 0;
}

function normalizeWeek(value) {
  const match = String(value ?? "").match(/^(?:week-)?0*([1-9]\d*)$/i);
  if (!match) throw new Error("Pass --week as a positive number or week-NN.");
  return Number(match[1]);
}

function validateConfig(config, weekId, weekNumber, add) {
  const expectedKeys = ["schemaVersion", "week", "weekNumber", "title", "expectedSlides"];
  const keys = Object.keys(config).sort();
  if (JSON.stringify(keys) !== JSON.stringify([...expectedKeys].sort())) add(`week.json keys must be exactly: ${expectedKeys.join(", ")}`);
  if (config.schemaVersion !== 1) add("week.json schemaVersion must be 1");
  if (config.week !== weekId) add(`week.json week must be ${weekId}`);
  if (config.weekNumber !== weekNumber) add(`week.json weekNumber must be ${weekNumber}`);
  if (typeof config.title !== "string" || !config.title.trim()) add("week.json title must be non-empty");
  if (!Number.isInteger(config.expectedSlides) || config.expectedSlides < 1) add("week.json expectedSlides must be a positive integer");
}

function checkForbiddenRoot(root, add) {
  for (const name of ["record.m4a", "voice-recording-script.md", ".tts-venv", ".DS_Store"]) {
    if (fs.existsSync(path.join(root, name))) add(`forbidden root entry exists: ${name}`);
  }
  for (const entry of safeEntries(root)) if (/^\.tmp-week/i.test(entry.name)) add(`forbidden root scratch folder exists: ${entry.name}`);
  for (const required of ["course", "docs", "lecture-notes", "skills", "tools", "video-work", "voice-work", "workflow"]) {
    if (!fs.existsSync(path.join(root, required))) add(`required durable root directory is missing: ${required}`);
  }
}

function checkLegacyTools(root, add) {
  for (const entry of safeEntries(path.join(root, "tools"))) {
    if (/^build-week\d+-video\.mjs$/.test(entry.name) || /^week\d+-narration\.mjs$/.test(entry.name)) add(`legacy per-week tool exists: tools/${entry.name}`);
  }
}

function checkLectureSources(root, add) {
  const lectureNotes = path.join(root, "lecture-notes");
  if (!fs.existsSync(lectureNotes)) return;
  for (const entry of fs.readdirSync(lectureNotes, { withFileTypes: true })) {
    if (!entry.isFile() || !/^week-\d{2,}\.pptx$/.test(entry.name)) {
      add(`lecture-notes contains non-canonical entry: ${entry.name}`);
    }
  }
}

function checkSharedPublicAssets(root, add) {
  for (const legacy of ["images", "js", "video"]) {
    const target = path.join(root, "docs", "assets", legacy);
    if (fs.existsSync(target)) add(`week-specific public asset folder must not exist: docs/assets/${legacy}`);
  }
}

function checkWorkShape(workDir, add) {
  if (!fs.existsSync(workDir)) return;
  const allowed = new Set([...canonicalWorkDirs, ...canonicalWorkFiles]);
  checkAllowedEntries(workDir, allowed, add, `${path.basename(workDir)} work folder`);
}

function checkExactEntries(directory, expected, add, label) {
  if (!fs.existsSync(directory)) return;
  const actual = new Set(safeEntries(directory).map(entry => entry.name));
  for (const name of expected) if (!actual.has(name)) add(`${label} is missing ${name}`);
  for (const name of actual) if (!expected.has(name)) add(`${label} contains non-canonical entry ${name}`);
}

function checkAllowedEntries(directory, allowed, add, label) {
  if (!fs.existsSync(directory)) return;
  for (const entry of safeEntries(directory)) if (!allowed.has(entry.name)) add(`${label} contains non-canonical entry ${entry.name}`);
}

function requireFile(file, add, label) {
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) add(`${label} is missing: ${file}`);
}

function requireDirectory(directory, add, label) {
  if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory()) add(`${label} is missing: ${directory}`);
}

function safeEntries(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).filter(entry => entry.name !== ".DS_Store");
}

function countMatching(directory, pattern) {
  if (!fs.existsSync(directory)) return 0;
  return fs.readdirSync(directory).filter(name => pattern.test(name)).length;
}

function countPptxSlides(file) {
  const result = spawnSync("unzip", ["-Z1", file], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(result.stderr || "unzip could not inspect the PowerPoint");
  return result.stdout.split(/\r?\n/).filter(name => /^ppt\/slides\/slide\d+\.xml$/.test(name)).length;
}

function checkIgnored(root, target, add, label) {
  if (!fs.existsSync(target)) return;
  const result = spawnSync("git", ["check-ignore", "-q", target], { cwd: root });
  if (result.status !== 0) add(`${label} is not ignored by Git: ${relative(root, target)}`);
}

function validateChapters(file, add) {
  try {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    if (!Number.isFinite(data.duration) || data.duration <= 0) add("chapters.json duration is invalid");
    if (!Array.isArray(data.chapters) || data.chapters.length === 0) add("chapters.json has no chapters");
    else data.chapters.forEach((chapter, index) => {
      if (typeof chapter.title !== "string" || !chapter.title.trim()) add(`chapter ${index + 1} has no title`);
      if (!Number.isFinite(chapter.time) || chapter.time < 0 || chapter.time >= data.duration) add(`chapter ${index + 1} has an invalid time`);
      if (index > 0 && chapter.time <= data.chapters[index - 1].time) add(`chapter ${index + 1} is not later than the previous chapter`);
    });
  } catch (error) {
    add(`cannot read chapters.json: ${error.message}`);
  }
}

function scanPublicPrivacy(publicDir, add) {
  const forbidden = [/record\.m4a/i, /voice-work\//i, /lecture transcript/i, /productive study loop/i, /\bdownload\b/i];
  for (const file of walk(publicDir).filter(file => /\.(?:html|js)$/i.test(file))) {
    const source = fs.readFileSync(file, "utf8");
    forbidden.forEach(pattern => {
      if (pattern.test(source)) add(`public privacy/content rule failed in ${file}: ${pattern}`);
    });
  }
}

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function relative(root, target) {
  return path.relative(root, target) || ".";
}

function parseArgs(argv) {
  const parsed = { root: process.cwd(), phase: "complete", week: null };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--root") parsed.root = argv[++index];
    else if (token === "--week") parsed.week = argv[++index];
    else if (token === "--phase") parsed.phase = argv[++index];
    else throw new Error(`Unknown argument: ${token}`);
  }
  return parsed;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const result = await validateWorkflow(parseArgs(process.argv.slice(2)));
    process.exitCode = reportValidation(result);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
