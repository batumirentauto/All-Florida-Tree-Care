import glob
import json
import os
import re

base_leads = '/Users/workpc/Documents/google-maps-scraper/output/tree_leads'

# Build reviews map
reviews_map = {}
for d in os.listdir(base_leads):
    p = os.path.join(base_leads, d, 'reviews.json')
    if os.path.exists(p):
        try:
            with open(p, 'r', encoding='utf-8') as f:
                data = json.load(f)
            if isinstance(data, list) and len(data) > 0:
                norm_d = re.sub(r'[^a-z0-9]', '', d.lower())
                reviews_map[norm_d] = data
                reviews_map[d.lower().strip()] = data
        except Exception:
            pass

def normalize(s):
    return re.sub(r'[^a-z0-9]', '', str(s).lower())

all_configs = sorted(glob.glob('/Users/workpc/Documents/All Florida Tree Care/src/siteConfig.*.js'))
print(f'Starting robust update of {len(all_configs)} siteConfig files...')

updated_count = 0
photos_attached_total = 0

for cfg_path in all_configs:
    with open(cfg_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Neutralize hero bentoPhotos safely
    content = re.sub(
        r'\"bentoPhotos\":\s*\{[\s\S]*?\}\s*\}\s*,\s*\"trustBadges\"',
        '\"bentoPhotos\": {\n      \"main\": null,\n      \"sub1\": null,\n      \"sub2\": null\n    }\n  },\n  \"trustBadges\"',
        content
    )

    # 2. Neutralize equipment photos (only technical specs, image: null)
    content = re.sub(r'\"image\":\s*\"[^\"]*\"', '\"image\": null', content)

    # 3. Match reviews from reviews.json
    m_slug = re.search(r'\"slug\":\s*\"([^\"]+)\"', content)
    m_name = re.search(r'\"businessName\":\s*\"([^\"]+)\"', content)
    slug = m_slug.group(1) if m_slug else ''
    name = m_name.group(1) if m_name else ''

    norm_slug = normalize(slug)
    norm_name = normalize(name)

    found_revs = reviews_map.get(norm_slug) or reviews_map.get(norm_name)
    if not found_revs:
        for k in reviews_map:
            if len(k) > 5 and (k in norm_slug or norm_slug in k or k in norm_name or norm_name in k):
                found_revs = reviews_map[k]
                break

    if found_revs:
        # Build map of author -> photos
        author_photos = {}
        for r in found_revs:
            if r.get('author') and r.get('photos'):
                author_photos[normalize(r['author'])] = r['photos']

        if author_photos:
            m_revs_block = re.search(r'\"reviews\":\s*(\[\s*\{[\s\S]*?\}\s*\])', content)
            if m_revs_block:
                try:
                    revs_list = json.loads(m_revs_block.group(1))
                    has_change = False
                    for r_obj in revs_list:
                        a_name = normalize(r_obj.get('author', ''))
                        matched_photos = author_photos.get(a_name)
                        if matched_photos:
                            r_obj['photos'] = matched_photos
                            has_change = True
                            photos_attached_total += len(matched_photos)
                        else:
                            if 'photos' in r_obj:
                                del r_obj['photos']
                                has_change = True

                    if has_change:
                        new_revs_json = json.dumps(revs_list, indent=4, ensure_ascii=False)
                        indented_revs = '\n'.join('    ' + line for line in new_revs_json.splitlines()).strip()
                        content = content[:m_revs_block.start(1)] + indented_revs + content[m_revs_block.end(1):]
                except Exception:
                    pass

    with open(cfg_path, 'w', encoding='utf-8') as f:
        f.write(content)
    updated_count += 1

print(f'Update completed! Updated {updated_count} files.')
print(f'Total review photos attached: {photos_attached_total}')
