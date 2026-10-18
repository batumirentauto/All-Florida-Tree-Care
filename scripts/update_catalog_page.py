import os
import json
import re
from curated_metadata import COMPANY_META

SCRAPE_DIR = '/Users/workpc/Documents/google-maps-scraper/output/new_scrape'
SLUG_TO_FOLDER = {
  'a-integrity': 'A Integrity Tree Surgeons Inc',
  'affordable': 'Affordable Tree and Palm Tree Services',
  'allens': 'Allen\'s Tree Service',
  'always-grinding': 'Always Grinding Tree & Stump Removal',
  'at-ease': 'At Ease Land & Tree Services LLC',
  'bartolome': 'Bartolome\'s Tree service',
  'best-for-less': 'Best For Less Tree Care',
  'bigfoot': 'Bigfoot tree care',
  'broken-branch': 'Broken Branch Tree Removal',
  'clean-cut': 'Clean Cut Tree Service',
  'columbus': 'Columbus Georgia Tree Removal',
  'eaton': 'Eaton Tree Removal',
  'family-tree': 'Family Tree Service LLC',
  'furstie': 'Furstie Tree & Stump, LLC',
  'grow': 'G.R.O.W. Outdoor Services, Inc',
  'i-noah-guy': 'I NOAH GUY TREE & OUTDOORS LLC',
  'jsi': 'JSI Tree Service LLC',
  'lm-tree': 'L&M Tree Service',
  'limbwalkers': 'Limbwalkers Tree & Crane Service',
  'rosales': 'M Rosales Tree Service',
  'maldonado': 'Maldonado Tree Service',
  'morgans': 'Morgan\'s Tree & Stump Removal',
  'norvells': 'Norvell\'s Tree & Landscape Services LLC',
  'panhandle': 'Panhandle Tree Pros LLC',
  'pro-beaver': 'Pro Beaver Tree Service',
  'ss-tree': 'S & S Tree Service',
  'stones': 'Stone\'s Tree Service and Stump Grinding',
  'superior': 'Superior Tree Service aka little tree lady',
  'suttons': 'Sutton\'s Tree Service Inc',
  'td-tree': 'T & D Professional Tree Removal',
  'tlg': 'TLG Tree Service LLC',
  'tafoya': 'Tafoya\'s Tree Service & Stump Grinding',
  'tree-wisemen': 'Tree Wisemen Upstate',
  'us-tree': 'US TREE REMOVAL',
  'wateree': 'Wateree Tree RemovalLLC',
  'woodfellas': 'WoodFellas Tree Service'
}

