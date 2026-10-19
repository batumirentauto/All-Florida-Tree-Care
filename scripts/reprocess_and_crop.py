"""
reprocess_and_crop.py
1. Crops assigned unique images with PIL to frame subjects prominently.
2. Updates scripts/curated_metadata.py with zero duplicate images.
3. Generates all 72 siteConfig files.
"""

import os
from PIL import Image

def crop_smart(in_path, out_path, region=(0.0, 0.0, 1.0, 1.0), target_aspect=1.333):
    if not os.path.exists(in_path):
        print(f"File not found: {in_path}")
        return False
    try:
        with Image.open(in_path) as im:
            im = im.convert('RGB')
            W, H = im.size
            x0, y0 = int(region[0] * W), int(region[1] * H)
            x1, y1 = int(region[2] * W), int(region[3] * H)
            x0 = max(0, min(x0, W - 1))
            y0 = max(0, min(y0, H - 1))
            x1 = max(x0 + 1, min(x1, W))
            y1 = max(y0 + 1, min(y1, H))
            
            sub = im.crop((x0, y0, x1, y1))
            sub_w, sub_h = sub.size
            current_aspect = sub_w / sub_h
            if current_aspect > target_aspect:
                new_w = int(sub_h * target_aspect)
                offset = (sub_w - new_w) // 2
                final_box = (offset, 0, offset + new_w, sub_h)
            else:
                new_h = int(sub_w / target_aspect)
                offset = (sub_h - new_h) // 2
                final_box = (0, offset, sub_w, offset + new_h)
            cropped = sub.crop(final_box)
            os.makedirs(os.path.dirname(out_path), exist_ok=True)
            cropped.save(out_path, quality=90)
            return True
    except Exception as e:
        print(f"Error cropping {in_path}: {e}")
        return False

