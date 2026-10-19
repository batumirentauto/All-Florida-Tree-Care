#!/usr/bin/env python3
"""
scripts/capture_mobile_screenshots.py
Captures first-screen (above the fold) mobile screenshots of company landing pages.
Ideal for sending mobile mockups to potential clients via WhatsApp / SMS / Telegram / Email.

Usage:
  # Capture a single company (both EN and RU)
  python3 scripts/capture_mobile_screenshots.py --slug myers

  # Capture multiple specific companies
  python3 scripts/capture_mobile_screenshots.py --slug "holcomb,myers,hardkor"

  # Capture English version only
  python3 scripts/capture_mobile_screenshots.py --slug myers --lang en

  # Capture first 10 companies from tree-leads
  python3 scripts/capture_mobile_screenshots.py --leads --limit 10

  # Capture using production URL
  python3 scripts/capture_mobile_screenshots.py --slug myers --base-url https://all-florida-tree-care-production.up.railway.app
"""

import os
import sys
import glob
import time
import argparse
import subprocess
import urllib.request
import urllib.error

DEFAULT_BASE_URL = "http://localhost:3000"
DEFAULT_OUTPUT_DIR = "screenshots/mobile"
DEFAULT_VIEWPORT = "390, 844"  # iPhone 14 / 15 / 16 standard viewport
DEFAULT_WAIT_MS = "1200"        # Wait for fonts & hero images to render cleanly

def check_server(base_url):
    """Verify if the target server is active and responding."""
    try:
        req = urllib.request.Request(
            base_url,
            headers={"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"}
        )
        with urllib.request.urlopen(req, timeout=3) as resp:
            return resp.status in (200, 301, 302, 304, 307, 308)
    except Exception:
        return False

def ensure_server(base_url):
    """If testing against localhost and it's not up, try starting next start."""
    if "localhost:3000" in base_url and not check_server(base_url):
        print(f"[*] Local server at {base_url} is not responding. Starting background production server...")
        proc = subprocess.Popen(
            ["npx", "next", "start", "-p", "3000"],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL
        )
        for _ in range(15):
            time.sleep(1)
            if check_server(base_url):
                print(f"[+] Local server started successfully.")
                return proc
        print(f"[!] Warning: Server did not respond within 15s. Proceeding anyway...")
        return proc
    return None

NEW_SCRAPE_SLUGS = [
    'a-integrity', 'affordable', 'allens', 'allwood', 'always-grinding',
    'at-ease', 'bartolome', 'best-for-less', 'bigfoot', 'bramlitt',
    'broken-branch', 'clean-cut', 'columbus', 'danes', 'eaton',
    'family-tree', 'furstie', 'grow', 'hawkinberry', 'holcomb',
    'i-noah-guy', 'jsi', 'limbwalkers', 'lm-tree', 'maldonado',
    'morgans', 'myers', 'norvells', 'panhandle', 'pro-beaver',
    'rosales', 'ss-tree', 'stones', 'superior', 'suttons',
    'tafoya', 'tally', 'td-tree', 'tlg', 'tree-wisemen',
    'us-tree', 'wateree', 'woodfellas'
]

def get_company_slugs(leads_only=False, new_scrape_only=False):
    """Retrieve list of valid company slugs."""
    if new_scrape_only:
        return sorted(NEW_SCRAPE_SLUGS)

    configs = sorted(glob.glob("src/siteConfig.*.en.js"))
    slugs = []
    for c in configs:
        base = os.path.basename(c)
        slug = base.replace("siteConfig.", "").replace(".en.js", "")
        if slug in ["en", "ru"]:
            continue
        slugs.append(slug)
    
    if leads_only:
        # Check against tree-leads list in leadsData.ts
        leads_path = "src/app/(frontend)/tree-leads/leadsData.ts"
        if os.path.exists(leads_path):
            with open(leads_path, "r", encoding="utf-8") as f:
                content = f.read()
            slugs = [s for s in slugs if f'"{s}"' in content or f"'{s}'" in content]
            
    return slugs

def capture_screenshot(url, output_path, mode="hero", width="390", wait_ms=DEFAULT_WAIT_MS):
    """Take a high-fidelity mobile screenshot using Playwright worker."""
    worker_script = os.path.join(os.path.dirname(__file__), "screenshot_worker.cjs")
    cmd = [
        "node", worker_script,
        url,
        output_path,
        mode,
        str(width),
        str(wait_ms)
    ]
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if res.returncode != 0:
        return False, res.stderr.strip()
    return True, None

def capture_batch(tasks, concurrency=3):
    """Run batch screenshots in parallel using a single persistent browser instance."""
    import json
    import tempfile
    worker_script = os.path.join(os.path.dirname(__file__), "screenshot_worker.cjs")

    task_payload = [
        {
            "url": t["url"],
            "outputPath": t["out"],
            "mode": t["mode"],
            "width": t["width"],
            "waitMs": t["wait_ms"]
        }
        for t in tasks
    ]

    with tempfile.NamedTemporaryFile(mode="w", suffix=".json", delete=False) as tf:
        json.dump(task_payload, tf)
        temp_path = tf.name

    success_count = 0
    fail_count = 0

    try:
        cmd = ["node", worker_script, "--batch", temp_path, str(concurrency)]
        proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
        total = len(tasks)
        for line in proc.stdout:
            line = line.strip()
            if line.startswith("OK:"):
                out_p = line[3:]
                success_count += 1
                fname = os.path.basename(out_p)
                size_kb = os.path.getsize(out_p) / 1024 if os.path.exists(out_p) else 0
                print(f"[{success_count + fail_count}/{total}] OK: {fname} ({size_kb:.1f} KB)")
            elif line.startswith("ERROR:"):
                fail_count += 1
                print(f"[{success_count + fail_count}/{total}] FAILED: {line}")
        proc.wait()
    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)

    return success_count, fail_count

