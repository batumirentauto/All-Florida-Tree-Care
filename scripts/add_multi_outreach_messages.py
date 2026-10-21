#!/usr/bin/env python3
"""
scripts/add_multi_outreach_messages.py

Updates both CSV and XLSX tables in:
  1. /Users/workpc/Documents/google-maps-scraper/output/new_scrape/
  2. /Users/workpc/Documents/google-maps-scraper/output/tree_leads/

Key updates:
  - Adds 'Ссылка на созданную страницу' (URL to our created site for each company).
  - Restores 'Сообщение для рассылки' (the previous original outreach message).
  - Keeps all 4 new adapted options without links/media:
      * 'Сообщение 1 (Готовый сайт)'
      * 'Сообщение 2 (Конверсия и смета)'
      * 'Сообщение 3 (Прямой вопрос)'
      * 'Сообщение 4 (Техника и безопасность)'
"""

import os
import re
import csv
import json
import glob
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

WORKSPACE = "/Users/workpc/Documents/All Florida Tree Care"
NEW_SCRAPE_DIR = "/Users/workpc/Documents/google-maps-scraper/output/new_scrape"
TREE_LEADS_DIR = "/Users/workpc/Documents/google-maps-scraper/output/tree_leads"
BASE_SITE_URL = "https://all-florida-tree-care-production.up.railway.app"

US_STATE_CODES = {
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
}

NON_HUMAN_NAMES = {
    'houston', 'gulf', 'twisted', 'acadia', 'green', 'arbor', 'timberland', 
    'archon', 'treekeeper', 'automated', 'rainbow', 'kats', 'cutchins', 'asay',
    'campos', 'henriquez', 'lefler', 'dallas', 'austin', 'miami', 'tampa',
    'atlanta', 'charlotte', 'seattle', 'orlando', 'lead', 'lead arborist',
    'dispatcher', 'dispatch', 'owner', 'tree', 'n/a', 'unknown', 'none', 'team',
    'service', 'services', 'contractor', 'landscaping', 'lawn', 'outdoor', 'outdoors',
    'care', 'solutions', 'affordable', 'all', 'top', 'pure', 'pro', 'mr', 'dr',
    'champion', 'superior', 'precision', 'premier', 'elite', 'budget', 'local',
    'southern', 'american', 'true', 'ultimate', 'custom', 'classic', 'first',
    'national', 'metro', 'city', 'state', 'county', 'commercial', 'residential'
}

# Explicit mapping for new_scrape (43 companies)
NEW_SCRAPE_SLUG_MAP = {
    'a integrity tree surgeons inc': 'a-integrity',
    'affordable tree and palm tree services': 'affordable',
    'allen\'s tree service': 'allens',
    'allens tree service': 'allens',
    'allwood tree service': 'allwood',
    'always grinding tree & stump removal': 'always-grinding',
    'at ease land & tree services llc': 'at-ease',
    'bartolome\'s tree service': 'bartolome',
    'bartolomes tree service': 'bartolome',
    'best for less tree care': 'best-for-less',
    'bigfoot tree care': 'bigfoot',
    'bramlitt tree service llc': 'bramlitt',
    'broken branch tree removal': 'broken-branch',
    'clean cut tree service': 'clean-cut',
    'columbus georgia tree removal': 'columbus',
    'dane’s tree & excavation service': 'danes',
    'dane\'s tree & excavation service': 'danes',
    'danes tree & excavation service': 'danes',
    'eaton tree removal': 'eaton',
    'family tree service llc': 'family-tree',
    'furstie tree & stump, llc': 'furstie',
    'furstie tree & stump llc': 'furstie',
    'g.r.o.w. outdoor services, inc': 'grow',
    'g.r.o.w. outdoor services inc': 'grow',
    'grow outdoor services inc': 'grow',
    'hawkinberry tree company': 'hawkinberry',
    'holcomb timber & tree services llc': 'holcomb',
    'i noah guy tree & outdoors llc': 'i-noah-guy',
    'jsi tree service llc': 'jsi',
    'l&m tree service': 'lm-tree',
    'limbwalkers tree & crane service': 'limbwalkers',
    'm rosales tree service': 'rosales',
    'maldonado tree service': 'maldonado',
    'morgan\'s tree & stump removal': 'morgans',
    'morgans tree & stump removal': 'morgans',
    'norvell\'s tree & landscape services llc': 'norvells',
    'norvells tree & landscape services llc': 'norvells',
    'panhandle tree pros llc': 'panhandle',
    'patrick myers tree service llc': 'myers',
    'pro beaver tree service': 'pro-beaver',
    's & s tree service': 'ss-tree',
    'ss tree service': 'ss-tree',
    'stone\'s tree service and stump grinding': 'stones',
    'stones tree service and stump grinding': 'stones',
    'superior tree service aka little tree lady': 'superior',
    'sutton\'s tree service inc': 'suttons',
    'suttons tree service inc': 'suttons',
    't & d professional tree removal': 'td-tree',
    'td professional tree removal': 'td-tree',
    'tafoya\'s tree service & stump grinding': 'tafoya',
    'tafoyas tree service & stump grinding': 'tafoya',
    'tally trees': 'tally',
    'tlg tree service llc': 'tlg',
    'tree wisemen upstate': 'tree-wisemen',
    'us tree removal': 'us-tree',
    'wateree tree removalllc': 'wateree',
    'wateree tree removal llc': 'wateree',
    'woodfellas tree service': 'woodfellas'
}

