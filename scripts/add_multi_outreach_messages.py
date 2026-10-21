#!/usr/bin/env python3
"""
scripts/add_multi_outreach_messages.py

Generates 4 personalized English outreach messages (Option 1, 2, 3, 4) for every company
in both:
  1. /Users/workpc/Documents/google-maps-scraper/output/new_scrape/
  2. /Users/workpc/Documents/google-maps-scraper/output/tree_leads/

Messages contain:
  - NO links
  - NO attachments / media mentions
  - Full desktop & mobile responsiveness emphasis
  - Authentic owner names or dynamic company greetings
  - City / Area, rating, and verified equipment
  - Low-friction conversational CTAs
  - Compliant 'Reply STOP to opt out' footer

Updates both companies.csv and companies.xlsx in both folders with 4 dedicated columns:
  - 'Сообщение 1 (Готовый сайт)'
  - 'Сообщение 2 (Конверсия и смета)'
  - 'Сообщение 3 (Прямой вопрос)'
  - 'Сообщение 4 (Техника и безопасность)'
"""

import os
import re
import csv
import json
import glob
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

# Paths
WORKSPACE = "/Users/workpc/Documents/All Florida Tree Care"
NEW_SCRAPE_DIR = "/Users/workpc/Documents/google-maps-scraper/output/new_scrape"
TREE_LEADS_DIR = "/Users/workpc/Documents/google-maps-scraper/output/tree_leads"

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
            m = re.search(r'export const \w+ = (\{.*?\});?\s*$', txt, re.DOTALL)
            if m:
                d = json.loads(m.group(1))
                bname = d.get('businessName', '')
                if bname:
                    data[clean_key(bname)] = d
                if d.get('slug'):
                    data[d['slug']] = d
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

def load_new_scrape_overrides():
    """Load hand-curated data from add_outreach_messages.py for new_scrape."""
    try:
        import sys
        sys.path.append(os.path.join(WORKSPACE, 'scripts'))
        import add_outreach_messages
        owners = {}
        cities = {}
        fleets = {}
        for cname, msg in add_outreach_messages.MESSAGES.items():
            ck = clean_key(cname)
            # owner
            m_own = re.match(r'^Hey\s+([A-Za-z]+),', msg)
            if m_own and m_own.group(1).lower() not in ['team', 'there', 'all']:
                owners[ck] = m_own.group(1)
            # city
            m_ct = re.search(r'(?:in|across)\s+([A-Za-z\s]+?)(?:\s+and\b|,)', msg)
            if m_ct:
                cities[ck] = m_ct.group(1).strip()
            # fleet
            m_fl = re.search(r'featuring your\s+([^,]+(?:,[^,]+)?),\s*(?:and\s+)?spotless', msg)
            if not m_fl:
                m_fl = re.search(r'featuring your\s+(.+?),\s*and a built-in', msg)
            if m_fl:
                fleets[ck] = m_fl.group(1).strip()
        return owners, cities, fleets
    except Exception as e:
        print("Notice: could not load new_scrape overrides:", e)
        return {}, {}, {}

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

    if has_crane:
        fleet = "heavy crane rigging capabilities"
    elif has_spider:
        fleet = "compact spider lift access"
    elif has_storm:
        fleet = "24/7 emergency dispatch and heavy timber rigging"
    elif has_tight and has_clean:
        fleet = "controlled sectional lowering gear"
    elif has_stump:
        fleet = "high-horsepower stump grinder and chipping fleet"
    elif has_palm:
        fleet = "specialized palm and aerial bucket fleet"
    else:
        fleet = "commercial rigging equipment and chipping fleet"

    return fleet

def extract_city(raw_name, addr, lead_item, config_item, ns_cities):
    ck = clean_key(raw_name)
    if ck in ns_cities and ns_cities[ck]:
        return ns_cities[ck]
    if ck in MANUAL_LOCATION_OVERRIDES:
        return MANUAL_LOCATION_OVERRIDES[ck][0]
    
    # From address string
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

def extract_owner(raw_name, lead_item, config_item, ns_owners):
    ck = clean_key(raw_name)
    if ck in ns_owners and ns_owners[ck]:
        return ns_owners[ck]

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

