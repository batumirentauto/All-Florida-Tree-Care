#!/usr/bin/env python3
"""
Compress mobile screenshots so that every file is strictly <= 950 KB.
Uses Pillow adaptive 256-color palette quantization (Median Cut) + PNG optimization.
"""

import os
import sys
from concurrent.futures import ProcessPoolExecutor
from PIL import Image

TARGET_DIR = "/Users/workpc/Documents/All Florida Tree Care/screenshots/mobile"
MAX_SIZE_BYTES = 950 * 1024  # 950 KB

def compress_image(filepath):
    orig_size = os.path.getsize(filepath)
    if orig_size <= MAX_SIZE_BYTES:
        return (filepath, orig_size, orig_size, False, "Already <= 950 KB")

    try:
        im = Image.open(filepath)
        # Quantize to 256 colors
        q = im.quantize(colors=256, method=Image.Quantize.MEDIANCUT)
        tmp_path = filepath + ".tmp.png"
        q.save(tmp_path, format="PNG", optimize=True)
        new_size = os.path.getsize(tmp_path)

        if new_size > MAX_SIZE_BYTES:
            # Fallback: reduce colors to 192 if needed
            q = im.quantize(colors=192, method=Image.Quantize.MEDIANCUT)
            q.save(tmp_path, format="PNG", optimize=True)
            new_size = os.path.getsize(tmp_path)

        os.replace(tmp_path, filepath)
        return (filepath, orig_size, new_size, True, "OK")
    except Exception as e:
        if os.path.exists(filepath + ".tmp.png"):
            os.remove(filepath + ".tmp.png")
        return (filepath, orig_size, orig_size, False, f"Error: {e}")

def main():
    if not os.path.exists(TARGET_DIR):
        print(f"Error: Directory {TARGET_DIR} not found.")
        sys.exit(1)

    all_files = [
        os.path.join(TARGET_DIR, f)
        for f in os.listdir(TARGET_DIR)
        if f.lower().endswith(".png")
    ]

    print(f"Found {len(all_files)} PNG screenshots in {TARGET_DIR}")
    need_compression = [f for f in all_files if os.path.getsize(f) > MAX_SIZE_BYTES]
    print(f"Screenshots > 950 KB: {len(need_compression)}")

    workers = min(os.cpu_count() or 4, 8)
    print(f"Compressing using {workers} parallel processes...")

    with ProcessPoolExecutor(max_workers=workers) as executor:
        results = list(executor.map(compress_image, need_compression))

    compressed_count = sum(1 for r in results if r[3])
    print(f"\nCompression complete! Processed {compressed_count}/{len(need_compression)} files.")

    # Audit all files in directory
    audit_files = [
        os.path.join(TARGET_DIR, f)
        for f in os.listdir(TARGET_DIR)
        if f.lower().endswith(".png")
    ]
    still_over = [f for f in audit_files if os.path.getsize(f) > MAX_SIZE_BYTES]
    max_file = max(audit_files, key=lambda p: os.path.getsize(p))
    max_kb = os.path.getsize(max_file) / 1024

    print("=" * 50)
    print("FINAL AUDIT:")
    print(f"Total screenshots: {len(audit_files)}")
    print(f"Screenshots > 950 KB: {len(still_over)}")
    print(f"Largest screenshot: {os.path.basename(max_file)} ({max_kb:.1f} KB)")
    print("=" * 50)

    if still_over:
        print("WARNING: Some files still exceed 950 KB!")
        for f in still_over:
            print(f"  - {os.path.basename(f)}: {os.path.getsize(f)/1024:.1f} KB")
        sys.exit(1)
    else:
        print("SUCCESS: 100% of screenshots are under 950 KB!")

if __name__ == "__main__":
    main()
