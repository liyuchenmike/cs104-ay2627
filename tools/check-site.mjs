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
    const [resource, fragment] = reference.split("#");
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

const video = path.join(root, "assets", "video", "week-01-logical-reasoning.mp4");
const captions = path.join(root, "assets", "video", "week-01-logical-reasoning.vtt");
if (!fs.existsSync(video) || fs.statSync(video).size < 1_000_000) errors.push("Week 1 video is missing or unexpectedly small");
if (!fs.existsSync(captions) || !fs.readFileSync(captions, "utf8").startsWith("WEBVTT")) errors.push("Week 1 captions are missing or invalid");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML pages, local links, IDs, video and captions.`);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
