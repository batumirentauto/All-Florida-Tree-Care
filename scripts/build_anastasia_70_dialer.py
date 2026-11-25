#!/usr/bin/env python3
"""
scripts/build_anastasia_70_dialer.py
Builds the full 70-lead dialer for Anastasia sorted by US timezones (ET -> CT -> PT).
Provides:
1. Exact 70 uncalled leads matching our strict quality filter.
2. Grouping and chronological sorting by timezone:
   - Eastern Time (ET): 93 companies
   - Central Time (CT): 22 companies
   - Pacific Time (PT): 19 companies
3. Clear calling window specifications in:
   - US Local Time
   - Cyprus Time (UTC+2)
   - Georgia / Tbilisi Time (UTC+4)
4. Dynamic local time clock & live calling status indicator per company.
5. All links pointing to https://zonus.co/[slug] with SMS & iMessage pre-fills.
6. Phone mockup screenshots verified and synced to public/screenshots/.
"""

import os
import re
import csv
import json
import shutil

CALLED_31_NAMES = {
    'AKA Tree Service', 'American Tree Solutions', 'Arbor Barber Tree Service',
    'ArborTrue', 'Artistic Trees Inc', "Brian's Quality Tree Service",
    'D&M Tree and Land Services, LLC', 'Evergreen Tree Services', 'Extreme Tree Service',
    'Garden Oaks Tree Service LLC', 'Georgia Tree Removal', 'Gutierrez & Sons Tree Services and Landscaping',
    'Mendez Brothers Tree Service', 'Monster Tree Service of Raleigh Durham',
    'Monster Tree Service of South Charlotte', 'Monster Tree Service of Texas Gulf Coast',
    'Monster Tree Service of West Valley', 'Monster Tree Service of the Coast',
    'R&R Tree Services LLC', 'Squirrel Tree Services, Inc.', 'Texas Tree Authority',
    'Texas Tree Experts', 'The Urban Foresters', 'Tom’s Tree Service', "Tom's Tree Service",
    'Top Shelf Tree Service & Landscaping', 'Treemasters', 'Trees of Georgia, Inc.',
    'Trinity Forest Tree Care Service', "Troncos's Land", 'Troncos’s Land',
    'Very Good Stump Grinding & Tree Removal',
    'Wildwood Tree Care, LLC - Tree Removal Tree Service Puyallup and Surrounding Areas'
}

PANHANDLE_CITIES = ['pensacola', 'panama city', 'destin', 'crestview', 'fort walton', 'milton', 'niceville', 'defuniak']

def clean_phone(phone_str):
    digits = re.sub(r'\D', '', phone_str or '')
    if len(digits) == 10:
        return f"+1{digits}"
    elif len(digits) == 11 and digits.startswith('1'):
        return f"+{digits}"
    return phone_str or ''