MANUAL_LOCATION_OVERRIDES = {
    'treeco jacksonville fl': ('Jacksonville', 'FL'),
    'alpha tree services': ('Jacksonville', 'FL'),
    'high standards tree care llc': ('Parkland', 'FL'),
    'tampa tree service': ('Tampa', 'FL'),
    'top shelf tree service & landscaping': ('St. Petersburg', 'FL'),
    'jesse scotts': ('Orlando', 'FL'),
    'cheap guy tree and stump removal': ('Orlando', 'FL'),
    'irelands tree service': ('Oviedo', 'FL'),
    'golden landscape and tree care': ('Clearwater', 'FL'),
    'er tree services of pinellas': ('Pinellas County', 'FL'),
    'jimmis tree services': ('Sarasota', 'FL'),
    'asay tree service': ('Bradenton', 'FL'),
    'cut it right tree & land clearing services corp': ('Arcadia', 'FL'),
    'your tree guy': ('Cape Coral', 'FL'),
    'toms tree service': ('Irvine', 'CA'),
    'maple tree service': ('Jurupa Valley', 'CA'),
    'bootstrap lawn care & services': ('Kirkland', 'WA'),
    'northern craft tree solutions': ('Puyallup', 'WA'),
    'pacific nw landscape & tree services': ('Portland', 'OR'),
    'jd tree service': ('Redmond', 'WA'),
    'lane tree doctor': ('Cottage Grove', 'OR'),
}

def clean_key(text):
    return re.sub(r'[^a-zA-Z0-9]', '', (text or '').lower())

def clean_biz_name(name):
    clean = name
    for suff in [' LLC', ' Inc', ' Inc.', ' Corp', ' Corp.', ' L.L.C.', ' & Outdoors', ' & Tree Care']:
        clean = re.sub(re.escape(suff) + r'$', '', clean, flags=re.IGNORECASE)
    clean = re.sub(r'[,.\s]+$', '', clean).strip()
    return clean

def load_site_configs():
    configs = glob.glob(os.path.join(WORKSPACE, 'src/siteConfig.*.en.js'))
    data = {}
    for c in configs:
        try:
            txt = open(c, encoding='utf-8').read()
            bname_m = re.search(r'businessName:\s*[\'\"](.*?)[\'\"]', txt)
            legal_m = re.search(r'legalName:\s*[\'\"](.*?)[\'\"]', txt)
            owner_m = re.search(r'ownerFirstName:\s*[\'\"](.*?)[\'\"]', txt)
            slug_m = re.search(r'slug:\s*[\'\"](.*?)[\'\"]', txt)
            city_m = re.search(r'city:\s*[\'\"](.*?)[\'\"]', txt)

            fn_slug = os.path.basename(c).replace('siteConfig.', '').replace('.en.js', '')
            slug = slug_m.group(1) if slug_m else fn_slug

            entry = {
                'slug': slug,
                'businessName': bname_m.group(1) if bname_m else '',
                'legalName': legal_m.group(1) if legal_m else '',
                'ownerFirstName': owner_m.group(1) if owner_m else '',
                'city': city_m.group(1) if city_m else ''
            }

            if entry['businessName']:
                data[clean_key(entry['businessName'])] = entry
            if entry['legalName']:
                data[clean_key(entry['legalName'])] = entry
            data[clean_key(slug)] = entry
            data[clean_key(fn_slug)] = entry
        except Exception:
            pass
    return data

