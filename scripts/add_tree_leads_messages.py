#!/usr/bin/env python3
"""
scripts/add_tree_leads_messages.py

Processes all 268 companies in /Users/workpc/Documents/google-maps-scraper/output/tree_leads/:
1. Resolves accurate US State for each contractor (adding dedicated column 'Штат').
2. Generates authentic personalized outreach messages ending with 'Reply STOP to opt out'.
3. Updates both companies.csv and companies.xlsx with proper styling and encoding.
"""

import os
import re
import csv
import json
import glob
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

LEADS_DIR = '/Users/workpc/Documents/google-maps-scraper/output/tree_leads'
CSV_PATH = os.path.join(LEADS_DIR, 'companies.csv')
XLSX_PATH = os.path.join(LEADS_DIR, 'companies.xlsx')

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

# Explicit overrides for companies with 'Не указан' address or special location
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
    'a force of nature tree service llc': ('North Fort Myers', 'FL'),
    'hernandez lawncare and morellc': ('Fort Myers', 'FL'),
    'paradise look llc': ('Fort Lauderdale', 'FL'),
    'top tier tree specialist': ('High Springs', 'FL'),
    'savannahs landscaping services': ('Savannah', 'GA'),
    'freedom stump grinding': ('Savannah', 'GA'),
    'big tree experts llc': ('Augusta', 'GA'),
    'speer outdoor solutions': ('Augusta', 'GA'),
    'tree brothers tree service': ('Columbus', 'GA'),
    'd&m tree and land services llc': ('Macon', 'GA'),
    'edenfield painting': ('Macon', 'GA'),
    'wills tree service': ('Cumming', 'GA'),
    'ascend tree care llc': ('Athens', 'GA'),
    'smiths grass authority & landscape llc': ('Smiths Station', 'AL'),
    'alamo city tree service & landscaping': ('San Antonio', 'TX'),
    'green valley tree service': ('San Antonio', 'TX'),
    'artistic trees inc': ('San Antonio', 'TX'),
    'carlos tree service': ('Dallas', 'TX'),
    'imbers tree service llc': ('Dallas', 'TX'),
    'living tree services': ('Dallas', 'TX'),
    'longhorn landscape solutions llc': ('Arlington', 'TX'),
    'monster tree service of plano': ('Plano', 'TX'),
    'aperfecttreecom totally trees yard note tree service llc': ('Richardson', 'TX'),
    'recovery tree trimming and landscaping': ('Corpus Christi', 'TX'),
    'green tree jrs palm tree service': ('Corpus Christi', 'TX'),
    'monster tree service of south charlotte': ('Charlotte', 'NC'),
    'monster tree service of raleigh durham': ('Raleigh', 'NC'),
    'raleighwood tree services llc': ('Raleigh', 'NC'),
    'joels tree service': ('Greensboro', 'NC'),
    'green limb tree service': ('Greensboro', 'NC'),
    'dillards tree service': ('Greensboro', 'NC'),
    'dolley tree service': ('Raleigh', 'NC'),
    'pure tree care': ('Durham', 'NC'),
    'explore tree service': ('Durham', 'NC'),
    'puregreen tree service': ('Winston-Salem', 'NC'),
    'high point tree & fence': ('High Point', 'NC'),
    'paramount tree company': ('Fayetteville', 'NC'),
    'grizzlybear arborcare': ('Asheville', 'NC'),
    'unknowncompany': ('Greenville', 'NC'),
    'super affordable tree service': ('Charleston', 'SC'),
    'r&r tree services llc': ('Summerville', 'SC'),
    'rjs tree service llc': ('St. George', 'SC'),
    'mt pleasant tree service': ('Mount Pleasant', 'SC'),
    'stump grinding guys': ('Columbia', 'SC'),
    'tree top flyer climbing services llc': ('Columbia', 'SC'),
    'midlands tree service & property maintenance': ('Columbia', 'SC'),
    'divine tree care': ('Lexington', 'SC'),
    'sage tree specialist': ('Florence', 'SC'),
    'palmetto land services': ('Rock Hill', 'SC'),
    'grand oaks tree service': ('Charleston', 'SC'),
    'extreme tree service': ('Myrtle Beach', 'SC'),
    'german tree service inc': ('Riverside', 'CA'),
    'ramos tree service inc': ('San Diego', 'CA'),
    'greenline tree service': ('Poway', 'CA'),
    'leaf it to us tree service': ('Ramona', 'CA'),
    'monster tree service of west valley': ('San Jose', 'CA'),
    'monster tree service of the coast': ('Half Moon Bay', 'CA'),
    'midvalley tree service': ('Fresno', 'CA'),
    'navarijos tree service': ('Sacramento', 'CA'),
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

def load_leads_data():
    path = '/Users/workpc/Documents/All Florida Tree Care/src/app/(frontend)/tree-leads/leadsData.ts'
    if not os.path.exists(path):
        return {}
    txt = open(path).read()
    m = re.search(r'export const treeLeadsData: TreeLeadItem\[\] = (\[.*?\]);', txt, re.DOTALL)
    if not m:
        return {}
    try:
        items = json.loads(m.group(1))
        return {clean_key(it['name']): it for it in items}
    except Exception as e:
        print("Error parsing leadsData.ts:", e)
        return {}

