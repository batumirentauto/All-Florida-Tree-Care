#!/usr/bin/env python3
"""
audit_layout_integrity.py
Comprehensive audit of typography, responsive layout constraints,
text overflow protection, and config completeness across all companies.
Strictly verifies Section 8 of AGENTS.md.
"""

import os
import glob
import json
import re
import sys
import subprocess

def load_config_data(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    start = content.find('{')
    end = content.rfind('}') + 1
    if start != -1 and end > start:
        try:
            return json.loads(content[start:end])
        except Exception:
            pass
    # Fallback to node execution for ES modules with standard JS syntax
    res = subprocess.check_output(['node', '-e', f"import('./{path}').then(m => console.log(JSON.stringify(Object.values(m)[0])))"], text=True)
    return json.loads(res.strip())

def audit_configs():
    en_configs = sorted(glob.glob('src/siteConfig.*.en.js'))
    ru_configs = sorted(glob.glob('src/siteConfig.*.ru.js'))
    
    print(f"Auditing {len(en_configs)} English and {len(ru_configs)} Russian configs...")
    
    errors = []
    warnings = []
    
    for path in en_configs + ru_configs:
        basename = os.path.basename(path)
        if basename.startswith('siteConfig.tecos.'):
            continue
        try:
            data = load_config_data(path)
            
            # Check mandatory fields
            required_fields = ['businessName', 'tagline', 'phone', 'phoneRaw', 'city', 'state', 'hero', 'services', 'equipment', 'reviews', 'faq']
            for field in required_fields:
                if field not in data or data[field] is None:
                    errors.append(f"{basename}: Missing required field '{field}'")
                    
            # Check services
            services = data.get('services', [])
            if not isinstance(services, list) or len(services) < 3:
                errors.append(f"{basename}: Services list has fewer than 3 items ({len(services)})")
            for idx, s in enumerate(services):
                if not s.get('title') or not s.get('desc'):
                    errors.append(f"{basename}: Service #{idx+1} missing title or desc")
                if not s.get('features') or len(s.get('features', [])) == 0:
                    warnings.append(f"{basename}: Service #{idx+1} has no features")
                    
            # Check equipment
            equipment = data.get('equipment', [])
            if not isinstance(equipment, list) or len(equipment) < 3:
                errors.append(f"{basename}: Equipment list has fewer than 3 items ({len(equipment)})")
            for idx, eq in enumerate(equipment):
                if not eq.get('name') or not eq.get('badge') or not eq.get('desc'):
                    errors.append(f"{basename}: Equipment #{idx+1} missing name, badge, or desc")
                specs = eq.get('specs', [])
                if len(specs) == 0:
                    warnings.append(f"{basename}: Equipment #{idx+1} has no specs")
                    
            # Check FAQ
            faq = data.get('faq', [])
            if not isinstance(faq, list) or len(faq) < 3:
                warnings.append(f"{basename}: FAQ has fewer than 3 questions ({len(faq)})")
            for idx, item in enumerate(faq):
                q = item.get('question') or item.get('q')
                a = item.get('answer') or item.get('a')
                if not q or not a:
                    errors.append(f"{basename}: FAQ item #{idx+1} missing question or answer")
                    
            # Check hero bento
            hero = data.get('hero', {})
            bento = hero.get('bentoPhotos', {})
            if bento and bento.get('main'):
                main_img = bento['main'].get('image')
                if main_img and not main_img.startswith('/images/'):
                    warnings.append(f"{basename}: Bento main photo path doesn't start with /images/ ({main_img})")
                    
        except Exception as e:
            errors.append(f"{basename}: Parse error: {e}")
            
    print(f"Config Audit Completed: {len(errors)} errors, {len(warnings)} warnings.")
    if errors:
        for err in errors[:10]:
            print(f"  [ERROR] {err}")
    return len(errors) == 0

def audit_routes():
    en_configs = sorted(glob.glob('src/siteConfig.*.en.js'))
    print(f"\nAuditing route files for {len(en_configs)} companies...")
    
    missing_pages = []
    
    for path in en_configs:
        slug = os.path.basename(path).replace('siteConfig.', '').replace('.en.js', '')
        if slug in ['en', 'ru']:
            continue
            
        route_slug = 'hard-kor' if slug == 'hardkor' else slug
        en_page = f"src/app/(frontend)/{route_slug}/page.tsx"
        ru_page = f"src/app/(frontend)/{route_slug}/ru/page.tsx"
        
        if not os.path.exists(en_page):
            missing_pages.append(en_page)
        if not os.path.exists(ru_page):
            missing_pages.append(ru_page)
            
    print(f"Route Audit Completed: {len(missing_pages)} missing page files.")
    if missing_pages:
        for p in missing_pages[:10]:
            print(f"  [MISSING] {p}")
    return len(missing_pages) == 0

def audit_component_overflow_rules():
    print("\nAuditing responsive component typography & overflow rules...")
    
    checks = [
        ("UniversalHeader.tsx", ["min-w-0", "truncate", "shrink-0", "whitespace-nowrap"]),
        ("UniversalHero.tsx", ["break-words", "shrink-0", "bento?.main?.image"]),
        ("UniversalSpecs.tsx", ["min-w-0", "break-words"]),
        ("UniversalServices.tsx", ["break-words", "shrink-0"]),
        ("UniversalReviews.tsx", ["min-w-0", "shrink-0", "truncate"]),
        ("UniversalServiceAreas.tsx", ["break-words", "shrink-0"]),
        ("UniversalFooter.tsx", ["pb-24 sm:pb-12"]),
        ("UniversalMobileBar.tsx", ["truncate", "shrink-0", "fixed bottom-0"])
    ]
    
    passed = True
    for comp_name, required_tokens in checks:
        comp_path = os.path.join("src/components/universal", comp_name)
        if not os.path.exists(comp_path):
            print(f"  [FAIL] {comp_name} not found!")
            passed = False
            continue
            
        content = open(comp_path, 'r', encoding='utf-8').read()
        missing = [tok for tok in required_tokens if tok not in content]
        if missing:
            print(f"  [WARN] {comp_name} missing expected overflow tokens: {missing}")
            passed = False
        else:
            print(f"  [PASS] {comp_name}: all responsive & overflow tokens present ({', '.join(required_tokens)})")
            
    return passed

def main():
    print("=" * 60)
    print("ALL FLORIDA TREE CARE — RESPONSIVE & LAYOUT INTEGRITY AUDIT")
    print("=" * 60)
    
    c_ok = audit_configs()
    r_ok = audit_routes()
    t_ok = audit_component_overflow_rules()
    
    print("\n" + "=" * 60)
    if c_ok and r_ok and t_ok:
        print("✓ ALL AUDIT CHECKS PASSED SUCCESSFULLY (0 ERRORS)")
        print("=" * 60)
        sys.exit(0)
    else:
        print("✗ AUDIT DETECTED ISSUES")
        print("=" * 60)
        sys.exit(1)

if __name__ == '__main__':
    main()