def main():
    parser = argparse.ArgumentParser(description="Capture high-fidelity mobile screenshots of company pages.")
    parser.add_argument("--slug", help="Company slug or comma-separated slugs (e.g. 'myers' or 'myers,holcomb')")
    parser.add_argument("--all", action="store_true", help="Capture screenshots for all companies")
    parser.add_argument("--leads", action="store_true", help="Capture screenshots for tree-leads companies")
    parser.add_argument("--new-scrape", "--scrape", dest="new_scrape", action="store_true", help="Capture screenshots for companies from new_scrape folder (43 companies)")
    parser.add_argument("--limit", type=int, default=0, help="Limit number of companies to capture")
    parser.add_argument("--lang", choices=["en", "ru", "both"], default="both", help="Language versions to capture")
    parser.add_argument("--mode", choices=["hero", "viewport", "full"], default="hero", help="Capture mode: 'hero' (all desktop first-screen content: text + photos, default), 'viewport' (single 844px screen), 'full' (entire page)")
    parser.add_argument("--base-url", default=DEFAULT_BASE_URL, help=f"Base URL of website (default: {DEFAULT_BASE_URL})")
    parser.add_argument("--output-dir", default=DEFAULT_OUTPUT_DIR, help=f"Directory to save images (default: {DEFAULT_OUTPUT_DIR})")
    parser.add_argument("--width", default="390", help="Mobile width in px (default: 390)")
    parser.add_argument("--wait", default=DEFAULT_WAIT_MS, help=f"Wait in ms before screenshot (default: {DEFAULT_WAIT_MS})")
    parser.add_argument("--concurrency", type=int, default=3, help="Concurrent workers for batch capture (default: 3)")
    
    args = parser.parse_args()

    os.makedirs(args.output_dir, exist_ok=True)
    
    # Determine target slugs
    if args.slug:
        slugs = [s.strip() for s in args.slug.split(",") if s.strip()]
    elif args.new_scrape:
        slugs = get_company_slugs(new_scrape_only=True)
    elif args.all:
        slugs = get_company_slugs(leads_only=False)
    elif args.leads:
        slugs = get_company_slugs(leads_only=True)
    else:
        print("[!] Please specify --new-scrape, --slug <company-slug>, --leads, or --all")
        print("    Example: python3 scripts/capture_mobile_screenshots.py --new-scrape")
        sys.exit(1)

    if args.limit and args.limit > 0:
        slugs = slugs[:args.limit]

    print("=" * 65)
    print("ALL FLORIDA TREE CARE — MOBILE SCREENSHOT ENGINE")
    print(f"Target Companies: {len(slugs)}")
    print(f"Language:         {args.lang}")
    print(f"Mode:             {args.mode} (Mobile Width: {args.width}px)")
    print(f"Base URL:         {args.base_url}")
    print(f"Output Directory: {args.output_dir}")
    print(f"Concurrency:      {args.concurrency}")
    print("=" * 65)

    server_proc = ensure_server(args.base_url)

    total_tasks = []
    for slug in slugs:
        # Route mapping (e.g. hardkor -> hard-kor)
        route_slug = "hard-kor" if slug == "hardkor" else slug
        
        if args.lang in ("en", "both"):
            en_url = f"{args.base_url}/{route_slug}"
            en_out = os.path.join(args.output_dir, f"{slug}_mobile_en.png")
            total_tasks.append({
                "slug": slug,
                "lang": "EN",
                "url": en_url,
                "out": en_out,
                "mode": args.mode,
                "width": args.width,
                "wait_ms": args.wait
            })
            
        if args.lang in ("ru", "both"):
            ru_url = f"{args.base_url}/{route_slug}/ru"
            ru_out = os.path.join(args.output_dir, f"{slug}_mobile_ru.png")
            total_tasks.append({
                "slug": slug,
                "lang": "RU",
                "url": ru_url,
                "out": ru_out,
                "mode": args.mode,
                "width": args.width,
                "wait_ms": args.wait
            })

    if len(total_tasks) > 1:
        success_count, fail_count = capture_batch(total_tasks, concurrency=args.concurrency)
    elif len(total_tasks) == 1:
        t = total_tasks[0]
        print(f"Capturing {t['slug']} [{t['lang']}] -> {os.path.basename(t['out'])}...", end="", flush=True)
        ok, err = capture_screenshot(t['url'], t['out'], mode=t['mode'], width=t['width'], wait_ms=t['wait_ms'])
        if ok:
            file_size_kb = os.path.getsize(t['out']) / 1024
            print(f" OK ({file_size_kb:.1f} KB)")
            success_count, fail_count = 1, 0
        else:
            print(f" FAILED!\n    Error: {err[:200]}")
            success_count, fail_count = 0, 1
    else:
        success_count, fail_count = 0, 0

    print("\n" + "=" * 65)
    print(f"Completed: {success_count} captured, {fail_count} failed.")
    print(f"Screenshots saved to: file://{os.path.abspath(args.output_dir)}")
    print("=" * 65)

if __name__ == '__main__':
    main()