def load_leads_data():
    path = os.path.join(WORKSPACE, 'src/app/(frontend)/tree-leads/leadsData.ts')
    if not os.path.exists(path):
        return {}
    txt = open(path, encoding='utf-8').read()
    m = re.search(r'export const treeLeadsData: TreeLeadItem\[\] = (\[.*?\]);', txt, re.DOTALL)
    if not m:
        return {}
    try:
        items = json.loads(m.group(1))
        return {clean_key(it['name']): it for it in items}
    except Exception as e:
        print("Error parsing leadsData.ts:", e)
        return {}

def load_new_scrape_original_messages():
    try:
        import sys
        sys.path.append(os.path.join(WORKSPACE, 'scripts'))
        import add_outreach_messages
        res = {}
        for cname, msg in add_outreach_messages.MESSAGES.items():
            clean_m = msg.replace('\n\nReply STOP to opt out', '').replace('Reply STOP to opt out', '').strip()
            clean_m = clean_m.replace('mobile site concept', 'mobile showcase concept').replace('site concept', 'showcase concept').replace('mobile site', 'showcase')
            res[clean_key(cname)] = clean_m
            res[cname.strip()] = clean_m
        return res
    except Exception as e:
        print("Error loading original messages from add_outreach_messages.py:", e)
        return {}

def find_company_folder(base_dir, raw_name):
    norm = re.sub(r'[:|/\\?*\"<>]', ' ', raw_name)
    norm = re.sub(r'\s+', ' ', norm).strip()
    subdirs = os.listdir(base_dir) if os.path.exists(base_dir) else []
    if raw_name in subdirs: return os.path.join(base_dir, raw_name)
    if norm in subdirs: return os.path.join(base_dir, norm)
    ck = clean_key(raw_name)
    for s in subdirs:
        if clean_key(s) == ck:
            return os.path.join(base_dir, s)
        if norm.replace("'", "’") == s or norm.replace("’", "'") == s:
            return os.path.join(base_dir, s)
    return None

def analyze_reviews_and_equipment(folder_path, config_item):
    reviews_text = ""
    reviews_path = os.path.join(folder_path, 'reviews.json') if folder_path else None
    if reviews_path and os.path.exists(reviews_path):
        try:
            revs = json.load(open(reviews_path, encoding='utf-8'))
            reviews_text = " ".join([r.get('text', '') for r in revs if isinstance(r, dict)]).lower()
        except:
            pass

    has_crane = 'crane' in reviews_text
    has_spider = 'spider' in reviews_text or 'narrow' in reviews_text or 'gate' in reviews_text
    has_stump = 'stump' in reviews_text or 'grind' in reviews_text
    has_clean = any(w in reviews_text for w in ['clean', 'spotless', 'rake', 'debris', 'leaf', 'yard'])
    has_storm = any(w in reviews_text for w in ['storm', 'emergency', 'hurricane', 'fallen', 'urgent'])
    has_tight = any(w in reviews_text for w in ['tight', 'fence', 'roof', 'power', 'close', 'lean', 'hazard'])
    has_palm = 'palm' in reviews_text

    # Proof
    if has_crane:
        proof = "how safely your crew coordinates hydraulic crane picks to hoist massive canopy branches right over tight rooflines"
        fleet = "heavy crane rigging capabilities"
    elif has_spider:
        proof = "that your compact aerial lift maneuvers through tight residential gates without disturbing lawn turf"
        fleet = "compact spider lift access"
    elif has_storm:
        proof = "how rapidly your emergency crew mobilizes to clear storm hazards and hung-up limbs safely"
        fleet = "24/7 emergency dispatch and heavy timber rigging"
    elif has_tight and has_clean:
        proof = "how smoothly your crew executes precision takedowns in tight backyard spaces and leaves properties spotless"
        fleet = "controlled sectional lowering gear"
    elif has_stump:
        proof = "that your commercial stump milling grinds deep root balls below grade with total clean backfilling"
        fleet = "high-horsepower stump grinder and chipping fleet"
    elif has_palm:
        proof = "your crew's precision palm trimming and hazardous frond clearing with zero damage to underlying landscape"
        fleet = "specialized palm and aerial bucket fleet"
    else:
        proof = "how smoothly your team handles hazardous tree removals and leaves residential yards immaculately cleaned"
        fleet = "commercial rigging equipment and chipping fleet"

    # Benefit
    if has_clean:
        benefit = "spotless yard cleanups"
    elif has_stump:
        benefit = "subsurface stump milling"
    elif has_storm:
        benefit = "24/7 storm damage dispatch"
    else:
        benefit = "zero-turf-damage lawn protection"

    return proof, fleet, benefit