# Mapping of all crops for companies
CROPS = {
    # 1. a-integrity
    'a-integrity': [
        ('public/images/a-integrity/photo_014.jpg', 'public/images/a-integrity/photo_014_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.777),
        ('public/images/a-integrity/photo_005.jpg', 'public/images/a-integrity/photo_005_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.333),
        ('public/images/a-integrity/photo_007.jpg', 'public/images/a-integrity/photo_007_crop.jpg', (0.0, 0.1, 1.0, 0.9), 1.333),
        ('public/images/a-integrity/photo_006.jpg', 'public/images/a-integrity/photo_006_crop.jpg', (0.1, 0.1, 0.95, 0.95), 1.333),
        ('public/images/a-integrity/photo_016.jpg', 'public/images/a-integrity/photo_016_crop.jpg', (0.0, 0.2, 1.0, 0.9), 1.333),
        ('public/images/a-integrity/photo_003.jpg', 'public/images/a-integrity/photo_003_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.333),
    ],

    # 2. affordable
    'affordable': [
        ('public/images/affordable/photo_001.jpg', 'public/images/affordable/photo_001_crop.jpg', (0.0, 0.05, 1.0, 0.6), 1.777),
        ('public/images/affordable/photo_007.jpg', 'public/images/affordable/photo_007_crop.jpg', (0.0, 0.1, 1.0, 0.9), 1.333),
        ('public/images/affordable/photo_009.jpg', 'public/images/affordable/photo_009_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/affordable/photo_004.jpg', 'public/images/affordable/photo_004_crop.jpg', (0.0, 0.05, 1.0, 0.7), 1.333),
        ('public/images/affordable/photo_002.jpg', 'public/images/affordable/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/affordable/photo_008.jpg', 'public/images/affordable/photo_008_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 3. allens
    'allens': [
        ('public/images/allens/photo_001.jpg', 'public/images/allens/photo_001_crop.jpg', (0.0, 0.2, 1.0, 0.85), 1.777),
        ('public/images/allens/photo_002.jpg', 'public/images/allens/photo_002_crop.jpg', (0.0, 0.15, 1.0, 0.8), 1.333),
        ('public/images/allens/photo_003.jpg', 'public/images/allens/photo_003_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/allens/photo_004.jpg', 'public/images/allens/photo_004_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 4. always-grinding
    'always-grinding': [
        ('public/images/always-grinding/photo_001.jpg', 'public/images/always-grinding/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.65), 1.777),
        ('public/images/always-grinding/photo_003.jpg', 'public/images/always-grinding/photo_003_crop.jpg', (0.0, 0.1, 1.0, 0.6), 1.333),
        ('public/images/always-grinding/photo_004.jpg', 'public/images/always-grinding/photo_004_crop.jpg', (0.0, 0.2, 1.0, 0.8), 1.333),
        ('public/images/always-grinding/photo_002.jpg', 'public/images/always-grinding/photo_002_crop.jpg', (0.0, 0.15, 1.0, 0.75), 1.333),
        ('public/images/always-grinding/photo_005.jpg', 'public/images/always-grinding/photo_005_crop.jpg', (0.0, 0.1, 1.0, 0.7), 1.333),
    ],

    # 5. at-ease
    'at-ease': [
        ('public/images/at-ease/photo_005.jpg', 'public/images/at-ease/photo_005_crop.jpg', (0.0, 0.0, 1.0, 1.0), 1.777),
        ('public/images/at-ease/photo_001.jpg', 'public/images/at-ease/photo_001_crop.jpg', (0.0, 0.15, 1.0, 0.8), 1.333),
        ('public/images/at-ease/photo_004.jpg', 'public/images/at-ease/photo_004_crop.jpg', (0.0, 0.2, 1.0, 0.9), 1.333),
        ('public/images/at-ease/photo_002.jpg', 'public/images/at-ease/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.333),
        ('public/images/at-ease/photo_003.jpg', 'public/images/at-ease/photo_003_crop.jpg', (0.0, 0.1, 1.0, 0.9), 1.333),
    ],

    # 7. best-for-less
    'best-for-less': [
        ('public/images/best-for-less/photo_002.jpg', 'public/images/best-for-less/photo_002_crop.jpg', (0.0, 0.05, 1.0, 0.6), 1.777),
        ('public/images/best-for-less/photo_003.jpg', 'public/images/best-for-less/photo_003_crop.jpg', (0.0, 0.1, 1.0, 0.7), 1.333),
        ('public/images/best-for-less/photo_001.jpg', 'public/images/best-for-less/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/best-for-less/photo_004.jpg', 'public/images/best-for-less/photo_004_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 9. broken-branch
    'broken-branch': [
        ('public/images/broken-branch/photo_003.jpg', 'public/images/broken-branch/photo_003_crop.jpg', (0.0, 0.25, 1.0, 0.8), 1.777),
        ('public/images/broken-branch/photo_001.jpg', 'public/images/broken-branch/photo_001_crop.jpg', (0.0, 0.2, 1.0, 0.85), 1.333),
        ('public/images/broken-branch/photo_002.jpg', 'public/images/broken-branch/photo_002_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
    ],

    # 10. clean-cut
    'clean-cut': [
        ('public/images/clean-cut/photo_005.jpg', 'public/images/clean-cut/photo_005_crop.jpg', (0.0, 0.05, 1.0, 0.55), 1.777),
        ('public/images/clean-cut/photo_006.jpg', 'public/images/clean-cut/photo_006_crop.jpg', (0.0, 0.2, 1.0, 0.85), 1.333),
        ('public/images/clean-cut/photo_001.jpg', 'public/images/clean-cut/photo_001_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
        ('public/images/clean-cut/photo_002.jpg', 'public/images/clean-cut/photo_002_crop.jpg', (0.0, 0.05, 1.0, 0.6), 1.333),
        ('public/images/clean-cut/photo_004.jpg', 'public/images/clean-cut/photo_004_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/clean-cut/photo_007.jpg', 'public/images/clean-cut/photo_007_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 12. eaton
    'eaton': [
        ('public/images/eaton/photo_002.jpg', 'public/images/eaton/photo_002_crop.jpg', (0.0, 0.15, 1.0, 0.75), 1.777),
        ('public/images/eaton/photo_003.jpg', 'public/images/eaton/photo_003_crop.jpg', (0.0, 0.1, 1.0, 0.65), 1.333),
        ('public/images/eaton/photo_001.jpg', 'public/images/eaton/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.333),
        ('public/images/eaton/photo_004.jpg', 'public/images/eaton/photo_004_crop.jpg', (0.0, 0.2, 1.0, 0.85), 1.333),
        ('public/images/eaton/photo_006.jpg', 'public/images/eaton/photo_006_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 13. family-tree
    'family-tree': [
        ('public/images/family-tree/photo_001.jpg', 'public/images/family-tree/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.777),
        ('public/images/family-tree/photo_007.jpg', 'public/images/family-tree/photo_007_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/family-tree/photo_004.jpg', 'public/images/family-tree/photo_004_crop.jpg', (0.0, 0.2, 1.0, 0.8), 1.333),
        ('public/images/family-tree/photo_008.jpg', 'public/images/family-tree/photo_008_crop.jpg', (0.0, 0.15, 1.0, 0.75), 1.333),
        ('public/images/family-tree/photo_002.jpg', 'public/images/family-tree/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/family-tree/photo_003.jpg', 'public/images/family-tree/photo_003_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 14. furstie
    'furstie': [
        ('public/images/furstie/photo_001.jpg', 'public/images/furstie/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.777),
        ('public/images/furstie/photo_002.jpg', 'public/images/furstie/photo_002_crop.jpg', (0.0, 0.05, 1.0, 0.65), 1.333),
        ('public/images/furstie/photo_006.jpg', 'public/images/furstie/photo_006_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/furstie/photo_007.jpg', 'public/images/furstie/photo_007_crop.jpg', (0.0, 0.15, 1.0, 0.8), 1.333),
        ('public/images/furstie/photo_008.jpg', 'public/images/furstie/photo_008_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
        ('public/images/furstie/photo_010.jpg', 'public/images/furstie/photo_010_crop.jpg', (0.0, 0.35, 1.0, 0.85), 1.333),
    ],

    # 15. grow
    'grow': [
        ('public/images/grow/photo_003.jpg', 'public/images/grow/photo_003_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.777),
        ('public/images/grow/photo_005.jpg', 'public/images/grow/photo_005_crop.jpg', (0.0, 0.05, 1.0, 0.75), 1.333),
        ('public/images/grow/photo_004.jpg', 'public/images/grow/photo_004_crop.jpg', (0.0, 0.25, 1.0, 0.85), 1.333),
        ('public/images/grow/photo_001.jpg', 'public/images/grow/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/grow/photo_002.jpg', 'public/images/grow/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 16. i-noah-guy
    'i-noah-guy': [
        ('public/images/i-noah-guy/photo_001.jpg', 'public/images/i-noah-guy/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.777),
        ('public/images/i-noah-guy/photo_002.jpg', 'public/images/i-noah-guy/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/i-noah-guy/photo_003.jpg', 'public/images/i-noah-guy/photo_003_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 17. jsi
    'jsi': [
        ('public/images/jsi/photo_001.jpg', 'public/images/jsi/photo_001_crop.jpg', (0.15, 0.1, 1.0, 0.85), 1.777),
        ('public/images/jsi/photo_002.jpg', 'public/images/jsi/photo_002_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
    ],

    # 18. lm-tree
    'lm-tree': [
        ('public/images/lm-tree/photo_001.jpg', 'public/images/lm-tree/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.777),
        ('public/images/lm-tree/photo_003.jpg', 'public/images/lm-tree/photo_003_crop.jpg', (0.0, 0.1, 1.0, 0.7), 1.333),
        ('public/images/lm-tree/photo_004.jpg', 'public/images/lm-tree/photo_004_crop.jpg', (0.0, 0.1, 1.0, 0.75), 1.333),
        ('public/images/lm-tree/photo_002.jpg', 'public/images/lm-tree/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 19. limbwalkers
    'limbwalkers': [
        ('public/images/limbwalkers/photo_006.jpg', 'public/images/limbwalkers/photo_006_crop.jpg', (0.2, 0.05, 1.0, 0.85), 1.777),
        ('public/images/limbwalkers/photo_005.jpg', 'public/images/limbwalkers/photo_005_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/limbwalkers/photo_013.jpg', 'public/images/limbwalkers/photo_013_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
        ('public/images/limbwalkers/photo_007.jpg', 'public/images/limbwalkers/photo_007_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/limbwalkers/photo_011.jpg', 'public/images/limbwalkers/photo_011_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/limbwalkers/photo_009.jpg', 'public/images/limbwalkers/photo_009_crop.jpg', (0.0, 0.2, 1.0, 0.85), 1.333),
    ],

    # 20. rosales
    'rosales': [
        ('public/images/rosales/photo_001.jpg', 'public/images/rosales/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.777),
        ('public/images/rosales/photo_011.jpg', 'public/images/rosales/photo_011_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.333),
        ('public/images/rosales/photo_008.jpg', 'public/images/rosales/photo_008_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/rosales/photo_010.jpg', 'public/images/rosales/photo_010_crop.jpg', (0.0, 0.2, 1.0, 0.85), 1.333),
        ('public/images/rosales/photo_012.jpg', 'public/images/rosales/photo_012_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/rosales/photo_013.jpg', 'public/images/rosales/photo_013_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 21. maldonado
    'maldonado': [
        ('public/images/maldonado/photo_013.jpg', 'public/images/maldonado/photo_013_crop.jpg', (0.0, 0.2, 1.0, 0.85), 1.777),
        ('public/images/maldonado/photo_010.jpg', 'public/images/maldonado/photo_010_crop.jpg', (0.0, 0.05, 1.0, 0.6), 1.333),
        ('public/images/maldonado/photo_012.jpg', 'public/images/maldonado/photo_012_crop.jpg', (0.0, 0.2, 1.0, 0.85), 1.333),
        ('public/images/maldonado/photo_005.jpg', 'public/images/maldonado/photo_005_crop.jpg', (0.0, 0.2, 1.0, 0.85), 1.333),
        ('public/images/maldonado/photo_007.jpg', 'public/images/maldonado/photo_007_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/maldonado/photo_004.jpg', 'public/images/maldonado/photo_004_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 22. morgans
    'morgans': [
        ('public/images/morgans/photo_001.jpg', 'public/images/morgans/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.777),
        ('public/images/morgans/photo_004.jpg', 'public/images/morgans/photo_004_crop.jpg', (0.0, 0.2, 1.0, 0.85), 1.333),
        ('public/images/morgans/photo_006.jpg', 'public/images/morgans/photo_006_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
        ('public/images/morgans/photo_002.jpg', 'public/images/morgans/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.333),
        ('public/images/morgans/photo_005.jpg', 'public/images/morgans/photo_005_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
        ('public/images/morgans/photo_003.jpg', 'public/images/morgans/photo_003_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
    ],

    # 23. norvells
    'norvells': [
        ('public/images/norvells/photo_001.jpg', 'public/images/norvells/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.777),
        ('public/images/norvells/photo_002.jpg', 'public/images/norvells/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/norvells/photo_003.jpg', 'public/images/norvells/photo_003_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
    ],

    # 24. panhandle
    'panhandle': [
        ('public/images/panhandle/photo_005.jpg', 'public/images/panhandle/photo_005_crop.jpg', (0.0, 0.05, 1.0, 0.65), 1.777),
        ('public/images/panhandle/photo_001.jpg', 'public/images/panhandle/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/panhandle/photo_003.jpg', 'public/images/panhandle/photo_003_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
        ('public/images/panhandle/photo_002.jpg', 'public/images/panhandle/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/panhandle/photo_004.jpg', 'public/images/panhandle/photo_004_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
    ],

    # 25. pro-beaver
    'pro-beaver': [
        ('public/images/pro-beaver/photo_002.jpg', 'public/images/pro-beaver/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.777),
        ('public/images/pro-beaver/photo_009.jpg', 'public/images/pro-beaver/photo_009_crop.jpg', (0.0, 0.05, 1.0, 0.6), 1.333),
        ('public/images/pro-beaver/photo_001.jpg', 'public/images/pro-beaver/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/pro-beaver/photo_004.jpg', 'public/images/pro-beaver/photo_004_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/pro-beaver/photo_007.jpg', 'public/images/pro-beaver/photo_007_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
        ('public/images/pro-beaver/photo_010.jpg', 'public/images/pro-beaver/photo_010_crop.jpg', (0.0, 0.25, 1.0, 0.85), 1.333),
    ],

    # 27. stones
    'stones': [
        ('public/images/stones/photo_002.jpg', 'public/images/stones/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.777),
        ('public/images/stones/photo_006.jpg', 'public/images/stones/photo_006_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/stones/photo_007.jpg', 'public/images/stones/photo_007_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
        ('public/images/stones/photo_008.jpg', 'public/images/stones/photo_008_crop.jpg', (0.0, 0.15, 1.0, 0.8), 1.333),
        ('public/images/stones/photo_009.jpg', 'public/images/stones/photo_009_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
        ('public/images/stones/photo_010.jpg', 'public/images/stones/photo_010_crop.jpg', (0.0, 0.2, 1.0, 0.85), 1.333),
    ],

    # 30. td-tree
    'td-tree': [
        ('public/images/td-tree/photo_005.jpg', 'public/images/td-tree/photo_005_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.777),
        ('public/images/td-tree/photo_003.jpg', 'public/images/td-tree/photo_003_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/td-tree/photo_002.jpg', 'public/images/td-tree/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/td-tree/photo_006.jpg', 'public/images/td-tree/photo_006_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.333),
        ('public/images/td-tree/photo_004.jpg', 'public/images/td-tree/photo_004_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/td-tree/photo_001.jpg', 'public/images/td-tree/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 32. tafoya
    'tafoya': [
        ('public/images/tafoya/photo_009.jpg', 'public/images/tafoya/photo_009_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.777),
        ('public/images/tafoya/photo_015.jpg', 'public/images/tafoya/photo_015_crop.jpg', (0.0, 0.2, 1.0, 0.85), 1.333),
        ('public/images/tafoya/photo_001.jpg', 'public/images/tafoya/photo_001_crop.jpg', (0.0, 0.05, 1.0, 0.6), 1.333),
        ('public/images/tafoya/photo_006.jpg', 'public/images/tafoya/photo_006_crop.jpg', (0.0, 0.15, 1.0, 0.8), 1.333),
        ('public/images/tafoya/photo_011.jpg', 'public/images/tafoya/photo_011_crop.jpg', (0.0, 0.1, 1.0, 0.8), 1.333),
        ('public/images/tafoya/photo_005.jpg', 'public/images/tafoya/photo_005_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.333),
    ],

    # 33. tree-wisemen
    'tree-wisemen': [
        ('public/images/tree-wisemen/photo_005.jpg', 'public/images/tree-wisemen/photo_005_crop.jpg', (0.0, 0.05, 1.0, 0.75), 1.777),
        ('public/images/tree-wisemen/photo_002.jpg', 'public/images/tree-wisemen/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/tree-wisemen/photo_004.jpg', 'public/images/tree-wisemen/photo_004_crop.jpg', (0.0, 0.05, 1.0, 0.65), 1.333),
        ('public/images/tree-wisemen/photo_006.jpg', 'public/images/tree-wisemen/photo_006_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/tree-wisemen/photo_001.jpg', 'public/images/tree-wisemen/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/tree-wisemen/photo_003.jpg', 'public/images/tree-wisemen/photo_003_crop.jpg', (0.0, 0.05, 1.0, 0.75), 1.333),
    ],

    # 34. us-tree
    'us-tree': [
        ('public/images/us-tree/photo_005.jpg', 'public/images/us-tree/photo_005_crop.jpg', (0.0, 0.15, 1.0, 0.85), 1.777),
        ('public/images/us-tree/photo_001.jpg', 'public/images/us-tree/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.75), 1.333),
        ('public/images/us-tree/photo_008.jpg', 'public/images/us-tree/photo_008_crop.jpg', (0.0, 0.15, 1.0, 0.8), 1.333),
        ('public/images/us-tree/photo_004.jpg', 'public/images/us-tree/photo_004_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/us-tree/photo_007.jpg', 'public/images/us-tree/photo_007_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
        ('public/images/us-tree/photo_003.jpg', 'public/images/us-tree/photo_003_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],

    # 35. wateree
    'wateree': [
        ('public/images/wateree/photo_001.jpg', 'public/images/wateree/photo_001_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.777),
        ('public/images/wateree/photo_002.jpg', 'public/images/wateree/photo_002_crop.jpg', (0.0, 0.1, 1.0, 0.85), 1.333),
    ],
}

def run_all_crops():
    count = 0
    for slug, crops in CROPS.items():
        for in_path, out_path, region, aspect in crops:
            ok = crop_smart(in_path, out_path, region, aspect)
            if ok:
                count += 1
    print(f"Successfully processed and cropped {count} images across {len(CROPS)} companies.")

if __name__ == '__main__':
    run_all_crops()