def build_4_messages(raw_name, rating, city, owner_name, fleet):
    clean_biz = clean_biz_name(raw_name)
    try:
        r_val = float(rating)
        r_str = f"{r_val:.1f}"
    except:
        r_str = "top-rated"

    rating_phrase = f"your {r_str}-star Google reviews" if r_str != "top-rated" else "your top-rated Google reviews"
    loc_phrase = f"in {city}" if city and city != "Florida" else "across the area"
    loc_city = city if city and city != "Florida" else "your local area"

    # Diverse Greetings
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

    # OPTION 1: Complete Turnkey Website (Сценарий 1)
    msg1 = (
        f"{g1}\n\n"
        f"Put together a complete, turnkey website for {clean_biz}. I pulled in your real equipment photos, "
        f"verified service areas {loc_phrase}, and {rating_phrase}. "
        f"The site is fully responsive — loads blazing fast and looks sharp whether homeowners visit on a smartphone or a desktop computer.\n\n"
        f"Want me to send over the link to check it out? — George\n\n"
        f"Reply STOP to opt out"
    )

    # OPTION 2: Conversion & Instant Estimator (Сценарий 2)
    msg2 = (
        f"{g2}\n\n"
        f"Saw your tree service profile {loc_phrase} — you have a stellar reputation, but high-ticket commercial and residential jobs "
        f"need a modern web presence to close fast. Built a full interactive website for {clean_biz} featuring a 10-second price estimator, "
        f"your heavy equipment specs, and instant quote booking on any device.\n\n"
        f"Can I send the link over to take a quick look? Zero cost or obligation. — George\n\n"
        f"Reply STOP to opt out"
    )

    # OPTION 3: Direct Quick Question (Сценарий 4)
    msg3 = (
        f"{g3}\n\n"
        f"Do you have a quick minute? My team and I built a brand-new, full-scale website for {clean_biz} — complete with spam-protected "
        f"quote requests, live project highlights, and seamless layout on both mobile phones and desktop PCs. "
        f"No sales pitch or strings attached, just wanted to share what we built for you.\n\n"
        f"Where is best to send the link — right here or by email? — George\n\n"
        f"Reply STOP to opt out"
    )

    # OPTION 4: Equipment & Property Protection (Сценарий 5)
    msg4 = (
        f"{g4}\n\n"
        f"Built a dedicated, high-performance website specifically for {clean_biz} serving {loc_city}. "
        f"We focused heavily on eliminating homeowner fears: showcasing your {fleet}, controlled rigging over rooflines, "
        f"and guaranteed spotless turf cleanups. The page runs lightning-fast across all phones, tablets, and desktop monitors.\n\n"
        f"Would you be open to taking a quick look? — George\n\n"
        f"Reply STOP to opt out"
    )

    return msg1, msg2, msg3, msg4

NEW_MESSAGE_COLUMNS = [
    'Сообщение 1 (Готовый сайт)',
    'Сообщение 2 (Конверсия и смета)',
    'Сообщение 3 (Прямой вопрос)',
    'Сообщение 4 (Техника и безопасность)'
]

