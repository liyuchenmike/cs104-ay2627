# CS104 AY2025–26 Learning Portal

A static, accessible course companion with weekly explanations, narrated lectures, captions and interactive retrieval practice.

## Current content

- Course portal covering the six uploaded lecture topics
- Complete Week 1 lesson: Logical Reasoning, Part I
- 30-minute narrated lecture video with captions and chapter navigation
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

The media builder uses Microsoft PowerPoint for accurate 1080p slide rendering, local [F5-TTS voice cloning](https://github.com/SWivid/F5-TTS), ImageMagick, Poppler and FFmpeg. The private `record.m4a` reference is excluded from Git; only the finished synthesized narration is published:

```sh
node tools/build-week1-video.mjs
```

The generated MP4 is intentionally compact enough to be served directly by GitHub Pages.