def load_site_configs():
    configs = glob.glob('/Users/workpc/Documents/All Florida Tree Care/src/siteConfig.*.en.js')
    data = {}
    for c in configs:
        txt = open(c).read()
        m = re.search(r'export const \w+ = (\{.*?\});?\s*$', txt, re.DOTALL)
        if m:
            try:
                d = json.loads(m.group(1))
                bname = d.get('businessName', '')
                if bname:
                    data[clean_key(bname)] = d
                if d.get('slug'):
                    data[d['slug']] = d
            except Exception:
                pass
    return data

def find_folder(raw_name, subdirs):
    norm = re.sub(r'[:|/\\?*\"<>]', ' ', raw_name)
    norm = re.sub(r'\s+', ' ', norm).strip()
    if raw_name in subdirs: return raw_name
    if norm in subdirs: return norm
    for s in subdirs:
        if norm.replace("'", "???") == s or norm.replace("'", "") == s.replace("???", ""):
            return s
        if clean_key(norm) == clean_key(s):
            return s
    return None

def extract_state_and_city(raw_name, addr, lead_item, config_item):
    ck = clean_key(raw_name)
    if ck in MANUAL_LOCATION_OVERRIDES:
        return MANUAL_LOCATION_OVERRIDES[ck][1], MANUAL_LOCATION_OVERRIDES[ck][0]
    
    # 1. From address string
    if addr and addr.strip() != 'Не указан':
        m = re.search(r',\s*([^,]+),\s*([A-Z]{2})\s+(\d{5})', addr)
        if m and m.group(2) in US_STATE_CODES:
            city = m.group(1).strip()
            state = m.group(2).strip()
            return state, city
        
        m_st = re.search(r'\b([A-Z]{2})\b\s+\d{5}', addr)
        if m_st and m_st.group(1) in US_STATE_CODES:
            state = m_st.group(1)
            parts = addr.split(',')
            city = parts[-2].strip() if len(parts) >= 2 else ''
            city = re.sub(r'\b[A-Z]{2}\b|\d{5}.*', '', city).strip()
            return state, city

    # 2. From leadsData if city != 'Local'
    if lead_item:
        st = lead_item.get('state')
        ct = lead_item.get('city')
        if st in US_STATE_CODES and ct and ct != 'Local':
            return st, ct

    # 3. From siteConfig
    if config_item:
        st = config_item.get('state')
        ct = config_item.get('city')
        if st in US_STATE_CODES and ct and ct != 'Local':
            return st, ct

    # Fallback to Florida
    return 'FL', 'Florida'

def get_owner_greeting(raw_name, lead_item, config_item):
    candidate = None
    if config_item and config_item.get('ownerFirstName'):
        candidate = config_item['ownerFirstName'].strip()
    elif lead_item and lead_item.get('ownerEn'):
        candidate = lead_item['ownerEn'].strip()
        
    if candidate:
        cand_lower = candidate.lower()
        if cand_lower not in NON_HUMAN_NAMES and len(candidate) > 1 and not candidate.isdigit():
            return f"Hey {candidate},"
        
    return f"Hey {clean_biz_name(raw_name)} team,"

def analyze_reviews_and_equipment(folder_path, config_item):
    """Extract authentic highlights from reviews and equipment specifications."""
    reviews_text = ""
    reviews_path = os.path.join(folder_path, 'reviews.json') if folder_path else None
    if reviews_path and os.path.exists(reviews_path):
        try:
            revs = json.load(open(reviews_path))
            reviews_text = " ".join([r.get('text', '') for r in revs if isinstance(r, dict)]).lower()
        except:
            pass

    # Detect specific equipment and technical highlights
    has_crane = 'crane' in reviews_text
    has_spider = 'spider' in reviews_text or 'narrow' in reviews_text or 'gate' in reviews_text
    has_stump = 'stump' in reviews_text or 'grind' in reviews_text
    has_clean = any(w in reviews_text for w in ['clean', 'spotless', 'rake', 'debris', 'leaf', 'yard'])
    has_storm = any(w in reviews_text for w in ['storm', 'emergency', 'hurricane', 'fallen', 'urgent'])
    has_tight = any(w in reviews_text for w in ['tight', 'fence', 'roof', 'power', 'close', 'lean', 'hazard'])
    has_palm = 'palm' in reviews_text

    # Craft proof highlight for Paragraph 1
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

    # Signature benefit for Paragraph 2
    if has_clean:
        benefit = "spotless yard cleanups"
    elif has_stump:
        benefit = "subsurface stump milling"
    elif has_storm:
        benefit = "24/7 storm damage dispatch"
    else:
        benefit = "zero-turf-damage lawn protection"

    return proof, fleet, benefit

