---
name: cs104-weekly-production
description: Build or revise CS104 weekly portal lessons through the project’s guarded PowerPoint-to-video workflow. Use for CS104 week setup, slide rendering, narration, lesson pages, quizzes, media builds, structural migration, or pre-merge checks; do not use for unrelated websites or presentations.
---

# CS104 Weekly Production

Use the repository’s canonical workflow for every CS104 weekly lesson. Read [references/contract.md](references/contract.md) before changing a week.

## Non-negotiable gate

Run the validator before any week mutation:

```sh
node skills/cs104-weekly-production/scripts/validate_workflow.mjs --week NN --phase source
```

Run it again at the `authoring` and `complete` phase boundaries defined in the contract. If it exits with code 2 or prints `WORKFLOW_DEVIATION_APPROVAL_REQUIRED`, stop immediately. Do not repair, bypass, rename, substitute, or continue around the deviation. Report the exact mismatch and ask the user for permission to deviate or approval for the proposed correction.

The validator may automatically remove only the root-level `.DS_Store` before each gate. The user explicitly approved this narrow macOS metadata maintenance. It does not authorize deleting any other file or bypassing any other mismatch; if removal fails, the normal deviation gate still applies.

This approval gate also applies when:

- Microsoft PowerPoint cannot render the original deck;
- the source deck’s slide count differs from `week.json`;
- a required private input is missing;
- the proposed output path or filename differs from the contract;
- another renderer, slide reconstruction, voice source, host, or public artifact would be substituted;
- a merge or deployment is proposed without an explicit user request.

## Required workflow

1. Validate `source`.
2. Render `lecture-notes/week-NN/lecture.pptx` with Microsoft PowerPoint using the generic builder’s `--render-only` mode.
3. Inspect all rendered slides and create only the canonical config, narration, lesson page, and interactive quiz files.
4. Validate `authoring`.
5. Build with the generic builder. Use the private voice reference only from `voice-work/private/`; never copy it into public or tracked paths.
6. Validate `complete`, run the site checker, decode the MP4, inspect representative frames, and check desktop/mobile interaction.
7. Commit and push a review branch when requested or when it is the established project workflow. Never merge or deploy without explicit approval.

## Content rules

- Use every original slide once in order unless the user explicitly approves a different mapping; a final recap may reuse an earlier overview slide.
- Preserve the original PowerPoint visuals. Do not redraw, restyle, or replace slides.
- Write comprehensive, conversational narration grounded in the visible slide content.
- Use the established lesson-page format: guided video, detailed elaboration, worked examples, misconceptions, five video checkpoints, and ten mastery questions.
- Publish captions for the video, but never add a transcript section, transcript download, download prompt, or “productive study loop.”
- Keep AY2026–27 course labeling and browser-local progress.

## Build commands

```sh
node tools/build-week.mjs --week NN --render-only
node tools/build-week.mjs --week NN
node tools/check-site.mjs
```

Use `--continue-audio` only to resume an interrupted private TTS build. Use `--reuse-audio` only when every expected WAV already exists and the narration has not changed.
