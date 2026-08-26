import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "docs");
const htmlFiles = walk(root).filter(file => file.endsWith(".html"));
const errors = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  for (const id of new Set(duplicates)) errors.push(`${relative}: duplicate id #${id}`);
  if (!/<html\s+lang="en">/.test(html)) errors.push(`${relative}: missing English document language`);

  const references = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map(match => match[1]);
  for (const reference of references) {
    if (/^(?:https?:|mailto:|tel:|data:)/.test(reference)) continue;
    const [resourceWithQuery, fragment] = reference.split("#");
    const resource = resourceWithQuery.split("?")[0];
    const target = resource ? path.resolve(path.dirname(file), resource) : file;
    if (resource && !fs.existsSync(target)) {
      errors.push(`${relative}: missing local resource ${reference}`);
      continue;
    }
    if (fragment && target.endsWith(".html")) {
      const targetHtml = target === file ? html : fs.readFileSync(target, "utf8");
      if (!new RegExp(`\\sid=["']${escapeRegExp(fragment)}["']`).test(targetHtml)) {
        errors.push(`${relative}: missing fragment target ${reference}`);
      }
    }
  }
}

const canonicalAssets = ["captions.vtt", "chapters.json", "cover.webp", "lecture.mp4", "lesson.js"];
const readyWeeks = fs.readdirSync(path.join(root, "weeks"), { withFileTypes: true })
  .filter(entry => entry.isDirectory() && /^week-\d{2}$/.test(entry.name))
  .map(entry => entry.name)
  .sort();

for (const week of readyWeeks) {
  const weekDir = path.join(root, "weeks", week);
  const assetsDir = path.join(weekDir, "assets");
  const actualAssets = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir).filter(name => name !== ".DS_Store").sort() : [];
  if (JSON.stringify(actualAssets) !== JSON.stringify(canonicalAssets)) errors.push(`${week}: public assets do not match the canonical filenames`);
  const video = path.join(assetsDir, "lecture.mp4");
  const captions = path.join(assetsDir, "captions.vtt");
  const chapters = path.join(assetsDir, "chapters.json");
  if (!fs.existsSync(video) || fs.statSync(video).size < 1_000_000) errors.push(`${week}: lecture.mp4 is missing or unexpectedly small`);
  if (!fs.existsSync(captions) || !fs.readFileSync(captions, "utf8").startsWith("WEBVTT")) errors.push(`${week}: captions.vtt is missing or invalid`);
  validateChapters(chapters, week);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML pages, local links, IDs, video and captions.`);

function validateChapters(file, week) {
  if (!fs.existsSync(file)) {
    errors.push(`${week}: chapters.json is missing`);
    return;
  }
  try {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    if (!Number.isFinite(data.duration) || data.duration <= 0 || !Array.isArray(data.chapters) || data.chapters.length === 0) {
      errors.push(`${week}: chapters.json is invalid`);
      return;
    }
    data.chapters.forEach((chapter, index) => {
      if (!Number.isFinite(chapter.time) || chapter.time < 0 || chapter.time >= data.duration) errors.push(`${week}: chapter ${index + 1} has an invalid time`);
      if (index > 0 && chapter.time <= data.chapters[index - 1].time) errors.push(`${week}: chapter ${index + 1} is out of order`);
    });
  } catch (error) {
    errors.push(`${week}: cannot read chapters.json (${error.message})`);
  }
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
