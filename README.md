# CS104 AY2025–26 Learning Portal

A static, accessible course companion with weekly explanations, narrated lectures, captions and interactive retrieval practice.

## Current content

- Course portal covering the six uploaded lecture topics
- Complete Week 1 lesson: Logical Reasoning, Part I
- 22-minute narrated lecture video with captions and chapter navigation
- Detailed explanations, worked examples and misconceptions
- Ten-question mastery check with immediate feedback and browser-local progress
- Four optional knowledge checks embedded in the video timeline

## Local preview

Serve the `docs` directory with any static web server. For example:

```sh
python3 -m http.server 8000 --directory docs
```

Then open `http://localhost:8000`.

## GitHub Pages

In the repository settings, choose **Pages**, select **Deploy from a branch**, then publish the `/docs` folder from the `main` branch.

## Source material

The original PowerPoint files remain local and are excluded from Git. The public repository contains only the derived learning portal and Week 1 media.

## Rebuilding the Week 1 video

The media builder uses the local Week 1 PowerPoint, macOS `say`, LibreOffice, ImageMagick, Poppler and FFmpeg:

```sh
node tools/build-week1-video.mjs
```

The generated MP4 is intentionally compact enough to be served directly by GitHub Pages.