def extract_city(raw_name, addr, lead_item, config_item):
    ck = clean_key(raw_name)
    if ck in MANUAL_LOCATION_OVERRIDES:
        return MANUAL_LOCATION_OVERRIDES[ck][0]
    
    if addr and addr.strip() != 'Не указан':
        m = re.search(r',\s*([^,]+),\s*([A-Z]{2})\s+(\d{5})', addr)
        if m and m.group(2) in US_STATE_CODES:
            return m.group(1).strip()
        m_st = re.search(r'\b([A-Z]{2})\b\s+\d{5}', addr)
        if m_st and m_st.group(1) in US_STATE_CODES:
            parts = addr.split(',')
            city = parts[-2].strip() if len(parts) >= 2 else ''
            city = re.sub(r'\b[A-Z]{2}\b|\d{5}.*', '', city).strip()
            if city: return city

    if lead_item and lead_item.get('city') and lead_item['city'] != 'Local':
        return lead_item['city']
    if config_item and config_item.get('city') and config_item['city'] != 'Local':
        return config_item['city']

    return 'Florida'

def extract_owner(raw_name, lead_item, config_item):
    cand = None
    if config_item and config_item.get('ownerFirstName'):
        cand = config_item['ownerFirstName'].strip()
    elif lead_item and lead_item.get('ownerEn'):
        cand = lead_item['ownerEn'].strip()

    if cand:
        cand_lower = cand.lower()
        if cand_lower not in NON_HUMAN_NAMES and len(cand) > 1 and not cand.isdigit():
            return cand
    return None

def build_original_message(raw_name, rating, city, owner_name, proof, fleet, benefit):
    """Build the original message format (with preview attached) using showcase terminology without STOP opt-out."""
    clean_biz = clean_biz_name(raw_name)
    try:
        r_val = float(rating)
        r_str = f"{r_val:.1f}"
    except:
        r_str = "top-rated"
        
    rating_phrase = f"your {r_str} rating" if r_str != "top-rated" else "your stellar reputation"
    location_phrase = f"in {city}" if city and city != "Florida" else "across the area"
    
    greeting = f"Hey {owner_name}," if owner_name else f"Hey {clean_biz} team,"

    p1 = f"{greeting} saw {rating_phrase} {location_phrase} and how much locals value {proof}."
    p2 = f"Put together a fast mobile showcase concept for {clean_biz} featuring your {fleet}, {benefit}, and a built-in 10-second price estimator for homeowners (preview attached)."
    p3 = "Zero pressure or cost to take a look. If you'd like to check out the full live demo on your phone, just reply 'yes' and I’ll send over the link! — George"

    return f"{p1}\n\n{p2}\n\n{p3}"

