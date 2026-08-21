# CS104 AY2026–27 Learning Portal

A static, accessible course companion with weekly explanations, narrated lectures, captions and interactive retrieval practice.

## Current content

- Course portal covering the six uploaded lecture topics
- Complete Week 1 and Week 2 lessons: Logical Reasoning, Parts I and II
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

## Source material

The original PowerPoint files remain local and are excluded from Git. The public repository contains only the derived learning portal and finished media.

## Rebuilding the lecture videos

The media builder uses Microsoft PowerPoint for accurate 1080p slide rendering, local [F5-TTS voice cloning](https://github.com/SWivid/F5-TTS), ImageMagick, Poppler and FFmpeg. The private `record.m4a` reference is excluded from Git; only the finished synthesized narration is published:

```sh
node tools/build-week1-video.mjs
node tools/build-week2-video.mjs
```

The generated MP4 is intentionally compact enough to be served directly by GitHub Pages.
