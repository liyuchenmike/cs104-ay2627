import gc
import json
import re
import sys
from importlib.resources import files
from pathlib import Path

import numpy as np
import soundfile as sf
import torch
from cached_path import cached_path
from hydra.utils import get_class
from omegaconf import OmegaConf

from f5_tts.infer.utils_infer import (
    infer_process,
    load_model,
    load_vocoder,
    preprocess_ref_audio_text,
)


def main() -> None:
    if len(sys.argv) != 5:
        raise SystemExit(
            "usage: generate-f5-audio.py MANIFEST OUTPUT_DIR REFERENCE_AUDIO REFERENCE_TEXT"
        )

    manifest_path = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    reference_audio = Path(sys.argv[3])
    reference_text = sys.argv[4]
    output_dir.mkdir(parents=True, exist_ok=True)
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))

    device = "mps" if torch.backends.mps.is_available() else "cpu"
    model_name = "F5TTS_v1_Base"
    model_config = OmegaConf.load(str(files("f5_tts").joinpath(f"configs/{model_name}.yaml")))
    model_class = get_class(f"f5_tts.model.{model_config.model.backbone}")
    checkpoint = str(
        cached_path(f"hf://SWivid/F5-TTS/{model_name}/model_1250000.safetensors")
    )

    print(f"Loading F5-TTS on {device}...", flush=True)
    vocoder = load_vocoder(device=device)
    model = load_model(
        model_class,
        model_config.model.arch,
        checkpoint,
        mel_spec_type="vocos",
        device=device,
    )
    prepared_audio, prepared_text = preprocess_ref_audio_text(
        str(reference_audio), reference_text
    )

    for item in manifest:
        destination = output_dir / f"{item['name']}.wav"
        if destination.exists() and sf.info(destination).duration > 1:
            print(f"Reusing completed {destination.name}", flush=True)
            continue
        print(f"Generating {destination.name}...", flush=True)
        chunks = split_for_inference(item["text"])
        with sf.SoundFile(
            destination, mode="w", samplerate=24_000, channels=1, subtype="PCM_16"
        ) as output:
            for chunk_index, chunk in enumerate(chunks, start=1):
                print(
                    f"  chunk {chunk_index}/{len(chunks)}: {chunk[:70]}",
                    flush=True,
                )
                waveform, sample_rate, _spectrogram = infer_process(
                    prepared_audio,
                    prepared_text,
                    chunk,
                    model,
                    vocoder,
                    mel_spec_type="vocos",
                    nfe_step=16,
                    cfg_strength=2.0,
                    sway_sampling_coef=-1.0,
                    speed=item.get("speed", 1.03),
                    device=device,
                )
                output.write(waveform)
                if chunk_index < len(chunks):
                    output.write(np.zeros(int(sample_rate * 0.12), dtype=np.float32))
                del waveform, _spectrogram
                gc.collect()
                if device == "mps":
                    torch.mps.empty_cache()
        print(f"Generated {destination.name}", flush=True)


def split_for_inference(text: str, max_chars: int = 96) -> list[str]:
    chunks: list[str] = []
    current: list[str] = []
    current_length = 0

    for phrase in re.split(r"(?<=[.!?;:,])\s+", text.strip()):
        for word in phrase.split():
            added = len(word) + (1 if current else 0)
            if current and current_length + added > max_chars:
                chunks.append(" ".join(current))
                current = [word]
                current_length = len(word)
            else:
                current.append(word)
                current_length += added

    if current:
        chunks.append(" ".join(current))
    return chunks


if __name__ == "__main__":
    main()