def build_4_messages(raw_name, rating, city, owner_name, fleet):
    """Build the 4 new adapted options using showcase terminology without links or STOP opt-outs."""
    clean_biz = clean_biz_name(raw_name)
    try:
        r_val = float(rating)
        r_str = f"{r_val:.1f}"
    except:
        r_str = "top-rated"

    rating_phrase = f"your {r_str}-star Google reviews" if r_str != "top-rated" else "your top-rated Google reviews"
    loc_phrase = f"in {city}" if city and city != "Florida" else "across the area"
    loc_city = city if city and city != "Florida" else "your local area"

    if owner_name:
        g1 = f"Hey {owner_name},"
        g2 = f"Hi {owner_name},"
        g3 = f"Good day {owner_name},"
        g4 = f"Hello {owner_name},"
    else:
        g1 = f"Hey {clean_biz} team,"
        g2 = f"Hi {clean_biz} crew,"
        g3 = f"Hello {clean_biz},"
        g4 = f"Greetings {clean_biz} team,"

    # OPTION 1: Complete Custom Showcase (Готовая витрина)
    msg1 = (
        f"{g1}\n\n"
        f"Put together a complete, custom showcase for {clean_biz}. I pulled in your real equipment photos, "
        f"verified service areas {loc_phrase}, and {rating_phrase}. "
        f"The showcase is fully responsive — loads blazing fast and looks sharp whether homeowners visit on a smartphone or a desktop computer.\n\n"
        f"Want me to send over the link to check it out? — George"
    )

    # OPTION 2: Conversion & Instant Estimator (Конверсия и смета)
    msg2 = (
        f"{g2}\n\n"
        f"Saw your tree service profile {loc_phrase} — you have a stellar reputation, but high-ticket commercial and residential jobs "
        f"need a modern showcase to close fast. Built a full interactive showcase for {clean_biz} featuring a 10-second price estimator, "
        f"your heavy equipment specs, and instant quote booking on any device.\n\n"
        f"Can I send the link over to take a quick look? Zero cost or obligation. — George"
    )

    # OPTION 3: Direct Quick Question (Проектная витрина)
    msg3 = (
        f"{g3}\n\n"
        f"Do you have a quick minute? My team and I built a brand-new project showcase for {clean_biz} — complete with spam-protected "
        f"quote requests, live project highlights, and seamless layout on both mobile phones and desktop PCs. "
        f"No sales pitch or strings attached, just wanted to share what we built for you.\n\n"
        f"Where is best to send the link — right here or by email? — George"
    )

    # OPTION 4: Equipment & Property Protection (Витрина техники и безопасности)
    msg4 = (
        f"{g4}\n\n"
        f"Built a dedicated, high-performance showcase specifically for {clean_biz} serving {loc_city}. "
        f"We focused heavily on eliminating homeowner fears: showcasing your {fleet}, controlled rigging over rooflines, "
        f"and guaranteed spotless turf cleanups. The showcase runs lightning-fast across all phones, tablets, and desktop monitors.\n\n"
        f"Would you be open to taking a quick look? — George"
    )

    return msg1, msg2, msg3, msg4

def resolve_page_url(is_new_scrape, cname, lead_item, config_item):
    slug = None
    ck = clean_key(cname)
    norm_cname = cname.lower().strip()

    if is_new_scrape:
        if norm_cname in NEW_SCRAPE_SLUG_MAP:
            slug = NEW_SCRAPE_SLUG_MAP[norm_cname]
        elif ck in NEW_SCRAPE_SLUG_MAP:
            slug = NEW_SCRAPE_SLUG_MAP[ck]

    if not slug and lead_item and lead_item.get('slug'):
        slug = lead_item['slug']

    if not slug and config_item and config_item.get('slug'):
        slug = config_item['slug']

    if slug:
        return f"{BASE_SITE_URL}/{slug}"
    return "—"

