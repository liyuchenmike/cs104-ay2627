import json
import os
import sys
from pathlib import Path

import numpy as np
import soundfile as sf
from kokoro import KPipeline


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("usage: generate-kokoro-audio.py MANIFEST OUTPUT_DIR")

    manifest_path = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    output_dir.mkdir(parents=True, exist_ok=True)
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    os.environ.setdefault("PYTORCH_ENABLE_MPS_FALLBACK", "1")
    pipeline = KPipeline(lang_code="a")
    sample_rate = 24_000
    pause = np.zeros(int(sample_rate * 0.18), dtype=np.float32)

    for item in manifest:
        pieces = []
        generator = pipeline(
            item["text"],
            voice=item.get("voice", "af_heart"),
            speed=item.get("speed", 1.03),
            split_pattern=r"\n+",
        )
        for _graphemes, _phonemes, audio in generator:
            audio_array = np.asarray(audio, dtype=np.float32)
            if audio_array.size:
                pieces.extend([audio_array, pause])

        if not pieces:
            raise RuntimeError(f"No audio generated for segment {item['name']}")

        waveform = np.concatenate(pieces[:-1])
        peak = float(np.max(np.abs(waveform)))
        if peak > 0:
            waveform = waveform * min(1.0, 0.94 / peak)
        sf.write(output_dir / f"{item['name']}.wav", waveform, sample_rate)
        print(f"Generated {item['name']}.wav", flush=True)


if __name__ == "__main__":
    main()