def build_message(raw_name, rating, city, owner_greeting, proof, fleet, benefit):
    try:
        r_val = float(rating)
        r_str = f"{r_val:.1f}"
    except:
        r_str = "top-rated"
        
    rating_phrase = f"your {r_str} rating" if r_str != "top-rated" else "your stellar reputation"
    location_phrase = f"in {city}" if city and city != "Florida" else "across the area"
    clean_biz = clean_biz_name(raw_name)

    p1 = f"{owner_greeting} saw {rating_phrase} {location_phrase} and how much locals value {proof}."
    p2 = f"Put together a fast mobile site concept for {clean_biz} featuring your {fleet}, {benefit}, and a built-in 10-second price estimator for homeowners (preview attached)."
    p3 = "Zero pressure or cost to take a look. If you'd like to check out the full live demo on your phone, just reply 'yes' and I’ll send over the link! — George"
    p4 = "Reply STOP to opt out"

    return f"{p1}\n\n{p2}\n\n{p3}\n\n{p4}"

def main():
    print(f"Loading data from {CSV_PATH}...")
    with open(CSV_PATH, 'r', encoding='utf-8-sig') as f:
        reader = csv.reader(f)
        header = next(reader)
        # Handle if already has 'Штат' or 'Сообщение для рассылки'
        base_header = header[:9]
        rows = [r[:9] for r in reader]

    print(f"Total rows in CSV: {len(rows)}")

    subdirs = {d for d in os.listdir(LEADS_DIR) if os.path.isdir(os.path.join(LEADS_DIR, d))}
    leads_data = load_leads_data()
    configs_data = load_site_configs()

    updated_rows = []
    new_header = base_header + ['Штат', 'Сообщение для рассылки']

    for i, r in enumerate(rows):
        name = r[0]
        rating = r[2]
        addr = r[8] if len(r) > 8 else ''
        
        ck = clean_key(name)
        lead_item = leads_data.get(ck)
        config_item = configs_data.get(ck)
        
        folder = find_folder(name, subdirs)
        folder_path = os.path.join(LEADS_DIR, folder) if folder else None

        # 1. State & City
        state, city = extract_state_and_city(name, addr, lead_item, config_item)

        # 2. Greeting
        greeting = get_owner_greeting(name, lead_item, config_item)

        # 3. Authentic highlights
        proof, fleet, benefit = analyze_reviews_and_equipment(folder_path, config_item)

        # 4. Message
        msg = build_message(name, rating, city, greeting, proof, fleet, benefit)

        updated_rows.append(r + [state, msg])

    # Save to CSV
    print(f"Writing updated CSV to {CSV_PATH}...")
    with open(CSV_PATH, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(new_header)
        writer.writerows(updated_rows)

    # Save to XLSX
    print(f"Writing updated XLSX to {XLSX_PATH}...")
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Подрядчики"

    header_fill = PatternFill(start_color="1B4332", end_color="1B4332", fill_type="solid")
    header_font = Font(name="Arial", size=11, bold=True, color="FFFFFF")
    cell_font = Font(name="Arial", size=10)
    thin_border = Border(
        left=Side(style='thin', color='DDDDDD'),
        right=Side(style='thin', color='DDDDDD'),
        top=Side(style='thin', color='DDDDDD'),
        bottom=Side(style='thin', color='DDDDDD')
    )

    ws.append(new_header)
    for col_idx in range(1, len(new_header) + 1):
        cell = ws.cell(row=1, column=col_idx)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)

    ws.row_dimensions[1].height = 28

    for row_idx, r in enumerate(updated_rows, start=2):
        ws.append(r)
        ws.row_dimensions[row_idx].height = 110
        for col_idx, val in enumerate(r, start=1):
            cell = ws.cell(row=row_idx, column=col_idx)
            cell.font = cell_font
            cell.border = thin_border
            if col_idx == 10:  # Штат
                cell.alignment = Alignment(horizontal="center", vertical="top")
            elif col_idx == 11:  # Сообщение для рассылки
                cell.alignment = Alignment(horizontal="left", vertical="top", wrap_text=True)
            elif col_idx in [3, 4, 5]:
                cell.alignment = Alignment(horizontal="center", vertical="top")
            else:
                cell.alignment = Alignment(horizontal="left", vertical="top")

    col_widths = {
        1: 32,  # Название
        2: 25,  # Ссылка на Google Maps
        3: 10,  # Оценка
        4: 12,  # Количество отзывов
        5: 12,  # Наличие сайта
        6: 28,  # Ссылка на сайт
        7: 20,  # Проблема с сайтом
        8: 18,  # Контактный номер
        9: 35,  # Адрес
        10: 10, # Штат
        11: 75  # Сообщение для рассылки
    }
    for col_idx, width in col_widths.items():
        ws.column_dimensions[get_column_letter(col_idx)].width = width

    ws.freeze_panes = 'B2'
    wb.save(XLSX_PATH)
    print("Done! Both CSV and XLSX successfully updated.")

if __name__ == '__main__':
    main()