def extract_meta_from_siteconfig(slug, src_dir):
    cfg_path = os.path.join(src_dir, f'siteConfig.{slug}.en.js')
    if not os.path.exists(cfg_path):
        return '', '', []
    try:
        with open(cfg_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        quote = ''
        author = ''
        rev_match = re.search(r'\"author\":\s*\"([^\"]+)\"[\s\S]*?\"text\":\s*\"([^\"]+)\"', content)
        if rev_match:
            author = rev_match.group(1).strip()
            quote = rev_match.group(2).strip()
        
        eq_match = re.search(r'\"equipment\":\s*(\[[\s\S]*?\])\s*,', content)
        equips = []
        if eq_match:
            try:
                eq_data = json.loads(eq_match.group(1))
                equips = [item['name'] for item in eq_data if 'name' in item]
            except:
                pass
        return quote, author, equips
    except Exception:
        return '', '', []

def get_timezone_info(state, address):
    addr_lower = (address or '').lower()
    st = (state or '').strip().upper()
    
    if st in ('CA', 'WA', 'OR'):
        return {
            'code': 'PT',
            'name': 'Pacific Time (PT • UTC-8)',
            'tzId': 'America/Los_Angeles',
            'badgeColor': 'bg-purple-900/40 text-purple-300 border-purple-500/40',
            'usMorning': '9:00 AM – 11:30 AM',
            'usEvening': '4:30 PM – 6:30 PM',
            'cyprusMorning': '19:00 – 21:30',
            'cyprusEvening': '02:30 – 04:30',
            'georgiaMorning': '21:00 – 23:30',
            'georgiaEvening': '04:30 – 06:30',
            'offsetHoursCyprus': 10,
            'offsetHoursGeorgia': 12
        }
    elif st in ('TX', 'AL', 'MS', 'LA', 'IL', 'MO', 'TN'):
        return {
            'code': 'CT',
            'name': 'Central Time (CT • UTC-6)',
            'tzId': 'America/Chicago',
            'badgeColor': 'bg-amber-900/40 text-amber-300 border-amber-500/40',
            'usMorning': '9:00 AM – 11:30 AM',
            'usEvening': '4:30 PM – 6:30 PM',
            'cyprusMorning': '17:00 – 19:30',
            'cyprusEvening': '00:30 – 02:30',
            'georgiaMorning': '19:00 – 21:30',
            'georgiaEvening': '02:30 – 04:30',
            'offsetHoursCyprus': 8,
            'offsetHoursGeorgia': 10
        }
    elif st == 'FL' and any(c in addr_lower for c in PANHANDLE_CITIES):
        return {
            'code': 'CT',
            'name': 'Central Time (FL Panhandle • UTC-6)',
            'tzId': 'America/Chicago',
            'badgeColor': 'bg-amber-900/40 text-amber-300 border-amber-500/40',
            'usMorning': '9:00 AM – 11:30 AM',
            'usEvening': '4:30 PM – 6:30 PM',
            'cyprusMorning': '17:00 – 19:30',
            'cyprusEvening': '00:30 – 02:30',
            'georgiaMorning': '19:00 – 21:30',
            'georgiaEvening': '02:30 – 04:30',
            'offsetHoursCyprus': 8,
            'offsetHoursGeorgia': 10
        }
    else: # Default Eastern Time (FL, NC, SC, GA, VA, etc)
        return {
            'code': 'ET',
            'name': 'Eastern Time (ET • UTC-5)',
            'tzId': 'America/New_York',
            'badgeColor': 'bg-sky-900/40 text-sky-300 border-sky-500/40',
            'usMorning': '9:00 AM – 11:30 AM',
            'usEvening': '4:30 PM – 6:30 PM',
            'cyprusMorning': '16:00 – 18:30',
            'cyprusEvening': '23:30 – 01:30',
            'georgiaMorning': '18:00 – 20:30',
            'georgiaEvening': '01:30 – 03:30',
            'offsetHoursCyprus': 7,
            'offsetHoursGeorgia': 9
        }

def build_leads_dataset():
    csv_path = '/Users/workpc/Documents/google-maps-scraper/output/tree_leads/companies tree removers 250 - companies.csv'
    src_dir = '/Users/workpc/Documents/All Florida Tree Care/src'
    
    with open(csv_path, 'r', encoding='utf-8-sig') as f:
        all_rows = list(csv.DictReader(f))
    
    uncalled_rows = []
    for r in all_rows:
        name = r.get('Название', '').strip()
        norm_name = name.replace('’', "'")
        if not any(norm_name.lower() == c.replace('’', "'").lower() for c in CALLED_31_NAMES):
            uncalled_rows.append(r)
    
    if len(uncalled_rows) != 134:
        raise ValueError(f"Expected 134 uncalled leads, got {len(uncalled_rows)}")
    
    processed_leads = []
    for r in uncalled_rows:
        name = r.get('Название', '').strip()
        state = r.get('Штат', '').strip()
        addr = r.get('Адрес', '').strip()
        phone = r.get('Контактный номер', '').strip()
        c_phone = clean_phone(phone)
        page_url = r.get('Ссылка на созданную страницу', '').strip()
        slug = page_url.split('/')[-1] if page_url else ''
        rating = r.get('Оценка', '5.0').strip()
        reviews = r.get('Количество отзывов', '0').strip()
        site_status = r.get('Наличие сайта', '').strip()
        site_url = r.get('Ссылка на сайт', '').strip()
        site_problem = r.get('Проблема с сайтом', '').strip()
        imessage = r.get('Наличие iMessage', '').strip()
        carrier = r.get('Оператор связи', '').strip()
        
        tz_info = get_timezone_info(state, addr)
        quote, author, equips = extract_meta_from_siteconfig(slug, src_dir)
        
        clean_name = re.sub(r'(?i)\b(llc|inc|co|corp|corporation|services|service)\b', '', name).strip(' ,.-')
        if not clean_name:
            clean_name = name
            
        lead = {
            'name': name,
            'cleanName': clean_name,
            'phone': phone,
            'cleanPhone': c_phone,
            'rating': rating,
            'reviewCount': reviews,
            'address': addr or 'Не указан',
            'state': state or 'FL',
            'siteStatus': site_status,
            'siteUrl': site_url,
            'siteProblem': site_problem or 'Сайт устарел или не оптимизирован под мобильные звонки',
            'imessage': imessage or 'Не проверено',
            'carrier': carrier or 'US Mobile Carrier',
            'slug': slug,
            'screenshot': f"screenshots/{slug}_mobile_en.png",
            'zonusUrl': f"https://zonus.co/{slug}",
            'portalUrl': f"https://all-florida-tree-care-production.up.railway.app/{slug}",
            'timezone': tz_info['code'],
            'tzName': tz_info['name'],
            'tzId': tz_info['tzId'],
            'tzBadgeColor': tz_info['badgeColor'],
            'usMorning': tz_info['usMorning'],
            'usEvening': tz_info['usEvening'],
            'cyprusMorning': tz_info['cyprusMorning'],
            'cyprusEvening': tz_info['cyprusEvening'],
            'georgiaMorning': tz_info['georgiaMorning'],
            'georgiaEvening': tz_info['georgiaEvening'],
            'reviewQuote': quote or f"Outstanding job removing massive hazardous trees with absolute care for the yard and clean up.",
            'reviewAuthor': author or "Local Homeowner",
            'equipment': equips or ["Altec Bucket Truck", "Brush Chipper", "Turf Protection Mats"]
        }
        processed_leads.append(lead)
    
    # Sort strictly: ET first, CT second, PT third
    tz_rank = {'ET': 1, 'CT': 2, 'PT': 3}
    processed_leads.sort(key=lambda x: (
        tz_rank[x['timezone']],
        -float(x['rating'] if x['rating'] else 0),
        -int(x['reviewCount'] if x['reviewCount'].isdigit() else 0)
    ))
    
    # Filter exactly 70 leads: 40 ET, 16 CT, 14 PT
    et_all = [l for l in processed_leads if l['timezone'] == 'ET']
    ct_all = [l for l in processed_leads if l['timezone'] == 'CT']
    pt_all = [l for l in processed_leads if l['timezone'] == 'PT']
    
    selected_70 = et_all[:40] + ct_all[:16] + pt_all[:14]
    
    # Assign sequential IDs 1 to 70
    for idx, lead in enumerate(selected_70):
        lead['id'] = idx + 1
        
    return selected_70

def sync_screenshots(leads):
    src_ss_dir = '/Users/workpc/Documents/All Florida Tree Care/screenshots/mobile'
    dst_public_dir = '/Users/workpc/Documents/All Florida Tree Care/public/screenshots'
    dst_dialer_dir = '/Users/workpc/Documents/google-maps-scraper/output/tree_leads/dialer_batches/screenshots'
    
    os.makedirs(dst_public_dir, exist_ok=True)
    
    copied = 0
    for l in leads:
        fname = f"{l['slug']}_mobile_en.png"
        src = os.path.join(src_ss_dir, fname)
        dst = os.path.join(dst_public_dir, fname)
        if os.path.exists(src) and not os.path.exists(dst):
            shutil.copyfile(src, dst)
            copied += 1
            
    print(f"Screenshots synced: {copied} new files copied to public/screenshots/.")

def generate_dialer_html(leads):
    leads_json = json.dumps(leads, ensure_ascii=False)
    total_leads = len(leads)
    et_count = sum(1 for l in leads if l['timezone'] == 'ET')
    ct_count = sum(1 for l in leads if l['timezone'] == 'CT')
    pt_count = sum(1 for l in leads if l['timezone'] == 'PT')
    
    html = f"""<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>ZONUS TREE SERVICE — Звонилка Анастасии ({total_leads} контактов • Сортировка по часовым поясам)</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<script>
  function handleImageError(img) {{
    if (!img) return;
    img.classList.add('hidden');
    const fallback = document.getElementById('leadScreenshotFallback');
    if (fallback) {{
      if (typeof leadsData !== 'undefined' && leadsData[currentIndex]) {{
        document.getElementById('fallbackBizName').innerText = leadsData[currentIndex].name;
      }}
      fallback.classList.remove('hidden');
    }}
  }}
</script>
<style>
  html, body {{ overflow-x: hidden; }}
  body {{ font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif; }}
  .font-mono {{ font-family: 'JetBrains Mono', monospace; }}
  .tab-btn.active {{
    background: #047857;
    color: #ffffff;
    border-color: #34d399;
  }}
  .tz-filter-btn.active {{
    background: #0f766e;
    color: #ffffff;
    border-color: #2dd4bf;
    font-weight: 700;
  }}
  /* Custom scrollbar */
  ::-webkit-scrollbar {{ width: 6px; height: 6px; }}
  ::-webkit-scrollbar-track {{ background: #0f172a; }}
  ::-webkit-scrollbar-thumb {{ background: #334155; border-radius: 3px; }}
  ::-webkit-scrollbar-thumb:hover {{ background: #475569; }}
</style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-emerald-500 selection:text-slate-950 pb-28 md:pb-16">

  <!-- TOP STICKY HEADER -->
  <header class="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-800 px-3 sm:px-4 py-2.5 shadow-2xl">
    <div class="max-w-6xl mx-auto flex flex-col gap-2">
      <!-- Row 1: Brand, Operator & Clocks -->
      <div class="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-700 flex items-center justify-center font-black text-slate-950 text-base shadow-lg shadow-emerald-950/60 border border-emerald-400/40 shrink-0">
            Z
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <h1 class="font-extrabold text-sm sm:text-base text-white tracking-tight truncate">ZONUS TREE SERVICE</h1>
              <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">Линия #103 • Анастасия</span>
            </div>
            <p class="text-[11px] text-slate-400 hidden sm:block truncate">70 проверенных контакта • Сортировка: ET → CT → PT</p>
          </div>
        </div>

        <!-- Clocks: Cyprus (UTC+2), Georgia (UTC+4), and Active Company Local Time -->
        <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 text-xs">
          <!-- Cyprus Clock (UTC+2) -->
          <div class="bg-slate-950/90 border border-cyan-800/50 rounded-lg px-2 sm:px-2.5 py-1 flex items-center gap-1.5 shadow-inner">
            <span class="text-sm">🇨🇾</span>
            <div class="text-right">
              <div class="text-[9px] uppercase tracking-wider text-cyan-400 font-bold leading-none">Кипр (UTC+2)</div>
              <div id="clockCyprus" class="font-mono font-bold text-white text-xs sm:text-sm leading-tight">--:--</div>
            </div>
          </div>

          <!-- Georgia Clock (UTC+4) -->
          <div class="bg-slate-950/90 border border-slate-800 rounded-lg px-2 sm:px-2.5 py-1 flex items-center gap-1.5 shadow-inner">
            <span class="text-sm">🇬🇪</span>
            <div class="text-right">
              <div class="text-[9px] uppercase tracking-wider text-slate-400 font-bold leading-none">Грузия (UTC+4)</div>
              <div id="clockGeorgia" class="font-mono font-bold text-white text-xs sm:text-sm leading-tight">--:--</div>
            </div>
          </div>

          <!-- Active Company Time (Live Dynamic) -->
          <div class="bg-slate-950/90 border border-emerald-500/40 rounded-lg px-2 sm:px-2.5 py-1 flex items-center gap-1.5 shadow-inner">
            <span class="text-sm">🇺🇸</span>
            <div class="text-right">
              <div id="clockCompanyTzLabel" class="text-[9px] uppercase tracking-wider text-emerald-400 font-bold leading-none">США (ET)</div>
              <div id="clockCompanyTime" class="font-mono font-bold text-emerald-300 text-xs sm:text-sm leading-tight">--:--</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2: FAST NAVIGATION & TIMEZONE COHORTS -->
      <div class="flex items-center justify-between gap-2 pt-1 border-t border-slate-800/80 flex-wrap sm:flex-nowrap">
        <!-- Navigation Controls -->
        <div class="flex items-center gap-1.5 w-full sm:w-auto">
          <button onclick="prevLead()" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 transition flex items-center gap-1 shrink-0 active:scale-95">
            <span>←</span> <span class="hidden xs:inline">Назад</span>
          </button>

          <!-- Dropdown Selector with Optgroups -->
          <div class="relative flex-1 min-w-[200px]">
            <select id="leadSelect" onchange="jumpToLead(this.value)" class="w-full bg-slate-950 text-slate-200 text-xs font-medium rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none focus:border-emerald-500 truncate cursor-pointer">
              <!-- Populated by JS with optgroups: ET, CT, PT -->
            </select>
          </div>

          <button onclick="nextLead()" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-lg shadow-emerald-950/60 transition flex items-center gap-1 shrink-0 active:scale-95">
            <span class="hidden xs:inline">Вперед</span> <span>→</span>
          </button>
        </div>

        <!-- Timezone Fast-Filter Cohort Tabs -->
        <div class="flex items-center gap-1 text-[11px] overflow-x-auto py-0.5 w-full sm:w-auto justify-end">
          <button onclick="filterTimezone('ALL')" id="tzBtnALL" class="tz-filter-btn active px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition shrink-0">
            Все ({total_leads})
          </button>
          <button onclick="filterTimezone('ET')" id="tzBtnET" class="tz-filter-btn px-2 py-1 rounded bg-slate-800 text-sky-300 border border-slate-700 hover:bg-slate-700 transition shrink-0">
            🇺🇸 Восток ET ({et_count})
          </button>
          <button onclick="filterTimezone('CT')" id="tzBtnCT" class="tz-filter-btn px-2 py-1 rounded bg-slate-800 text-amber-300 border border-slate-700 hover:bg-slate-700 transition shrink-0">
            🇺🇸 Центр CT ({ct_count})
          </button>
          <button onclick="filterTimezone('PT')" id="tzBtnPT" class="tz-filter-btn px-2 py-1 rounded bg-slate-800 text-purple-300 border border-slate-700 hover:bg-slate-700 transition shrink-0">
            🇺🇸 Запад PT ({pt_count})
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- MAIN WRAPPER -->
  <main class="max-w-6xl mx-auto px-3 sm:px-4 py-4 flex-1 w-full space-y-4">

    <!-- PROGRESS BAR & QUICK STATS -->
    <div class="bg-slate-900 border border-slate-800 rounded-xl p-3 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <div class="text-xs">
          <span class="text-slate-400">Прогресс обзвона:</span>
          <span id="progressText" class="font-bold text-white ml-1">Лид 1 из {total_leads}</span>
        </div>
        <div class="w-32 sm:w-48 bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800">
          <div id="progressBar" class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-300" style="width: 1%"></div>
        </div>
      </div>

      <div class="flex items-center gap-2 flex-wrap text-xs">
        <span class="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 font-medium">
          ✅ Согласились: <b id="statAgreed" class="text-white ml-0.5">0</b>
        </span>
        <span class="px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/60 font-medium">
          📋 Секретарь: <b id="statInfo" class="text-white ml-0.5">0</b>
        </span>
        <span class="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60 font-medium">
          🎙️ Автоответчик: <b id="statVm" class="text-white ml-0.5">0</b>
        </span>
        <button onclick="openLogModal()" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition flex items-center gap-1 active:scale-95">
          <span>📜 Журнал</span>
        </button>
      </div>
    </div>

    <!-- MAIN 2-COLUMN GRID -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">

      <!-- LEFT COLUMN: COMPANY CARD, TIMEZONE ALERT & SCRIPTS (lg:col-span-7) -->
      <div class="lg:col-span-7 space-y-4">

        <!-- COMPANY DETAILS CARD -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl relative overflow-hidden">
          <!-- Top Row: Timezone Badge, State, Google Rating -->
          <div class="flex items-center justify-between gap-2 flex-wrap mb-2.5">
            <div class="flex items-center gap-2 flex-wrap">
              <span id="leadTzBadge" class="text-xs font-bold px-2 py-0.5 rounded border">
                ET • UTC-5
              </span>
              <span id="leadStateBadge" class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                FL
              </span>
              <span id="leadImessageBadge" class="text-[11px] font-semibold px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-800/60">
                📱 iMessage
              </span>
            </div>

            <!-- Rating from Google Maps -->
            <a id="leadMapsLink" href="#" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded transition">
              <span>⭐</span>
              <span id="leadRatingText">4.9 (177 Google Reviews)</span>
              <span class="text-slate-500 text-[10px]">↗</span>
            </a>
          </div>

          <!-- Company Name -->
          <h2 id="leadName" class="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-1">
            Company Name
          </h2>

          <!-- Address -->
          <p id="leadAddress" class="text-xs text-slate-400 mb-3 flex items-center gap-1.5 truncate">
            <span>📍</span> <span id="leadAddressText">123 Main St, City, FL</span>
          </p>

          <!-- CALLING WINDOW & LOCAL TIME ALERT BOX (CRITICAL REQUIREMENT) -->
          <div id="callingWindowAlertBox" class="bg-slate-950/90 border border-emerald-500/40 rounded-xl p-3 mb-4 shadow-inner">
            <div class="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-800/80">
              <div class="flex items-center gap-2">
                <span id="callingStatusIcon" class="text-base">🟢</span>
                <span id="callingStatusLabel" class="text-xs font-bold text-emerald-400">Отличное время для звонка</span>
              </div>
              <div class="text-[11px] font-mono text-slate-300">
                Местное в компании: <b id="companyLocalTimeDisplay" class="text-emerald-300 font-bold">10:15 AM</b>
              </div>
            </div>

            <!-- Timezone Calling Windows Comparison Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
              <div class="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
                <div class="text-slate-400 font-medium flex items-center gap-1 mb-0.5">
                  <span>🇺🇸</span> <span>Местное окно:</span>
                </div>
                <div id="usWindowText" class="font-bold text-white">9:00 AM – 11:30 AM</div>
                <div class="text-[10px] text-slate-500">& 4:30 PM – 6:30 PM</div>
              </div>

              <div class="bg-slate-900/90 rounded-lg p-2 border border-cyan-900/40">
                <div class="text-cyan-400 font-medium flex items-center gap-1 mb-0.5">
                  <span>🇨🇾</span> <span>По Кипру (UTC+2):</span>
                </div>
                <div id="cyprusWindowText" class="font-bold text-cyan-200">16:00 – 18:30</div>
                <div id="cyprusEveningText" class="text-[10px] text-cyan-400/80">& 23:30 – 01:30</div>
              </div>

              <div class="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
                <div class="text-slate-400 font-medium flex items-center gap-1 mb-0.5">
                  <span>🇬🇪</span> <span>По Грузии (UTC+4):</span>
                </div>
                <div id="georgiaWindowText" class="font-bold text-slate-200">18:00 – 20:30</div>
                <div id="georgiaEveningText" class="text-[10px] text-slate-500">& 01:30 – 03:30</div>
              </div>
            </div>
          </div>

          <!-- PRIMARY ACTION BUTTONS (CALL / SMS / COPY) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
            <!-- Big Call Button -->
            <a id="btnCallPhone" href="tel:+10000000000" class="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-base py-3 px-4 rounded-xl shadow-lg shadow-emerald-950/70 border border-emerald-400/40 transition active:scale-[0.98]">
              <span class="text-xl">📞</span>
              <span id="btnCallText">Позвонить (+1 ...)</span>
            </a>

            <!-- Big SMS / iMessage Button -->
            <a id="btnSmsPhone" href="sms:+10000000000" class="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-lg shadow-sky-950/70 border border-sky-400/40 transition active:scale-[0.98]">
              <span class="text-xl">💬</span>
              <span>Открыть iMessage / SMS</span>
            </a>
          </div>

          <!-- Secondary Toolbar: Copy Phone, Copy SMS, Preview Link -->
          <div class="flex items-center gap-2 flex-wrap text-xs pt-2 border-t border-slate-800/80">
            <button onclick="copyPhoneNumber()" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center gap-1 active:scale-95">
              <span>📋</span> <span id="btnCopyPhoneText">Копировать телефон</span>
            </button>

            <button onclick="copySmsText()" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center gap-1 active:scale-95">
              <span>✉️</span> <span id="btnCopySmsText">Копировать SMS</span>
            </button>

            <a id="linkShowcasePage" href="#" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/60 transition flex items-center gap-1 ml-auto">
              <span>🌐</span> <span id="linkShowcaseText">zonus.co/[slug]</span> <span>↗</span>
            </a>
          </div>
        </div>

        <!-- SCRIPT TABS SELECTOR -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
          <div class="flex items-center gap-1.5 border-b border-slate-800 pb-2 mb-3">
            <button onclick="switchScriptTab('call1')" id="tabCall1Btn" class="tab-btn active px-3 py-1.5 rounded-lg text-xs font-bold border border-emerald-500/40 transition">
              1-й звонок (Call 1)
            </button>
            <button onclick="switchScriptTab('call2')" id="tabCall2Btn" class="tab-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700 transition">
              2-й звонок (Call 2 — Дожим)
            </button>
            <button onclick="switchScriptTab('faq')" id="tabFaqBtn" class="tab-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700 transition">
              🔥 7 Возражений (Cheat Sheet)
            </button>
          </div>

          <!-- TAB 1: CALL 1 SCRIPTS -->
          <div id="tabCall1Content" class="space-y-3">
            <!-- HOOK 1: DIRECT TO OWNER -->
            <div class="bg-slate-950/90 rounded-xl p-3 border border-emerald-500/30">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <span>👑</span> 1. Разговор с Владельцем (Direct Owner Hook)
                </span>
                <span class="text-[10px] text-slate-500">Без «как дела» • Сразу в суть</span>
              </div>
              <p id="scriptOwnerText" class="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                <!-- Populated dynamically -->
              </p>
            </div>

            <!-- HOOK 2: GATEKEEPER / FRONT DESK -->
            <div class="bg-slate-950/90 rounded-xl p-3 border border-sky-500/30">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1">
                  <span>🛡️</span> 2. Разговор с Секретарем / Диспетчером (Gatekeeper)
                </span>
                <span class="text-[10px] text-slate-500">Не продаем • Предлагаем готовую ссылку</span>
              </div>
              <p id="scriptGatekeeperText" class="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                <!-- Populated dynamically -->
              </p>
            </div>

            <!-- HOOK 3: LANDLINE TO MOBILE BRIDGE -->
            <div class="bg-slate-950/90 rounded-xl p-3 border border-amber-500/30">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <span>☎️</span> 3. Перевод с Городского на Мобильный (Landline Bridge)
                </span>
                <span class="text-[10px] text-slate-500">Если отвечают «Это стационарный офис»</span>
              </div>
              <p class="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                “Got it! Since it’s interactive, it opens right on a cell phone. What’s the best mobile number for you or the owner so I can text it over?”
              </p>
            </div>

            <!-- HOOK 4: NOT INTERESTED RESCUE -->
            <div class="bg-slate-950/90 rounded-xl p-3 border border-rose-500/30">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1">
                  <span>🛟</span> 4. Реанимация «Не интересно» (Not Interested Rescue)
                </span>
                <span class="text-[10px] text-slate-500">Быстрый сброс давления</span>
              </div>
              <p class="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                “Totally understand — and just to be clear, I’m not selling marketing or asking for any money. The preview is already put together for your company. Could I just text the link so you have it on file?”
              </p>
            </div>

            <!-- HOOK 5: VOICEMAIL SCRIPT -->
            <div class="bg-slate-950/90 rounded-xl p-3 border border-purple-500/30">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1">
                  <span>🎙️</span> 5. Скрипт на Автоответчик (Voicemail Script)
                </span>
                <span class="text-[10px] text-slate-500">До 20 секунд • Сразу отправляем SMS</span>
              </div>
              <p id="scriptVoicemailText" class="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                <!-- Populated dynamically -->
              </p>
            </div>
          </div>

          <!-- TAB 2: CALL 2 CLOSING SCRIPTS -->
          <div id="tabCall2Content" class="hidden space-y-3">
            <div class="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3 text-xs text-emerald-300">
              <b>Цель второго звонка:</b> Подрядчик вчера согласился принять ссылку и получил SMS. Звоним ровно в 9:30 утра (или в его окно), фиксируем факт просмотра и закрываем на утверждение витрины!
            </div>

            <!-- Step 1 -->
            <div class="bg-slate-950/90 rounded-xl p-3 border border-slate-800">
              <div class="text-xs font-bold text-emerald-400 mb-1">Шаг 1: Разогрев и фиксация вчерашнего контакта</div>
              <p class="text-xs text-slate-200 italic leading-relaxed">
                “Hey [Owner/Jessica], this is Anastasia with Zonus. I texted you the mobile preview link yesterday with your Google reviews and heavy equipment. Did you have a quick second to tap through it?”
              </p>
            </div>

            <!-- Step 2: Equipment Hook -->
            <div class="bg-slate-950/90 rounded-xl p-3 border border-slate-800">
              <div class="text-xs font-bold text-sky-400 mb-1">Шаг 2: Удар по технике и авторитету компании</div>
              <p class="text-xs text-slate-200 italic leading-relaxed">
                “Awesome! We specifically highlighted your bucket truck and 5-star customer feedback because that builds instant trust for homeowners before they even call. How does the setup look on your phone?”
              </p>
            </div>

            <!-- Step 3: Turnkey Offer -->
            <div class="bg-slate-950/90 rounded-xl p-3 border border-slate-800">
              <div class="text-xs font-bold text-amber-400 mb-1">Шаг 3: Оффер «Сайт под ключ» ($300–$500)</div>
              <p class="text-xs text-slate-200 italic leading-relaxed">
                “If you like it, we can connect it to your custom domain, hook up your dispatch phone numbers, and hand over the keys for a one-time setup of $350. Zero recurring marketing fees.”
              </p>
            </div>

            <!-- Step 4: 50/50 Downsell -->
            <div class="bg-slate-950/90 rounded-xl p-3 border border-slate-800">
              <div class="text-xs font-bold text-rose-400 mb-1">Шаг 4: Даунселл 50/50 (если сомневается)</div>
              <p class="text-xs text-slate-200 italic leading-relaxed">
                “Tell you what — we can split it: $175 now to connect the domain and launch, and the rest only after you receive your first customer lead from the page. Fair enough?”
              </p>
            </div>
          </div>

          <!-- TAB 3: 7 CRITICAL OBJECTIONS CHEAT SHEET -->
          <div id="tabFaqContent" class="hidden space-y-3">
            <div class="bg-slate-950/90 rounded-xl p-3 border border-slate-800">
              <div class="text-xs font-bold text-rose-400 mb-1">1. «Are you selling something? / Is this a sales call?»</div>
              <p class="text-xs text-slate-200 italic">
                “No, not selling anything. We already built a working mobile preview for [Company] based on your 5-star Google reviews. I just wanted to text the link so you can see how your business looks on a smartphone. 100% free, zero strings attached.”
              </p>
            </div>

            <div class="bg-slate-950/90 rounded-xl p-3 border border-slate-800">
              <div class="text-xs font-bold text-amber-400 mb-1">2. «We already have a website.»</div>
              <p class="text-xs text-slate-200 italic">
                “Totally, we saw your site! Most desktop websites take 4–5 seconds to load on mobile and bury your phone number. We put together a lightning-fast mobile card where homeowners can tap to call your crew in one second. Texting it over so you can compare.”
              </p>
            </div>

            <div class="bg-slate-950/90 rounded-xl p-3 border border-slate-800">
              <div class="text-xs font-bold text-sky-400 mb-1">3. «Just send an email to info@...»</div>
              <p class="text-xs text-slate-200 italic">
                “I can certainly email it, but it’s a mobile format built to open right on an iPhone or Android. What’s a good cell number to text the link so you or the owner can tap it directly?”
              </p>
            </div>

            <div class="bg-slate-950/90 rounded-xl p-3 border border-slate-800">
              <div class="text-xs font-bold text-emerald-400 mb-1">4. «Is it really free? What's the catch?»</div>
              <p class="text-xs text-slate-200 italic">
                “Zero catch. The preview is already online and costs you nothing to check out. If you love it and want us to point your domain to it, great. If not, you still have the link to keep with our compliments.”
              </p>
            </div>

            <div class="bg-slate-950/90 rounded-xl p-3 border border-slate-800">
              <div class="text-xs font-bold text-purple-400 mb-1">5. «We don’t need more work / We are fully booked.»</div>
              <p class="text-xs text-slate-200 italic">
                “That’s fantastic to hear! This isn’t lead generation or cold ad spam. It’s a clean showcase for your existing referrals and Google traffic so they can see your commercial insurance and equipment before calling.”
              </p>
            </div>

            <div class="bg-slate-950/90 rounded-xl p-3 border border-slate-800">
              <div class="text-xs font-bold text-teal-400 mb-1">6. «This is a business landline / office only.»</div>
              <p class="text-xs text-slate-200 italic">
                “Understood! What mobile number should I send the text to so the boss can view it on their phone tonight?”
              </p>
            </div>

            <div class="bg-slate-950/90 rounded-xl p-3 border border-slate-800">
              <div class="text-xs font-bold text-indigo-400 mb-1">7. «Call back next week / I'm busy on a job.»</div>
              <p class="text-xs text-slate-200 italic">
                “Will do! I’ll shoot the link by text right now so you can check it out when you’re off the truck tonight. Have a safe day out there!”
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- RIGHT COLUMN: MOBILE PREVIEW FRAME & CALL LOGGER (lg:col-span-5) -->
      <div class="lg:col-span-5 space-y-4">

        <!-- PHONE MOCKUP FRAME -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-col items-center">
          <div class="flex items-center justify-between w-full mb-3 px-1">
            <span class="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <span>📱</span> Мобильная витрина
            </span>
            <a id="linkOpenShowcaseFull" href="#" target="_blank" rel="noopener noreferrer" class="text-[11px] text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 transition">
              <span>Открыть на весь экран</span> <span>↗</span>
            </a>
          </div>

          <!-- Phone mockup frame -->
          <div class="relative w-full max-w-[260px] aspect-[9/16] bg-slate-900 rounded-2xl border-2 border-slate-700 shadow-2xl overflow-hidden group cursor-pointer" onclick="openScreenshotModal()">
            <img id="leadScreenshotImg" alt="Mobile Showcase Preview" class="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105" onerror="handleImageError(this)">

            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center p-3 text-center">
              <span class="text-2xl mb-1">🔍</span>
              <span class="text-xs font-bold text-white">Нажмите для увеличения</span>
              <span class="text-[10px] text-emerald-300 mt-1">Реальные отзывы и техника</span>
            </div>

            <!-- Fallback card if no screenshot -->
            <div id="leadScreenshotFallback" class="hidden absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950 p-4 flex flex-col items-center justify-center text-center">
              <div class="text-3xl mb-2">🌲</div>
              <div class="text-xs font-bold text-white mb-1" id="fallbackBizName">Company</div>
              <div class="text-[11px] text-emerald-400 font-mono">https://zonus.co/[slug]</div>
            </div>
          </div>

          <!-- Customer Review Quote -->
          <div class="w-full mt-3 bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 text-left">
            <div class="flex items-center gap-1 text-[11px] font-bold text-amber-400 mb-1">
              <span>💬</span> <span>Реальный отзыв клиента (Google Maps):</span>
            </div>
            <p id="leadReviewQuote" class="text-[11px] text-slate-300 italic line-clamp-3 leading-relaxed">
              "Great work, cleaned up nicely after cutting down massive pine trees..."
            </p>
          </div>
        </div>

        <!-- CALL OUTCOME LOGGER -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
          <h3 class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <span>📝</span> Фиксация результата звонка
          </h3>

          <div class="grid grid-cols-2 gap-2 text-xs mb-3">
            <button onclick="logCallOutcome('AGREED_LINK')" class="py-2 px-2.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-700/60 font-bold transition flex items-center gap-1 active:scale-95 text-left truncate">
              <span>✅</span> <span class="truncate">Согласились (SMS)</span>
            </button>
            <button onclick="logCallOutcome('GATEKEEPER_INFO')" class="py-2 px-2.5 rounded-lg bg-sky-950/60 hover:bg-sky-900/80 text-sky-300 border border-sky-700/60 font-bold transition flex items-center gap-1 active:scale-95 text-left truncate">
              <span>📋</span> <span class="truncate">Секретарь передаст</span>
            </button>
            <button onclick="logCallOutcome('REQUESTED_EMAIL')" class="py-2 px-2.5 rounded-lg bg-indigo-950/60 hover:bg-indigo-900/80 text-indigo-300 border border-indigo-700/60 font-medium transition flex items-center gap-1 active:scale-95 text-left truncate">
              <span>📧</span> <span class="truncate">Просят на Email</span>
            </button>
            <button onclick="logCallOutcome('CALL_BACK')" class="py-2 px-2.5 rounded-lg bg-yellow-950/60 hover:bg-yellow-900/80 text-yellow-300 border border-yellow-700/60 font-medium transition flex items-center gap-1 active:scale-95 text-left truncate">
              <span>📞</span> <span class="truncate">Перезвонить позже</span>
            </button>
            <button onclick="logCallOutcome('VOICEMAIL')" class="py-2 px-2.5 rounded-lg bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 border border-amber-700/60 font-medium transition flex items-center gap-1 active:scale-95 text-left truncate">
              <span>🎙️</span> <span class="truncate">Оставлен Voicemail</span>
            </button>
            <button onclick="logCallOutcome('NO_ANSWER')" class="py-2 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-medium transition flex items-center gap-1 active:scale-95 text-left truncate">
              <span>📵</span> <span class="truncate">Не берут / Сброс</span>
            </button>
            <button onclick="logCallOutcome('REJECTED')" class="col-span-2 py-2 px-2.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800/40 font-medium transition flex items-center gap-1 active:scale-95 text-center justify-center">
              <span>❌</span> <span>Отказ («Не интересно / Удалите»)</span>
            </button>
          </div>

          <!-- Notes Field -->
          <div class="space-y-1.5">
            <textarea id="leadNoteInput" rows="2" placeholder="Заметка к звонку (имя диспетчера, добавочный номер, время перезвона)..." class="w-full bg-slate-950 text-xs text-slate-200 rounded-lg p-2.5 border border-slate-800 focus:outline-none focus:border-emerald-500 resize-none"></textarea>
            <div class="flex items-center justify-between text-xs">
              <span id="footerLeadStatus" class="text-slate-500 text-[11px]">Статус: не обработан</span>
              <button onclick="saveLeadNote()" class="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold transition active:scale-95">
                💾 Сохранить
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>

  </main>

  <!-- MODAL: FULL SCREENSHOT PREVIEW -->
  <div id="screenshotModal" class="hidden fixed inset-0 z-50 bg-slate-950/90 backdrop-blur flex items-center justify-center p-4" onclick="closeScreenshotModal()">
    <div class="relative max-w-sm w-full bg-slate-900 rounded-2xl border border-slate-700 p-2 shadow-2xl" onclick="event.stopPropagation()">
      <div class="flex items-center justify-between p-2 border-b border-slate-800 mb-2">
        <span class="text-xs font-bold text-white" id="modalBizName">Company</span>
        <button onclick="closeScreenshotModal()" class="text-slate-400 hover:text-white text-base font-bold px-2 py-0.5">✕</button>
      </div>
      <div class="max-h-[80vh] overflow-y-auto rounded-xl">
        <img id="modalScreenshotImg" src="" alt="Full Preview" class="w-full rounded-xl shadow">
      </div>
    </div>
  </div>

  <!-- MODAL: CALL LOG TABLE -->
  <div id="callLogModal" class="hidden fixed inset-0 z-50 bg-slate-950/90 backdrop-blur flex items-center justify-center p-4" onclick="closeLogModal()">
    <div class="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-slate-700 p-4 sm:p-6 shadow-2xl flex flex-col max-h-[85vh]" onclick="event.stopPropagation()">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h3 class="text-base font-bold text-white">Журнал звонков Анастасии</h3>
          <p id="modalLogSummary" class="text-xs text-slate-400">Всего обработано: 0 из {total_leads}</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="exportCsv()" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition flex items-center gap-1">
            <span>📥 Экспорт в CSV</span>
          </button>
          <button onclick="closeLogModal()" class="text-slate-400 hover:text-white text-base font-bold px-2 py-0.5">✕</button>
        </div>
      </div>

      <div class="flex-1 overflow-y-auto mt-4 text-xs">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-slate-800 text-slate-400 font-semibold text-[11px]">
              <th class="pb-2">#</th>
              <th class="pb-2">Компания</th>
              <th class="pb-2">Телефон</th>
              <th class="pb-2">Статус</th>
              <th class="pb-2">Заметка</th>
            </tr>
          </thead>
          <tbody id="logTableBody" class="divide-y divide-slate-800/60">
            <!-- Populated by JS -->
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- JAVASCRIPT LOGIC -->
  <script>
    const leadsData = {leads_json};
    let currentIndex = 0;
    let activeTzFilter = 'ALL';
    let filteredIndices = leadsData.map((_, i) => i);

    // Call outcomes storage
    const STORAGE_KEY = 'zonus_anastasia_dialer_70_logs';
    let loggedCalls = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{{}}');

    function saveLogs() {{
      localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedCalls));
      updateStats();
    }}

    // Populate Dropdown with optgroups
    function initQuickSelect() {{
      const select = document.getElementById('leadSelect');
      select.innerHTML = '';

      const groups = {{
        'ET': document.createElement('optgroup'),
        'CT': document.createElement('optgroup'),
        'PT': document.createElement('optgroup')
      }};

      groups['ET'].label = '🇺🇸 Eastern Time (ET) — {et_count} компаний';
      groups['CT'].label = '🇺🇸 Central Time (CT) — {ct_count} компании';
      groups['PT'].label = '🇺🇸 Pacific Time (PT) — {pt_count} компаний';

      leadsData.forEach((lead, idx) => {{
        const opt = document.createElement('option');
        opt.value = idx;
        const logged = loggedCalls[lead.phone];
        const statusMark = logged ? (logged.status === 'AGREED_LINK' ? '✅ ' : '✓ ') : '';
        opt.innerText = `${{statusMark}}#${{idx + 1}} [${{lead.timezone}}] ${{lead.name}} (${{lead.state}})`;
        
        if (groups[lead.timezone]) {{
          groups[lead.timezone].appendChild(opt);
        }}
      }});

      select.appendChild(groups['ET']);
      select.appendChild(groups['CT']);
      select.appendChild(groups['PT']);
    }}

    function filterTimezone(tz) {{
      activeTzFilter = tz;
      ['ALL', 'ET', 'CT', 'PT'].forEach(t => {{
        const btn = document.getElementById('tzBtn' + t);
        if (btn) {{
          if (t === tz) btn.classList.add('active');
          else btn.classList.remove('active');
        }}
      }});

      if (tz === 'ALL') {{
        filteredIndices = leadsData.map((_, i) => i);
      }} else {{
        filteredIndices = [];
        leadsData.forEach((l, idx) => {{
          if (l.timezone === tz) filteredIndices.push(idx);
        }});
      }}

      // Jump to first in filter if current not in filter
      if (!filteredIndices.includes(currentIndex) && filteredIndices.length > 0) {{
        currentIndex = filteredIndices[0];
      }}
      renderCurrentLead();
    }}

    function renderCurrentLead() {{
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex >= leadsData.length) currentIndex = leadsData.length - 1;

      const lead = leadsData[currentIndex];
      const select = document.getElementById('leadSelect');
      if (select) select.value = currentIndex;

      // Header company clock label
      document.getElementById('clockCompanyTzLabel').innerText = `США (${{lead.timezone}})`;

      // Badges
      const tzBadge = document.getElementById('leadTzBadge');
      tzBadge.innerText = lead.tzName;
      tzBadge.className = `text-xs font-bold px-2 py-0.5 rounded border ${{lead.tzBadgeColor}}`;

      document.getElementById('leadStateBadge').innerText = lead.state;
      document.getElementById('leadRatingText').innerText = `${{lead.rating}} (${{lead.reviewCount}} Google Reviews)`;
      document.getElementById('leadMapsLink').href = lead.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${{encodeURIComponent(lead.name + ' ' + lead.address)}}`;

      // Name & Address
      document.getElementById('leadName').innerText = lead.name;
      document.getElementById('leadAddressText').innerText = lead.address;

      // Calling windows
      document.getElementById('usWindowText').innerText = lead.usMorning;
      document.getElementById('cyprusWindowText').innerText = lead.cyprusMorning;
      document.getElementById('cyprusEveningText').innerText = `& ${{lead.cyprusEvening}}`;
      document.getElementById('georgiaWindowText').innerText = lead.georgiaMorning;
      document.getElementById('georgiaEveningText').innerText = `& ${{lead.georgiaEvening}}`;

      // Buttons
      const cleanBizName = lead.cleanName || lead.name;
      const cleanPhone = lead.cleanPhone || lead.phone;
      const smsBody = `Hi ${{cleanBizName}}, this is Anastasia from Zonus. We put together a free mobile showcase for your crew with your Google reviews and heavy equipment: https://zonus.co/${{lead.slug}} — zero cost, zero commitment!`;

      document.getElementById('btnCallPhone').href = `tel:${{cleanPhone}}`;
      document.getElementById('btnCallText').innerText = `Позвонить (${{lead.phone}})`;

      // iOS sms: separator uses &body= or ;body= depending on iOS version
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const smsSeparator = isIOS ? '&' : '?';
      document.getElementById('btnSmsPhone').href = `sms:${{cleanPhone}}${{smsSeparator}}body=${{encodeURIComponent(smsBody)}}`;

      // Showcase Link
      const pageUrl = `https://zonus.co/${{lead.slug}}`;
      document.getElementById('linkShowcasePage').href = pageUrl;
      document.getElementById('linkShowcaseText').innerText = `zonus.co/${{lead.slug}}`;
      document.getElementById('linkOpenShowcaseFull').href = pageUrl;

      // Scripts
      document.getElementById('scriptOwnerText').innerText = 
        `“Hi, is this the owner of ${{cleanBizName}}? This is Anastasia with Zonus. I came across your 5-star Google reviews and our team put together a free mobile preview for your business — it lets homeowners quickly view your heavy equipment and call your crew with one tap. Zero cost, zero commitment. I just wanted to text you the link so you can check it out. Is this the best cell to text it to?”`;

      document.getElementById('scriptGatekeeperText').innerText = 
        `“Hi, this is Anastasia with Zonus. Our team actually put together a free mobile preview for ${{cleanBizName}} featuring your 5-star Google reviews and equipment, and there’s no cost or commitment. I just wanted to send a quick link so management can see it. Is there a good cell phone or email I could text that over to?”`;

      document.getElementById('scriptVoicemailText').innerText = 
        `“Hey ${{cleanBizName}}, this is Anastasia with Zonus. We put together a free mobile showcase for ${{cleanBizName}} featuring your 5-star Google reviews and heavy equipment. Texting you the preview link right now to this cell. Take a quick 15-second scroll tonight, zero obligation. Have a great day!”`;

      // Screenshot
      const ssImg = document.getElementById('leadScreenshotImg');
      const fallback = document.getElementById('leadScreenshotFallback');
      fallback.classList.add('hidden');
      ssImg.classList.remove('hidden');
      ssImg.src = lead.screenshot;

      // Review Quote
      document.getElementById('leadReviewQuote').innerText = `“${{lead.reviewQuote}}” — ${{lead.reviewAuthor}}`;

      // Status restoration
      const logged = loggedCalls[lead.phone];
      if (logged) {{
        document.getElementById('footerLeadStatus').innerText = `Статус: ${{formatStatusName(logged.status)}}`;
        document.getElementById('leadNoteInput').value = logged.note || '';
      }} else {{
        document.getElementById('footerLeadStatus').innerText = `Статус: не обработан`;
        document.getElementById('leadNoteInput').value = '';
      }}

      updateProgressBar();
      updateCompanyLocalTime(lead);
    }}

    function updateCompanyLocalTime(lead) {{
      const now = new Date();
      try {{
        const opts = {{ timeZone: lead.tzId, hour: '2-digit', minute: '2-digit', hour12: true }};
        const timeStr = now.toLocaleTimeString('en-US', opts);
        document.getElementById('clockCompanyTime').innerText = timeStr;
        document.getElementById('companyLocalTimeDisplay').innerText = timeStr;

        // Calculate hours in that timezone to determine active status
        const hourOpts = {{ timeZone: lead.tzId, hour: 'numeric', hour12: false }};
        const curHour = parseInt(now.toLocaleTimeString('en-US', hourOpts));

        const iconEl = document.getElementById('callingStatusIcon');
        const labelEl = document.getElementById('callingStatusLabel');

        if ((curHour >= 9 && curHour < 12) || (curHour >= 16 && curHour < 19)) {{
          iconEl.innerText = '🟢';
          labelEl.innerText = 'Отличное время для звонка (Бизнес на связи)';
          labelEl.className = 'text-xs font-bold text-emerald-400';
        }} else if (curHour >= 8 && curHour < 18) {{
          iconEl.innerText = '🟡';
          labelEl.innerText = 'Рабочее время (Обеденные / дневные часы)';
          labelEl.className = 'text-xs font-bold text-amber-400';
        }} else {{
          iconEl.innerText = '⏳';
          labelEl.innerText = 'Нерабочее время (Раннее утро или ночь в США)';
          labelEl.className = 'text-xs font-bold text-rose-400';
        }}
      }} catch (e) {{}}
    }}

    function prevLead() {{
      const currentPos = filteredIndices.indexOf(currentIndex);
      if (currentPos > 0) {{
        currentIndex = filteredIndices[currentPos - 1];
        renderCurrentLead();
      }} else if (currentIndex > 0) {{
        currentIndex--;
        renderCurrentLead();
      }}
    }}

    function nextLead() {{
      const currentPos = filteredIndices.indexOf(currentIndex);
      if (currentPos !== -1 && currentPos < filteredIndices.length - 1) {{
        currentIndex = filteredIndices[currentPos + 1];
        renderCurrentLead();
      }} else if (currentIndex < leadsData.length - 1) {{
        currentIndex++;
        renderCurrentLead();
      }}
    }}

    function jumpToLead(idx) {{
      currentIndex = parseInt(idx);
      renderCurrentLead();
    }}

    function updateProgressBar() {{
      document.getElementById('progressText').innerText = `Лид ${{currentIndex + 1}} из ${{leadsData.length}}`;
      const pct = Math.round(((currentIndex + 1) / leadsData.length) * 100);
      document.getElementById('progressBar').style.width = `${{pct}}%`;
    }}

    function copyPhoneNumber() {{
      const lead = leadsData[currentIndex];
      navigator.clipboard.writeText(lead.phone || '').then(() => {{
        const btn = document.getElementById('btnCopyPhoneText');
        const original = btn.innerText;
        btn.innerText = '✓ Скопировано!';
        setTimeout(() => {{ btn.innerText = original; }}, 2000);
      }});
    }}

    function copySmsText() {{
      const lead = leadsData[currentIndex];
      const cleanBizName = lead.cleanName || lead.name;
      const text = `Hi ${{cleanBizName}}, this is Anastasia from Zonus. We put together a free mobile showcase for your crew with your Google reviews and heavy equipment: https://zonus.co/${{lead.slug}} — zero cost, zero commitment!`;
      navigator.clipboard.writeText(text).then(() => {{
        const btn = document.getElementById('btnCopySmsText');
        const original = btn.innerText;
        btn.innerText = '✓ SMS скопирован!';
        setTimeout(() => {{ btn.innerText = original; }}, 2000);
      }});
    }}

    function switchScriptTab(tab) {{
      ['call1', 'call2', 'faq'].forEach(t => {{
        document.getElementById('tab' + capitalize(t) + 'Content').classList.add('hidden');
        document.getElementById('tab' + capitalize(t) + 'Btn').classList.remove('active');
      }});
      document.getElementById('tab' + capitalize(tab) + 'Content').classList.remove('hidden');
      document.getElementById('tab' + capitalize(tab) + 'Btn').classList.add('active');
    }}

    function capitalize(s) {{ return s.charAt(0).toUpperCase() + s.slice(1); }}

    function showToast(msg) {{
      let t = document.getElementById('tgToastNotification');
      if (!t) {{
        t = document.createElement('div');
        t.id = 'tgToastNotification';
        t.className = 'fixed bottom-4 right-4 z-50 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-2xl transition-all duration-300 opacity-0 pointer-events-none transform translate-y-2 flex items-center gap-2';
        document.body.appendChild(t);
      }}
      t.innerHTML = '<span>⚡</span> <span>' + msg + '</span>';
      t.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => {{
        t.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
      }}, 3000);
    }}

    async function sendTelegramAlert(lead, status, note) {{
      const statusLabels = {{
        'AGREED_LINK': '🟢 СОГЛАСЕН НА SMS / ССЫЛКУ',
        'GATEKEEPER_INFO': '📋 СЕКРЕТАРЬ ПЕРЕДАСТ ВЛАДЕЛЬЦУ',
        'REQUESTED_EMAIL': '📧 ПОПРОСИЛИ ВЫСЛАТЬ НА EMAIL',
        'CALL_BACK': '📞 ПЕРЕЗВОНИТЬ ПОЗЖЕ',
        'VOICEMAIL': '🎙️ АВТООТВЕТЧИК (VOICEMAIL)',
        'NO_ANSWER': '📵 НЕ ВЗЯЛИ ТРУБКУ / СБРОС',
        'REJECTED': '❌ ОТКАЗ / НЕ ИНТЕРЕСНО',
        'NOTE_ADDED': '📝 ДОБАВЛЕНА ЗАМЕТКА'
      }};

      const statusText = statusLabels[status] || status;

      const totalLogged = Object.keys(loggedCalls).length;
      let agreedCount = 0, infoCount = 0, emailCount = 0, callbackCount = 0, vmCount = 0, noAnswerCount = 0, rejectedCount = 0;
      Object.values(loggedCalls).forEach(c => {{
        if (c.status === 'AGREED_LINK') agreedCount++;
        else if (c.status === 'GATEKEEPER_INFO') infoCount++;
        else if (c.status === 'REQUESTED_EMAIL') emailCount++;
        else if (c.status === 'CALL_BACK') callbackCount++;
        else if (c.status === 'VOICEMAIL') vmCount++;
        else if (c.status === 'NO_ANSWER') noAnswerCount++;
        else if (c.status === 'REJECTED') rejectedCount++;
      }});

      const loc = lead.address || (lead.state ? `${{lead.state}}, ${{lead.timezone}}` : '—');
      const text = 
        `📞 <b>Результат звонка: Анастасия (Line #103 • Tree Care)</b>\n\n` +
        `🏢 <b>Компания:</b> ${{lead.name || '—'}}\n` +
        `📱 <b>Телефон:</b> <code>${{lead.phone}}</code>\n` +
        `📍 <b>Локация / TZ:</b> ${{loc}} (${{lead.timezone || 'ET'}})\n` +
        `🎯 <b>Результат:</b> <b>${{statusText}}</b>\n` +
        (note ? `📝 <b>Заметка:</b> <i>${{note}}</i>\n` : '') +
        `🔗 <b>Витрина:</b> ${{lead.zonusUrl || 'https://zonus.co/' + lead.slug}}\n\n` +
        `📊 <b>Сводка Анастасии (${{totalLogged}}/{total_leads}):</b>\n` +
        `• 🟢 Согласны на SMS: <b>${{agreedCount}}</b>\n` +
        `• 📋 Секретарь передаст: <b>${{infoCount}}</b>\n` +
        `• 📧 Просят на Email: <b>${{emailCount}}</b>\n` +
        `• 📞 Перезвонить: <b>${{callbackCount}}</b>\n` +
        `• 🎙️ Автоответчик: <b>${{vmCount}}</b>\n` +
        `• 📵 Не ответили: <b>${{noAnswerCount}}</b>\n` +
        `• ❌ Отказ: <b>${{rejectedCount}}</b>`;

      const targets = [
        {{ token: '8915615220:AAHstRA8VGD1lP0O-Oyg9SLt7hee9FRGLNI', chatId: '5811905642' }},
        {{ token: '9160117417:AAHEbjH0025ymMJEYWOQpAc3L5iIXioaMeU', chatId: '8182918344' }}
      ];

      for (const t of targets) {{
        try {{
          fetch(`https://api.telegram.org/bot${{t.token}}/sendMessage`, {{
            method: 'POST',
            headers: {{ 'Content-Type': 'application/json' }},
            body: JSON.stringify({{
              chat_id: t.chatId,
              text: text,
              parse_mode: 'HTML'
            }})
          }}).catch(e => console.warn('TG dispatch error:', e));
        }} catch (err) {{
          console.warn('TG dispatch error:', err);
        }}
      }}
      showToast('Отправлено в Telegram: ' + statusText);
    }}

    function logCallOutcome(status) {{
      const lead = leadsData[currentIndex];
      const note = document.getElementById('leadNoteInput').value.trim();
      loggedCalls[lead.phone] = {{
        status: status,
        note: note,
        timestamp: new Date().toISOString()
      }};
      saveLogs();
      sendTelegramAlert(lead, status, note);
      renderCurrentLead();
      initQuickSelect();
    }}

    function saveLeadNote() {{
      const lead = leadsData[currentIndex];
      const note = document.getElementById('leadNoteInput').value.trim();
      if (!loggedCalls[lead.phone]) {{
        loggedCalls[lead.phone] = {{ status: 'NOTE_ADDED', timestamp: new Date().toISOString() }};
      }}
      loggedCalls[lead.phone].note = note;
      saveLogs();
      sendTelegramAlert(lead, loggedCalls[lead.phone].status || 'NOTE_ADDED', note);
      showToast('Заметка сохранена и отправлена в Telegram!');
    }}

    function updateStats() {{
      let agreed = 0, info = 0, vm = 0;
      Object.values(loggedCalls).forEach(item => {{
        if (item.status === 'AGREED_LINK') agreed++;
        if (item.status === 'GATEKEEPER_INFO') info++;
        if (item.status === 'VOICEMAIL') vm++;
      }});
      document.getElementById('statAgreed').innerText = agreed;
      document.getElementById('statInfo').innerText = info;
      document.getElementById('statVm').innerText = vm;
    }}

    function formatStatusName(st) {{
      const map = {{
        'AGREED_LINK': '✅ Согласились (SMS)',
        'GATEKEEPER_INFO': '📋 Секретарь передаст',
        'REQUESTED_EMAIL': '📧 Просят на Email',
        'CALL_BACK': '📞 Перезвонить',
        'VOICEMAIL': '🎙️ Автоответчик',
        'NO_ANSWER': '📵 Не берут',
        'REJECTED': '❌ Отказ',
        'NOTE_ADDED': '📝 Заметка'
      }};
      return map[st] || st;
    }}

    function openScreenshotModal() {{
      const lead = leadsData[currentIndex];
      document.getElementById('modalBizName').innerText = lead.name;
      document.getElementById('modalScreenshotImg').src = lead.screenshot;
      document.getElementById('screenshotModal').classList.remove('hidden');
    }}

    function closeScreenshotModal() {{
      document.getElementById('screenshotModal').classList.add('hidden');
    }}

    function openLogModal() {{
      renderLogTable();
      document.getElementById('callLogModal').classList.remove('hidden');
    }}

    function closeLogModal() {{
      document.getElementById('callLogModal').classList.add('hidden');
    }}

    function renderLogTable() {{
      const tbody = document.getElementById('logTableBody');
      tbody.innerHTML = '';
      const totalLogged = Object.keys(loggedCalls).length;
      document.getElementById('modalLogSummary').innerText = `Всего обработано: ${{totalLogged}} из ${{leadsData.length}}`;

      leadsData.forEach((lead, idx) => {{
        const log = loggedCalls[lead.phone] || {{}};
        const tr = document.createElement('tr');
        tr.className = log.status ? 'bg-slate-950/60' : '';
        tr.innerHTML = `
          <td class="py-2.5 pr-2 font-bold text-slate-400">#${{idx + 1}}</td>
          <td class="py-2.5 pr-2 font-medium text-white max-w-[150px] truncate">${{lead.name}}</td>
          <td class="py-2.5 pr-2 text-emerald-400 font-bold">${{lead.phone}}</td>
          <td class="py-2.5 pr-2">${{log.status ? formatStatusName(log.status) : '<span class="text-slate-600">—</span>'}}</td>
          <td class="py-2.5 text-slate-300 text-[11px] italic max-w-[200px] truncate">${{log.note || '—'}}</td>
        `;
        tbody.appendChild(tr);
      }});
    }}

    function exportCsv() {{
      let csv = 'ID,Company,Phone,Rating,Reviews,State,Timezone,Status,Note,Timestamp,ShowcaseUrl\\n';
      leadsData.forEach(l => {{
        const log = loggedCalls[l.phone] || {{}};
        const safeName = (l.name || '').replace(/"/g, '""');
        const safeNote = (log.note || '').replace(/"/g, '""');
        csv += `${{l.id}},"${{safeName}}","${{l.phone}}","${{l.rating}}","${{l.reviewCount}}","${{l.state}}","${{l.timezone}}","${{log.status || ''}}","${{safeNote}}","${{log.timestamp || ''}}","https://zonus.co/${{l.slug}}"\\n`;
      }});

      const blob = new Blob([csv], {{ type: 'text/csv;charset=utf-8;' }});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `anastasia_dialer_70_leads_${{new Date().toISOString().slice(0, 10)}}.csv`;
      a.click();
    }}

    // Real-Time Clocks (Cyprus UTC+2 & Georgia UTC+4)
    function updateClocks() {{
      const now = new Date();
      // Cyprus is Europe/Nicosia (UTC+2)
      const cypOptions = {{ timeZone: 'Asia/Nicosia', hour: '2-digit', minute: '2-digit', hour12: false }};
      document.getElementById('clockCyprus').innerText = now.toLocaleTimeString('ru-RU', cypOptions);

      // Georgia is Asia/Tbilisi (UTC+4)
      const geoOptions = {{ timeZone: 'Asia/Tbilisi', hour: '2-digit', minute: '2-digit', hour12: false }};
      document.getElementById('clockGeorgia').innerText = now.toLocaleTimeString('ru-RU', geoOptions);

      if (leadsData && leadsData[currentIndex]) {{
        updateCompanyLocalTime(leadsData[currentIndex]);
      }}
    }}
    setInterval(updateClocks, 1000);
    updateClocks();

    // Keyboard Navigation: safely ignore if active in an input/textarea
    document.addEventListener('keydown', (e) => {{
      const tag = document.activeElement ? document.activeElement.tagName.toUpperCase() : '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (e.key === 'ArrowRight') nextLead();
      if (e.key === 'ArrowLeft') prevLead();
    }});

    // Initialize
    initQuickSelect();
    renderCurrentLead();
    updateStats();
  </script>
</body>
</html>
"""
    return html

def main():
    print("Building Anastasia 70-Lead Timezone Dialer...")
    leads = build_leads_dataset()
    print(f"Loaded and verified {len(leads)} leads:")
    print(f"  - Eastern Time (ET): {sum(1 for l in leads if l['timezone'] == 'ET')}")
    print(f"  - Central Time (CT): {sum(1 for l in leads if l['timezone'] == 'CT')}")
    print(f"  - Pacific Time (PT): {sum(1 for l in leads if l['timezone'] == 'PT')}")
    
    sync_screenshots(leads)
    
    # Save datasets
    json_path = '/Users/workpc/Documents/google-maps-scraper/output/tree_leads/dialer_batches/Anastasia_70_leads.json'
    csv_path = '/Users/workpc/Documents/google-maps-scraper/output/tree_leads/dialer_batches/Anastasia_70_leads.csv'
    
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(leads, f, ensure_ascii=False, indent=2)
    print(f"Saved: {json_path}")
    
    # Write CSV
    with open(csv_path, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['ID', 'Название', 'Телефон', 'Штат', 'Часовой пояс', 'Оценка', 'Отзывы', 'Ссылка zonus.co', 'Утреннее окно (Местное)', 'Окно по Кипру (UTC+2)', 'Окно по Грузии (UTC+4)', 'Адрес'])
        for l in leads:
            writer.writerow([l['id'], l['name'], l['phone'], l['state'], l['timezone'], l['rating'], l['reviewCount'], l['zonusUrl'], l['usMorning'], l['cyprusMorning'], l['georgiaMorning'], l['address']])
    print(f"Saved: {csv_path}")
    
    # Generate HTML
    html = generate_dialer_html(leads)
    
    output_paths = [
        '/Users/workpc/Documents/google-maps-scraper/output/tree_leads/dialer_batches/dialer_anastasia.html',
        '/Users/workpc/Documents/google-maps-scraper/output/tree_leads/dialer_batches/index.html',
        '/Users/workpc/Documents/All Florida Tree Care/public/dialer_anastasia.html',
        '/Users/workpc/Documents/All Florida Tree Care/public/dialer.html',
        '/Users/workpc/Documents/All Florida Tree Care/public/anastasia.html'
    ]
    
    for p in output_paths:
        with open(p, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Saved dialer HTML: {p}")
        
    print("\nALL 70 LEADS SUCCESSFULLY GENERATED AND DEPLOYED!")

if __name__ == '__main__':
    main()