def generate_card(crew_num, slug, meta):
    folder = SLUG_TO_FOLDER[slug]
    with open(os.path.join(SCRAPE_DIR, folder, 'company.json')) as f:
        c = json.load(f)
        
    theme = meta['theme']
    biz_name = c.get('name') or slug
    city_state = f"{meta['city_en']}, {meta['state_en']}"
    owner = meta['owner_ru']
    rating = float(c.get('rating') or 5.0)
    reviews_count = c.get('reviewCount') or 25
    phone = meta['phone']
    maps_url = c.get('url') or 'https://www.google.com/maps'
    
    theme_classes = {
      'emerald': {
        'border': 'border-emerald-500/40 hover:border-emerald-400',
        'badge_bg': 'bg-emerald-950/80 border-emerald-800/80 text-emerald-300',
        'title_hover': 'group-hover:text-emerald-400',
        'rating_text': 'text-emerald-400',
        'btn_grad': 'from-emerald-500 to-green-600',
        'palette_badge': 'bg-emerald-950/60 border-emerald-800/60 text-emerald-300',
        'palette_name': 'Emerald Forest & Pine Green',
        'owner_color': 'text-emerald-400'
      },
      'teal': {
        'border': 'border-teal-500/40 hover:border-teal-400',
        'badge_bg': 'bg-teal-950/80 border-teal-800/80 text-teal-300',
        'title_hover': 'group-hover:text-teal-400',
        'rating_text': 'text-teal-400',
        'btn_grad': 'from-teal-500 to-emerald-600',
        'palette_badge': 'bg-teal-950/60 border-teal-800/60 text-teal-300',
        'palette_name': 'Coastal Teal & Palm Emerald',
        'owner_color': 'text-teal-400'
      },
      'amber': {
        'border': 'border-amber-500/40 hover:border-amber-400',
        'badge_bg': 'bg-amber-950/80 border-amber-800/80 text-amber-300',
        'title_hover': 'group-hover:text-amber-400',
        'rating_text': 'text-amber-400',
        'btn_grad': 'from-amber-500 to-orange-600',
        'palette_badge': 'bg-amber-950/60 border-amber-800/60 text-amber-300',
        'palette_name': 'Warm Amber & Hardwood Gold',
        'owner_color': 'text-amber-400'
      },
      'sky': {
        'border': 'border-sky-500/40 hover:border-sky-400',
        'badge_bg': 'bg-sky-950/80 border-sky-800/80 text-sky-300',
        'title_hover': 'group-hover:text-sky-400',
        'rating_text': 'text-sky-400',
        'btn_grad': 'from-sky-500 to-blue-600',
        'palette_badge': 'bg-sky-950/60 border-sky-800/60 text-sky-300',
        'palette_name': 'Azure Sky & Mountain Blue',
        'owner_color': 'text-sky-400'
      }
    }[theme]

    return f"""          {'{'}/* Crew Card {crew_num}: {biz_name} */{'}'}
          <div className="relative rounded-2xl border-2 {theme_classes['border']} bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md {theme_classes['badge_bg']} border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #{crew_num}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white {theme_classes['title_hover']} transition">
                {biz_name}
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 {city_state}</span>
                <span className="text-slate-600">•</span>
                <span className="{theme_classes['owner_color']} font-semibold">{owner}</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="{theme_classes['rating_text']} font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={{{rating:.1f}}} size="xs" />
                    <span>{rating:.1f} ({reviews_count} проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">{phone}</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• {meta['equip1']['name_ru']}</li>
                  <li>• {meta['equip2']['name_ru']}</li>
                  <li>• {meta['equip3']['name_ru']}</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded {theme_classes['palette_badge']} border px-2 py-0.5 font-mono">
                  {theme_classes['palette_name']}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/{slug}"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r {theme_classes['btn_grad']} px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/{slug}/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="{maps_url}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white transition"
                  title="Google Maps"
                >
                  <span>Карты ↗</span>
                </a>
              </div>
            </div>
          </div>
"""

def update_catalog():
    hub_path = "src/app/(frontend)/page.tsx"
    with open(hub_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Generate cards for crews #14 to #49
    new_cards = []
    for idx, (slug, meta) in enumerate(COMPANY_META.items(), 14):
        new_cards.append(generate_card(idx, slug, meta))

    all_new_cards_text = "\n".join(new_cards)

    # Insert right before the closing </div> of the crews grid (before {/* Status Callout Banner */})
    marker = "        {/* Status Callout Banner */}"
    if marker not in content:
        print("ERROR: marker not found in page.tsx")
        return

    # Find where the grid div ends right before marker
    parts = content.split(marker)
    # The first part ends with:
    # </div>\n\n
    grid_end_idx = parts[0].rfind("</div>")
    
    first_part = parts[0][:grid_end_idx] + all_new_cards_text + "        </div>\n\n"
    new_content = first_part + marker + parts[1]

    # Update counts in header and status banner
    new_content = new_content.replace(
      "13 активных бригад (Флорида и Орегон)",
      "49 активных бригад (Флорида, Орегон, Вашингтон, Джорджия, Техас, Каролины и др.)"
    )
    new_content = new_content.replace(
      "Все 13 бригад полностью развернуты и готовы к демонстрации",
      "Все 49 бригад полностью развернуты и готовы к демонстрации"
    )

    with open(hub_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    print("✓ Catalog Hub src/app/(frontend)/page.tsx successfully updated with all 49 crews!")

if __name__ == '__main__':
    update_catalog()
