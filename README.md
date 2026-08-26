# CS104 AY2026–27 Learning Portal

A static, accessible course companion with weekly explanations, narrated lectures, captions and interactive retrieval practice.

## Current content

- Course portal covering the six uploaded lecture topics
- Complete Week 1–3 lessons: Logical Reasoning, Parts I and II, and Method of Proof, Part I
- Chaptered narrated lecture videos with captions
- Detailed explanations, worked examples and misconceptions
- Ten-question mastery checks with immediate feedback and browser-local progress
- Optional knowledge checks embedded in each video timeline

## Local preview

Serve the `docs` directory with any static web server. For example:

```sh
python3 -m http.server 8000 --directory docs
```

Then open `http://localhost:8000`.

## GitHub Pages

In the repository settings, choose **Pages**, select **Deploy from a branch**, then publish the `/docs` folder from the `main` branch.

## Canonical weekly structure

Every week uses the same structure:

```text
course/weeks/week-NN/        tracked config and narration
lecture-notes/week-NN.pptx   private original lecture deck
video-work/week-NN/          private build intermediates
docs/weeks/week-NN/          public lesson and canonical assets
```

The original PowerPoint decks, private voice reference and build intermediates remain local and are excluded from Git. Each public week contains `index.html` plus `assets/cover.webp`, `lesson.js`, `lecture.mp4`, `captions.vtt` and `chapters.json`.

## Rebuilding the lecture videos

The guarded media builder uses Microsoft PowerPoint for accurate 1080p slide rendering, local [F5-TTS voice cloning](https://github.com/SWivid/F5-TTS), ImageMagick, Poppler and FFmpeg. Only the finished synthesized narration is published:

```sh
node skills/cs104-weekly-production/scripts/validate_workflow.mjs --week 04 --phase source
node tools/build-week.mjs --week 04 --render-only
node skills/cs104-weekly-production/scripts/validate_workflow.mjs --week 04 --phase authoring
node tools/build-week.mjs --week 04
node tools/check-site.mjs
```

The versioned `cs104-weekly-production` skill and its validator stop on any structural or workflow deviation. A deviation requires user approval before work continues. Generated MP4 files are intentionally compact enough to be served directly by GitHub Pages.
