# CS104 weekly production contract

## Canonical structure

Every week uses the same zero-padded identifier and filenames:

```text
course/weeks/week-NN/
  week.json
  narration.mjs

lecture-notes/
  week-NN.pptx

video-work/week-NN/
  audio/
  clips/
  pdf/lecture.pdf
  slides/slide-NN.png
  text/
  concat.txt
  tts-manifest.json

docs/weeks/week-NN/
  index.html
  assets/
    cover.webp
    lesson.js
    lecture.mp4
    captions.vtt
    chapters.json

docs/weeks/week-NN.html
```

`docs/weeks/week-NN.html` is a uniform compatibility redirect to `week-NN/`. Shared styling lives in `docs/assets/css/styles.css`; week-specific public assets do not.

## Root contract

Durable root directories are `course`, `docs`, `lecture-notes`, `skills`, `tools`, `video-work`, `voice-work`, and `workflow`. The active F5 environment may remain at `.voice-venv` because moving it breaks its executable paths.

The following are deviations:

- root `record.m4a`, `voice-recording-script.md`, `.tts-venv`, `.tmp-week*`, or `.DS_Store`;
- directories or files other than zero-padded `week-NN.pptx` decks inside `lecture-notes`;
- per-week builders or narration modules in `tools`;
- week-specific files in `docs/assets/images`, `docs/assets/js`, or `docs/assets/video`;
- extra directories within a canonical week folder;
- source decks, voice references, or production intermediates tracked by Git.

Before each phase gate, the validator automatically removes only the root-level `.DS_Store`. This exact recurring macOS metadata cleanup is pre-approved. A `.DS_Store` that remains after the cleanup attempt is still a deviation, and no other automatic deletion is permitted.

Private voice inputs live only in:

```text
voice-work/private/reference.m4a
voice-work/private/reference-transcript.txt
voice-work/private/recording-script.md
```

## `week.json`

Each config contains exactly the shared schema version, week identity, audience-facing title, and expected PowerPoint slide count:

```json
{
  "schemaVersion": 1,
  "week": "week-NN",
  "weekNumber": 1,
  "title": "Audience-facing lecture title",
  "expectedSlides": 1
}
```

## Phase gates

### `source`

- root contract passes;
- canonical source deck exists and is ignored by Git;
- when `week.json` exists, its identity is valid and its expected slide count matches the PPTX package.

### `authoring`

- `source` passes;
- `week.json`, `narration.mjs`, public `index.html`, public `assets/lesson.js`, and the compatibility redirect exist;
- narration imports successfully, contains usable text, and references only valid slide numbers;
- public and work directories contain no non-canonical paths.

### `complete`

- `authoring` passes;
- every canonical private work directory and output exists;
- rendered slide count equals `expectedSlides`;
- WAV, clip, and text counts equal the narration segment count;
- the public week contains `index.html` plus exactly the five canonical files inside `assets/`;
- captions start with `WEBVTT`, chapters are valid, and the finished video is larger than 1 MB;
- public files do not expose private voice paths, transcripts, downloads, or the removed study-loop section.

## Approved implementation

- Renderer: Microsoft PowerPoint export to PDF, then Poppler PNG rendering.
- Narration: local F5-TTS using `voice-work/private/reference.m4a`.
- Video: FFmpeg H.264 at 1920×1080 with AAC 48 kHz narration.
- Public host: the existing GitHub Pages `docs` site.
- Builder: `tools/build-week.mjs` only.

Any substitution requires explicit user approval before work continues.