def process_dataset(base_dir, site_configs, leads_data, ns_owners, ns_cities, ns_fleets):
    csv_path = os.path.join(base_dir, 'companies.csv')
    xlsx_path = os.path.join(base_dir, 'companies.xlsx')

    if not os.path.exists(csv_path) or not os.path.exists(xlsx_path):
        print(f"Skipping {base_dir} (files not found)")
        return

    print(f"\nProcessing {base_dir}...")

    # 1. Read existing CSV
    with open(csv_path, mode='r', encoding='utf-8') as f:
        reader = csv.reader(f)
        header = next(reader)
        rows = list(reader)

    # Remove BOM from first column header if present
    if header and header[0].startswith('\ufeff'):
        header[0] = header[0].replace('\ufeff', '')

    # Identify indices
    col_name_idx = 0
    col_rating_idx = header.index('Оценка') if 'Оценка' in header else 2
    col_addr_idx = header.index('Адрес') if 'Адрес' in header else -1

    # Remove existing 'Сообщение для рассылки' or old message columns if present
    cols_to_remove = ['Сообщение для рассылки'] + NEW_MESSAGE_COLUMNS
    kept_indices = [i for i, h in enumerate(header) if h not in cols_to_remove]
    clean_header = [header[i] for i in kept_indices]

    # Generate 4 messages for each row
    generated_rows = []
    messages_by_cname = {}

    for row in rows:
        cleaned_row = [row[i] if i < len(row) else '' for i in kept_indices]
        cname = row[col_name_idx].strip()
        rating = row[col_rating_idx].strip() if col_rating_idx < len(row) else ''
        addr = row[col_addr_idx].strip() if col_addr_idx >= 0 and col_addr_idx < len(row) else ''

        ck = clean_key(cname)
        cfg = site_configs.get(ck)
        lead = leads_data.get(ck)
        folder = find_company_folder(base_dir, cname)

        owner = extract_owner(cname, lead, cfg, ns_owners)
        city = extract_city(cname, addr, lead, cfg, ns_cities)
        
        # fleet
        if ck in ns_fleets and ns_fleets[ck]:
            fleet = ns_fleets[ck]
        else:
            fleet = analyze_reviews_and_equipment(folder, cfg)

        m1, m2, m3, m4 = build_4_messages(cname, rating, city, owner, fleet)
        cleaned_row.extend([m1, m2, m3, m4])
        generated_rows.append(cleaned_row)
        messages_by_cname[cname] = (m1, m2, m3, m4)

    final_header = clean_header + NEW_MESSAGE_COLUMNS

    # Save CSV (UTF-8 with BOM for Excel compatibility)
    with open(csv_path, mode='w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(final_header)
        writer.writerows(generated_rows)
    print(f"  [OK] Updated CSV: {csv_path} ({len(generated_rows)} rows, {len(final_header)} columns)")

    # 2. Update XLSX
    wb = openpyxl.load_workbook(xlsx_path)
    sheet = wb.active

    # Read original sheet headers
    orig_xlsx_headers = [cell.value for cell in sheet[1]]

    # Rebuild sheet cleanly
    wb.remove(sheet)
    new_sheet = wb.create_sheet(title="Companies")

    # Header styling
    header_font = Font(name="Calibri", size=11, bold=True, color="000000")
    header_fill = PatternFill(start_color="EAEAEA", end_color="EAEAEA", fill_type="solid")
    header_align = Alignment(horizontal="center", vertical="center", wrap_text=True)
    thin_border = Border(
        left=Side(style='thin', color='D9D9D9'),
        right=Side(style='thin', color='D9D9D9'),
        top=Side(style='thin', color='D9D9D9'),
        bottom=Side(style='thin', color='D9D9D9')
    )

    # Write Header
    for col_idx, h_text in enumerate(final_header, 1):
        cell = new_sheet.cell(row=1, column=col_idx, value=h_text)
        cell.font = header_font
        cell.fill = header_fill
        cell.alignment = header_align
        cell.border = thin_border

    # Write Data
    data_font = Font(name="Calibri", size=10)
    msg_align = Alignment(vertical="top", wrap_text=True)
    center_align = Alignment(horizontal="center", vertical="center")
    default_align = Alignment(vertical="center")

    for r_idx, row_data in enumerate(generated_rows, 2):
        for c_idx, val in enumerate(row_data, 1):
            cell = new_sheet.cell(row=r_idx, column=c_idx, value=val)
            cell.font = data_font
            cell.border = thin_border
            
            # Message columns alignment
            if c_idx > len(clean_header):
                cell.alignment = msg_align
            elif final_header[c_idx - 1] in ['Оценка', 'Количество отзывов', 'Наличие сайта', 'Наличие iMessage', 'Штат', 'Проблема с сайтом']:
                cell.alignment = center_align
            else:
                cell.alignment = default_align

    # Column Widths
    for c_idx, h_text in enumerate(final_header, 1):
        col_letter = get_column_letter(c_idx)
        if h_text in NEW_MESSAGE_COLUMNS:
            new_sheet.column_dimensions[col_letter].width = 58
        elif h_text in ['Название', 'Адрес']:
            new_sheet.column_dimensions[col_letter].width = 30
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
    print(f"  [OK] Updated XLSX: {xlsx_path} with 4 message columns and styling")

def main():
    print("Loading database, siteConfigs and overrides...")
    site_configs = load_site_configs()
    leads_data = load_leads_data()
    ns_owners, ns_cities, ns_fleets = load_new_scrape_overrides()

    print(f"Loaded {len(site_configs)} siteConfigs, {len(leads_data)} treeLeads, {len(ns_owners)} new_scrape owners.")

    process_dataset(NEW_SCRAPE_DIR, site_configs, leads_data, ns_owners, ns_cities, ns_fleets)
    process_dataset(TREE_LEADS_DIR, site_configs, leads_data, ns_owners, ns_cities, ns_fleets)

    print("\nAll datasets successfully updated with 4 adapted outreach options!")

if __name__ == '__main__':
    main()