def process_table(is_new_scrape, base_dir, site_configs, leads_data, original_ns_msgs):
    csv_path = os.path.join(base_dir, 'companies.csv')
    xlsx_path = os.path.join(base_dir, 'companies.xlsx')

    if not os.path.exists(csv_path) or not os.path.exists(xlsx_path):
        print(f"Skipping {base_dir} (files not found)")
        return

    print(f"\nProcessing {base_dir} (is_new_scrape={is_new_scrape})...")

    with open(csv_path, mode='r', encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        header = next(reader)
        rows = list(reader)

    if header and header[0].startswith('\ufeff'):
        header[0] = header[0].replace('\ufeff', '')

    # Standard base columns definition
    if is_new_scrape:
        base_columns = [
            'Название', 'Ссылка на Google Maps', 'Оценка', 'Количество отзывов',
            'Наличие сайта', 'Ссылка на сайт', 'Ссылка на созданную страницу',
            'Контактный номер', 'Оператор связи', 'MMS Gateway'
        ]
    else:
        base_columns = [
            'Название', 'Ссылка на Google Maps', 'Оценка', 'Количество отзывов',
            'Наличие сайта', 'Ссылка на сайт', 'Ссылка на созданную страницу',
            'Проблема с сайтом', 'Контактный номер', 'Наличие iMessage',
            'Оператор связи', 'MMS Gateway', 'Адрес', 'Штат'
        ]

    message_columns = [
        'Сообщение для рассылки',
        'Сообщение 1 (Готовая витрина)',
        'Сообщение 2 (Конверсия и смета)',
        'Сообщение 3 (Прямой вопрос)',
        'Сообщение 4 (Техника и безопасность)'
    ]

    final_header = base_columns + message_columns

    col_map = {col_name: idx for idx, col_name in enumerate(header)}

    processed_rows = []
    for r in rows:
        cname = r[col_map['Название']].strip() if 'Название' in col_map and col_map['Название'] < len(r) else ''
        rating = r[col_map['Оценка']].strip() if 'Оценка' in col_map and col_map['Оценка'] < len(r) else ''
        addr = r[col_map['Адрес']].strip() if 'Адрес' in col_map and col_map['Адрес'] < len(r) else ''

        ck = clean_key(cname)
        cfg = site_configs.get(ck)
        lead = leads_data.get(ck)
        folder = find_company_folder(base_dir, cname)

        owner = extract_owner(cname, lead, cfg)
        city = extract_city(cname, addr, lead, cfg)
        proof, fleet, benefit = analyze_reviews_and_equipment(folder, cfg)

        # 1. URL to our created page
        page_url = resolve_page_url(is_new_scrape, cname, lead, cfg)

        # 2. Original message (restored)
        if is_new_scrape and (cname in original_ns_msgs or ck in original_ns_msgs):
            orig_msg = original_ns_msgs.get(cname, original_ns_msgs.get(ck))
        else:
            orig_msg = build_original_message(cname, rating, city, owner, proof, fleet, benefit)

        # Enhance owner and city from original message if not present
        if not owner and orig_msg:
            m_own = re.match(r'^Hey\s+([A-Za-z]+),', orig_msg)
            if m_own and m_own.group(1).lower() not in ['team', 'there', 'all']:
                owner = m_own.group(1)

        if (not city or city == 'Florida') and orig_msg:
            m_ct = re.search(r'(?:in|across)\s+([A-Za-z\s]+?)(?:\s+and\b|,)', orig_msg)
            if m_ct:
                city = m_ct.group(1).strip()

        # 3. 4 new message options
        m1, m2, m3, m4 = build_4_messages(cname, rating, city, owner, fleet)

        # Build row
        row_dict = {}
        for col in header:
            if col in col_map and col_map[col] < len(r):
                row_dict[col] = r[col_map[col]]

        # Override/Set created page url
        row_dict['Ссылка на созданную страницу'] = page_url
        row_dict['Сообщение для рассылки'] = orig_msg
        row_dict['Сообщение 1 (Готовая витрина)'] = m1
        row_dict['Сообщение 2 (Конверсия и смета)'] = m2
        row_dict['Сообщение 3 (Прямой вопрос)'] = m3
        row_dict['Сообщение 4 (Техника и безопасность)'] = m4

        final_row = [row_dict.get(col, '') for col in final_header]
        processed_rows.append(final_row)

    # Save CSV
    with open(csv_path, mode='w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(final_header)
        writer.writerows(processed_rows)
    print(f"  [OK] Saved CSV: {csv_path} ({len(processed_rows)} rows, {len(final_header)} columns)")

    # Save XLSX
    wb = openpyxl.load_workbook(xlsx_path)
    sheet = wb.active
    wb.remove(sheet)
    new_sheet = wb.create_sheet(title="Companies")

    header_font = Font(name="Calibri", size=11, bold=True, color="000000")
    header_fill = PatternFill(start_color="EAEAEA", end_color="EAEAEA", fill_type="solid")
    header_align = Alignment(horizontal="center", vertical="center", wrap_text=True)
    thin_border = Border(
        left=Side(style='thin', color='D9D9D9'),
        right=Side(style='thin', color='D9D9D9'),
        top=Side(style='thin', color='D9D9D9'),
        bottom=Side(style='thin', color='D9D9D9')
    )

    for col_idx, h_text in enumerate(final_header, 1):
        cell = new_sheet.cell(row=1, column=col_idx, value=h_text)
        cell.font = header_font
        cell.fill = header_fill
        cell.alignment = header_align
        cell.border = thin_border

    data_font = Font(name="Calibri", size=10)
    link_font = Font(name="Calibri", size=10, color="0563C1", underline="single")
    msg_align = Alignment(vertical="top", wrap_text=True)
    center_align = Alignment(horizontal="center", vertical="center")
    default_align = Alignment(vertical="center")

    for r_idx, row_data in enumerate(processed_rows, 2):
        for c_idx, val in enumerate(row_data, 1):
            cell = new_sheet.cell(row=r_idx, column=c_idx, value=val)
            cell.font = data_font
            cell.border = thin_border
            h_name = final_header[c_idx - 1]

            if h_name in message_columns:
                cell.alignment = msg_align
            elif h_name in ['Оценка', 'Количество отзывов', 'Наличие сайта', 'Наличие iMessage', 'Штат', 'Проблема с сайтом']:
                cell.alignment = center_align
            elif h_name == 'Ссылка на созданную страницу':
                cell.alignment = default_align
                if val.startswith('http'):
                    cell.font = link_font
                    cell.hyperlink = val
            elif h_name in ['Ссылка на Google Maps', 'Ссылка на сайт']:
                cell.alignment = default_align
                if str(val).startswith('http'):
                    cell.font = link_font
                    cell.hyperlink = val
            else:
                cell.alignment = default_align

    # Column Widths
    for c_idx, h_text in enumerate(final_header, 1):
        col_letter = get_column_letter(c_idx)
        if h_text in message_columns:
            new_sheet.column_dimensions[col_letter].width = 58
        elif h_text in ['Название', 'Адрес']:
            new_sheet.column_dimensions[col_letter].width = 30
        elif h_text == 'Ссылка на созданную страницу':
            new_sheet.column_dimensions[col_letter].width = 45
        elif h_text in ['Ссылка на Google Maps', 'Ссылка на сайт']:
            new_sheet.column_dimensions[col_letter].width = 25
        elif h_text in ['MMS Gateway']:
            new_sheet.column_dimensions[col_letter].width = 26
        elif h_text in ['Оператор связи', 'Контактный номер']:
            new_sheet.column_dimensions[col_letter].width = 18
        else:
            new_sheet.column_dimensions[col_letter].width = 14

    new_sheet.row_dimensions[1].height = 28
    wb.save(xlsx_path)
    print(f"  [OK] Saved XLSX: {xlsx_path} with styling and hyperlinked URLs")

def main():
    print("Loading databases, siteConfigs and original messages...")
    site_configs = load_site_configs()
    leads_data = load_leads_data()
    original_ns_msgs = load_new_scrape_original_messages()

    print(f"Loaded {len(site_configs)} siteConfigs, {len(leads_data)} treeLeads, {len(original_ns_msgs)} new_scrape messages.")

    process_table(True, NEW_SCRAPE_DIR, site_configs, leads_data, original_ns_msgs)
    process_table(False, TREE_LEADS_DIR, site_configs, leads_data, original_ns_msgs)

    print("\nTables successfully updated with restored previous messages and created page URLs!")

if __name__ == '__main__':
    main()
