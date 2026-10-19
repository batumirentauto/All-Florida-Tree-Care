"""
generate_updated_metadata.py
Generates the complete curated_metadata.py with:
- Zero duplicate images per company
- Cropped image paths
- Null/None handling for missing photos
- 100% faithful descriptions (EN & RU) matching cropped photos
"""

import os
import json

META = {
  # 1. a-integrity
  'a-integrity': {
    'owner_en': 'Steve', 'owner_ru': 'Стив',
    'theme': 'emerald',
    'city_en': 'Jacksonville', 'city_ru': 'Джексонвилл',
    'state_en': 'FL', 'state_ru': 'Флорида', 'zip': '32216', 'street': 'Beach Blvd Corridor',
    'phone': '(904) 487-0197', 'phoneRaw': '9044870197',
    'tagline_en': 'Precision Hardwood Sectioning, Track Stump Milling & Lawn Preservation',
    'tagline_ru': 'Посекционный спил дубов, фрезерование пней и защита газона',
    'slogan_en': 'Direct Owner Oversight, Vermeer Track Grinding & Spotless Jacksonville Yard Cleanups',
    'slogan_ru': 'Личный контроль владельца, гусеничное дробление пней и чистота участка в Джексонвилле',
    'main_photo': '/images/a-integrity/photo_014_crop.jpg',
    'bento_main_label_en': 'Heavy Oak Timber Sectioning',
    'bento_main_label_ru': 'Посекционный спил тяжелого дуба',
    'bento_main_alt_en': 'Bucked oak timber logs sectioned cleanly along driveway',
    'bento_main_alt_ru': 'Спиленный ствол дуба, распиленный на бревна вдоль проезда',
    'sub1_photo': '/images/a-integrity/photo_005_crop.jpg',
    'bento_sub1_label_en': 'Hardwood Stump Assessment',
    'bento_sub1_label_ru': 'Оценка корневого среза',
    'bento_sub1_alt_en': 'Large tree stump prepared for grinding in residential yard',
    'bento_sub1_alt_ru': 'Массивный пень перед измельчением на участке',
    'sub2_photo': '/images/a-integrity/photo_007_crop.jpg',
    'bento_sub2_label_en': 'Pristine Ground Restoration',
    'bento_sub2_label_ru': 'Чистовой порядок во дворе',
    'bento_sub2_alt_en': 'Clean residential backyard following complete tree extraction',
    'bento_sub2_alt_ru': 'Чистый убранный двор после завершения всех арбористских работ',
    'equip1': {
      'name_en': 'Vermeer SC362 Commercial Track Stump Grinder', 'name_ru': 'Гусеничная пнедробилка Vermeer SC362',
      'badge_en': 'Commercial Subsurface Grinding', 'badge_ru': 'Промышленное дробление пней',
      'image': '/images/a-integrity/photo_006_crop.jpg',
      'desc_en': 'Photo shows the Vermeer SC362 commercial track grinder with operator actively milling a massive hardwood stump next to a residential outbuilding.',
      'desc_ru': 'На фотографии запечатлена пнедробилка Vermeer SC362 за работой: оператор измельчает массивный пень рядом с хозпостройкой, превращая древесину в щепу.'
    },
    'equip2': {
      'name_en': 'Heavy Hardwood Sectional Rigging & Bucking', 'name_ru': 'Распиловка и складирование бревен',
      'badge_en': 'Controlled Timber Staging', 'badge_ru': 'Аккуратное складирование',
      'image': '/images/a-integrity/photo_016_crop.jpg',
      'desc_en': 'Photo shows heavy hardwood trunk sections cut into manageable rounds and neatly lined along the paved driveway without blocking access.',
      'desc_ru': 'На фото показан распиленный на круглые чурбаки ствол дуба, аккуратно сложенный вдоль края подъездной дорожки без повреждения покрытия.'
    },
    'equip3': {
      'name_en': 'Restored Residential Turf & Ground Finish', 'name_ru': 'Восстановление дерна и чистовая уборка',
      'badge_en': 'Spotless Property Handover', 'badge_ru': 'Сдача чистого участка',
      'image': '/images/a-integrity/photo_003_crop.jpg',
      'desc_en': 'Photo shows the residential perimeter and lawn neatly raked and restored after complete branch removal and root clearance.',
      'desc_ru': 'На фото показан убранный газон заказчика: ветви удалены, земля выровнена граблями, территория готова к посеву травы.'
    }
  },

  # 2. affordable
  'affordable': {
    'owner_en': 'Francisco', 'owner_ru': 'Франциско',
    'theme': 'teal',
    'city_en': 'Sacramento', 'city_ru': 'Сакраменто',
    'state_en': 'CA', 'state_ru': 'Калифорния', 'zip': '95822', 'street': '2797 65th Ave',
    'phone': '(916) 701-6839', 'phoneRaw': '9167016839',
    'tagline_en': 'High-Canopy Palm Trimming, Architectural Crown Shaping & Rigging',
    'tagline_ru': 'Высотная обрезка пальм, формирование кроны и альпинистский спил',
    'slogan_en': 'Skilled Arborist Climbing, Diamond Palm Trunk Skinning & Zero Damage Tree Work',
    'slogan_ru': 'Профессиональные арбористы-верхолазы, фигурная зачистка стволов пальм и бережный уход',
    'main_photo': '/images/affordable/photo_001_crop.jpg',
    'bento_main_label_en': 'High Canopy Climber Aloft',
    'bento_main_label_ru': 'Верхолазная зачистка ствола',
    'bento_main_alt_en': 'Arborist climber in harness skinning tall palm trunk with spurs and rigging',
    'bento_main_alt_ru': 'Арборист на высоте в обвязке производит зачистку ствола пальмы',
    'sub1_photo': '/images/affordable/photo_007_crop.jpg',
    'bento_sub1_label_en': 'Palm Frond Consolidation',
    'bento_sub1_label_ru': 'Сбор срезанных ветвей пальмы',
    'bento_sub1_alt_en': 'Cut palm fronds and trimmed skirt neatly piled for chipping',
    'bento_sub1_alt_ru': 'Срезанные пальмовые ветви, сложенные для погрузки в измельчитель',
    'sub2_photo': '/images/affordable/photo_009_crop.jpg',
    'bento_sub2_label_en': 'Architectural Crown Finish',
    'bento_sub2_label_ru': 'Архитектурная стрижка крон',
    'bento_sub2_alt_en': 'Manicured queen palms over residential patio and pool enclosure',
    'bento_sub2_alt_ru': 'Ухоженные пальмы над зоной отдыха и патио частного дома',
    'equip1': {
      'name_en': 'High-Altitude Arborist Harness & Saddle Rig', 'name_ru': 'Высотное снаряжение арбориста',
      'badge_en': 'High-Canopy Rigging', 'badge_ru': 'Работа в кроне',
      'image': '/images/affordable/photo_004_crop.jpg',
      'desc_en': 'Photo shows arborist climber positioned securely inside the high palm crown using climbing spurs and safety saddle to perform precision frond thinning.',
      'desc_ru': 'На фотографии запечатлен арборист в кроне высокой пальмы: работа со страховочной привязью и гаффами для безопасного удаления сухих веток.'
    },
    'equip2': {
      'name_en': 'Diamond Palm Trunk Skinning & Shaving', 'name_ru': 'Фигурная зачистка стволов пальм',
      'badge_en': 'Precision Trunk Shaving', 'badge_ru': 'Алмазный срез ствола',
      'image': '/images/affordable/photo_002_crop.jpg',
      'desc_en': 'Photo shows close-up detail of manicured queen palm trunk shaved clean with uniform diamond geometry and healthy crown flare.',
      'desc_ru': 'На фото крупным планом показан обработанный ствол пальмы: чистое удаление старых черешков с аккуратным геометрическим рисунком.'
    },
    'equip3': {
      'name_en': 'Residential Crown Elevation & Shaping', 'name_ru': 'Подъем и формирование кроны',
      'badge_en': 'Crown Elevation Finish', 'badge_ru': 'Стрижка верхушки',
      'image': '/images/affordable/photo_008_crop.jpg',
      'desc_en': 'Photo shows a mature fan palm elevated and shaped in front of a residential home, maintaining full clearance away from the roofline and entrance.',
      'desc_ru': 'На фото показана сформированная пальма перед фасадом дома: ветви подняты, сохранен безопасный отступ от крыши и проводов.'
    }
  },

  # 3. allens
  'allens': {
    'owner_en': 'Mr. Allen', 'owner_ru': 'Мистер Аллен',
    'theme': 'amber',
    'city_en': 'Youngsville', 'city_ru': 'Янгсвилл',
    'state_en': 'NC', 'state_ru': 'Северная Каролина', 'zip': '27596', 'street': 'Cedar Creek Corridor',
    'phone': '(919) 761-3159', 'phoneRaw': '9197613159',
    'tagline_en': 'Rayco Commercial Stump Grinding & Heavy Dump Hauling Fleet',
    'tagline_ru': 'Дробление пней фрезой Rayco и вывоз порубочных остатков',
    'slogan_en': 'Family-Operated Arborist Rigging, Commercial Debris Hauling & Spotless Cleanups',
    'slogan_ru': 'Семейный сервис арбористов, самосвальный прицеп для вывоза щепы и идеальный порядок',
    'main_photo': '/images/allens/photo_001_crop.jpg',
    'bento_main_label_en': 'Commercial Rayco Stump Milling',
    'bento_main_label_ru': 'Дробление пня фрезой Rayco',
    'bento_main_alt_en': 'Operator in Allen Tree Service shirt running commercial Rayco stump grinder by fence',
    'bento_main_alt_ru': 'Оператор в фирменной футболке Allens Tree Service управляет пнедробилкой Rayco',
    'sub1_photo': '/images/allens/photo_002_crop.jpg',
    'bento_sub1_label_en': 'Heavy Dump Fleet & Blower Sweep',
    'bento_sub1_label_ru': 'Самосвальный прицеп и воздуходувка',
    'bento_sub1_alt_en': 'Branded tandem-axle dump trailer and crew member with STIHL backpack blower',
    'bento_sub1_alt_ru': 'Фирменный самосвальный прицеп и продувка дорожки мощной воздуходувкой',
    'sub2_photo': '/images/allens/photo_003_crop.jpg',
    'bento_sub2_label_en': 'Spotless Driveway Sweep',
    'bento_sub2_label_ru': 'Чистая подъездная дорожка',
    'bento_sub2_alt_en': 'Clean concrete driveway with mulch pile neatly staged to the side',
    'bento_sub2_alt_ru': 'Выметенный бетонный проезд со сложенной в стороне древесной щепой',
    'equip1': {
      'name_en': 'Long Driveway Canopy Elevation & Thinning', 'name_ru': 'Подъем кроны вдоль подъездной аллеи',
      'badge_en': 'Canopy Clearance Pruning', 'badge_ru': 'Прочистка кроны',
      'image': '/images/allens/photo_004_crop.jpg',
      'desc_en': 'Photo shows completed canopy elevation along a paved residential driveway, opening clear vehicle clearance and healthy sunlight penetration.',
      'desc_ru': 'На фото показана готовая работа: поднятая крона деревьев вдоль длинного асфальтированного проезда, обеспечен свободный проезд автотранспорта.'
    },
    'equip2': {
      'name_en': 'Rayco Commercial Stump Grinder Unit', 'name_ru': 'Промышленная пнедробилка Rayco',
      'badge_en': 'High-Torque Milling Cutter', 'badge_ru': 'Мощная фрезерная головка',
      'image': None,
      'desc_en': 'Compact multi-wheel self-propelled stump grinder equipped with carbide-tipped teeth for deep subsurface root flare milling.',
      'desc_ru': 'Самоходная колесная пнедробилка с карбидными резцами для быстрого заглубленного измельчения пней и корневых отростков.'
    },
    'equip3': {
      'name_en': 'Branded Heavy Tandem Debris Dump Trailer', 'name_ru': 'Тяжелый самосвальный прицеп для щепы',
      'badge_en': 'High-Capacity Timber Hauling', 'badge_ru': 'Вывоз больших объемов',
      'image': None,
      'desc_en': 'High-sided heavy commercial hydraulic dump trailer designed for hauling large timber logs and tons of chipped organic mulch in a single run.',
      'desc_ru': 'Вместительный прицеп с гидроподъемом для единовременного вывоза тяжелых бревен и измельченной древесины без загромождения двора.'
    }
  },

  # 4. always-grinding
  'always-grinding': {
    'owner_en': 'Dustin', 'owner_ru': 'Дастин',
    'theme': 'sky',
    'city_en': 'Flowery Branch', 'city_ru': 'Флауэри-Бранч',
    'state_en': 'GA', 'state_ru': 'Джорджия', 'zip': '30542', 'street': 'Lake Lanier Foothills Corridor',
    'phone': '(404) 797-1784', 'phoneRaw': '4047971784',
    'tagline_en': 'Carlton Track Stump Grinding & Steep-Slope Hardwood Excavation',
    'tagline_ru': 'Дробление пней гусеничной фрезой Carlton и работа на крутых склонах',
    'slogan_en': 'High-Power Carlton SP8018 TRX Track Milling, Hillside Access & Spotless Cleanups',
    'slogan_ru': 'Гусеничная пнедробилка Carlton SP8018 TRX, работа на сложных террасах и чистота',
    'main_photo': '/images/always-grinding/photo_001_crop.jpg',
    'bento_main_label_en': 'Carlton Track Grinder on Terrace',
    'bento_main_label_ru': 'Carlton TRX на террасе',
    'bento_main_alt_en': 'Carlton SP8018 TRX commercial track stump grinder positioned on upper retaining wall terrace',
    'bento_main_alt_ru': 'Гусеничная пнедробилка Carlton SP8018 TRX на верхней террасе подпорной стены',
    'sub1_photo': '/images/always-grinding/photo_003_crop.jpg',
    'bento_sub1_label_en': 'Track Machine Residential Access',
    'bento_sub1_label_ru': 'Заезд техники во двор',
    'bento_sub1_alt_en': 'Carlton track grinder unloading from equipment trailer down driveway with zero turf rutting',
    'bento_sub1_alt_ru': 'Спуск гусеничной машины с прицепа по дорожке без повреждения газона',
    'sub2_photo': '/images/always-grinding/photo_004_crop.jpg',
    'bento_sub2_label_en': 'Roofline Overhang Mitigation',
    'bento_sub2_label_ru': 'Устранение веток над крышей',
    'bento_sub2_alt_en': 'Mature hardwood canopy overhanging residential roofline prior to pruning',
    'bento_sub2_alt_ru': 'Опасная крона дерева, нависающая над крышей жилого дома перед опиловкой',
    'equip1': {
      'name_en': 'Carlton SP8018 TRX Steep Hillside Milling', 'name_ru': 'Дробление корней на крутом склоне',
      'badge_en': 'Steep-Slope Track Stability', 'badge_ru': 'Работа на крутых откосах',
      'image': '/images/always-grinding/photo_002_crop.jpg',
      'desc_en': 'Photo shows the Carlton commercial track grinder tackling massive root balls on a steep dirt embankment where wheeled machines cannot operate.',
      'desc_ru': 'На фото запечатлена фреза Carlton на крутом склоне: гусеничное шасси обеспечивает устойчивость при измельчении корней на крутых откосах.'
    },
    'equip2': {
      'name_en': 'Broken Storm Limb & Canopy Hazard Extraction', 'name_ru': 'Спил надломленных ветвей после шторма',
      'badge_en': 'Hanging Limb Rigging', 'badge_ru': 'Снятие зависших ветвей',
      'image': '/images/always-grinding/photo_005_crop.jpg',
      'desc_en': 'Photo shows hazardous broken branch suspended dangerously inside the crown over property grounds, rigged and safely brought down.',
      'desc_ru': 'На фото показана надломленная штормом ветка, зависшая в кроне над участком: безопасный демонтаж с использованием арбористского такелажа.'
    },
    'equip3': {
      'name_en': 'Carlton SP8018 TRX Track Grinder Specs', 'name_ru': 'Характеристики Carlton SP8018 TRX',
      'badge_en': 'High-Output Diesel Power', 'badge_ru': 'Турбодизельная мощность',
      'image': None,
      'desc_en': 'Heavy-duty rubber tracked stump cutter equipped with hydraulic ground drive, 18-inch cut depth below grade, and turf-safe weight distribution.',
      'desc_ru': 'Профессиональная гусеничная пнедробилка: глубина фрезерования до 45 см ниже уровня грунта, бережное распределение веса по дерну.'
    }
  },

  # 5. at-ease
  'at-ease': {
    'owner_en': 'John', 'owner_ru': 'Джон',
    'theme': 'emerald',
    'city_en': 'Cairo', 'city_ru': 'Каир',
    'state_en': 'GA', 'state_ru': 'Джорджия', 'zip': '39828', 'street': 'South Georgia Pine Belt',
    'phone': '(229) 977-1139', 'phoneRaw': '2299771139',
    'tagline_en': 'Emergency Storm Felling, Heavy Oak Bucking & Lawn Restoration',
    'tagline_ru': 'Срочная ликвидация упавших деревьев, распил дубов и уборка',
    'slogan_en': 'Veteran-Led Precision Tree Removal, Honest Pricing & Immediate South Georgia Dispatch',
    'slogan_ru': 'Военная дисциплина и аккуратность, честные цены и оперативный выезд по югу Джорджии',
    'main_photo': '/images/at-ease/photo_005_crop.jpg',
    'bento_main_label_en': 'Uprooted Storm Oak Extraction',
    'bento_main_label_ru': 'Вывернутый штормом дуб',
    'bento_main_alt_en': 'Massive uprooted oak tree fallen across front lawn with giant root ball exposed',
    'bento_main_alt_ru': 'Огромный дуб, вывернутый с корнем на газон перед домом во время бури',
    'sub1_photo': '/images/at-ease/photo_001_crop.jpg',
    'bento_sub1_label_en': 'Heavy Timber Chainsaw Bucking',
    'bento_sub1_label_ru': 'Распил упавшего ствола',
    'bento_sub1_alt_en': 'Logger standing on felled massive oak trunk bucking timber with heavy saw',
    'bento_sub1_alt_ru': 'Вальщик с бензопилой производит раскряжевку гигантского упавшего ствола',
    'sub2_photo': '/images/at-ease/photo_004_crop.jpg',
    'bento_sub2_label_en': 'Graded Lawn & Root Cavity Fill',
    'bento_sub2_label_ru': 'Заделка ямы от корня',
    'bento_sub2_alt_en': 'Smoothly graded soil bed and manicured turf after root ball extraction',
    'bento_sub2_alt_ru': 'Выровненный грунт и убранный газон на месте извлеченного корневого кома',
    'equip1': {
      'name_en': 'Forestry Boundary Clearance & Stump Flush-Cut', 'name_ru': 'Спил деревьев по границе участка',
      'badge_en': 'Perimeter Tree Management', 'badge_ru': 'Зачистка периметра',
      'image': '/images/at-ease/photo_002_crop.jpg',
      'desc_en': 'Photo shows completed pine thinning and flush-cut stumps along a residential boundary fence, opening wide sunlight exposure.',
      'desc_ru': 'На фото показан результат расчистки границы участка: спил аварийных сосен под корень с сохранением забора и чистотой полосы.'
    },
    'equip2': {
      'name_en': 'Storm Blowdown Canopy Debris Clearing', 'name_ru': 'Уборка кроны после ветровала',
      'badge_en': 'Rapid Storm Cleanup', 'badge_ru': 'Утилизация ветровала',
      'image': '/images/at-ease/photo_003_crop.jpg',
      'desc_en': 'Photo shows sprawling fallen canopy across open grass field being sectioned into timber and staged for chip processing.',
      'desc_ru': 'На фото зафиксирована упавшая крона дерева на лужайке перед началом дробления и вывоза порубочных остатков.'
    },
    'equip3': {
      'name_en': 'Heavy Excavation & Timber Winching Package', 'name_ru': 'Такелажно-лебедочный комплекс',
      'badge_en': 'High-Capacity Extraction Gear', 'badge_ru': 'Тяжелое оборудование',
      'image': None,
      'desc_en': 'Heavy steel cable winches, high-tonnage snatch blocks, and compact track machinery for pulling down hung-up trees and stabilizing root plates.',
      'desc_ru': 'Тяговые лебедки, стальные стропы и блок-ролики для безопасного заваливания зависших деревьев и засыпки ям от корневых систем.'
    }
  },

  # 6. bartolome
  'bartolome': {
    'owner_en': 'Bartolome', 'owner_ru': 'Бартоломе',
    'theme': 'teal',
    'city_en': 'Sanford', 'city_ru': 'Сэнфорд',
    'state_en': 'NC', 'state_ru': 'Северная Каролина', 'zip': '27330', 'street': 'Lee County Arborist Route',
    'phone': '(919) 356-3501', 'phoneRaw': '9193563501',
    'tagline_en': 'Commercial Forestry Hauling, High Canopy Rigging & Total Debris Removal',
    'tagline_ru': 'Вывоз порубочных остатков, высотный спил и комплексная очистка',
    'slogan_en': 'Direct Arborist Crew Dispatch, High-Capacity Haul Fleet & Spotless Cleanups',
    'slogan_ru': 'Прямой выезд бригады, собственный самосвальный транспорт и образцовый порядок',
    'main_photo': '/images/tecos/dump-truck-trailer_crop.jpg',
    'bento_main_label_en': 'Commercial Tree Care Fleet',
    'bento_main_label_ru': 'Собственный парк техники',
    'bento_main_alt_en': 'Commercial tree service truck and equipment trailer staged for residential job',
    'bento_main_alt_ru': 'Грузовой автомобиль и прицеп для вывоза древесины на объекте',
    'sub1_photo': None,
    'sub2_photo': None,
    'equip1': {
      'name_en': 'Forestry Bucket Truck & Canopy Rigging', 'name_ru': 'Автовышка для работы в кроне',
      'badge_en': 'Aerial High Reach', 'badge_ru': 'Высотный доступ',
      'image': None,
      'desc_en': 'Commercial insulated aerial boom truck enabling safe overhead access to prune hazardous branches overhanging roofs and utility lines.',
      'desc_ru': 'Автогидроподъемник для безопасного спила ветвей, нависающих над жилыми постройками и линиями электропередач.'
    },
    'equip2': {
      'name_en': 'High-Capacity Commercial Brush Chipper', 'name_ru': 'Промышленный измельчитель веток',
      'badge_en': 'High-Volume Chipping', 'badge_ru': 'Быстрая переработка',
      'image': None,
      'desc_en': 'Industrial disc chipper processing tree limbs up to 12 inches in diameter directly into enclosed truck containers.',
      'desc_ru': 'Дробилка веток для оперативной переработки стволов и веток диаметром до 30 см прямо во дворе заказчика.'
    },
    'equip3': {
      'name_en': 'Heavy Debris Haul Fleet & Site Sweep', 'name_ru': 'Вывоз мусора и финальная продувка',
      'badge_en': '100% Debris Haul-Away', 'badge_ru': 'Полный вывоз отходов',
      'image': None,
      'desc_en': 'Dedicated heavy dump trucks and industrial blowers ensuring every log, branch, and twig is hauled away with zero mess left behind.',
      'desc_ru': 'Самосвальная техника и ранцевые воздуходувки: вывозим 100% древесных остатков и выметаем дорожки начисто.'
    }
  },

  # 7. best-for-less
  'best-for-less': {
    'owner_en': 'James', 'owner_ru': 'Джеймс',
    'theme': 'amber',
    'city_en': 'Vancouver', 'city_ru': 'Ванкувер',
    'state_en': 'WA', 'state_ru': 'Вашингтон', 'zip': '98661', 'street': 'Columbia River Highway Corridor',
    'phone': '(360) 771-1450', 'phoneRaw': '3607711450',
    'tagline_en': 'Extreme Conifer Topping, High Spar Rigging & Heavy Log Bucking',
    'tagline_ru': 'Высотная валка хвойных гигантов, такелаж и распил бревен',
    'slogan_en': 'Pacific Northwest High Climbers, 80+ Foot Spar Topping & Fair Upfront Pricing',
    'slogan_ru': 'Опытные верхолазы северо-запада, макушечный спил на высоте 25+ метров и честная смета',
    'main_photo': '/images/best-for-less/photo_002_crop.jpg',
    'bento_main_label_en': 'High Spar Climber Topping at 80+ Ft',
    'bento_main_label_ru': 'Верхолаз на макушке 25+ метров',
    'bento_main_alt_en': 'Arborist high climber topping dual conifer spars high above tree line',
    'bento_main_alt_ru': 'Верхолаз-арборист производит спил макушек гигантских сосен на огромной высоте',
    'sub1_photo': '/images/best-for-less/photo_003_crop.jpg',
    'bento_sub1_label_en': '4-Foot Hardwood Trunk Bucking',
    'bento_sub1_label_ru': 'Распил 1,2-метрового бревна',
    'bento_sub1_alt_en': 'Loggers bucking 4-foot diameter hardwood log into firewood rounds with big saws',
    'bento_sub1_alt_ru': 'Вальщики распиливают полутораметровый ствол на чурбаки мощными пилами',
    'sub2_photo': '/images/best-for-less/photo_001_crop.jpg',
    'bento_sub2_label_en': '100-Ft Fir Takedown Assessment',
    'bento_sub2_label_ru': 'Оценка 30-метровой пихты',
    'bento_sub2_alt_en': 'Ground logger surveying massive 100-ft evergreen tree adjacent to residential home',
    'bento_sub2_alt_ru': 'Осмотр 30-метрового хвойного дерева рядом с домом перед контролируемым спилом',
    'equip1': {
      'name_en': 'Backyard Tree Reduction & Pruning', 'name_ru': 'Кронирование деревьев во дворе',
      'badge_en': 'Tight-Access Crown Work', 'badge_ru': 'Сложный доступ',
      'image': '/images/best-for-less/photo_004_crop.jpg',
      'desc_en': 'Photo shows arborist ground crew managing canopy reduction on a mature backyard shade tree close to wooden structures and garden borders.',
      'desc_ru': 'На фото показано кронирование крупного дерева в закрытом дворе: бережный спуск ветвей без повреждения забора и садовых построек.'
    },
    'equip2': {
      'name_en': 'High-Tension Bull Ropes & Rigging Kit', 'name_ru': 'Силовой арбористский такелаж',
      'badge_en': 'Heavy Spar Lowering', 'badge_ru': 'Спуск тяжелых бревен',
      'image': None,
      'desc_en': 'Industrial-grade friction brakes (Port-a-Wrap) and double-braid synthetic bull ropes for lowering multi-ton tree sections without ground impact.',
      'desc_ru': 'Тормозные барабаны (Port-a-Wrap) и высокопрочные статические канаты для контролируемого спуска многотонных бревен.'
    },
    'equip3': {
      'name_en': 'Stihl Commercial Heavy Timber Saws', 'name_ru': 'Профессиональные валочные пилы STIHL',
      'badge_en': 'Large Diameter Cutting', 'badge_ru': 'Распил толстомера',
      'image': None,
      'desc_en': 'Heavyweight chainsaws with up to 36-inch guide bars for rapidly bucking massive old-growth fir and cedar logs into manageable sections.',
      'desc_ru': 'Мощные бензопилы с шинами до 90 см для чистой и быстрой раскряжевки вековых бревен на участке заказчика.'
    }
  },

  # 8. bigfoot
  'bigfoot': {
    'owner_en': 'Dave', 'owner_ru': 'Дэйв',
    'theme': 'sky',
    'city_en': 'Kent', 'city_ru': 'Кент',
    'state_en': 'WA', 'state_ru': 'Вашингтон', 'zip': '98032', 'street': 'King County Regional Route',
    'phone': '(253) 293-1046', 'phoneRaw': '2532931046',
    'tagline_en': 'Precision Track Stump Grinding & Subsurface Root Flare Milling',
    'tagline_ru': 'Гусеничное дробление пней и фрезерование корневых систем',
    'slogan_en': 'Commercial Track Grinding Machinery, Gate-Access Capability & Zero Lawn Rutting',
    'slogan_ru': 'Компактные гусеничные пнедробилки, проход в узкие калитки и защита газона',
    'main_photo': '/images/tecos/tracked-grinder_crop.jpg',
    'bento_main_label_en': 'Commercial Track Stump Grinder',
    'bento_main_label_ru': 'Гусеничная пнедробилка',
    'bento_main_alt_en': 'Tracked commercial stump grinder operating in residential yard',
    'bento_main_alt_ru': 'Гусеничная пнедробилка измельчает пень на приусадебном участке',
    'sub1_photo': None,
    'sub2_photo': None,
    'equip1': {
      'name_en': 'Track-Mounted Commercial Stump Grinder', 'name_ru': 'Гусеничная фреза для пней',
      'badge_en': 'Narrow Gate Access', 'badge_ru': 'Проход в узкие калитки',
      'image': None,
      'desc_en': 'Compact self-propelled track grinder that easily navigates 36-inch garden gates to eliminate backyard stumps with zero turf damage.',
      'desc_ru': 'Компактная самоходная машина на резиновых гусеницах: проходит в стандартные калитки от 90 см и не оставляет колеи на траве.'
    },
    'equip2': {
      'name_en': 'Subsurface Root Flare Milling Package', 'name_ru': 'Глубокое удаление боковых корней',
      'badge_en': 'Deep Cut Grinding', 'badge_ru': 'Фрезерование на 35 см',
      'image': None,
      'desc_en': 'Deep-grinding cutting wheel with carbide teeth that penetrates up to 14 inches below grade to prevent regrowth and allow immediate replanting.',
      'desc_ru': 'Фреза с победитовыми резцами уходит на глубину до 35 см, полностью уничтожая сердцевину пня и боковые отростки.'
    },
    'equip3': {
      'name_en': 'Turf-Protection Ground Mats & Cleanup Kit', 'name_ru': 'Защитные настилы и уборка щепы',
      'badge_en': 'Lawn Shield System', 'badge_ru': 'Защита зеленого дерна',
      'image': None,
      'desc_en': 'High-density polyethylene ground mats to protect sensitive sod during machine travel, followed by thorough rake and blower sweeping.',
      'desc_ru': 'Полимерные траки для сохранения газона при маневрировании техники, аккуратная засыпка лунки и уборка территории.'
    }
  },

  # 9. broken-branch
  'broken-branch': {
    'owner_en': 'Fred', 'owner_ru': 'Фред',
    'theme': 'emerald',
    'city_en': 'Broadalbin', 'city_ru': 'Бродалбин',
    'state_en': 'NY', 'state_ru': 'Нью-Йорк', 'zip': '12025', 'street': 'Great Sacandaga Lake Route',
    'phone': '(518) 752-9009', 'phoneRaw': '5187529009',
    'tagline_en': 'Emergency Storm Tree Rigging & High Conifer Hazard Mitigation',
    'tagline_ru': 'Аварийный спил после шторма и ликвидация опасных деревьев',
    'slogan_en': 'Upstate NY Climbers, Hazard Limb Rigging & Complete Debris Cleanup',
    'slogan_ru': 'Опытные арбористы северной части штата, безопасный спуск веток и порядок во дворе',
    'main_photo': '/images/broken-branch/photo_003_crop.jpg',
    'bento_main_label_en': 'High Conifer Rigging Climber',
    'bento_main_label_ru': 'Арборист на высоте',
    'bento_main_alt_en': 'Arborist climber ascending high pine tree trunk among hardwood canopy',
    'bento_main_alt_ru': 'Арборист поднимается по стволу высокой сосны для закрепления такелажа',
    'sub1_photo': '/images/broken-branch/photo_001_crop.jpg',
    'bento_sub1_label_en': 'Hazard Branch Lawn Impact',
    'bento_sub1_label_ru': 'Сломанная ветвь на газоне',
    'bento_sub1_alt_en': 'Large broken pine branch fallen onto residential lawn near house corner',
    'bento_sub1_alt_ru': 'Упавшая тяжелая ветка сосны на газоне рядом с углом жилого дома',
    'sub2_photo': '/images/broken-branch/photo_002_crop.jpg',
    'bento_sub2_label_en': 'Storm Risk Porch Assessment',
    'bento_sub2_label_ru': 'Оценка последствий шторма',
    'bento_sub2_alt_en': 'View of storm-damaged trees and residential yard under cloudy sky',
    'bento_sub2_alt_ru': 'Осмотр поврежденных деревьев на участке после прохождения грозового фронта',
    'equip1': {
      'name_en': 'High-Strength Arborist Climbing & Rigging Saddle', 'name_ru': 'Профессиональная альпинистская обвязка',
      'badge_en': 'Canopy Ascent Rig', 'badge_ru': 'Высотная страховка',
      'image': None,
      'desc_en': 'Multi-point safety harness with steel-core fliplines and climbing spurs, allowing arborists to safely access tight canopy sections without bucket trucks.',
      'desc_ru': 'Арбористская беседка со стальными охватками и гаффами для подъема на деревья в труднодоступных местах двора.'
    },
    'equip2': {
      'name_en': 'Commercial Brush Chipper & Wood Processing', 'name_ru': 'Дробилка веток и щепорез',
      'badge_en': 'High-Output Chipping', 'badge_ru': 'Утилизация веток',
      'image': None,
      'desc_en': 'Heavy-duty chipper that rapidly converts fallen branches, twigs, and storm debris into premium organic ground mulch.',
      'desc_ru': 'Производительный измельчитель, перерабатывающий весь древесный мусор и сломанные сучья в чистую щепу прямо на месте.'
    },
    'equip3': {
      'name_en': 'Sectional Rigging Lines & Structural Protection', 'name_ru': 'Такелажный комплекс для подвесного спуска',
      'badge_en': 'Controlled Lowering', 'badge_ru': 'Плавный спуск',
      'image': None,
      'desc_en': 'Arborist lowering blocks, friction brakes, and synthetic bull ropes to dismantle overhanging branches without touching roofing or fences.',
      'desc_ru': 'Блок-ролики и силовые канаты для пошагового спуска нависших над кровлей ветвей без риска для построек.'
    }
  },

  # 10. clean-cut
  'clean-cut': {
    'owner_en': 'Wade', 'owner_ru': 'Уэйд',
    'theme': 'teal',
    'city_en': 'Puyallup', 'city_ru': 'Пуяллап',
    'state_en': 'WA', 'state_ru': 'Вашингтон', 'zip': '98371', 'street': 'Pierce County Valley Corridor',
    'phone': '(253) 249-4432', 'phoneRaw': '2532494432',
    'tagline_en': 'High-Altitude Douglas Fir Topping, Heavy Timber Felling & Rigging',
    'tagline_ru': 'Высотный спил пихт Дугласа, валка тяжелого леса и такелаж',
    'slogan_en': 'Pacific Northwest Spar Climbers, 70+ Foot High Rigging & Spotless Cleanups',
    'slogan_ru': 'Опытные верхолазы Пьюджет-Саунд, удаление макушек на высоте 20+ метров и чистый двор',
    'main_photo': '/images/clean-cut/photo_005_crop.jpg',
    'bento_main_label_en': 'High Spar Climber Topping at 70+ Ft',
    'bento_main_label_ru': 'Спил верхушки на высоте 20+ м',
    'bento_main_alt_en': 'High spar climber topping tall pine tree spar against sky',
    'bento_main_alt_ru': 'Арборист на верхушке ствола производит спил макушки высокой сосны',
    'sub1_photo': '/images/clean-cut/photo_006_crop.jpg',
    'bento_sub1_label_en': 'Lead Arborist with Heavy Spars',
    'bento_sub1_label_ru': 'Распил ствола на секции',
    'bento_sub1_alt_en': 'Lead arborist standing by sectioned timber trunk and massive rounds',
    'bento_sub1_alt_ru': 'Арборист рядом со спиленным стволом и распиленными чурбаками',
    'sub2_photo': '/images/clean-cut/photo_001_crop.jpg',
    'bento_sub2_label_en': 'Directional Driveway Felling',
    'bento_sub2_label_ru': 'Точная валка вдоль проезда',
    'bento_sub2_alt_en': 'Long limbed trunk felled with pinpoint accuracy along asphalt driveway',
    'bento_sub2_alt_ru': 'Ствол дерева, уложенный с миллиметровой точностью вдоль края асфальтовой дороги',
    'equip1': {
      'name_en': 'Professional Climbing Spikes & Canopy Saddle', 'name_ru': 'Гаффы и привязь для высотного спила',
      'badge_en': 'High Canopy Rigging', 'badge_ru': 'Работа в кроне',
      'image': '/images/clean-cut/photo_002_crop.jpg',
      'desc_en': 'Photo shows arborist climber ascending inside high fir tree canopy using professional climbing spurs and flipline to limb the trunk on the way up.',
      'desc_ru': 'На фото показан подъем арбориста по стволу высокой пихты на гаффах: пошаговая обрезка боковых ветвей при продвижении к вершине.'
    },
    'equip2': {
      'name_en': 'Controlled Canopy Sectional Dismantling', 'name_ru': 'Посекционный разбор кроны',
      'badge_en': 'Branch Sectioning', 'badge_ru': 'Обрезка сучьев',
      'image': '/images/clean-cut/photo_004_crop.jpg',
      'desc_en': 'Photo shows arborist maneuvering among high evergreen boughs to remove heavy lateral branches safely before felling the main timber spar.',
      'desc_ru': 'На фото зафиксирована работа в кроне хвойного дерева: удаление боковых ветвей для подготовки ствола к безопасному сбросу.'
    },
    'equip3': {
      'name_en': 'Mature Evergreen Structure Mitigation', 'name_ru': 'Спил деревьев у построек',
      'badge_en': 'Shed & Fence Protection', 'badge_ru': 'Защита строений',
      'image': '/images/clean-cut/photo_007_crop.jpg',
      'desc_en': 'Photo shows tall mature Douglas fir trees adjacent to residential shed and fence line, carefully targeted for hazardous limb mitigation.',
      'desc_ru': 'На фото показана группа высоких деревьев рядом с хозблоком и забором: безопасный спил с сохранением всех прилегающих конструкций.'
    }
  },

  # 11. columbus
  'columbus': {
    'owner_en': 'Russell', 'owner_ru': 'Рассел',
    'theme': 'amber',
    'city_en': 'Columbus', 'city_ru': 'Колумбус',
    'state_en': 'GA', 'state_ru': 'Джорджия', 'zip': '31904', 'street': 'Chattahoochee Valley Corridor',
    'phone': '(706) 580-2933', 'phoneRaw': '7065802933',
    'tagline_en': 'Controlled Hardwood Felling, Track Stump Milling & Chipping Fleet',
    'tagline_ru': 'Валка деревьев, гусеничное дробление пней и измельчение веток',
    'slogan_en': 'Chattahoochee Valley Tree Care, Rigging Accuracy & Fair Upfront Pricing',
    'slogan_ru': 'Надежные арбористы региона Колумбус, аккуратный спил и честная смета',
    'main_photo': '/images/tecos/tall-pine-takedown_crop.jpg',
    'bento_main_label_en': 'Controlled Pine Takedown',
    'bento_main_label_ru': 'Контролируемый спил сосны',
    'bento_main_alt_en': 'Arborist rigging tall pine tree for sectional takedown',
    'bento_main_alt_ru': 'Арборист на сосне подготавливает ствол к посекционному спилу',
    'sub1_photo': None,
    'sub2_photo': None,
    'equip1': {
      'name_en': 'Commercial Sectional Rigging & Tree Felling', 'name_ru': 'Посекционный спил и такелаж',
      'badge_en': 'Structural Safety Rigging', 'badge_ru': 'Защита имущества',
      'image': None,
      'desc_en': 'Precision lowering setup with friction brakes to dismantle large hazardous trees limb by limb over homes and fences.',
      'desc_ru': 'Такелажный комплекс с тормозными барабанами для пошагового безопасного спуска ветвей над постройками.'
    },
    'equip2': {
      'name_en': 'High-Torque Track Stump Grinder Unit', 'name_ru': 'Гусеничная пнедробилка',
      'badge_en': 'Subsurface Milling', 'badge_ru': 'Глубокое дробление',
      'image': None,
      'desc_en': 'Self-propelled rubber track stump grinder that eliminates stumps 12 inches below grade while protecting residential lawn surfaces.',
      'desc_ru': 'Самоходная фреза на резиновых гусеницах для быстрого удаления пней ниже уровня дерна без следов на траве.'
    },
    'equip3': {
      'name_en': 'Hydraulic Brush Chipper & Debris Haul Box', 'name_ru': 'Измельчитель веток и вывоз щепы',
      'badge_en': 'Rapid Site Clearance', 'badge_ru': 'Полная утилизация',
      'image': None,
      'desc_en': 'Commercial brush chipper with high-velocity discharge chute loading wood chips directly into heavy enclosed haul rigs.',
      'desc_ru': 'Дробилка веток с автоподачей, направляющая щепу прямо в кузов грузовика для чистоты во дворе.'
    }
  },

  # 12. eaton
  'eaton': {
    'owner_en': 'Chris', 'owner_ru': 'Крис',
    'theme': 'sky',
    'city_en': 'Blue Ridge', 'city_ru': 'Блу-Ридж',
    'state_en': 'GA', 'state_ru': 'Джорджия', 'zip': '30513', 'street': 'Appalachian Mountain Foothills',
    'phone': '(404) 227-0193', 'phoneRaw': '4042270193',
    'tagline_en': 'Steep Mountain Hillside Felling, Pine Clearing & View Pruning',
    'tagline_ru': 'Валка деревьев на горных склонах, расчистка сосен и видовая обрезка',
    'slogan_en': 'North Georgia Mountain Arborists, Cabin Perimeter Clearing & Technical Winching',
    'slogan_ru': 'Арбористы горных районов Джорджии, защита деревянных коттеджей и лебедочный такелаж',
    'main_photo': '/images/eaton/photo_002_crop.jpg',
    'bento_main_label_en': 'Steep Hillside Cabin Felling',
    'bento_main_label_ru': 'Спил на горном склоне у дома',
    'bento_main_alt_en': 'Steep hillside pine felling and brush clearing behind mountain cabin',
    'bento_main_alt_ru': 'Спил аварийных сосен на крутом склоне за горным коттеджем',
    'sub1_photo': '/images/eaton/photo_003_crop.jpg',
    'bento_sub1_label_en': 'Heavy Hillside Timber Inspection',
    'bento_sub1_label_ru': 'Осмотр ствола на откосе',
    'bento_sub1_alt_en': 'Loggers standing on slope examining massive felled pine log',
    'bento_sub1_alt_ru': 'Лесорубы на горном склоне осматривают ствол поваленной сосны',
    'sub2_photo': '/images/eaton/photo_001_crop.jpg',
    'bento_sub2_label_en': 'Mountain Cabin Canopy Assessment',
    'bento_sub2_label_ru': 'Деревья над крышей коттеджа',
    'bento_sub2_alt_en': 'Tall mountain pines framing rustic wooden cabin under cloudy sky',
    'bento_sub2_alt_ru': 'Высокие сосны, окружающие деревянный коттедж в горах',
    'equip1': {
      'name_en': 'Backyard Perimeter Clearance & Deck Protection', 'name_ru': 'Расчистка двора и защита террасы',
      'badge_en': 'Cabin Grounds Clearing', 'badge_ru': 'Защита террас',
      'image': '/images/eaton/photo_004_crop.jpg',
      'desc_en': 'Photo shows cleared residential grounds behind mountain cabin deck after removing hazardous leaning pine trees.',
      'desc_ru': 'На фото показан расчищенный склон за террасой дома после удаления опасных наклоненных сосен.'
    },
    'equip2': {
      'name_en': 'Scenic Mountain Vista Thinning & Pruning', 'name_ru': 'Видовая прочистка горной панорамы',
      'badge_en': 'Valley View Elevation', 'badge_ru': 'Открытие вида на горы',
      'image': '/images/eaton/photo_006_crop.jpg',
      'desc_en': 'Photo shows vista window opened through mountain pines overlooking the Blue Ridge valley following strategic crown thinning.',
      'desc_ru': 'На фото показан открытый панорамный вид на долину сквозь аккуратно прореженные сосны.'
    },
    'equip3': {
      'name_en': 'Mountain Terrain Rigging & Winch Kit', 'name_ru': 'Горный лебедочный такелаж',
      'badge_en': 'Steep Slope Felling', 'badge_ru': 'Валка на склонах',
      'image': None,
      'desc_en': 'Specialized heavy-duty timber winches, dynamic ground anchors, and directional pulling gear engineered for steep Appalachian slopes.',
      'desc_ru': 'Тяговые лебедки и динамические анкеры для контролируемой валки деревьев на крутых каменистых склонах.'
    }
  },

  # 13. family-tree
  'family-tree': {
    'owner_en': 'Jacob', 'owner_ru': 'Джейкоб',
    'theme': 'emerald',
    'city_en': 'St Marys', 'city_ru': 'Сент-Мэрис',
    'state_en': 'GA', 'state_ru': 'Джорджия', 'zip': '31558', 'street': 'Coastal Georgia Maritime Corridor',
    'phone': '(912) 464-4535', 'phoneRaw': '9124644535',
    'tagline_en': 'Florida Live Oak Care, Precision Branch Rigging & Debris Hauling',
    'tagline_ru': 'Уход за виргинскими дубами, такелажный спил и вывоз порубочных остатков',
    'slogan_en': 'Coastal Georgia & North Florida Arborists, Spotless Cleanups & Fair Upfront Pricing',
    'slogan_ru': 'Арбористы прибрежной полосы, бережный уход за дубами и честные понятные цены',
    'main_photo': '/images/family-tree/photo_001_crop.jpg',
    'bento_main_label_en': 'Live Oak Canopy Management',
    'bento_main_label_ru': 'Кронирование виргинского дуба',
    'bento_main_alt_en': 'Mature Florida live oaks framing residential home and manicured lawn',
    'bento_main_alt_ru': 'Крупные дубы над жилым домом после санитарной обрезки и формирования кроны',
    'sub1_photo': '/images/family-tree/photo_007_crop.jpg',
    'bento_sub1_label_en': 'Arborist Rigging Line in Oak',
    'bento_sub1_label_ru': 'Такелажный трос в кроне',
    'bento_sub1_alt_en': 'Arborist bull rope rigged in live oak crown with cut branches below',
    'bento_sub1_alt_ru': 'Такелажная веревка, закрепленная в кроне дуба для плавного спуска тяжелых ветвей',
    'sub2_photo': '/images/family-tree/photo_004_crop.jpg',
    'bento_sub2_label_en': 'Low-Cut Fence-Line Stump',
    'bento_sub2_label_ru': 'Спил пня под корень у забора',
    'bento_sub2_alt_en': 'Tree stump cut low to lawn grade right along wooden privacy fence',
    'bento_sub2_alt_ru': 'Пень, срезанный вровень с землей вплотную к деревянному забору',
    'equip1': {
      'name_en': 'Heavy Debris Trailer & Manicured Curbside', 'name_ru': 'Самосвальный прицеп и чистая обочина',
      'badge_en': 'Clean Curbside Hauling', 'badge_ru': 'Порядок у дороги',
      'image': '/images/family-tree/photo_008_crop.jpg',
      'desc_en': 'Photo shows heavy equipment debris trailer parked neatly along the street curb with spotless lawn edging after job completion.',
      'desc_ru': 'На фото показан прицеп для вывоза древесины на краю улицы: газон подстрижен, асфальт выметен, проезд открыт.'
    },
    'equip2': {
      'name_en': 'Fence-Line Canopy Clearance & Moss Thinning', 'name_ru': 'Обрезка кроны вдоль забора',
      'badge_en': 'Fence & Roof Clearance', 'badge_ru': 'Защита забора и крыши',
      'image': '/images/family-tree/photo_002_crop.jpg',
      'desc_en': 'Photo shows live oak branches and Spanish moss thinned away from residential privacy fencing and home gutters.',
      'desc_ru': 'На фото показаны ветви дуба с испанским мхом, отведенные от деревянного забора и водостоков дома.'
    },
    'equip3': {
      'name_en': 'Backyard Structural Elevation & Pruning', 'name_ru': 'Подъем кроны во дворе дома',
      'badge_en': 'Backyard Oak Care', 'badge_ru': 'Уход за дворовыми дубами',
      'image': '/images/family-tree/photo_003_crop.jpg',
      'desc_en': 'Photo shows mature shade oak in fenced residential backyard with deadwood removed and branches elevated over the yard.',
      'desc_ru': 'На фото запечатлен большой дуб во дворе: сухие ветви удалены, нижний ярус поднят для лучшего освещения газона.'
    }
  },

  # 14. furstie
  'furstie': {
    'owner_en': 'Nate Furstie', 'owner_ru': 'Нейт Фёрсти',
    'theme': 'teal',
    'city_en': 'Efland', 'city_ru': 'Эфленд',
    'state_en': 'NC', 'state_ru': 'Северная Каролина', 'zip': '27243', 'street': 'Orange County Triangle Corridor',
    'phone': '(734) 637-6297', 'phoneRaw': '7346376297',
    'tagline_en': 'Commercial Dump Fleet, Bucket Boom Pruning & Emergency Storm Hauling',
    'tagline_ru': 'Самосвальный автопарк, автовышка для кронирования и ликвидация штормов',
    'slogan_en': 'Owner-Operated Heavy Fleet, Aerial Bucket Access & Total Driveway Clearance',
    'slogan_ru': 'Личный автопарк владельца, автовышка для высоких крон и полная расчистка дорог',
    'main_photo': '/images/furstie/photo_001_crop.jpg',
    'bento_main_label_en': 'Commercial Dump Truck & Tractor Rig',
    'bento_main_label_ru': 'Самосвал и погрузчик на выезде',
    'bento_main_alt_en': 'Red commercial dump truck and tractor equipment trailer loading tree debris',
    'bento_main_alt_ru': 'Красный самосвал и тракторный прицеп на погрузке древесных остатков',
    'sub1_photo': '/images/furstie/photo_002_crop.jpg',
    'bento_sub1_label_en': 'Bucket Truck Canopy Pruning',
    'bento_sub1_label_ru': 'Работа с автовышки в кроне',
    'bento_sub1_alt_en': 'Operator in bucket boom aloft pruning branches near residential house',
    'bento_sub1_alt_ru': 'Оператор в люльке автовышки срезает ветви в кроне дуба возле дома',
    'sub2_photo': '/images/furstie/photo_006_crop.jpg',
    'bento_sub2_label_en': 'Sunlit Finished Residential Yard',
    'bento_sub2_label_ru': 'Чистый двор после обрезки',
    'bento_sub2_alt_en': 'Finished two-story residential home with clean sunlit yard after tree pruning',
    'bento_sub2_alt_ru': 'Двухэтажный дом и убранный освещенный солнцем газон после кронирования',
    'equip1': {
      'name_en': 'Emergency Driveway Storm Blowdown Removal', 'name_ru': 'Расчистка дороги от упавшего дерева',
      'badge_en': 'Driveway Blockage Extraction', 'badge_ru': 'Срочная ликвидация завала',
      'image': '/images/furstie/photo_007_crop.jpg',
      'desc_en': 'Photo shows massive fallen hardwood completely blocking a residential gravel driveway after severe storm damage.',
      'desc_ru': 'На фото зафиксирован огромный упавший ствол, полностью перекрывший гравийный проезд к дому после бури.'
    },
    'equip2': {
      'name_en': 'Driveway Reopening & Complete Timber Clearance', 'name_ru': 'Открытый проезд после распила',
      'badge_en': '100% Cleared Access', 'badge_ru': 'Полная проходимость',
      'image': '/images/furstie/photo_008_crop.jpg',
      'desc_en': 'Photo shows the exact same gravel driveway reopened and completely cleared of all wood and brush, ready for daily traffic.',
      'desc_ru': 'На фото показан тот же проезд после работы бригады: ствол распилен и вывезен, гравий подметен, проезд свободен.'
    },
    'equip3': {
      'name_en': 'Heavy Oak Timber Bucking & Tractor Staging', 'name_ru': 'Распил и погрузка тяжелых бревен',
      'badge_en': 'Heavy Log Management', 'badge_ru': 'Погрузка трактором',
      'image': '/images/furstie/photo_010_crop.jpg',
      'desc_en': 'Photo shows massive hardwood trunk sectioned into large rounds on the lawn, staged for tractor loader removal.',
      'desc_ru': 'На фото показаны распиленные крупные чурбаки на газоне, подготовленные для захвата трактором-погрузчиком.'
    }
  },

  # 15. grow
  'grow': {
    'owner_en': 'Donnie', 'owner_ru': 'Донни',
    'theme': 'amber',
    'city_en': 'Jacksonville', 'city_ru': 'Джексонвилл',
    'state_en': 'FL', 'state_ru': 'Флорида', 'zip': '32244', 'street': 'Westside Jacksonville Corridor',
    'phone': '(904) 859-4188', 'phoneRaw': '9048594188',
    'tagline_en': 'Emergency Structural Tree Extraction, Rigging & Shed Protection',
    'tagline_ru': 'Срочный съем упавших деревьев со строений и защита построек',
    'slogan_en': 'Rapid Storm Disaster Response, Controlled Rigging & Zero Further Structural Damage',
    'slogan_ru': 'Оперативный выезд после ураганов, бережный подъем ветвей и спасение кровли',
    'main_photo': '/images/grow/photo_003_crop.jpg',
    'bento_main_label_en': 'Emergency Roof Tree Strike Extraction',
    'bento_main_label_ru': 'Упавшее на хозблок дерево',
    'bento_main_alt_en': 'Heavy snapped tree limb fallen directly across residential shed roof',
    'bento_main_alt_ru': 'Тяжелый надломленный ствол, упавший прямо на крышу хозблока во дворе',
    'sub1_photo': '/images/grow/photo_005_crop.jpg',
    'bento_sub1_label_en': 'Structural Impact Stabilization',
    'bento_sub1_label_ru': 'Точка опоры на крыше',
    'bento_sub1_alt_en': 'Close-up of fractured tree limb resting on damaged corner of residential shed',
    'bento_sub1_alt_ru': 'Крупный план надлома ствола, упершегося в угол крыши постройки',
    'sub2_photo': '/images/grow/photo_004_crop.jpg',
    'bento_sub2_label_en': 'Ground Crew Chainsaw Sectioning',
    'bento_sub2_label_ru': 'Распил ветвей на земле',
    'bento_sub2_alt_en': 'Ground worker in high-vis vest bucking fallen tree limb off structure',
    'bento_sub2_alt_ru': 'Рабочий в сигнальном жилете распиливает упавший ствол бензопилой',
    'equip1': {
      'name_en': 'High Canopy Arborist Friction Rigging Line', 'name_ru': 'Такелажная линия спуска ветвей',
      'badge_en': 'Controlled Overhead Rigging', 'badge_ru': 'Подвесной спуск',
      'image': '/images/grow/photo_001_crop.jpg',
      'desc_en': 'Photo shows arborist rigging line suspended in high mossy oak crown to lift heavy limbs off the roofline without sudden drop.',
      'desc_ru': 'На фото виден такелажный трос в кроне дуба для плавного приподнимания ствола с крыши без удара.'
    },
    'equip2': {
      'name_en': 'Standing Hollow Spar Takedown', 'name_ru': 'Валка гнилого аварийного ствола',
      'badge_en': 'Hazard Spar Removal', 'badge_ru': 'Спил гнилого ствола',
      'image': '/images/grow/photo_002_crop.jpg',
      'desc_en': 'Photo shows hollow dead tree trunk standing right beside building corner, carefully felled in sections to prevent structural collapse.',
      'desc_ru': 'На фото показан сухой дуплистый ствол рядом со стеной дома, разобранный по частям для предотвращения падения.'
    },
    'equip3': {
      'name_en': 'Precision Structural Protection Package', 'name_ru': 'Комплекс защиты конструкций',
      'badge_en': 'Roof & Siding Shielding', 'badge_ru': 'Защита кровли и сайдинга',
      'image': None,
      'desc_en': 'Heavy-duty rigging slings, load-bearing lifting jacks, and plywood structural pads to cushion roofs during delicate tree removal.',
      'desc_ru': 'Стропы высокой грузоподъемности, упорные домкраты и защитные щиты для безопасного съема бревен с крыш.'
    }
  },

  # 16. i-noah-guy
  'i-noah-guy': {
    'owner_en': 'Noah', 'owner_ru': 'Ноа',
    'theme': 'sky',
    'city_en': 'Jacksonville', 'city_ru': 'Джексонвилл',
    'state_en': 'FL', 'state_ru': 'Флорида', 'zip': '32225', 'street': 'Atlantic Blvd Coastal Corridor',
    'phone': '(904) 200-4381', 'phoneRaw': '9042004381',
    'tagline_en': 'Manicured Sabal Palm Shaping, Date Palm Diamond Cuts & Yard Pruning',
    'tagline_ru': 'Стрижка пальм сабаль, фигурная обрезка финиковых пальм и уход за садом',
    'slogan_en': 'Residential Florida Palm Specialists, Clean Diamond Shaving & Immaculate Grounds',
    'slogan_ru': 'Эксперты по пальмам во Флориде, алмазная стрижка стволов и идеальный газон',
    'main_photo': '/images/i-noah-guy/photo_001_crop.jpg',
    'bento_main_label_en': 'Manicured Florida Sabal Palms',
    'bento_main_label_ru': 'Пальмы сабаль на газоне',
    'bento_main_alt_en': 'Beautifully manicured sabal palms on residential front lawn with mulch beds',
    'bento_main_alt_ru': 'Ухоженные пальмы сабаль на зеленом газоне перед частным домом',
    'sub1_photo': '/images/i-noah-guy/photo_002_crop.jpg',
    'bento_sub1_label_en': 'Pineapple Cut Date Palm',
    'bento_sub1_label_ru': 'Фигурная стрижка «ананас»',
    'bento_sub1_alt_en': 'Pineapple-cut Canary Island date palm pruned neatly against vinyl fence',
    'bento_sub1_alt_ru': 'Финиковая пальма с фигурной стрижкой «ананас» у белого винилового забора',
    'sub2_photo': '/images/i-noah-guy/photo_003_crop.jpg',
    'bento_sub2_label_en': 'Side Yard Canopy Elevation',
    'bento_sub2_label_ru': 'Подъем кроны в проходе',
    'bento_sub2_alt_en': 'Trimmed ornamental hardwood tree in residential side yard between houses',
    'bento_sub2_alt_ru': 'Сформированное декоративное дерево в боковом проходе между домами',
    'equip1': {
      'name_en': 'Precision Palm Pruning & Skirt Shaving Gear', 'name_ru': 'Инструмент для фигурной стрижки пальм',
      'badge_en': 'Diamond Shaving Tools', 'badge_ru': 'Алмазная зачистка',
      'image': None,
      'desc_en': 'Specialized curved palm knives, pole saws, and non-invasive climbing gear designed to trim fronds and sculpt trunks without wounding tree bark.',
      'desc_ru': 'Изогнутые ножи, телескопические пилы и бережное снаряжение для идеальной зачистки черешков без повреждения ствола.'
    },
    'equip2': {
      'name_en': 'Turf-Friendly Debris Transport Cart', 'name_ru': 'Тележки с широкими шинами для дерна',
      'badge_en': 'Low-Impact Lawn Transport', 'badge_ru': 'Бережная перевозка',
      'image': None,
      'desc_en': 'Pneumatic-tired transport carts that haul hundreds of pounds of wet palm boots and fronds across golf-course quality sod with zero tracking.',
      'desc_ru': 'Тележки с мягкими пневматическими шинами для вывоза тяжелых пальмовых ветвей без продавливания газона.'
    },
    'equip3': {
      'name_en': 'High-Velocity Leaf Blower & Lawn Rake Kit', 'name_ru': 'Комплекс чистовой продувки газона',
      'badge_en': 'Spotless Clean Finish', 'badge_ru': 'Идеальная чистота',
      'image': None,
      'desc_en': 'Industrial backpack blowers and fine-tine rakes that collect all palm seeds, loose fronds, and fiber dust from landscape mulch beds.',
      'desc_ru': 'Мощные воздуходувки и садовые веерные грабли для сбора мелких семян, волокон и растительного сора с клумб и дорожек.'
    }
  },

  # 17. jsi
  'jsi': {
    'owner_en': 'Nathan', 'owner_ru': 'Нейтан',
    'theme': 'emerald',
    'city_en': 'Morganton', 'city_ru': 'Моргантон',
    'state_en': 'NC', 'state_ru': 'Северная Каролина', 'zip': '28655', 'street': 'Burke County Foothills Corridor',
    'phone': '(828) 448-7047', 'phoneRaw': '8284487047',
    'tagline_en': 'Commercial Forestry Bucket Rigging & High-Volume Timber Deck Staging',
    'tagline_ru': 'Работа с лесной автовышки и вывоз крупных объемов древесины',
    'slogan_en': 'Western North Carolina Commercial Timber Operations & Mountain Land Clearing',
    'slogan_ru': 'Профессиональная лесозаготовка, автовышки и расчистка участков в предгорьях Каролины',
    'main_photo': '/images/jsi/photo_001_crop.jpg',
    'bento_main_label_en': 'Commercial Forestry Bucket Truck',
    'bento_main_label_ru': 'Лесная автовышка',
    'bento_main_alt_en': 'Commercial forestry bucket truck with boom staged at edge of pine woods clearing',
    'bento_main_alt_ru': 'Лесная автовышка с телескопической стрелой на границе лесного массива',
    'sub1_photo': None,
    'sub2_photo': None,
    'equip1': {
      'name_en': 'Harvested Timber Log Deck Staging', 'name_ru': 'Складирование спиленных стволов',
      'badge_en': 'Timber Deck Management', 'badge_ru': 'Штабелевка леса',
      'image': '/images/jsi/photo_002_crop.jpg',
      'desc_en': 'Photo shows heavy harvested hardwood and pine timber logs sectioned and neatly stacked in an open pasture staging deck awaiting haul transport.',
      'desc_ru': 'На фото показан штабель спиленных сосновых и лиственных стволов в поле, подготовленный для погрузки лесовозом.'
    },
    'equip2': {
      'name_en': 'Forestry Aerial Bucket Boom Unit', 'name_ru': 'Автогидроподъемник для валки леса',
      'badge_en': '70-Foot Working Height', 'badge_ru': 'Высота стрелы 21 м',
      'image': None,
      'desc_en': 'Heavy-duty insulated aerial bucket truck with 70-foot reach, outriggers, and chip dump box for safe crown takedowns near power corridors.',
      'desc_ru': 'Внедорожный автогидроподъемник с вылетом стрелы до 21 метра для опиловки деревьев вдоль ЛЭП и дорог.'
    },
    'equip3': {
      'name_en': 'Heavy Timber Skidder & Log Crane Specs', 'name_ru': 'Лесозаготовительная спецтехника',
      'badge_en': 'Commercial Land Clearing', 'badge_ru': 'Тяжелые тягачи',
      'image': None,
      'desc_en': 'High-torque hydraulic grapple skidders and knuckleboom loaders for extracting massive tree boles from rough mountain terrain.',
      'desc_ru': 'Трелевочные тракторы и гидроманипуляторы для вытаскивания тяжелых хлыстов из оврагов и труднопроходимых мест.'
    }
  },

  # 18. lm-tree
  'lm-tree': {
    'owner_en': 'Logan & Tyler', 'owner_ru': 'Логан и Тайлер',
    'theme': 'teal',
    'city_en': 'Muskogee', 'city_ru': 'Маскоги',
    'state_en': 'OK', 'state_ru': 'Оклахома', 'zip': '74403', 'street': 'Eastern Oklahoma Plains Corridor',
    'phone': '(918) 616-9466', 'phoneRaw': '9186169466',
    'tagline_en': 'Storm Split Limb Removal, Wound Flush-Cuts & Clean Ground Care',
    'tagline_ru': 'Удаление надломленных штормом ветвей, спил заподлицо и уборка',
    'slogan_en': 'Family-Owned Oklahoma Arborists, Storm Damage Cleanup & Pristine Turf Care',
    'slogan_ru': 'Семейная бригада арбористов Оклахомы, ликвидация буреломов и чистота во дворе',
    'main_photo': '/images/lm-tree/photo_001_crop.jpg',
    'bento_main_label_en': 'Storm Split Limb Extraction',
    'bento_main_label_ru': 'Надломленный штормом ствол',
    'bento_main_alt_en': 'Large snapped storm-damaged branch split from mature tree trunk onto residential lawn',
    'bento_main_alt_ru': 'Крупная ветвь дерева, расщепленная ураганом и упавшая на газон во дворе',
    'sub1_photo': '/images/lm-tree/photo_003_crop.jpg',
    'bento_sub1_label_en': 'Trunk Wound Flush Cut',
    'bento_sub1_label_ru': 'Спил сука заподлицо',
    'bento_sub1_alt_en': 'Close-up of clean flush cut on storm-broken tree trunk with crew member in background',
    'bento_sub1_alt_ru': 'Крупный план чистового спила поврежденного сука без задира коры',
    'sub2_photo': '/images/lm-tree/photo_004_crop.jpg',
    'bento_sub2_label_en': 'Manual Brush Hauling Sweep',
    'bento_sub2_label_ru': 'Переноска срезанных веток',
    'bento_sub2_alt_en': 'Crew member carrying cut tree limbs across front lawn to haul truck',
    'bento_sub2_alt_ru': 'Рабочий бригады переносит срезанные сучья по газону к грузовику',
    'equip1': {
      'name_en': 'Driveway Canopy Elevation & Pruning', 'name_ru': 'Подъем кроны над подъездным путем',
      'badge_en': 'Driveway Clearance', 'badge_ru': 'Свободный проезд',
      'image': '/images/lm-tree/photo_002_crop.jpg',
      'desc_en': 'Photo shows mature shade tree next to residential concrete driveway with crown trimmed and elevated for clear vehicle access.',
      'desc_ru': 'На фото показано взрослое дерево рядом с бетонированной дорожкой: крона приподнята, проезд автомобилям не мешает.'
    },
    'equip2': {
      'name_en': 'Heavy Chipper Truck & Enclosed Dump Box', 'name_ru': 'Грузовик-щеповоз с закрытым кузовом',
      'badge_en': 'High-Volume Chipping', 'badge_ru': 'Утилизация щепы',
      'image': None,
      'desc_en': 'Commercial medium-duty chip hauler with custom steel sideboards and top tarp, paired with high-volume Vermeer disc chipper.',
      'desc_ru': 'Среднетоннажный грузовик с высокими металлическими бортами для вывоза измельченной древесины без пыли.'
    },
    'equip3': {
      'name_en': 'Arborist Rigging Line & Bull Rope Package', 'name_ru': 'Такелажные канаты для арбористики',
      'badge_en': 'Safe Limb Lowering', 'badge_ru': 'Плавный спуск',
      'image': None,
      'desc_en': 'High-tenacity polyester lowering lines and friction blocks that prevent torn branches from dropping onto fences and flowerbeds.',
      'desc_ru': 'Специальные арбористские веревки и спусковые устройства, исключающие падение веток на заборы и клумбы.'
    }
  },

  # 19. limbwalkers
  'limbwalkers': {
    'owner_en': 'Caleb', 'owner_ru': 'Калеб',
    'theme': 'amber',
    'city_en': 'Morganton', 'city_ru': 'Моргантон',
    'state_en': 'NC', 'state_ru': 'Северная Каролина', 'zip': '28655', 'street': 'Foothills High Country Corridor',
    'phone': '(828) 413-7227', 'phoneRaw': '8284137227',
    'tagline_en': 'Heavy Knuckleboom Crane Removal, Grapple Truck Hauling & Emergency Roof Rescue',
    'tagline_ru': 'Спил краном-манипулятором, вывоз грейфером и снятие деревьев с крыш',
    'slogan_en': 'High-Tonnage Hydraulic Crane Takedowns, Storm Disaster Recovery & Bobcat Yard Grading',
    'slogan_ru': 'Спил деревьев тяжелым автокраном, ликвидация последствий бурь и планировка двора мини-погрузчиком',
    'main_photo': '/images/limbwalkers/photo_006_crop.jpg',
    'bento_main_label_en': 'Knuckleboom Crane Overhead Removal',
    'bento_main_label_ru': 'Спил автокраном над крышей',
    'bento_main_alt_en': 'Commercial knuckleboom arborist crane lifting heavy branches clear of residential garage',
    'bento_main_alt_ru': 'Кран-манипулятор переносит тяжелую ветку дуба над крышей гаража',
    'sub1_photo': '/images/limbwalkers/photo_005_crop.jpg',
    'bento_sub1_label_en': 'Severe Roof Blowdown Impact',
    'bento_sub1_label_ru': 'Упавшее на кровлю дерево',
    'bento_sub1_alt_en': 'Massive storm blowdown trees crushed across residential home and garage roof',
    'bento_sub1_alt_ru': 'Тяжелый ветровал: упавшие деревья на крыше дома и гаража после шторма',
    'sub2_photo': '/images/limbwalkers/photo_013_crop.jpg',
    'bento_sub2_label_en': 'Commercial Grapple Loader Truck',
    'bento_sub2_label_ru': 'Грейферный лесовоз с захватом',
    'bento_sub2_alt_en': 'Heavy red knuckleboom grapple loader truck servicing mature tree canopy',
    'bento_sub2_alt_ru': 'Грузовик с гидроманипулятором и грейферным захватом на вывозе бревен',
    'equip1': {
      'name_en': 'Heavy Timber Crane Sling Rigging', 'name_ru': 'Крановый такелаж тяжелых бревен',
      'badge_en': 'Precision Crane Lifting', 'badge_ru': 'Подъем многотонных стволов',
      'image': '/images/limbwalkers/photo_007_crop.jpg',
      'desc_en': 'Photo shows the hydraulic crane arm lifting a massive horizontal hardwood tree trunk in synthetic balance slings high above the driveway.',
      'desc_ru': 'На фото зафиксирован подъем многотонного бревна на стропах крана над подъездной дорожкой для безопасной погрузки.'
    },
    'equip2': {
      'name_en': 'Track Compact Loader Ground Grading', 'name_ru': 'Выравнивание участка гусеничным мини-погрузчиком',
      'badge_en': 'Bobcat Lot Restoration', 'badge_ru': 'Планировка грунта',
      'image': '/images/limbwalkers/photo_011_crop.jpg',
      'desc_en': 'Photo shows orange compact track loader actively grading and leveling soil in a residential yard following tree extraction.',
      'desc_ru': 'На фото показан компактный гусеничный погрузчик, выравнивающий грунт во дворе после корчевки пней.'
    },
    'equip3': {
      'name_en': 'Hardwood Stump Flush-Cut & Milling Prep', 'name_ru': 'Спил пня под корень перед фрезерованием',
      'badge_en': 'Stump Extraction Prep', 'badge_ru': 'Подготовка к дроблению',
      'image': '/images/limbwalkers/photo_009_crop.jpg',
      'desc_en': 'Photo shows hardwood stump cleanly sectioned at ground level in open yard, prepared for subsurface grinding without disturbing surroundings.',
      'desc_ru': 'На фото показан низко срезанный пень на открытой поляне, подготовленный к быстрому измельчению фрезой.'
    }
  },

  # 20. rosales
  'rosales': {
    'owner_en': 'Rodrigo', 'owner_ru': 'Родриго',
    'theme': 'sky',
    'city_en': 'Houston', 'city_ru': 'Хьюстон',
    'state_en': 'TX', 'state_ru': 'Техас', 'zip': '77084', 'street': 'Harris County Metro Corridor',
    'phone': '(281) 804-5020', 'phoneRaw': '2818045020',
    'tagline_en': 'Commercial Brush Chipping, Pine Canopy Rigging & Deep Stump Milling',
    'tagline_ru': 'Промышленное измельчение веток, высотный спил сосен и дробление пней',
    'slogan_en': 'Commercial Chipping Fleet, Expert Houston Climbers & Zero Turf Disturbance',
    'slogan_ru': 'Мощные измельчители веток, опытные хьюстонские арбористы и безупречный газон',
    'main_photo': '/images/rosales/photo_001_crop.jpg',
    'bento_main_label_en': 'Commercial Brush Chipper & Chip Truck',
    'bento_main_label_ru': 'Измельчитель веток и щеповоз',
    'bento_main_alt_en': 'High-capacity orange brush chipper hitched to commercial forestry dump truck with crew',
    'bento_main_alt_ru': 'Промышленная дробилка веток и белый грузовик-щеповоз с бригадой арбористов',
    'sub1_photo': '/images/rosales/photo_011_crop.jpg',
    'bento_sub1_label_en': 'High Pine Canopy Climber',
    'bento_sub1_label_ru': 'Арборист на верхушке сосны',
    'bento_sub1_alt_en': 'Arborist climber aloft in high pine crown against clear blue sky',
    'bento_sub1_alt_ru': 'Арборист-верхолаз в кроне высокой сосны на фоне ясного неба',
    'sub2_photo': '/images/rosales/photo_008_crop.jpg',
    'bento_sub2_label_en': 'Architectural Entranceway Pruning',
    'bento_sub2_label_ru': 'Формирование кроны у входа',
    'bento_sub2_alt_en': 'Manicured live oak tree framing residential paved entrance and manicured flowerbeds',
    'bento_sub2_alt_ru': 'Сформированный дуб над парадным входом и мощеной дорожкой дома',
    'equip1': {
      'name_en': 'Roadside Fleet Staging & Active Chipping', 'name_ru': 'Работа измельчителя на объекте',
      'badge_en': 'Active Brush Processing', 'badge_ru': 'Быстрая переработка',
      'image': '/images/rosales/photo_010_crop.jpg',
      'desc_en': 'Photo shows forestry chip truck and chipper staged along residential curb, feeding cut oak branches directly into the enclosed box.',
      'desc_ru': 'На фото показан рабочий процесс: ветви дуба подаются в измельчитель на обочине, щепа улетает в закрытый кузов.'
    },
    'equip2': {
      'name_en': 'Subsurface Stump Milling & Grass Restoration', 'name_ru': 'Дробление пня без повреждения травы',
      'badge_en': 'Zero Lawn Impact Finish', 'badge_ru': 'Идеальный дерн',
      'image': '/images/rosales/photo_012_crop.jpg',
      'desc_en': 'Photo shows finished stump grinding cavity in lush green lawn, backfilled with clean mulch with zero tracking on surrounding sod.',
      'desc_ru': 'На фото показано место удаленного пня на зеленом газоне: корни измельчены, лунка засыпана, соседняя трава не задета.'
    },
    'equip3': {
      'name_en': 'Roofline Hazard Clearance & Gable Protection', 'name_ru': 'Спил нависших веток над фронтоном',
      'badge_en': 'Gable Roof Clearance', 'badge_ru': 'Защита кровли дома',
      'image': '/images/rosales/photo_013_crop.jpg',
      'desc_en': 'Photo shows tall pine tree soaring over a residential gable roofline, with hazardous overhang branches safely trimmed back.',
      'desc_ru': 'На фото показана сосна над крышей дома: нависавшие сучья аккуратно удалены с соблюдением безопасной дистанции.'
    }
  },

  # 21. maldonado
  'maldonado': {
    'owner_en': 'Maldonado', 'owner_ru': 'Мальдонадо',
    'theme': 'emerald',
    'city_en': 'Houston', 'city_ru': 'Хьюстон',
    'state_en': 'TX', 'state_ru': 'Техас', 'zip': '77093', 'street': 'North Houston Metro Corridor',
    'phone': '(832) 679-5637', 'phoneRaw': '8326795637',
    'tagline_en': 'Chainsaw Timber Sectioning, Oak Crown Topping & Driveway Blower Sweep',
    'tagline_ru': 'Распил стволов бензопилой, верхолазный спил дубов и продувка дорожек',
    'slogan_en': 'Hardworking Houston Arborist Crew, Precision Rigging & Spotless Lawn Handover',
    'slogan_ru': 'Опытная хьюстонская бригада вальщиков, аккуратный такелаж и чистый газон',
    'main_photo': '/images/maldonado/photo_013_crop.jpg',
    'bento_main_label_en': 'Lead Chainsaw Operator Bucking Oak',
    'bento_main_label_ru': 'Раскряжевка дуба бензопилой',
    'bento_main_alt_en': 'Lead arborist in orange shirt and hardhat bucking large oak trunk into rounds',
    'bento_main_alt_ru': 'Вальщик в каске и яркой рубашке распиливает ствол дуба на чурбаки',
    'sub1_photo': '/images/maldonado/photo_010_crop.jpg',
    'bento_sub1_label_en': 'Canopy Climber Topping High Spar',
    'bento_sub1_label_ru': 'Арборист на макушке ствола',
    'bento_sub1_alt_en': 'Arborist climber atop limbed oak tree spar during sectional dismantling',
    'bento_sub1_alt_ru': 'Верхолаз на верхушке спиливаемого ствола дуба во время высотных работ',
    'sub2_photo': '/images/maldonado/photo_012_crop.jpg',
    'bento_sub2_label_en': 'Driveway Chipper & Blower Sweep',
    'bento_sub2_label_ru': 'Продувка бетона и погрузка щепы',
    'bento_sub2_alt_en': 'STIHL backpack blower and wood chipper cleaning concrete driveway of tree debris',
    'bento_sub2_alt_ru': 'Ранцевая воздуходувка и измельчитель веток на уборке бетонного проезда',
    'equip1': {
      'name_en': 'Chainsaw Flush-Cut Stump Reduction', 'name_ru': 'Спил пня бензопилой вровень с землей',
      'badge_en': 'Flush-Cut Preparation', 'badge_ru': 'Низкий срез пня',
      'image': '/images/maldonado/photo_005_crop.jpg',
      'desc_en': 'Photo shows clean flush cut on hardwood stump resting in landscape mulch bed with chainsaw alongside.',
      'desc_ru': 'На фото показан ровный спил пня вровень с клумбой, выполненный профессиональной бензопилой.'
    },
    'equip2': {
      'name_en': 'Architectural Live Oak Structural Thinning', 'name_ru': 'Структурная обрезка живого дуба',
      'badge_en': 'Live Oak Preservation', 'badge_ru': 'Сохранение дубов',
      'image': '/images/maldonado/photo_007_crop.jpg',
      'desc_en': 'Photo shows spreading live oak tree in front residential yard pruned for balanced branch architecture and wind resistance.',
      'desc_ru': 'На фото запечатлен раскидистый дуб на лужайке перед домом: прореживание кроны для защиты от ветровых нагрузок.'
    },
    'equip3': {
      'name_en': 'Overhanging Garage Roofline Clearance', 'name_ru': 'Спил веток над крышей гаража',
      'badge_en': 'Roof Hazard Mitigation', 'badge_ru': 'Защита кровли гаража',
      'image': '/images/maldonado/photo_004_crop.jpg',
      'desc_en': 'Photo shows dense tree canopy hanging directly over residential garage roof, targeted for clearance trimming to protect shingles.',
      'desc_ru': 'На фото показаны ветви, лежащие над скатом крыши гаража: бережная обрезка для сохранности черепицы.'
    }
  },

  # 22. morgans
  'morgans': {
    'owner_en': 'Mike Morgan', 'owner_ru': 'Майк Морган',
    'theme': 'teal',
    'city_en': 'Rock Hill', 'city_ru': 'Рок-Хилл',
    'state_en': 'SC', 'state_ru': 'Южная Каролина', 'zip': '29730', 'street': 'Piedmont Carolina Corridor',
    'phone': '(803) 981-9085', 'phoneRaw': '8039819085',
    'tagline_en': 'Hazard Limb Removal, Flush Stump Cutting & Clean Lawn Care',
    'tagline_ru': 'Удаление аварийных сучьев, спил пней под корень и уход за газоном',
    'slogan_en': 'Piedmont Arborist Rigging, Fence Protection & Spotless Yard Handover',
    'slogan_ru': 'Такелажные работы в Каролине, защита заборов и аккуратная сдача участка',
    'main_photo': '/images/morgans/photo_001_crop.jpg',
    'bento_main_label_en': 'Fence-Line Split Branch Fracture',
    'bento_main_label_ru': 'Надломленная ветвь у забора',
    'bento_main_alt_en': 'Large broken hazard limb dangling along residential wooden fence line',
    'bento_main_alt_ru': 'Тяжелая сломанная ветка, зависшая вдоль деревянного забора',
    'sub1_photo': '/images/morgans/photo_004_crop.jpg',
    'bento_sub1_label_en': 'Flush Stump Cut & Root Flare',
    'bento_sub1_label_ru': 'Спил пня у забора',
    'bento_sub1_alt_en': 'Close-up of flush-cut tree stump surrounded by sawdust in fence corner',
    'bento_sub1_alt_ru': 'Спил пня под корень в углу забора с опилками вокруг',
    'sub2_photo': '/images/morgans/photo_006_crop.jpg',
    'bento_sub2_label_en': 'Manicured Finished Backyard Lawn',
    'bento_sub2_label_ru': 'Чистый убранный газон',
    'bento_sub2_alt_en': 'Manicured green residential backyard lawn after complete tree removal',
    'bento_sub2_alt_ru': 'Зеленый подстриженный газон во дворе после вывоза всех спиленных деревьев',
    'equip1': {
      'name_en': 'Delicate Split-Rail Fence Limb Extraction', 'name_ru': 'Спил ветви над деревянным забором',
      'badge_en': 'Fence Safety Work', 'badge_ru': 'Сохранность ограды',
      'image': '/images/morgans/photo_002_crop.jpg',
      'desc_en': 'Photo shows snapped tree branch broken off trunk right beside a split-rail wooden fence with birdhouse, removed without touching rails.',
      'desc_ru': 'На фото виден надломленный сук прямо над деревянной изгородью со скворечником: аккуратный спил без повреждения реек.'
    },
    'equip2': {
      'name_en': 'High-Volume Brush Chipping & Debris Staging', 'name_ru': 'Складирование веток для щепореза',
      'badge_en': 'Branch Staging', 'badge_ru': 'Сбор сучьев',
      'image': '/images/morgans/photo_005_crop.jpg',
      'desc_en': 'Photo shows felled tree branches and dense vegetative growth staged in the yard ready for wood chipper processing.',
      'desc_ru': 'На фото показаны срезанные ветви и сучья, аккуратно сложенные на траве перед запуском в измельчитель.'
    },
    'equip3': {
      'name_en': 'Screened Porch Proximity Tree Dismantling', 'name_ru': 'Спил дерева возле веранды',
      'badge_en': 'Porch Protection', 'badge_ru': 'Защита пристройки',
      'image': '/images/morgans/photo_003_crop.jpg',
      'desc_en': 'Photo shows cleared yard next to an elevated screened porch where a hazardous tree was dismantled with zero impact on screens.',
      'desc_ru': 'На фото показан расчищенный участок рядом с застекленной верандой: дерево удалено без малейшего повреждения москитных сеток.'
    }
  },

  # 23. norvells
  'norvells': {
    'owner_en': 'Stevie', 'owner_ru': 'Стиви',
    'theme': 'amber',
    'city_en': 'Spartanburg', 'city_ru': 'Спартанберг',
    'state_en': 'SC', 'state_ru': 'Южная Каролина', 'zip': '29301', 'street': 'Upstate Carolina Foothills',
    'phone': '(864) 345-0466', 'phoneRaw': '8643450466',
    'tagline_en': 'Track Spider Lift Canopy Access & Emergency Storm Tree Removal',
    'tagline_ru': 'Спил деревьев с паукообразного подъемника и ликвидация буреломов',
    'slogan_en': 'Compact Track Spider Lift Reach, Storm Disaster Recovery & Spotless Yards',
    'slogan_ru': 'Гусеничный подъемник-паук для труднодоступных мест, выезд после штормов и чистота',
    'main_photo': '/images/norvells/photo_001_crop.jpg',
    'bento_main_label_en': 'Track Spider Lift Canopy Ascent',
    'bento_main_label_ru': 'Гусеничный паук-подъемник',
    'bento_main_alt_en': 'Red track compact spider lift with outriggers deployed reaching up into tall hardwood tree',
    'bento_main_alt_ru': 'Красный гусеничный подъемник-паук на гидравлических опорах поднимает корзину в крону дуба',
    'sub1_photo': '/images/norvells/photo_002_crop.jpg',
    'bento_sub1_label_en': 'Massive Storm Split Trunk on Lawn',
    'bento_sub1_label_ru': 'Расколотый штормом ствол',
    'bento_sub1_alt_en': 'Emergency storm disaster: massive split tree trunk fallen across residential front lawn',
    'bento_sub1_alt_ru': 'Расколотый ураганом огромный ствол дерева, упавший на лужайку перед кирпичным домом',
    'sub2_photo': '/images/norvells/photo_003_crop.jpg',
    'bento_sub2_label_en': 'Clean Ground & Yard Restoration',
    'bento_sub2_label_ru': 'Чистый газон после уборки',
    'bento_sub2_alt_en': 'Residential lawn cleared and raked after complete tree removal near brick home',
    'bento_sub2_alt_ru': 'Убранный и выровненный граблями двор возле кирпичного дома после вывоза дерева',
    'equip1': {
      'name_en': 'Tracked Spider Lift / Compact Aerial Boom', 'name_ru': 'Компактный гусеничный подъемник',
      'badge_en': '72-Foot Narrow Access', 'badge_ru': 'Высота 22 м в калитку',
      'image': None,
      'desc_en': 'Narrow-chassis rubber track spider lift that fits through a 36-inch garden gate and elevates operators up to 72 feet into tight canopies.',
      'desc_ru': 'Самоходный подъемник на гусеницах: проходит в садовые калитки от 90 см и поднимает мастера на высоту до 22 метров.'
    },
    'equip2': {
      'name_en': 'Sectional Chainsaw Rigging & Ground Protection', 'name_ru': 'Такелажный комплекс с защитой дерна',
      'badge_en': 'Controlled Sectioning', 'badge_ru': 'Пошаговый спуск',
      'image': None,
      'desc_en': 'Friction lowering blocks and heavy synthetic rigging lines designed to bring down massive hardwood timber without impacting lawns.',
      'desc_ru': 'Силовой такелаж для аккуратного опускания бревен без динамического удара о газон.'
    },
    'equip3': {
      'name_en': 'Rapid Storm Disaster Response Fleet', 'name_ru': 'Бригада быстрого реагирования на штормы',
      'badge_en': '24/7 Storm Recovery', 'badge_ru': 'Круглосуточный выезд',
      'image': None,
      'desc_en': 'Equipped with heavy timber winches, commercial brush chippers, and debris trucks for immediate clearance of fallen storm trees.',
      'desc_ru': 'Полный комплект моторизованного инструмента, дробилок и грузовиков для экстренной ликвидации последствий ураганов.'
    }
  },

  # 24. panhandle
  'panhandle': {
    'owner_en': 'Mike', 'owner_ru': 'Майк',
    'theme': 'sky',
    'city_en': 'Chipley', 'city_ru': 'Чипли',
    'state_en': 'FL', 'state_ru': 'Флорида', 'zip': '32428', 'street': 'Florida Panhandle I-10 Corridor',
    'phone': '(850) 851-5297', 'phoneRaw': '8508515297',
    'tagline_en': 'Arborist Climber Rigging, Tight-Quarters Felling & Alleyway Clearance',
    'tagline_ru': 'Верхолазный спил деревьев, работа в стесненных условиях и очистка проходов',
    'slogan_en': 'Florida Panhandle Certified Climbers, High Safety Standards & Spotless Cleanups',
    'slogan_ru': 'Арбористы Флориды, профессиональное альпинистское снаряжение и аккуратный вывоз',
    'main_photo': '/images/panhandle/photo_005_crop.jpg',
    'bento_main_label_en': 'Arborist Climber with Neon Rigging',
    'bento_main_label_ru': 'Арборист на высоте со снаряжением',
    'bento_main_alt_en': 'Arborist climber in helmet and safety harness with neon climbing ropes in canopy',
    'bento_main_alt_ru': 'Арборист в защитной каске и страховочной беседке с сигнальными веревками в кроне',
    'sub1_photo': '/images/panhandle/photo_001_crop.jpg',
    'bento_sub1_label_en': 'Leaning Tree by Residential Structure',
    'bento_sub1_label_ru': 'Опасное наклоненное дерево',
    'bento_sub1_alt_en': 'Large leaning hardwood tree growing tight beside residential turquoise home',
    'bento_sub1_alt_ru': 'Наклоненное дерево, растущее вплотную к стене бирюзового дома',
    'sub2_photo': '/images/panhandle/photo_003_crop.jpg',
    'bento_sub2_label_en': 'Cleared Alleyway & Structure Access',
    'bento_sub2_label_ru': 'Расчищенный проход между домами',
    'bento_sub2_alt_en': 'Narrow passage between homes cleared of overgrown branches and debris',
    'bento_sub2_alt_ru': 'Узкий проход между строениями, полностью освобожденный от нависавших веток',
    'equip1': {
      'name_en': 'Overhang Canopy Pruning Above Sunroom', 'name_ru': 'Обрезка кроны над остекленной верандой',
      'badge_en': 'Sunroom Canopy Clearance', 'badge_ru': 'Защита остекления',
      'image': '/images/panhandle/photo_002_crop.jpg',
      'desc_en': 'Photo shows multi-stem tree canopy spreading over residential roof and sunroom, trimmed back to prevent roof and glass damage.',
      'desc_ru': 'На фото показано дерево над крышей остекленной пристройки: ветви спилены с сохранением стекол и кровли.'
    },
    'equip2': {
      'name_en': 'Debris Hauling Access & Truck Staging', 'name_ru': 'Вывоз порубочных остатков пикапом',
      'badge_en': 'Narrow Access Staging', 'badge_ru': 'Маневрирование во дворе',
      'image': '/images/panhandle/photo_004_crop.jpg',
      'desc_en': 'Photo shows cleared driveway alleyway with service truck staged for dragging and loading tree limbs from tight backyards.',
      'desc_ru': 'На фото показан освобожденный проезд и стоящий автомобиль бригады для погрузки веток из труднодоступного двора.'
    },
    'equip3': {
      'name_en': 'Tight-Access Arborist Rigging Kit', 'name_ru': 'Комплект компактного арбористского такелажа',
      'badge_en': 'Zero-Impact Dismantling', 'badge_ru': 'Спил в стесненных условиях',
      'image': None,
      'desc_en': 'Lightweight arborist friction blocks, false crotch slings, and taglines designed for safely lowering heavy limbs in tight residential setbacks.',
      'desc_ru': 'Компактные арбористские блоки и оттяжки для плавного спуска спиливаемых веток в узких междомовых проходах.'
    }
  },

  # 25. pro-beaver
  'pro-beaver': {
    'owner_en': 'Ivan', 'owner_ru': 'Иван',
    'theme': 'emerald',
    'city_en': 'Waxhaw', 'city_ru': 'Уоксхо',
    'state_en': 'NC', 'state_ru': 'Северная Каролина', 'zip': '28173', 'street': 'Union County Carolina Corridor',
    'phone': '(980) 833-4894', 'phoneRaw': '9808334894',
    'tagline_en': 'Directional Timber Felling, Spar Pollarding & Lot Clearing',
    'tagline_ru': 'Точная валка деревьев, кронирование высоких стволов и расчистка участков',
    'slogan_en': 'Skilled Arborist Climbers, Heavy Chainsaw Timber Bucking & Clean Ground Handover',
    'slogan_ru': 'Опытные арбористы-высотники, профессиональная раскряжевка бревен и чистый двор',
    'main_photo': '/images/pro-beaver/photo_002_crop.jpg',
    'bento_main_label_en': 'Directional Hardwood Timber Felling',
    'bento_main_label_ru': 'Направленная валка и распил',
    'bento_main_alt_en': 'Massive felled tree trunk cleanly sectioned into large logs on yard grounds',
    'bento_main_alt_ru': 'Поваленный ствол крупного дерева, аккуратно распиленный на бревна во дворе',
    'sub1_photo': '/images/pro-beaver/photo_009_crop.jpg',
    'bento_sub1_label_en': 'Arborist Climber Aloft on Multi-Spar',
    'bento_sub1_label_ru': 'Арборист на развилке ствола',
    'bento_sub1_alt_en': 'Arborist climber perched atop pollarded hardwood trunk following limb removal',
    'bento_sub1_alt_ru': 'Арборист на высоте спиливает ветви развилки массивного ствола',
    'sub2_photo': '/images/pro-beaver/photo_001_crop.jpg',
    'bento_sub2_label_en': 'Porch Proximity Tree Assessment',
    'bento_sub2_label_ru': 'Оценка дерева рядом с крыльцом',
    'bento_sub2_alt_en': 'Large mature deciduous shade tree standing beside residential porch',
    'bento_sub2_alt_ru': 'Крупное лиственное дерево рядом с верандой дома перед началом работ',
    'equip1': {
      'name_en': 'Sectional Pollarding & Vertical Spar Dismantling', 'name_ru': 'Посекционный разбор развилки ствола',
      'badge_en': 'Vertical Spar Work', 'badge_ru': 'Вертикальный спил',
      'image': '/images/pro-beaver/photo_004_crop.jpg',
      'desc_en': 'Photo shows multi-stem tree trunk pollarded and stripped of dangerous branches by garden fence, standing safely ready for final cuts.',
      'desc_ru': 'На фото показан ствол с аккуратно удаленными боковыми ветвями у забора: безопасная подготовка к окончательному спилу.'
    },
    'equip2': {
      'name_en': 'Lot Clearance & Heavy Timber Log Extraction', 'name_ru': 'Расчистка территории и вывоз бревен',
      'badge_en': 'Timber Lot Clearing', 'badge_ru': 'Расчистка участка',
      'image': '/images/pro-beaver/photo_007_crop.jpg',
      'desc_en': 'Photo shows cleared residential lot with felled pine log sectioned and sawdust cleaned away from nearby buildings.',
      'desc_ru': 'На фото видна расчищенная территория участка: сосновые бревна распилены, площадка подметена.'
    },
    'equip3': {
      'name_en': 'Structural Proximity Timber Staging & Clearing', 'name_ru': 'Складирование бревен у здания',
      'badge_en': 'Structure Clearance', 'badge_ru': 'Работа у фасада',
      'image': '/images/pro-beaver/photo_010_crop.jpg',
      'desc_en': 'Photo shows cut pine rounds and low stump cleanly sectioned along residential home corner without any contact with the building.',
      'desc_ru': 'На фото показаны распиленные чурбаки и низкий срез пня у угла дома: работа выполнена с идеальной точностью.'
    }
  },

  # 26. ss-tree
  'ss-tree': {
    'owner_en': 'Scott', 'owner_ru': 'Скотт',
    'theme': 'teal',
    'city_en': 'Jacksonville', 'city_ru': 'Джексонвилл',
    'state_en': 'FL', 'state_ru': 'Флорида', 'zip': '32210', 'street': 'Duval County St Johns River Corridor',
    'phone': '(904) 510-9359', 'phoneRaw': '9045109359',
    'tagline_en': 'Commercial Tree Removal, Heavy Rigging & Track Stump Grinding',
    'tagline_ru': 'Спил деревьев, силовой такелаж и гусеничное дробление пней',
    'slogan_en': 'Precision Jacksonville Tree Care, Ground Protection Mats & Spotless Handover',
    'slogan_ru': 'Аккуратный спил деревьев в Джексонвилле, защита дерна настилами и чистый двор',
    'main_photo': '/images/tecos/heavy-rigging_crop.jpg',
    'bento_main_label_en': 'Heavy Sectional Rigging',
    'bento_main_label_ru': 'Силовой такелаж стволов',
    'bento_main_alt_en': 'Arborist crew performing heavy sectional tree lowering with bull ropes',
    'bento_main_alt_ru': 'Арбористы производят спуск тяжелых частей ствола на тросах',
    'sub1_photo': None,
    'sub2_photo': None,
    'equip1': {
      'name_en': 'Heavy Tree Removal & Sectional Lowering', 'name_ru': 'Посекционный спил и спуск на веревках',
      'badge_en': 'Controlled Sectional Takedown', 'badge_ru': 'Безопасный спуск',
      'image': None,
      'desc_en': 'Complete arborist rigging system with friction lowering brakes and high-tenacity bull ropes for dismantling dangerous trees above houses.',
      'desc_ru': 'Арбористский такелажный комплекс с тормозными барабанами для безопасного разбора аварийных деревьев над крышами.'
    },
    'equip2': {
      'name_en': 'Commercial Track Stump Grinder Unit', 'name_ru': 'Промышленная гусеничная пнедробилка',
      'badge_en': 'Subsurface Milling', 'badge_ru': 'Дробление ниже уровня земли',
      'image': None,
      'desc_en': 'Self-propelled rubber track grinder capable of passing narrow gates and milling stumps 12 inches below ground grade.',
      'desc_ru': 'Гусеничная пнедробилка для измельчения пней и корней на глубину до 30 см с сохранением целостности дерна.'
    },
    'equip3': {
      'name_en': 'Enclosed Debris Haul Trailer & Turf Protection', 'name_ru': 'Самосвальный прицеп и настилы для газона',
      'badge_en': 'Zero Yard Damage System', 'badge_ru': 'Защита газона',
      'image': None,
      'desc_en': 'Heavy debris dump trailer paired with poly ground mats to prevent tire rutting on wet Florida sandy turf.',
      'desc_ru': 'Вместительный прицеп для щепы и защитные настилы под колеса техники для предотвращения образования колеи на траве.'
    }
  },

  # 27. stones
  'stones': {
    'owner_en': 'Christian Stone', 'owner_ru': 'Кристиан Стоун',
    'theme': 'amber',
    'city_en': 'Taylors', 'city_ru': 'Тейлорс',
    'state_en': 'SC', 'state_ru': 'Южная Каролина', 'zip': '29687', 'street': 'Greenville County Upstate Corridor',
    'phone': '(864) 914-1381', 'phoneRaw': '8649141381',
    'tagline_en': 'Commercial Vermeer Fleet, Subsurface Root Milling & Estate Ground Care',
    'tagline_ru': 'Техника Vermeer, глубокое фрезерование корней и уход за частными владениями',
    'slogan_en': 'Commercial Transport Fleet, Precision Root Flare Excavation & Spotless Estate Grounds',
    'slogan_ru': 'Собственный автопарк со спецтехникой, тщательное удаление корней и идеальный порядок',
    'main_photo': '/images/stones/photo_002_crop.jpg',
    'bento_main_label_en': 'Commercial Vermeer Equipment Hauler',
    'bento_main_label_ru': 'Тяжелый эвакуатор с техникой Vermeer',
    'bento_main_alt_en': 'Commercial flatbed hauler truck loaded with yellow Vermeer forestry machinery on residential curb',
    'bento_main_alt_ru': 'Грузовой эвакуатор с пнедробилкой и спецтехникой Vermeer на улице заказчика',
    'sub1_photo': '/images/stones/photo_006_crop.jpg',
    'bento_sub1_label_en': 'Manicured Estate Ground Finish',
    'bento_sub1_label_ru': 'Ухоженная территория поместья',
    'bento_sub1_alt_en': 'Finished residential landscape with paved circular driveway and manicured shrubbery',
    'bento_sub1_alt_ru': 'Ухоженный ландшафт с круговым подъездом и подстриженными кронами деревьев',
    'sub2_photo': '/images/stones/photo_007_crop.jpg',
    'bento_sub2_label_en': 'Graded Forest Border Mulch Bed',
    'bento_sub2_label_ru': 'Выровненная лесная граница',
    'bento_sub2_alt_en': 'Forest boundary line graded and mulched cleanly behind manicured residential lawn',
    'bento_sub2_alt_ru': 'Граница лесной зоны за газоном, расчищенная и отсыпанная ровным слоем мульчи',
    'equip1': {
      'name_en': 'Subsurface Root Flare Exploration & Stump Prep', 'name_ru': 'Обнажение и фрезерование корневых лап',
      'badge_en': 'Root Flare Excavation', 'badge_ru': 'Глубокая выборка корней',
      'image': '/images/stones/photo_008_crop.jpg',
      'desc_en': 'Photo shows massive pine stump with extensive radial surface roots exposed prior to deep grinding below grade.',
      'desc_ru': 'На фото показан крупный пень с обнаженными радиальными корнями, подготовленный к глубокому фрезерованию.'
    },
    'equip2': {
      'name_en': 'Full Lot Brush Clearing & Mulch Bed Grading', 'name_ru': 'Расчистка подлеска и планировка мульчи',
      'badge_en': 'Lot Brush Clearance', 'badge_ru': 'Планировка участка',
      'image': '/images/stones/photo_009_crop.jpg',
      'desc_en': 'Photo shows open residential ground completely cleared of brush and stumps, covered in a smooth, uniform layer of organic mulch.',
      'desc_ru': 'На фото видна расчищенная территория двора: пни и сорняки удалены, грунт отсыпан чистым слоем щепы.'
    },
    'equip3': {
      'name_en': 'Close-Proximity Foundation Felling & Trunk Bucking', 'name_ru': 'Спил дерева у фундамента дома',
      'badge_en': 'Foundation Tree Removal', 'badge_ru': 'Спил вплотную к дому',
      'image': '/images/stones/photo_010_crop.jpg',
      'desc_en': 'Photo shows massive tree trunk sectioned in tight space directly adjacent to residential brick foundation and patio.',
      'desc_ru': 'На фото зафиксирован распил ствола в узком пространстве прямо возле кирпичного фундамента жилого дома.'
    }
  },

  # 28. superior
  'superior': {
    'owner_en': 'Naomi', 'owner_ru': 'Наоми',
    'theme': 'sky',
    'city_en': 'Senoia', 'city_ru': 'Сеноя',
    'state_en': 'GA', 'state_ru': 'Джорджия', 'zip': '30276', 'street': 'Coweta County Historic Route',
    'phone': '(678) 491-4703', 'phoneRaw': '6784914703',
    'tagline_en': 'Precision Canopy Trimming, High Rigging & Commercial Stump Milling',
    'tagline_ru': 'Аккуратное кронирование, верхолазный спил и дробление пней',
    'slogan_en': 'Coweta County Arborist Specialists, Structural Rigging & Spotless Cleanups',
    'slogan_ru': 'Профессиональные арбористы округа Коуита, бережный спил и чистый участок',
    'main_photo': '/images/tecos/climber-canopy_crop.jpg',
    'bento_main_label_en': 'High Canopy Arborist Rigging',
    'bento_main_label_ru': 'Верхолазные работы в кроне',
    'bento_main_alt_en': 'Arborist climber in safety saddle rigging limbs inside mature hardwood canopy',
    'bento_main_alt_ru': 'Арборист на высоте закрепляет стропы в кроне большого дерева',
    'sub1_photo': None,
    'sub2_photo': None,
    'equip1': {
      'name_en': 'Technical Arborist Rigging & Canopy Trimming', 'name_ru': 'Такелажный спил и обрезка кроны',
      'badge_en': 'Controlled Canopy Access', 'badge_ru': 'Контролируемый спуск',
      'image': None,
      'desc_en': 'High-angle rope access gear allowing skilled climbers to dismantle overhanging branches above roofs without structural contact.',
      'desc_ru': 'Альпинистское снаряжение для разбора нависших над крышами ветвей с плавным спуском на веревках.'
    },
    'equip2': {
      'name_en': 'High-Output Commercial Stump Grinder', 'name_ru': 'Мощная пнедробилка',
      'badge_en': 'Subsurface Milling', 'badge_ru': 'Дробление ниже уровня дерна',
      'image': None,
      'desc_en': 'Commercial track grinder that pulverizes tough hardwood stumps and root flares 10–14 inches below grade.',
      'desc_ru': 'Самоходная фреза для полного измельчения пней твердых пород на глубину до 35 см.'
    },
    'equip3': {
      'name_en': 'Chipper Truck & Heavy Debris Removal', 'name_ru': 'Грузовик-щеповоз и вывоз отходов',
      'badge_en': 'Complete Site Cleanliness', 'badge_ru': 'Чистовая уборка',
      'image': None,
      'desc_en': 'High-capacity chipper and dump truck fleet with commercial blowers leaving driveways and yards completely spotless.',
      'desc_ru': 'Автопарк для переработки веток в щепу и вывоза бревен с финальной продувкой дорожек воздуходувками.'
    }
  },

  # 29. suttons
  'suttons': {
    'owner_en': 'Mr. Sutton', 'owner_ru': 'Мистер Саттон',
    'theme': 'emerald',
    'city_en': 'Midway Park', 'city_ru': 'Мидуэй-Парк',
    'state_en': 'NC', 'state_ru': 'Северная Каролина', 'zip': '28544', 'street': 'Onslow County Coastal Corridor',
    'phone': '(910) 577-1111', 'phoneRaw': '9105771111',
    'tagline_en': 'Track Stump Grinding, Crane-Assisted Felling & Coastal Tree Care',
    'tagline_ru': 'Гусеничное дробление пней, валка деревьев краном и прибрежный уход',
    'slogan_en': 'Veteran-Friendly Tree Care, Heavy Crane Capability & Fair Upfront Pricing',
    'slogan_ru': 'Надежные арбористы побережья Каролины, крановый спил и честная понятная смета',
    'main_photo': '/images/tecos/tracked-grinder_crop.jpg',
    'bento_main_label_en': 'Track Stump Grinder Unit',
    'bento_main_label_ru': 'Гусеничная пнедробилка',
    'bento_main_alt_en': 'Commercial track stump grinder operating in residential yard',
    'bento_main_alt_ru': 'Гусеничная пнедробилка измельчает пень на приусадебном участке',
    'sub1_photo': None,
    'sub2_photo': None,
    'equip1': {
      'name_en': 'Commercial Track Stump Grinder Unit', 'name_ru': 'Гусеничная пнедробилка',
      'badge_en': 'Narrow Gate Track Machine', 'badge_ru': 'Проход в узкие калитки',
      'image': None,
      'desc_en': 'Low ground-pressure rubber track machine that accesses fenced backyards to mill tough pine and oak stumps without tearing turf.',
      'desc_ru': 'Машина на резиновых гусеницах с низким удельным давлением на грунт: удаляет пни в закрытых дворах без вреда для травы.'
    },
    'equip2': {
      'name_en': 'Crane-Assisted Hazardous Tree Felling', 'name_ru': 'Спил аварийных деревьев с автокраном',
      'badge_en': 'Zero-Drop Crane Rigging', 'badge_ru': 'Подъем без удара о землю',
      'image': None,
      'desc_en': 'Mobile crane rigging setup that lifts multi-ton tree canopies straight up and away from residential homes and power lines.',
      'desc_ru': 'Автокран со стропами для вертикального подъема и переноса тяжелых частей дерева над постройками.'
    },
    'equip3': {
      'name_en': 'Heavy Debris Dump Fleet & Site Sweep', 'name_ru': 'Самосвальная техника и чистовая уборка',
      'badge_en': '100% Debris Haul-Away', 'badge_ru': 'Полный вывоз отходов',
      'image': None,
      'desc_en': 'Heavy-duty dump trucks and industrial blowers ensuring every branch and wood chip is hauled away immediately.',
      'desc_ru': 'Самосвалы большой вместимости и мощные воздуходувки для быстрой очистки двора после окончания работ.'
    }
  },

  # 30. td-tree
  'td-tree': {
    'owner_en': 'Timothy & Don', 'owner_ru': 'Тимоти и Дон',
    'theme': 'teal',
    'city_en': 'Saucier', 'city_ru': 'Сосье',
    'state_en': 'MS', 'state_ru': 'Миссисипи', 'zip': '39574', 'street': 'Gulf Coast Pine Belt Corridor',
    'phone': '(228) 206-2351', 'phoneRaw': '2282062351',
    'tagline_en': 'Bucket Truck Roofline Clearance, High Canopy Elevation & Acreage Care',
    'tagline_ru': 'Спил ветвей с автовышки над крышей дома, подъем кроны и уход за участками',
    'slogan_en': 'Mississippi Gulf Coast Arborists, Aerial Bucket Access & Careful House Protection',
    'slogan_ru': 'Арбористы побережья Миссисипи, высотная автовышка и надежная защита строений',
    'main_photo': '/images/td-tree/photo_005_crop.jpg',
    'bento_main_label_en': 'Aerial Bucket Boom Roof Clearance',
    'bento_main_label_ru': 'Спил веток над крышей с люльки',
    'bento_main_alt_en': 'Bucket truck aerial boom elevated high trimming branches directly over two-story residential roof',
    'bento_main_alt_ru': 'Стрела автовышки с люлькой срезает ветви прямо над крышей двухэтажного дома',
    'sub1_photo': '/images/td-tree/photo_003_crop.jpg',
    'bento_sub1_label_en': 'Mature Shade Tree Structure Check',
    'bento_sub1_label_ru': 'Осмотр кроны векового дерева',
    'bento_sub1_alt_en': 'Massive mature shade tree canopy over two-story white residential home',
    'bento_sub1_alt_ru': 'Крона большого тенистого дерева над двухэтажным белым домом',
    'sub2_photo': '/images/td-tree/photo_002_crop.jpg',
    'bento_sub2_label_en': 'Driveway Perimeter & Flagpole Care',
    'bento_sub2_label_ru': 'Ухоженная въездная зона',
    'bento_sub2_alt_en': 'Trimmed garden bed and trees along gravel driveway with American flag',
    'bento_sub2_alt_ru': 'Подстриженные деревья и клумба вдоль гравийного проезда с флагом',
    'equip1': {
      'name_en': 'Overhead Utility Line & Roof Bucket Boom', 'name_ru': 'Автовышка для работы у проводов и крыши',
      'badge_en': 'High-Reach Utility Safety', 'badge_ru': 'Безопасность у проводов',
      'image': '/images/td-tree/photo_006_crop.jpg',
      'desc_en': 'Photo shows the bucket truck boom operator carefully maneuvering between utility service lines and the upper residential siding.',
      'desc_ru': 'На фото показана аккуратная работа в люльке между проводами ввода и стеной жилого дома.'
    },
    'equip2': {
      'name_en': 'Residential Siding Clearance & Deadwood Trim', 'name_ru': 'Опиловка веток от сайдинга дома',
      'badge_en': 'Structural Clearance', 'badge_ru': 'Отступ от фасада',
      'image': '/images/td-tree/photo_004_crop.jpg',
      'desc_en': 'Photo shows clean vertical clearance established along two-story white siding after trimming back hazardous touching limbs.',
      'desc_ru': 'На фото показан созданный безопасный зазор вдоль белого фасада дома после обрезки соприкасавшихся сучьев.'
    },
    'equip3': {
      'name_en': 'Acreage Grounds Tree Care & Perimeter Clean', 'name_ru': 'Обслуживание больших участков',
      'badge_en': 'Acreage Property Care', 'badge_ru': 'Порядок на территории',
      'image': '/images/td-tree/photo_001_crop.jpg',
      'desc_en': 'Photo shows expansive rural residential acreage with driveway, lawn, and arbor structure cleanly maintained following tree pruning.',
      'desc_ru': 'На фото видна просторная территория загородного дома с перголой и гравийным проездом после санитарной обрезки.'
    }
  },

  # 31. tlg
  'tlg': {
    'owner_en': 'Oliver', 'owner_ru': 'Оливер',
    'theme': 'amber',
    'city_en': 'Raleigh', 'city_ru': 'Роли',
    'state_en': 'NC', 'state_ru': 'Северная Каролина', 'zip': '27604', 'street': 'Capital City Research Triangle Route',
    'phone': '(984) 242-7561', 'phoneRaw': '9842427561',
    'tagline_en': 'Precision Hardwood Felling, Track Stump Grinding & Site Restoration',
    'tagline_ru': 'Аккуратный спил деревьев, гусеничное дробление пней и порядок во дворе',
    'slogan_en': 'Research Triangle Arborist Services, Controlled Rigging & Fair Upfront Pricing',
    'slogan_ru': 'Надежные арбористы региона Роли, аккуратный такелаж и честная смета',
    'main_photo': '/images/tecos/tall-pine-takedown_crop.jpg',
    'bento_main_label_en': 'Controlled Sectional Takedown',
    'bento_main_label_ru': 'Посекционный спил сосны',
    'bento_main_alt_en': 'Arborist climber rigging tall pine tree for sectional takedown',
    'bento_main_alt_ru': 'Арборист на сосне подготавливает ствол к посекционному спилу',
    'sub1_photo': None,
    'sub2_photo': None,
    'equip1': {
      'name_en': 'Precision Sectional Tree Removal Rigging', 'name_ru': 'Такелажный комплекс для спила',
      'badge_en': 'Controlled Lowering', 'badge_ru': 'Плавный спуск',
      'image': None,
      'desc_en': 'Friction brake lowering devices and high-strength bull ropes allowing arborists to safely dismantle heavy trees near residential homes.',
      'desc_ru': 'Тормозные устройства и канаты для безопасного пошагового спуска тяжелых стволов рядом с жилыми домами.'
    },
    'equip2': {
      'name_en': 'Low-Impact Track Stump Grinder Unit', 'name_ru': 'Компактная гусеничная пнедробилка',
      'badge_en': 'Subsurface Milling', 'badge_ru': 'Глубокое дробление',
      'image': None,
      'desc_en': 'Rubber tracked self-propelled stump grinder that passes through standard backyard gates and grinds root flares below grade.',
      'desc_ru': 'Гусеничная машина на резиновом ходу для прохода в калитки и измельчения пней ниже уровня дерна.'
    },
    'equip3': {
      'name_en': 'Brush Chipper & Complete Turf Restoration', 'name_ru': 'Измельчитель веток и уборка газона',
      'badge_en': 'Spotless Property Finish', 'badge_ru': 'Чистовая сдача',
      'image': None,
      'desc_en': 'Commercial disc brush chipper paired with backpack blowers to haul away all chipped organic debris with zero lawn mess.',
      'desc_ru': 'Дробилка веток и ранцевые воздуходувки: вывозим 100% порубочных остатков и выметаем территорию.'
    }
  },

  # 32. tafoya
  'tafoya': {
    'owner_en': 'Nester Tafoya', 'owner_ru': 'Нестер Тафойя',
    'theme': 'sky',
    'city_en': 'Houston', 'city_ru': 'Хьюстон',
    'state_en': 'TX', 'state_ru': 'Техас', 'zip': '77017', 'street': 'South Houston Commercial Corridor',
    'phone': '(713) 594-5062', 'phoneRaw': '7135945062',
    'tagline_en': 'High-Output Brush Chipping, Track Skid Steer Clearing & Poolside Palms',
    'tagline_ru': 'Мощные измельчители веток, расчистка мини-погрузчиком и уход за пальмами у бассейна',
    'slogan_en': 'Commercial Chip Trucks, Branded Track Skid Loaders (713-594-5062) & Spotless Yards',
    'slogan_ru': 'Собственные щеповозы, фирменные гусеничные погрузчики и безупречный порядок',
    'main_photo': '/images/tafoya/photo_009_crop.jpg',
    'bento_main_label_en': 'Commercial Chipper & Chip Hauler Fleet',
    'bento_main_label_ru': 'Дробилка веток и грузовик-щеповоз',
    'bento_main_alt_en': 'Yellow commercial brush chipper blowing chips directly into big black chip dump truck on street',
    'bento_main_alt_ru': 'Желтый измельчитель веток выдувает щепу прямо в закрытый кузов грузовика на улице',
    'sub1_photo': '/images/tafoya/photo_015_crop.jpg',
    'bento_sub1_label_en': 'Branded Track Skid Steer (713-594-5062)',
    'bento_sub1_label_ru': 'Гусеничный мини-погрузчик (713-594-5062)',
    'bento_sub1_alt_en': 'Yellow track skid steer loader branded with phone 713-594-5062 working in woods',
    'bento_sub1_alt_ru': 'Фирменный гусеничный мини-погрузчик с номером 713-594-5062 на расчистке участка',
    'sub2_photo': '/images/tafoya/photo_001_crop.jpg',
    'bento_sub2_label_en': 'Arborist Climber Aloft on High Spar',
    'bento_sub2_label_ru': 'Арборист на высоте на стволе',
    'bento_sub2_alt_en': 'Arborist climber aloft rigging high oak tree spar against clear blue sky',
    'bento_sub2_alt_ru': 'Верхолаз-арборист производит спил макушки высокого дерева на фоне неба',
    'equip1': {
      'name_en': 'Tracked Stump Grinder & Mini-Skid Driveway Sweep', 'name_ru': 'Пнедробилка и мини-погрузчик на выезде',
      'badge_en': 'Driveway Timber Clearing', 'badge_ru': 'Расчистка подъезда',
      'image': '/images/tafoya/photo_006_crop.jpg',
      'desc_en': 'Photo shows tracked stump grinder and compact loader working together on concrete driveway clearing fallen branches and milling roots.',
      'desc_ru': 'На фото запечатлена совместная работа гусеничной пнедробилки и мини-погрузчика на бетонированном проезде дома.'
    },
    'equip2': {
      'name_en': 'Poolside Palm Tree Trimming & Skirt Shaving', 'name_ru': 'Обрезка пальмы у бассейна',
      'badge_en': 'Poolside Palm Care', 'badge_ru': 'Уход за пальмами у воды',
      'image': '/images/tafoya/photo_011_crop.jpg',
      'desc_en': 'Photo shows arborists trimming and shaping a mature fan palm right beside a residential swimming pool enclosure.',
      'desc_ru': 'На фото показана аккуратная обрезка сухих ветвей пальмы прямо у кромки плавательного бассейна во дворе.'
    },
    'equip3': {
      'name_en': 'Fence-Line Stump Grinding & Yard Sweep', 'name_ru': 'Дробление пня у деревянного забора',
      'badge_en': 'Fence-Line Root Milling', 'badge_ru': 'Чистота у забора',
      'image': '/images/tafoya/photo_005_crop.jpg',
      'desc_en': 'Photo shows fenced backyard after a large stump next to a wooden privacy fence was completely ground below grade and swept clean.',
      'desc_ru': 'На фото показан результат: пень вплотную к деревянному забору полностью измельчен, территория тщательно выметена.'
    }
  },

  # 33. tree-wisemen
  'tree-wisemen': {
    'owner_en': 'Evan', 'owner_ru': 'Эван',
    'theme': 'emerald',
    'city_en': 'Anderson', 'city_ru': 'Андерсон',
    'state_en': 'SC', 'state_ru': 'Южная Каролина', 'zip': '29621', 'street': 'Upstate Lake Hartwell Corridor',
    'phone': '(415) 850-7584', 'phoneRaw': '4158507584',
    'tagline_en': 'Hydraulic Mobile Crane Takedowns, Complete Commercial Fleet & Big Stump Cuts',
    'tagline_ru': 'Спил деревьев тяжелым гидрокраном, собственный автопарк и удаление пней',
    'slogan_en': 'High-Tonnage Hydraulic Crane Rigging, Full Arborist Fleet on Site & Spotless Yards',
    'slogan_ru': 'Спил краном без удара о землю, полный арсенал техники на объекте и чистота',
    'main_photo': '/images/tree-wisemen/photo_005_crop.jpg',
    'bento_main_label_en': 'Hydraulic Crane Heavy Branch Lift',
    'bento_main_label_ru': 'Подъем тяжелой ветви краном',
    'bento_main_alt_en': 'Heavy hydraulic mobile crane boom with sling lifting enormous tree branch suspended high in sky',
    'bento_main_alt_ru': 'Стрела мобильного автокрана на стропах поднимает огромную срезанную ветку над домом',
    'sub1_photo': '/images/tree-wisemen/photo_002_crop.jpg',
    'bento_sub1_label_en': 'Complete Fleet on Residential Site',
    'bento_sub1_label_ru': 'Автопарк бригады на объекте',
    'bento_sub1_alt_en': 'Forestry chip truck, Vermeer stump grinder, and compact loader staged on front residential lawn',
    'bento_sub1_alt_ru': 'Грузовик-щеповоз, пнедробилка Vermeer и мини-погрузчик на участке заказчика',
    'sub2_photo': '/images/tree-wisemen/photo_004_crop.jpg',
    'bento_sub2_label_en': 'Arborist Rigging with Crane Assist',
    'bento_sub2_label_ru': 'Спил ветвей с поддержкой крана',
    'bento_sub2_alt_en': 'Arborist climber rigged in tree crotch with blue crane boom poised above tree',
    'bento_sub2_alt_ru': 'Верхолаз в развилке дерева закрепляет строп крана перед выполнением валочного реза',
    'equip1': {
      'name_en': 'Massive Hardwood Stump Boundary Flush-Cut', 'name_ru': 'Спил гигантского пня у забора',
      'badge_en': 'Large Stump Management', 'badge_ru': 'Толстомерные пни',
      'image': '/images/tree-wisemen/photo_006_crop.jpg',
      'desc_en': 'Photo shows massive 4-foot diameter hardwood stump cut level next to a chain-link and privacy fence line, ready for grinding.',
      'desc_ru': 'На фото показан массивный пень диаметром более метра у границы забора, спиленный под фрезерование.'
    },
    'equip2': {
      'name_en': 'Street Frontage Canopy Elevation & Trimming', 'name_ru': 'Подъем кроны вдоль улицы',
      'badge_en': 'Streetline Pruning', 'badge_ru': 'Проезд по улице',
      'image': '/images/tree-wisemen/photo_001_crop.jpg',
      'desc_en': 'Photo shows front yard mature shade trees trimmed and elevated away from the road and overhead residential service drop.',
      'desc_ru': 'На фото показаны деревья перед домом: крона приподнята для свободного проезда автотранспорта по улице.'
    },
    'equip3': {
      'name_en': 'Deciduous Crown Assessment & Thinning', 'name_ru': 'Структурная оценка кроны',
      'badge_en': 'Canopy Health Care', 'badge_ru': 'Санитарная обрезка',
      'image': '/images/tree-wisemen/photo_003_crop.jpg',
      'desc_en': 'Photo shows large mature deciduous tree structure inspected and selectively thinned to remove crossing branches and deadwood.',
      'desc_ru': 'На фото зафиксирована крона крупного дерева после удаления перекрещивающихся и сухих ветвей.'
    }
  },

  # 34. us-tree
  'us-tree': {
    'owner_en': 'Cass', 'owner_ru': 'Касс',
    'theme': 'teal',
    'city_en': 'Dearborn', 'city_ru': 'Дирборн',
    'state_en': 'MI', 'state_ru': 'Мичиган', 'zip': '48126', 'street': 'Metro Detroit Residential Corridor',
    'phone': '(313) 936-4140', 'phoneRaw': '3139364140',
    'tagline_en': 'Utility Wire Canopy Clearance, Roofline Pruning & Brush Hauling',
    'tagline_ru': 'Обрезка крон у линий электропередач, опиловка у крыш и вывоз веток',
    'slogan_en': 'Metro Detroit Arborist Rigging, Tight Backyard Access & Spotless Cleanups',
    'slogan_ru': 'Арбористы Детройта, аккуратная работа в стесненных дворах и чистая территория',
    'main_photo': '/images/us-tree/photo_005_crop.jpg',
    'bento_main_label_en': 'Canopy Thinning & Utility Wire Clearance',
    'bento_main_label_ru': 'Опиловка кроны у электропроводов',
    'bento_main_alt_en': 'Large pruned deciduous tree canopy between two garages with utility lines clear and sun shining',
    'bento_main_alt_ru': 'Прореженная крона дерева между гаражами: провода свободны, обеспечен доступ света',
    'sub1_photo': '/images/us-tree/photo_001_crop.jpg',
    'bento_sub1_label_en': 'Arborist Climber Aloft Clearing Roof',
    'bento_sub1_label_ru': 'Арборист на высоте у крыши',
    'bento_sub1_alt_en': 'Tree climber working in tree crown trimming branches safely away from garage roof',
    'bento_sub1_alt_ru': 'Верхолаз в кроне дерева срезает ветви, нависающие над крышей гаража',
    'sub2_photo': '/images/us-tree/photo_008_crop.jpg',
    'bento_sub2_label_en': 'Debris Consolidation & Staging',
    'bento_sub2_label_ru': 'Сбор веток у гаража',
    'bento_sub2_alt_en': 'Large brush pile cut and staged neatly by garage and chain-link fence for haul away',
    'bento_sub2_alt_ru': 'Срезанные ветви аккуратно сложены возле забора для погрузки и вывоза',
    'equip1': {
      'name_en': 'Backyard Tree Crown Elevation & Fence Line Care', 'name_ru': 'Подъем кроны вдоль забора',
      'badge_en': 'Backyard Canopy Work', 'badge_ru': 'Уход во дворе',
      'image': '/images/us-tree/photo_004_crop.jpg',
      'desc_en': 'Photo shows mature deciduous tree in fenced residential yard with lower branches pruned for full sunlight and fence clearance.',
      'desc_ru': 'На фото показано дерево во дворе частного дома: нижние ветви обрезаны для хорошего освещения двора и забора.'
    },
    'equip2': {
      'name_en': 'Heavy Overgrowth Clearance Along Home Wall', 'name_ru': 'Удаление поросли у стены дома',
      'badge_en': 'Foundation Clearance', 'badge_ru': 'Отступ от фундамента',
      'image': '/images/us-tree/photo_007_crop.jpg',
      'desc_en': 'Photo shows dense overhanging tree branches cleared away from residential brick home wall and concrete walkway.',
      'desc_ru': 'На фото виден результат обрезки ветвей, закрывавших кирпичную стену и отмостку жилого дома.'
    },
    'equip3': {
      'name_en': 'Yard Raking & Organic Debris Cleanup', 'name_ru': 'Уборка листвы и органического сора',
      'badge_en': 'Spotless Yard Finish', 'badge_ru': 'Чистый двор',
      'image': '/images/us-tree/photo_003_crop.jpg',
      'desc_en': 'Photo shows residential yard raked clean and leaf debris neatly collected along garage wall after pruning.',
      'desc_ru': 'На фото показан убранный граблями двор после завершения обрезки: весь мусор собран и подготовлен к вывозу.'
    }
  },

  # 35. wateree
  'wateree': {
    'owner_en': 'David', 'owner_ru': 'Дэвид',
    'theme': 'amber',
    'city_en': 'Lugoff', 'city_ru': 'Люгофф',
    'state_en': 'SC', 'state_ru': 'Южная Каролина', 'zip': '29078', 'street': 'Wateree River Midlands Route',
    'phone': '(803) 445-6434', 'phoneRaw': '8034456434',
    'tagline_en': 'Mature Oak Crown Preservation, Structural Clearance & Timber Care',
    'tagline_ru': 'Сохранение вековых дубов, отступ от построек и уход за деревьями',
    'slogan_en': 'Midlands South Carolina Arborists, Gentle Property Rigging & Honest Upfront Pricing',
    'slogan_ru': 'Арбористы центральной части Южной Каролины, аккуратный спил и честная смета',
    'main_photo': '/images/wateree/photo_001_crop.jpg',
    'bento_main_label_en': 'Mature Oak Structural Clearance',
    'bento_main_label_ru': 'Вековой дуб у крыльца дома',
    'bento_main_alt_en': 'Huge mature shade oak tree right by residential house porch and yard',
    'bento_main_alt_ru': 'Массивный тенистый дуб рядом с крыльцом жилого дома после санитарной обрезки',
    'sub1_photo': None,
    'sub2_photo': None,
    'equip1': {
      'name_en': 'Hardwood Crown Structure Inspection & Thinning', 'name_ru': 'Инспекция и прореживание кроны дуба',
      'badge_en': 'Canopy Thinning & Care', 'badge_ru': 'Оздоровление кроны',
      'image': '/images/wateree/photo_002_crop.jpg',
      'desc_en': 'Photo shows upward view into strong trunk scaffold and crown of mature shade oak tree pruned for wind resilience.',
      'desc_ru': 'На фото виден мощный ствол и скелетные ветви дуба: удалены сухие сучья для снижения парусности кроны при ветре.'
    },
    'equip2': {
      'name_en': 'Precision Residential Rigging Kit', 'name_ru': 'Такелажный комплект для спуска ветвей',
      'badge_en': 'Porch & Roof Protection', 'badge_ru': 'Защита крыльца и кровли',
      'image': None,
      'desc_en': 'Synthetic bull ropes and arborist lowering friction blocks that guide heavy limbs safely away from porches and rooflines.',
      'desc_ru': 'Синтетические канаты и тормозные блоки для безопасного спуска тяжелых сучьев над крыльцом дома.'
    },
    'equip3': {
      'name_en': 'High-Volume Chipper Truck Package', 'name_ru': 'Комплекс измельчения и вывоза щепы',
      'badge_en': 'Clean Site Handover', 'badge_ru': 'Утилизация остатков',
      'image': None,
      'desc_en': 'Industrial brush chipper and enclosed dump box paired with backpack blowers to leave the yard completely clean.',
      'desc_ru': 'Дробилка веток и самосвал в сочетании с воздуходувками для идеальной чистоты на участке заказчика.'
    }
  },

  # 36. woodfellas
  'woodfellas': {
    'owner_en': 'John', 'owner_ru': 'Джон',
    'theme': 'sky',
    'city_en': 'Johnson City', 'city_ru': 'Джонсон-Сити',
    'state_en': 'TN', 'state_ru': 'Теннесси', 'zip': '37604', 'street': 'Appalachian Highlands Corridor',
    'phone': '(423) 270-4224', 'phoneRaw': '4232704224',
    'tagline_en': 'Controlled Sectional Takedowns, Track Stump Grinding & Site Restoration',
    'tagline_ru': 'Контролируемый посекционный спил, дробление пней и чистота во дворе',
    'slogan_en': 'Appalachian Highlands Tree Experts, Safe Rigging & Spotless Cleanups',
    'slogan_ru': 'Арбористы горных районов Теннесси, аккуратная работа и идеальный порядок',
    'main_photo': '/images/tecos/clean-ground-crew_crop.jpg',
    'bento_main_label_en': 'Professional Ground Crew & Turf Care',
    'bento_main_label_ru': 'Чистовая уборка территории',
    'bento_main_alt_en': 'Tree service ground crew performing clean turf sweep after tree takedown',
    'bento_main_alt_ru': 'Бригада арбористов производит уборку и очистку газона после спила дерева',
    'sub1_photo': None,
    'sub2_photo': None,
    'equip1': {
      'name_en': 'Professional Tree Felling & Sectional Dismantling', 'name_ru': 'Посекционный спил деревьев',
      'badge_en': 'Controlled Sectional Rigging', 'badge_ru': 'Безопасный спил',
      'image': None,
      'desc_en': 'Arborist lowering blocks and dynamic rigging systems to safely lower heavy hardwood sections in tight residential spaces.',
      'desc_ru': 'Специальные тормозные блоки и веревки для безопасного пошагового спуска частей дерева в ограниченном пространстве.'
    },
    'equip2': {
      'name_en': 'Tracked Stump Grinder & Root Milling', 'name_ru': 'Гусеничная пнедробилка',
      'badge_en': 'Subsurface Milling', 'badge_ru': 'Глубокое измельчение корней',
      'image': None,
      'desc_en': 'Self-propelled rubber track machine that navigates garden gates and grinds tree stumps below grade without lawn damage.',
      'desc_ru': 'Самоходная машина на резиновых гусеницах для прохода через калитки и быстрого удаления пней ниже уровня дерна.'
    },
    'equip3': {
      'name_en': 'Complete Site Debris Cleanup & Turf Restoration', 'name_ru': 'Вывоз мусора и восстановление газона',
      'badge_en': '100% Debris Haul-Away', 'badge_ru': 'Сдача чистого участка',
      'image': None,
      'desc_en': 'Commercial brush chipper and industrial blowers ensuring every branch, log, and wood chip is hauled away immediately.',
      'desc_ru': 'Дробилка веток и ранцевые воздуходувки: полный вывоз порубочных остатков и наведение порядка во дворе.'
    }
  }
}

def write_curated_metadata():
    out_file = 'scripts/curated_metadata.py'
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write("# Curated metadata dictionary for all 36 companies\n")
        f.write("# Every company has verified owner names, themes, addresses, equipment, and photo mappings.\n")
        f.write("# Zero duplicate images per company. Image descriptions 100% faithful to visual content.\n\n")
        f.write("import json\n\n")
        f.write("COMPANY_META = json.loads('''")
        f.write(json.dumps(META, indent=2, ensure_ascii=False))
        f.write("''')\n")
    print(f"Successfully wrote {len(META)} companies into {out_file}.")

if __name__ == '__main__':
    write_curated_metadata()
