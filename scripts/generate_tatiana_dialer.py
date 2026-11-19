import json

with open('/Users/workpc/Documents/google-maps-scraper/output/tree_leads/dialer_batches/Tatiana_50_leads.json', 'r', encoding='utf-8') as f:
    leads = json.load(f)

leads_json = json.dumps(leads, ensure_ascii=False)

html_template = f"""<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ZONUS TREE SERVICE PLAYBOOK — Звонилка Татьяны (Линия #102)</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<style>
  body {{ font-family: 'Plus Jakarta Sans', sans-serif; }}
  .font-mono {{ font-family: 'JetBrains Mono', monospace; }}
  .tab-btn.active {{
    background: #047857;
    color: #ffffff;
    border-color: #34d399;
  }}
</style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-emerald-500 selection:text-slate-950">

  <!-- TOP STICKY HEADER -->
  <header class="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-800 px-4 py-2.5 shadow-2xl">
    <div class="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <div class="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-700 flex items-center justify-center font-black text-slate-950 text-lg shadow-lg shadow-emerald-950/60 border border-emerald-400/40">
          Z
        </div>
        <div>
          <div class="text-[11px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
            <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            ZONUS TREE SERVICE PLAYBOOK &bull; ТАТЬЯНА (ЛИНИЯ #102)
          </div>
          <div class="text-sm font-extrabold text-white flex items-center gap-2">
            <span id="headerLeadCounter">Контакт #1 из 50</span>
            <span class="text-slate-600">|</span>
            <span class="text-teal-300 font-semibold text-xs">Адаптация триггеров Динары под Tree Care</span>
          </div>
        </div>
      </div>

      <!-- Domain Selector + Stats toggle -->
      <div class="flex items-center gap-2">
        <div class="flex items-center bg-slate-950 border border-slate-700 rounded-lg p-1 text-[11px]">
          <span class="text-slate-400 px-2 font-medium">Домен ссылки:</span>
          <button id="btnDomTreePortal" onclick="setDomain('tree-portal.up.railway.app')" class="px-2 py-0.5 rounded font-mono font-bold bg-emerald-500 text-slate-950 transition">tree-portal</button>
          <button id="btnDomZonus" onclick="setDomain('zonus.co')" class="px-2 py-0.5 rounded font-mono font-bold text-slate-400 hover:text-white transition">zonus.co</button>
        </div>

        <button onclick="toggleLogModal()" class="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5">
          <span>📋 Журнал</span>
          <span id="totalLoggedCountBadge" class="bg-emerald-500 text-slate-950 text-[10px] px-1.5 py-0.2 rounded-full font-black">0</span>
        </button>
      </div>
    </div>
  </header>

  <!-- MAIN WRAPPER -->
  <main class="flex-1 max-w-5xl w-full mx-auto p-4 space-y-4">

    <!-- PROGRESS BAR & QUICK STATS -->
    <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-4">
      <div class="flex-1 min-w-[220px]">
        <div class="flex justify-between text-xs text-slate-400 mb-1 font-medium">
          <span>Прогресс обзвона: <strong id="progressText" class="text-emerald-400">0 / 50</strong></span>
          <span id="progressPercent" class="font-mono text-slate-300">0%</span>
        </div>
        <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
          <div id="progressBarFill" class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-0 transition-all duration-300"></div>
        </div>
      </div>

      <div class="flex items-center gap-1.5 text-[11px] font-mono shrink-0">
        <span class="bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 px-2 py-1 rounded-md" id="statAgreed" title="Согласились на SMS">🟢 0</span>
        <span class="bg-amber-950/80 text-amber-400 border border-amber-800/60 px-2 py-1 rounded-md" id="statCallback" title="Перезвонить завтра в 9:30">🟡 0</span>
        <span class="bg-teal-950/80 text-teal-400 border border-teal-800/60 px-2 py-1 rounded-md" id="statPhotos" title="Скинули фото техники">📸 0</span>
        <span class="bg-indigo-950/80 text-indigo-400 border border-indigo-800/60 px-2 py-1 rounded-md" id="statVoicemail" title="Автоответчик (Voicemail)">📼 0</span>
        <span class="bg-slate-800 text-slate-300 border border-slate-700 px-2 py-1 rounded-md" id="statNoAnswer" title="Не ответил / Сброс">⚪ 0</span>
        <span class="bg-rose-950/80 text-rose-400 border border-rose-800/60 px-2 py-1 rounded-md" id="statDeclined" title="Отказ">🔴 0</span>
      </div>
    </div>

    <!-- 4 СЕКРЕТА СОГЛАСИЯ ПОДРЯДЧИКОВ -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
      <div class="bg-slate-900 border border-slate-800 rounded-lg p-2.5 border-t-2 border-t-emerald-500">
        <div class="font-bold text-white mb-0.5">1. Контроль своих данных</div>
        <div class="text-slate-400 text-[10.5px]">«Проверить, всё ли правильно» включает рефлекс хозяина проверить контакты.</div>
      </div>
      <div class="bg-slate-900 border border-slate-800 rounded-lg p-2.5 border-t-2 border-t-teal-500">
        <div class="font-bold text-white mb-0.5">2. Фото их автопарка</div>
        <div class="text-slate-400 text-[10.5px]">«...добавить фото автовышек и дробилок». Подрядчик видит: это о нём.</div>
      </div>
      <div class="bg-slate-900 border border-slate-800 rounded-lg p-2.5 border-t-2 border-t-sky-500">
        <div class="font-bold text-white mb-0.5">3. Снятие давления</div>
        <div class="text-slate-400 text-[10.5px]">«Definitely not asking to buy anything right now» мгновенно гасит агрессию.</div>
      </div>
      <div class="bg-slate-900 border border-slate-800 rounded-lg p-2.5 border-t-2 border-t-amber-500">
        <div class="font-bold text-white mb-0.5">4. Якорь: созвон в 9:30</div>
        <div class="text-slate-400 text-[10.5px]">«Посмотрите вечером, а я наберу завтра в 9:30». Превращает спам в диалог.</div>
      </div>
    </div>

    <!-- SCRIPT TABS SELECTOR -->
    <div class="flex items-center gap-1.5 border-b border-slate-800 pb-2">
      <button onclick="switchTab('call1')" id="tabCall1Btn" class="tab-btn active px-3.5 py-1.5 rounded-lg text-xs font-bold border border-emerald-500/50 transition flex items-center gap-1.5">
        <span>🎯 ЗВОНОК №1: ПЕРВЫЙ КОНТАКТ</span>
      </button>
      <button onclick="switchTab('call2')" id="tabCall2Btn" class="tab-btn px-3.5 py-1.5 rounded-lg text-xs font-bold border border-slate-800 text-slate-400 hover:text-white transition flex items-center gap-1.5">
        <span>💰 ЗВОНОК №2: ДОЖИМ НА $2,500</span>
      </button>
      <button onclick="switchTab('cheatSheet')" id="tabCheatSheetBtn" class="tab-btn px-3.5 py-1.5 rounded-lg text-xs font-bold border border-slate-800 text-slate-400 hover:text-white transition flex items-center gap-1.5">
        <span>🛡 6 ВОЗРАЖЕНИЙ (CHEAT SHEET)</span>
      </button>
    </div>

    <!-- TAB 1 CONTENT: CALL #1 -->
    <div id="tabCall1Content" class="space-y-3">
      
      <!-- 1. Прямой разговор с владельцем (Direct to Owner Hook) -->
      <div class="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-emerald-500/50 rounded-2xl p-4 shadow-xl">
        <div class="flex items-center justify-between text-xs font-black uppercase text-emerald-400 mb-2">
          <span class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            1. ПРЯМОЙ РАЗГОВОР С ВЛАДЕЛЬЦЕМ (DIRECT TO OWNER HOOK) — БЕЗ «QUICK CALL»
          </span>
          <span class="bg-emerald-950 border border-emerald-800 text-emerald-300 text-[10px] px-2 py-0.5 rounded font-mono">ОСНОВНОЙ СКРИПТ</span>
        </div>

        <div class="bg-slate-950 border border-slate-800 rounded-xl p-3.5 mb-2 relative">
          <div class="flex justify-between items-center mb-1">
            <span class="text-[10px] font-bold text-slate-500 uppercase font-mono">EN: ЧИТАТЬ СПОКОЙНО И УВЕРЕННО</span>
            <button onclick="copyText('scriptCall1Owner')" class="text-emerald-400 hover:text-emerald-300 text-[11px] font-bold underline">Копировать EN</button>
          </div>
          <div id="scriptCall1Owner" class="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed font-sans">
            “Hey [Owner Name / Company], Tatyana here with Zonus. I was looking at your 5-star Google reviews for [Company Name] — we put together a free mobile preview for your tree business so homeowners can tap and call your emergency crew in one second. Zero cost, zero strings attached — just wanted to shoot you a quick link on your cell so you can double check if we got all your services and phone number right, and see if you have any photos of your bucket trucks, chippers, or climbing crew you want added in. Is this cell good to text?”
          </div>
        </div>

        <div class="text-[11px] text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-900 leading-relaxed italic">
          RU: «Здравствуйте, [Имя / Название], это Татьяна из Zonus. Я сейчас смотрю ваши 5-звездочные отзывы в Google — мы собрали бесплатное мобильное превью для вашей компании по спилу деревьев, чтобы клиенты могли вызвать вашу бригаду в один клик. Это полностью бесплатно и без обязательств — хотела скинуть ссылку на сотовый, чтобы вы проверили, всё ли правильно указано по услугам и телефону, и если у вас есть фото ваших автовышек, измельчителей или альпинистов, мы их тоже поставим. Сюда можно скинуть ссылку?»
        </div>
      </div>

      <!-- 2. Проход секретаря / диспетчера (Front Desk / Gatekeeper Branch) -->
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg">
        <div class="flex items-center justify-between text-xs font-black uppercase text-sky-400 mb-2">
          <span>2. ПРОХОД СЕКРЕТАРЯ / ДИСПЕТЧЕРА (FRONT DESK BRANCH)</span>
          <span class="bg-sky-950 border border-sky-800 text-sky-300 text-[10px] px-2 py-0.5 rounded font-mono">ПРОВЕРЕНО НА ARNETT</span>
        </div>

        <div class="bg-slate-950 border border-slate-800 rounded-xl p-3 mb-2">
          <div class="flex justify-between items-center mb-1">
            <span class="text-[10px] font-bold text-slate-500 uppercase font-mono">EN: ВХОД ЧЕРЕЗ ВЫЕЗД НА ОБЪЕКТ</span>
            <button onclick="copyText('scriptGatekeeper')" class="text-sky-400 hover:text-sky-300 text-[11px] font-bold underline">Копировать EN</button>
          </div>
          <div id="scriptGatekeeper" class="text-xs text-slate-200 font-medium leading-relaxed">
            “Hi! Is [Owner Name / the owner] around, or is he out on a tree job right now?<br><br>
            <strong class="text-sky-300">[IF OUT / WHAT IS THIS REGARDING]:</strong> Got it! We build fast mobile showcases specifically for tree removal and emergency storm services. We put together a clean mobile preview for [Company Name] featuring your 5-star Google reviews. What's the best cell number I can text the link to so he can tap it when he comes off the job site tonight?”
          </div>
        </div>

        <div class="text-[11px] text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-900 italic">
          RU: «Здравствуйте! [Имя владельца] на месте или сейчас на объекте на спиле? [ЕСЛИ НА ВЫЕЗДЕ / ПО КАКОМУ ВОПРОСУ]: Поняла! Мы собираем быстрые мобильные витрины специально для компаний по удалению деревьев и аварийной расчистке. Собрали превью для [Название] с вашими 5★ отзывами. На какой мобильный лучше отправить ссылку, чтобы он открыл ее вечером, когда вернется с выезда?»
        </div>
      </div>

      <!-- 3. Перелом возражения «Not Interested» (Победный маневр Сиерры) -->
      <div class="bg-slate-900 border border-amber-800/60 rounded-2xl p-4 shadow-lg">
        <div class="flex items-center justify-between text-xs font-black uppercase text-amber-400 mb-2">
          <span>3. ПЕРЕЛОМ ВОЗРАЖЕНИЯ «NOT INTERESTED» (ПОБЕДНЫЙ МАНЕВР СИЕРРЫ)</span>
          <span class="bg-amber-950 border border-amber-800 text-amber-300 text-[10px] px-2 py-0.5 rounded font-mono">100% СПАСЕНИЕ ЛИДА</span>
        </div>

        <div class="bg-slate-950 border border-slate-800 rounded-xl p-3 mb-2">
          <div class="flex justify-between items-center mb-1">
            <span class="text-[10px] font-bold text-slate-500 uppercase font-mono">EN: СНЯТИЕ ДАВЛЕНИЯ + АКЦЕНТ НА ДОРОГИЕ ЗАКАЗЫ</span>
            <button onclick="copyText('scriptSierraRescue')" class="text-amber-400 hover:text-amber-300 text-[11px] font-bold underline">Копировать EN</button>
          </div>
          <div id="scriptSierraRescue" class="text-xs text-slate-200 font-medium leading-relaxed">
            “Totally understand! We're definitely not asking to buy or implement anything right now. I'm just making sure you're not missing high-dollar tree removal calls in your area. It has zero obligation and takes literally 15 seconds to scroll on your phone. What do you think?”
          </div>
        </div>

        <div class="text-[11px] text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-900 italic">
          RU: «Прекрасно вас понимаю! Мы точно не просим ничего покупать или заказывать прямо сейчас. Я просто хочу убедиться, что вы не упускаете дорогие заказы на удаление деревьев в вашем районе. Это ни к чему не обязывает и занимает буквально 15 секунд прокрутить экран. Что скажете?»
        </div>
      </div>

      <!-- 4. Выход после согласия: фиксация звонка на завтра на 9:30 утра -->
      <div class="bg-emerald-950/40 border border-emerald-600/60 rounded-2xl p-4 shadow-lg">
        <div class="flex items-center justify-between text-xs font-black uppercase text-emerald-400 mb-2">
          <span>4. ВЫХОД ПОСЛЕ СОГЛАСИЯ: ФИКСАЦИЯ ЗВОНКА НА ЗАВТРА НА 9:30 УТРА (LOCKING 9:30 AM CALLBACK)</span>
          <span class="bg-emerald-950 border border-emerald-500 text-emerald-300 text-[10px] px-2 py-0.5 rounded font-mono">ФИНАЛ ЗВОНКА</span>
        </div>

        <div class="bg-slate-950 border border-emerald-900/60 rounded-xl p-3 mb-2">
          <div class="flex justify-between items-center mb-1">
            <span class="text-[10px] font-bold text-slate-500 uppercase font-mono">EN: СОГЛАСОВАНИЕ СОЗВОНА В 9:30 И СБРОС ВЫЗОВА</span>
            <button onclick="copyText('scriptLockCallback')" class="text-emerald-400 hover:text-emerald-300 text-[11px] font-bold underline">Копировать EN</button>
          </div>
          <div id="scriptLockCallback" class="text-xs text-emerald-100 font-semibold leading-relaxed">
            “Got it, sending it over right now! Take a quick scroll tonight whenever you're off the road and out of the bucket, and I'll give you a short buzz tomorrow morning around 9:30 to see what you think. Sound good? ... Appreciate it, [Owner / Sir]. Talk to you tomorrow morning!” [HANG UP]
          </div>
        </div>

        <div class="text-[11px] text-slate-300 bg-slate-950/80 p-2.5 rounded-lg border border-slate-900 italic">
          RU: «Отлично, отправляю прямо сейчас! Посмотрите вечером, когда закончите смену и слезете с вышки, а я наберу вас завтра утром около 9:30 узнать ваше мнение. Договорились? ... Спасибо, хорошего дня, услышимся завтра в 9:30!»
        </div>
      </div>

      <!-- 5. ЕСЛИ СРАБОТАЛ АВТООТВЕТЧИК (VOICEMAIL BOX) -->
      <div class="bg-indigo-950/40 border border-indigo-700/60 rounded-2xl p-4 shadow-lg">
        <div class="flex items-center justify-between text-xs font-black uppercase text-indigo-300 mb-2">
          <span>📼 5. ЕСЛИ СРАБОТАЛ АВТООТВЕТЧИК (VOICEMAIL — 15 СЕКУНД)</span>
          <span class="bg-indigo-950 border border-indigo-600 text-indigo-200 text-[10px] px-2 py-0.5 rounded font-mono">СКРИПТ СООБЩЕНИЯ</span>
        </div>

        <div class="bg-slate-950 border border-indigo-900/60 rounded-xl p-3 mb-2">
          <div class="flex justify-between items-center mb-1">
            <span class="text-[10px] font-bold text-slate-500 uppercase font-mono">EN: ЧИТАТЬ НА АВТООТВЕТЧИК БЫСТРО И ЧЕТКО</span>
            <button onclick="copyText('scriptVoicemailText')" class="text-indigo-400 hover:text-indigo-300 text-[11px] font-bold underline">Копировать EN</button>
          </div>
          <div id="scriptVoicemailText" class="text-xs text-indigo-100 font-semibold leading-relaxed">
            “Hey [Company Name], this is Tatyana with Zonus. We put together a free mobile preview for your tree crew featuring your 5-star Google reviews and equipment. I’m shooting over a quick text with the link right now so you can take a look when you come off the tree tonight. Have a great day!”
          </div>
        </div>

        <div class="text-[11px] text-slate-400 bg-slate-950/80 p-2.5 rounded-lg border border-slate-900 italic">
          RU: «Здравствуйте, [Название], это Татьяна из Zonus. Мы собрали бесплатное мобильное превью для вашей бригады с вашими 5★ отзывами и техникой. Я прямо сейчас отправляю вам СМС со ссылкой, чтобы вы посмотрели вечером, когда закончите смену на дереве. Хорошего дня!»<br>
          <strong class="text-indigo-300 not-italic">➔ После записи сообщения: нажать кнопку «📼 Автоответчик» и сразу отправить СМС со ссылкой!</strong>
        </div>
      </div>

      <!-- СПЕЦИФИКА И ТАБУ -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
        <div class="bg-emerald-950/30 border border-emerald-900/50 rounded-xl p-3 text-emerald-200">
          <div class="font-bold text-emerald-400 mb-1.5 flex items-center gap-1.5">
            <span>✅</span> Специфика Tree Service (что говорить):
          </div>
          <ul class="space-y-1 list-disc list-inside text-[11px]">
            <li>Упоминать технику: <strong>bucket trucks</strong> (вышки), <strong>chippers</strong> (дробилки), <strong>stump grinders</strong>, <strong>cranes</strong> (краны).</li>
            <li>Упоминать команду: <strong>certified arborists</strong>, <strong>climbers</strong> (верхолазы).</li>
            <li>Фокус на дорогие заказы: аварийный спил после шторма ($3,000–$8,000+).</li>
          </ul>
        </div>

        <div class="bg-rose-950/30 border border-rose-900/50 rounded-xl p-3 text-rose-200">
          <div class="font-bold text-rose-400 mb-1.5 flex items-center gap-1.5">
            <span>❌</span> Строжайшие табу для Татьяны:
          </div>
          <ul class="space-y-1 list-disc list-inside text-[11px]">
            <li>Не говорить <strong>«quick call»</strong> — звучит как дешевый телемаркетинг.</li>
            <li>Не использовать <strong>«Awesome!»</strong>, <strong>«Amazing!»</strong>, <strong>«Super!»</strong>.</li>
            <li>Никаких оправданий безопасности: слова <strong>«virus»</strong>, <strong>«phishing»</strong>, <strong>«not spam»</strong> запрещены.</li>
          </ul>
        </div>
      </div>

    </div>

    <!-- TAB 2 CONTENT: CALL #2 & CLOSING GUIDE ($2,500 TURNKEY) -->
    <div id="tabCall2Content" class="space-y-3 hidden">
      <div class="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-emerald-500/50 rounded-2xl p-4 shadow-xl">
        <div class="flex items-center justify-between text-xs font-black uppercase text-emerald-400 mb-2 border-b border-slate-800 pb-2">
          <span>💰 СЦЕНАРИЙ ЗВОНКА №2 (THE 45-SECOND WALKTHROUGH & ДОЖИМ НА $2,500)</span>
          <span class="text-[10px] font-mono text-emerald-300">ОКУПАЕМОСТЬ С 1 ДЕРЕВА</span>
        </div>

        <div class="space-y-3 text-xs">
          <!-- Step 1 -->
          <div class="bg-slate-950 border border-slate-800 rounded-xl p-3">
            <div class="flex justify-between items-center mb-1 text-[10px] font-bold text-slate-400 uppercase font-mono">
              <span>ШАГ 1: ПРИВЕТСТВИЕ И ВЕРИФИКАЦИЯ (ЗВОНИТЬ РОВНО В 9:30 AM US TIME)</span>
              <button onclick="copyText('scriptCall2Step1')" class="text-emerald-400 hover:text-emerald-300 text-[10px] font-bold underline">Копировать EN</button>
            </div>
            <div id="scriptCall2Step1" class="text-slate-100 font-semibold leading-relaxed font-sans">
              “Morning [Owner Name], Tatyana checking back as promised. Did you get a chance to open that text link last night? Did we get all your tree services, emergency response info, and phone number right, or is there anything we should tweak?”
            </div>
            <div class="text-[11px] text-slate-400 italic mt-1">
              RU: «Доброе утро, [Имя], это Татьяна, как и договаривались вчера. Удалось вчера открыть ссылку из СМС? Всё ли верно указано по услугам спила, аварийным выездам и телефону, или нужно что-то подправить?»
            </div>
          </div>

          <!-- Step 2 -->
          <div class="bg-slate-950 border border-teal-800/60 rounded-xl p-3">
            <div class="flex justify-between items-center mb-1 text-[10px] font-bold text-teal-400 uppercase font-mono">
              <span>📸 ШАГ 2: СБОР ЖИВЫХ ФОТО ТЕХНИКИ И БРИГАДЫ (THE EQUIPMENT HOOK)</span>
              <button onclick="copyText('scriptCall2Step2')" class="text-teal-400 hover:text-teal-300 text-[10px] font-bold underline">Копировать EN</button>
            </div>
            <div id="scriptCall2Step2" class="text-slate-100 font-semibold leading-relaxed font-sans">
              “By the way, you can just text over photos of your bucket trucks, wood chippers, cranes, and your climbing crew directly to this number. We’ll plug them right onto your site so homeowners see your real heavy rigs and certified arborists instead of generic stock photos. When homeowners see your actual trucks and clean yard protection, they call immediately. Feel free to text them over anytime today!”
            </div>
            <div class="text-[11px] text-slate-400 italic mt-1">
              RU: «Кстати, вы можете скинуть прямо на этот номер фотографии ваших автовышек, измельчителей веток, кранов и вашей бригады верхолазов. Мы разместим их прямо на сайте, чтобы клиенты видели вашу реальную тяжелую технику и арбористов, а не стоковые картинки. Когда заказчики видят реальные машины и защиту газона, они заказывают сразу. Можете скинуть прямо сюда в ответ на СМС!»
            </div>
          </div>

          <!-- Step 3 -->
          <div class="bg-slate-950 border border-emerald-800/60 rounded-xl p-3">
            <div class="flex justify-between items-center mb-1 text-[10px] font-bold text-emerald-400 uppercase font-mono">
              <span>💎 ШАГ 3: ОФФЕР ПОД КЛЮЧ ($2,500 TURNKEY OFFER) — ОКУПАЕМОСТЬ С 1 ДЕРЕВА</span>
              <button onclick="copyText('scriptCall2Step3')" class="text-emerald-400 hover:text-emerald-300 text-[10px] font-bold underline">Копировать EN</button>
            </div>
            <div id="scriptCall2Step3" class="text-slate-100 font-semibold leading-relaxed font-sans">
              “We do the full turnkey setup for a flat $2,500 — we connect your official dot-com domain, set up Google indexing, ultra-fast mobile emergency hosting, and zero monthly fees. In the tree business, literally one single large hazardous oak removal, crane takedown, or emergency storm job brings in $3,500 to $8,000+, so this site completely pays for itself on your very first big call. If you text me your truck and crew photos today, we can have your official site fully live within 24 hours. Want us to lock this in for you?”
            </div>
            <div class="text-[11px] text-slate-400 italic mt-1">
              RU: «Мы запускаем сайт под ключ за фиксированные $2,500: подключаем официальный .com домен, настраиваем индексацию в Google, сверхбыстрый мобильный хостинг и ноль абонентской платы. В сфере спила деревьев буквально один сложный спил аварийного дуба или вызов с автокраном приносит от $3,500 до $8,000+, поэтому сайт окупается с первого же серьезного заказа. Если скинете фото техники — запустим сайт за 24 часа. Фиксируем за вами?»
            </div>
          </div>

          <!-- Step 4 -->
          <div class="bg-slate-950 border border-sky-800/60 rounded-xl p-3">
            <div class="flex justify-between items-center mb-1 text-[10px] font-bold text-sky-400 uppercase font-mono">
              <span>⚡ ШАГ 4: ДАУНСЕЛЛ 50/50 (ЕСЛИ КЛИЕНТ КОЛЕБЛЕТСЯ ПО ЦЕНЕ) — ЛЕГКИЙ ВХОД</span>
              <button onclick="copyText('scriptCall2Step4')" class="text-sky-400 hover:text-sky-300 text-[10px] font-bold underline">Копировать EN</button>
            </div>
            <div id="scriptCall2Step4" class="text-slate-100 font-semibold leading-relaxed font-sans">
              “Understood. If $2,500 all at once is tight, we can split it: $1,250 today to launch under your official domain within 24 hours with your real trucks on it, and the second $1,250 in 30 days after you start taking tree calls through it. Fair enough?”
            </div>
            <div class="text-[11px] text-slate-400 italic mt-1">
              RU: «Понимаю. Если сразу $2,500 неудобно, мы можем разбить сумму: $1,250 сейчас, чтобы запуститься под вашим доменом за 24 часа с вашей реальной техникой, а вторые $1,250 — через 30 дней, когда пойдут первые звонки на спил. Договорились?»
            </div>
          </div>
        </div>

        <!-- Arguments & Agency Hate -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-3 text-xs">
          <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <div class="font-bold text-amber-300 mb-1">💡 Экономика Tree Service для аргументации:</div>
            <ul class="space-y-1 text-slate-300 text-[11px]">
              <li>• Мелкая обрезка веток: $200 – $500.</li>
              <li>• Удаление среднего дерева: $1,200 – $2,500.</li>
              <li>• Сложный спил аварийного дерева / кран: <strong>$4,000 – $10,000+</strong>.</li>
              <li>• Аргумент: «Сайт нужен не для обрезки кустов, а чтобы брать крупные контракты на аварийные деревья».</li>
            </ul>
          </div>

          <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <div class="font-bold text-rose-300 mb-1">⚠️ Почему агентства их бесят:</div>
            <ul class="space-y-1 text-slate-300 text-[11px]">
              <li>• Агентства берут $500–$1,000 каждый месяц годами.</li>
              <li>• Агентства ставят чужие стоковые фото мужиков в касках из фотобанков.</li>
              <li>• <strong>Наш козырь:</strong> $0 ежемесячно, 100% собственность и реальные фото их автопарка.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 3 CONTENT: 6 OBJECTIONS CHEAT SHEET -->
    <div id="tabCheatSheetContent" class="space-y-2.5 hidden">
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
        <div class="text-xs font-black uppercase text-sky-400 mb-3 border-b border-slate-800 pb-2 flex items-center justify-between">
          <span>🛡 БРОНЕБОЙНЫЙ CHEAT SHEET: ОТРАБОТКА 6 ВОЗРАЖЕНИЙ РУБЩИКОВ ДЕРЕВЬЕВ</span>
          <span class="text-[10px] font-mono text-slate-400">Точные ответы американским подрядчикам</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">

          <!-- 1 -->
          <div class="bg-slate-950 border border-slate-800 p-3 rounded-xl">
            <div class="flex justify-between items-start mb-1">
              <span class="font-bold text-sky-300">1. «I haven’t looked at it yet / busy up in a tree»</span>
              <span class="text-[9.5px] font-mono bg-sky-950 border border-sky-800 text-sky-300 px-1.5 py-0.5 rounded">СОВМЕСТНЫЙ ПРОСМОТР</span>
            </div>
            <div class="text-slate-200 leading-relaxed text-[11px] mb-1">
              “Totally understand, stay safe up there! Tell you what — whenever you're on the ground, pull up that text message real quick, takes literally 15 seconds to scroll. And by the way, you can text over photos of your bucket trucks, chippers, or crew straight to this number and we'll plug them in. Let me know when you take a look!”
            </div>
            <div class="text-[10.5px] text-slate-400 italic">
              RU: Уважаем тяжелый труд арбориста. Предлагаем открыть СМС на 15 секунд, как только спустится на землю, и закинуть фото техники прямо в ответное СМС.
            </div>
          </div>

          <!-- 2 -->
          <div class="bg-slate-950 border border-slate-800 p-3 rounded-xl">
            <div class="flex justify-between items-start mb-1">
              <span class="font-bold text-emerald-300">2. «$2,500 is too expensive / no budget»</span>
              <span class="text-[9.5px] font-mono bg-emerald-950 border border-emerald-800 text-emerald-300 px-1.5 py-0.5 rounded">ОКУПАЕМОСТЬ С 1 ДЕРЕВА</span>
            </div>
            <div class="text-slate-200 leading-relaxed text-[11px] mb-1">
              “Understood. But in tree work, literally one single hazardous tree takedown or storm removal is $3,500 to $6,000+. So this pays for itself on your very first serious call. Plus, zero monthly fees — traditional marketing agencies charge $500 to $800 every single month forever. If $2,500 all at once is tight, we can do 50/50: $1,250 now to launch within 24 hours under your domain, you text me your truck photos, and the second $1,250 in 30 days. Fair enough?”
            </div>
            <div class="text-[10.5px] text-slate-400 italic">
              RU: Показываем окупаемость с 1 выезда на спил ($4k+) + бьем по агентствам, сосущим абонентку + предлагаем сплит 50/50.
            </div>
          </div>

          <!-- 3 -->
          <div class="bg-slate-950 border border-slate-800 p-3 rounded-xl">
            <div class="flex justify-between items-start mb-1">
              <span class="font-bold text-amber-300">3. «We already have plenty of work / Word of mouth only»</span>
              <span class="text-[9.5px] font-mono bg-amber-950 border border-amber-800 text-amber-300 px-1.5 py-0.5 rounded">ФИЛЬТР НА $5,000+</span>
            </div>
            <div class="text-slate-200 leading-relaxed text-[11px] mb-1">
              “Word of mouth is the absolute best reputation, 100%! The only reason we built this: younger families moving into your area don't know the local names yet. When a tree leans toward their roof after a storm, they search Google on their phone. Plus, this isn't about small $150 limb prunings — it positions you for the big $5,000 to $10,000 crane removals with your heavy equipment featured.”
            </div>
            <div class="text-[10.5px] text-slate-400 italic">
              RU: Новые жители не знают старых арбористов. Сайт нужен не ради обрезки кустов за $150, а чтобы забирать жирные заказы на аварийный спил под $10,000.
            </div>
          </div>

          <!-- 4 -->
          <div class="bg-slate-950 border border-slate-800 p-3 rounded-xl">
            <div class="flex justify-between items-start mb-1">
              <span class="font-bold text-purple-300">4. «We already have a website / Facebook page»</span>
              <span class="text-[9.5px] font-mono bg-purple-950 border border-purple-800 text-purple-300 px-1.5 py-0.5 rounded">СКОРОСТЬ ПРИ ШТОРМЕ</span>
            </div>
            <div class="text-slate-200 leading-relaxed text-[11px] mb-1">
              “100%, and that's great! Most tree services already had an older desktop site or a Facebook page. But during storm emergencies, over 90% of homeowners search from a phone with branches on their roof or driveway blocked. Ours loads in under 1 second and is built for pure 1-tap emergency calls with your real bucket trucks front and center. You can point your official domain right here.”
            </div>
            <div class="text-[10.5px] text-slate-400 italic">
              RU: Во время ураганов люди не сидят за компьютерами — они в панике тыкают в телефон. Наш сайт загружается за 1 секунду и дает мгновенный вызов бригады.
            </div>
          </div>

          <!-- 5 -->
          <div class="bg-slate-950 border border-slate-800 p-3 rounded-xl">
            <div class="flex justify-between items-start mb-1">
              <span class="font-bold text-teal-300">5. «Just send an email with the pricing»</span>
              <span class="text-[9.5px] font-mono bg-teal-950 border border-teal-800 text-teal-300 px-1.5 py-0.5 rounded">ОБМЕН НА ФОТО ТЕХНИКИ</span>
            </div>
            <div class="text-slate-200 leading-relaxed text-[11px] mb-1">
              “Happy to send an email! What's your best email address? I'll send the full breakdown over right now. And in the meantime, feel free to text over photos of your bucket trucks, chippers, or crew right to this cell — we'll drop them onto your live preview today so you can see how sharp it looks before you decide!”
            </div>
            <div class="text-[10.5px] text-slate-400 italic">
              RU: Берем email, но сразу переводим диалог на отправку фото техники в СМС. Пока клиент ждет email, он вовлекается в отправку реальных фото.
            </div>
          </div>

          <!-- 6 -->
          <div class="bg-slate-950 border border-slate-800 p-3 rounded-xl">
            <div class="flex justify-between items-start mb-1">
              <span class="font-bold text-rose-300">6. «Need to talk to my business partner»</span>
              <span class="text-[9.5px] font-mono bg-rose-950 border border-rose-800 text-rose-300 px-1.5 py-0.5 rounded">ФИКСАЦИЯ ВРЕМЕНИ</span>
            </div>
            <div class="text-slate-200 leading-relaxed text-[11px] mb-1">
              “100%, definitely want both partners on board. Just forward that text message with the link to them so they can tap it on their phone. What do you think is the main question they'll have? ... Got it. I’ll give you a short buzz tomorrow around 10 AM after you’ve had a chance to show them. Sound good?”
            </div>
            <div class="text-[10.5px] text-slate-400 italic">
              RU: Уважаем партнерство, выясняем скрытый вопрос и жестко фиксируем созвон на завтра в 10:00.
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- CURRENT LEAD CARD -->
    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl relative">

      <!-- Top Row: Lead Index + Rating -->
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
        <div class="flex items-center gap-2">
          <span id="leadBadgeId" class="bg-emerald-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded-lg font-mono">#1</span>
          <h1 id="leadName" class="text-lg sm:text-xl font-black text-white">Company Name</h1>
        </div>
        <div class="flex items-center gap-2">
          <span id="leadRatingBadge" class="bg-amber-950/80 border border-amber-800/70 text-amber-300 font-bold text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 font-mono">
            ⭐ 4.9 (120 отзывов)
          </span>
          <span id="leadImessageBadge" class="bg-sky-950/80 border border-sky-800/70 text-sky-300 font-bold text-xs px-2 py-1 rounded-lg font-mono hidden">
            💬 iMessage
          </span>
        </div>
      </div>

      <!-- Lead Details Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 text-xs">
        <!-- Left Column: Phone & Location -->
        <div class="space-y-2.5">
          <div class="flex items-center justify-between bg-slate-950 p-2.5 rounded-xl border border-slate-800/80">
            <div>
              <div class="text-[10px] text-slate-500 uppercase font-bold">Телефон компании:</div>
              <div id="leadPhoneDisplay" class="text-base font-black text-emerald-400 font-mono tracking-wide">+1 000-000-0000</div>
            </div>
            <button onclick="copyPhone()" class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold px-2.5 py-1.5 rounded-lg border border-slate-700 transition">
              Скопировать
            </button>
          </div>

          <div class="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80">
            <div class="text-[10px] text-slate-500 uppercase font-bold">Локация и адрес:</div>
            <div id="leadAddressDisplay" class="text-slate-200 font-medium truncate">Jacksonville, FL</div>
          </div>
        </div>

        <!-- Right Column: Online Status & Links -->
        <div class="space-y-2.5">
          <div class="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80">
            <div class="text-[10px] text-slate-500 uppercase font-bold">Текущий сайт / Проблема:</div>
            <div id="leadSiteProblemDisplay" class="text-amber-400 font-semibold truncate">Сайт не работает или отсутствует</div>
          </div>

          <div class="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between gap-2">
            <div class="truncate">
              <div class="text-[10px] text-slate-500 uppercase font-bold">Ссылка на макет (Showcase):</div>
              <a id="leadShowcaseLink" href="#" target="_blank" class="text-teal-400 hover:underline font-mono text-xs font-semibold truncate block">
                https://tree-portal.up.railway.app/...
              </a>
            </div>
            <button onclick="copyShowcaseUrl()" class="shrink-0 bg-slate-800 hover:bg-slate-700 text-teal-300 text-[11px] font-bold px-2 py-1 rounded border border-slate-700">
              URL
            </button>
          </div>
        </div>
      </div>

      <!-- BIG ACTION BUTTONS: CALL & SMS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        <a id="btnCallHref" href="#" class="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-950/50 transition transform active:scale-95">
          <span class="text-base">📞</span>
          <span>НАБРАТЬ НОМЕР (CALL NOW)</span>
        </a>

        <a id="btnSmsHref" href="#" class="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-slate-950 font-black text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-cyan-950/50 transition transform active:scale-95">
          <span class="text-base">💬</span>
          <span>ОТПРАВИТЬ SMS СО ССЫЛКОЙ</span>
        </a>
      </div>

      <!-- SMS SENDING SEQUENCE BOX (From Page 3 Algorithm) -->
      <div class="bg-slate-950 border border-slate-800 rounded-xl p-3 mb-4">
        <div class="text-[10px] font-bold text-slate-400 uppercase mb-2 flex items-center justify-between">
          <span class="text-emerald-400 font-mono">📱 АЛГОРИТМ ОТПРАВКИ 2 СООБЩЕНИЙ (ДЛЯ КРАСИВОГО ПРЕВЬЮ НА IOS/ANDROID)</span>
          <span class="text-slate-500 text-[10px]">Пункт 1 памятки</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
            <div>
              <div class="text-[10px] text-slate-500 font-bold mb-1">СМС #1 (Текст интро):</div>
              <div id="smsMsg1Text" class="text-slate-200 text-[11px] font-sans leading-relaxed">
                Hey! Tatyana here with Zonus. Here’s the free mobile preview we put together for your tree crew:
              </div>
            </div>
            <button onclick="copyText('smsMsg1Text')" class="mt-2 text-emerald-400 hover:text-emerald-300 text-[10px] font-bold underline self-start">
              Копировать текст СМС 1
            </button>
          </div>

          <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
            <div>
              <div class="text-[10px] text-slate-500 font-bold mb-1">СМС #2 (Чистая ссылка для превью-карточки):</div>
              <div id="smsMsg2Link" class="text-teal-300 text-[11px] font-mono break-all">
                https://tree-portal.up.railway.app/...
              </div>
            </div>
            <button onclick="copyText('smsMsg2Link')" class="mt-2 text-teal-400 hover:text-teal-300 text-[10px] font-bold underline self-start">
              Копировать ссылку СМС 2
            </button>
          </div>
        </div>
      </div>

      <!-- CALL OUTCOME LOGGING (1-Click) -->
      <div class="bg-slate-950 border border-slate-800/90 rounded-xl p-3.5">
        <div class="text-[11px] font-bold text-slate-400 uppercase mb-2 flex items-center justify-between">
          <span>Фиксация результата звонка:</span>
          <span id="footerLeadStatus" class="text-slate-500 font-mono text-[10px]">Статус: не обработан</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-3">
          <button onclick="logStatusAndNext('AGREED')" class="bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 font-bold text-xs py-2 px-1 rounded-lg transition text-center">
            🟢 Согласен на SMS
          </button>
          <button onclick="logStatusAndNext('CALLBACK_930')" class="bg-amber-950/60 hover:bg-amber-900/80 border border-amber-700/60 text-amber-300 font-bold text-xs py-2 px-1 rounded-lg transition text-center">
            🟡 Созвон в 9:30 AM
          </button>
          <button onclick="logStatusAndNext('PHOTOS_SENT')" class="bg-teal-950/60 hover:bg-teal-900/80 border border-teal-700/60 text-teal-300 font-bold text-xs py-2 px-1 rounded-lg transition text-center">
            📸 Скинул фото
          </button>
          <button onclick="logStatusAndNext('VOICEMAIL')" class="bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-700/60 text-indigo-300 font-bold text-xs py-2 px-1 rounded-lg transition text-center">
            📼 Автоответчик
          </button>
          <button onclick="logStatusAndNext('NO_ANSWER')" class="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-300 font-bold text-xs py-2 px-1 rounded-lg transition text-center">
            ⚪ Не ответил
          </button>
          <button onclick="logStatusAndNext('DECLINED')" class="bg-rose-950/60 hover:bg-rose-900/80 border border-rose-700/60 text-rose-300 font-bold text-xs py-2 px-1 rounded-lg transition text-center">
            🔴 Отказ
          </button>
        </div>

        <!-- Optional Note Input -->
        <div class="flex gap-2">
          <input id="leadNoteInput" type="text" placeholder="Имя владельца (если назвал) / заметка (напр: Clint, перезвонить в 9:30 AM, просил email: info@...)" class="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 flex-1 focus:outline-none focus:border-emerald-500">
          <button onclick="saveCurrentNote()" class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-700 transition">
            Сохранить заметку
          </button>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <div class="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/80">
        <button onclick="prevLead()" class="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 transition">
          <span>←</span> Предыдущий
        </button>

        <span class="text-[11px] text-slate-500 font-mono">Клавиши: [← Назад] [Вперед →]</span>

        <button onclick="nextLead()" class="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 transition">
          Следующий <span>→</span>
        </button>
      </div>

    </div>

  </main>

  <!-- MODAL: CALL LOG TABLE -->
  <div id="logModal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
      <div class="p-4 border-b border-slate-800 flex items-center justify-between">
        <div class="font-black text-white text-sm flex items-center gap-2">
          <span>📋</span> Журнал звонков Татьяны (Все 50 лидов)
        </div>
        <div class="flex items-center gap-2">
          <button onclick="exportCsv()" class="bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg transition">
            📥 Скачать CSV с отчетом
          </button>
          <button onclick="toggleLogModal()" class="text-slate-400 hover:text-white text-sm font-bold px-2 py-1">
            ✕
          </button>
        </div>
      </div>

      <div class="flex-1 overflow-auto p-4">
        <table class="w-full text-left text-xs border-collapse font-sans">
          <thead>
            <tr class="border-b border-slate-800 text-slate-400 font-mono text-[10px] uppercase">
              <th class="py-2">#</th>
              <th class="py-2">Компания</th>
              <th class="py-2">Телефон</th>
              <th class="py-2">Статус</th>
              <th class="py-2">Заметка / Имя владельца</th>
            </tr>
          </thead>
          <tbody id="logTableBody" class="divide-y divide-slate-800/60">
            <!-- Rendered by JS -->
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <script>
    const leadsData = {leads_json};
    let currentIndex = 0;
    let selectedDomain = 'tree-portal.up.railway.app'; // Default to working live domain during Railway outage
    let loggedCalls = JSON.parse(localStorage.getItem('tatiana_tree_calls') || '{{}}');

    function switchTab(tabId) {{
      const c1 = document.getElementById('tabCall1Content');
      const c2 = document.getElementById('tabCall2Content');
      const cs = document.getElementById('tabCheatSheetContent');
      const b1 = document.getElementById('tabCall1Btn');
      const b2 = document.getElementById('tabCall2Btn');
      const bs = document.getElementById('tabCheatSheetBtn');

      c1.classList.add('hidden');
      c2.classList.add('hidden');
      cs.classList.add('hidden');
      b1.className = 'tab-btn px-3.5 py-1.5 rounded-lg text-xs font-bold border border-slate-800 text-slate-400 hover:text-white transition';
      b2.className = 'tab-btn px-3.5 py-1.5 rounded-lg text-xs font-bold border border-slate-800 text-slate-400 hover:text-white transition';
      bs.className = 'tab-btn px-3.5 py-1.5 rounded-lg text-xs font-bold border border-slate-800 text-slate-400 hover:text-white transition';

      if (tabId === 'call1') {{
        c1.classList.remove('hidden');
        b1.className = 'tab-btn active px-3.5 py-1.5 rounded-lg text-xs font-bold border border-emerald-500/50 transition';
      }} else if (tabId === 'call2') {{
        c2.classList.remove('hidden');
        b2.className = 'tab-btn active px-3.5 py-1.5 rounded-lg text-xs font-bold border border-emerald-500/50 transition';
      }} else if (tabId === 'cheatSheet') {{
        cs.classList.remove('hidden');
        bs.className = 'tab-btn active px-3.5 py-1.5 rounded-lg text-xs font-bold border border-emerald-500/50 transition';
      }}
    }}

    function setDomain(dom) {{
      selectedDomain = dom;
      if (dom === 'zonus.co') {{
        document.getElementById('btnDomZonus').className = 'px-2 py-0.5 rounded font-mono font-bold bg-emerald-500 text-slate-950 transition';
        document.getElementById('btnDomTreePortal').className = 'px-2 py-0.5 rounded font-mono font-bold text-slate-400 hover:text-white transition';
      }} else {{
        document.getElementById('btnDomTreePortal').className = 'px-2 py-0.5 rounded font-mono font-bold bg-emerald-500 text-slate-950 transition';
        document.getElementById('btnDomZonus').className = 'px-2 py-0.5 rounded font-mono font-bold text-slate-400 hover:text-white transition';
      }}
      renderCurrentLead();
    }}

    function renderCurrentLead() {{
      if (!leadsData || leadsData.length === 0) return;
      const lead = leadsData[currentIndex];

      document.getElementById('headerLeadCounter').innerText = `Контакт #${{currentIndex + 1}} из ${{leadsData.length}}`;
      document.getElementById('leadBadgeId').innerText = `#${{lead.id}}`;
      document.getElementById('leadName').innerText = lead.name;

      const ratingText = lead.rating ? `⭐ ${{lead.rating}} (${{lead.reviewCount || 0}} отзывов)` : 'Нет отзывов';
      document.getElementById('leadRatingBadge').innerText = ratingText;

      const imBadge = document.getElementById('leadImessageBadge');
      if (lead.imessage === 'Да' || lead.imessage === true) {{
        imBadge.classList.remove('hidden');
      }} else {{
        imBadge.classList.add('hidden');
      }}

      document.getElementById('leadPhoneDisplay').innerText = lead.phone || 'Нет номера';
      document.getElementById('leadAddressDisplay').innerText = lead.address || lead.state || 'Флорида / США';
      document.getElementById('leadSiteProblemDisplay').innerText = lead.siteProblem || 'Сайт отсутствует';

      // Showcase URL calculation based on selected domain
      const slug = lead.slug || '';
      const showcaseUrl = `https://${{selectedDomain}}/${{slug}}`;
      const showcaseA = document.getElementById('leadShowcaseLink');
      showcaseA.href = showcaseUrl;
      showcaseA.innerText = showcaseUrl;

      // Phone Clean Href
      const cleanPhone = (lead.phone || '').replace(/[^0-9+]/g, '');
      document.getElementById('btnCallHref').href = `tel:${{cleanPhone}}`;

      // SMS Href (Clean message with direct showcase link)
      const cleanBizName = lead.name.replace(/,?\\s*(LLC|Inc\\.?|Corp\\.?|Co\\.?)\\b/gi, '').trim();
      const smsBody = `Hey ${{cleanBizName}}! Tatyana here with Zonus. Here’s the free mobile preview we put together for your tree crew:\\n\\n${{showcaseUrl}}\\n\\nTake a quick scroll to make sure we got your services and contact info right. If you have any truck, chipper, or climbing crew photos you want added, we can plug them right in!`;
      document.getElementById('btnSmsHref').href = `sms:${{cleanPhone}}&body=${{encodeURIComponent(smsBody)}}`;

      // Update SMS Box texts
      document.getElementById('smsMsg1Text').innerText = `Hey ${{cleanBizName}}! Tatyana here with Zonus. Here’s the free mobile preview we put together for your tree crew:`;
      document.getElementById('smsMsg2Link').innerText = showcaseUrl;

      // Dynamic script replacements
      document.getElementById('scriptCall1Owner').innerText = 
        `“Hey ${{cleanBizName}}, Tatyana here with Zonus. I was looking at your 5-star Google reviews for ${{cleanBizName}} — we put together a free mobile preview for your tree business so homeowners can tap and call your emergency crew in one second. Zero cost, zero strings attached — just wanted to shoot you a quick link on your cell so you can double check if we got all your services and phone number right, and see if you have any photos of your bucket trucks, chippers, or climbing crew you want added in. Is this cell good to text?”`;

      document.getElementById('scriptGatekeeper').innerHTML = 
        `“Hi! Is the owner around, or is he out on a tree job right now?<br><br><strong class="text-sky-300">[IF OUT / WHAT IS THIS REGARDING]:</strong> Got it! We build fast mobile showcases specifically for tree removal and emergency storm services. We put together a clean mobile preview for ${{cleanBizName}} featuring your 5-star Google reviews. What's the best cell number I can text the link to so he can tap it when he comes off the job site tonight?”`;

      const vmEl = document.getElementById('scriptVoicemailText');
      if (vmEl) {{
        vmEl.innerText = `“Hey ${{cleanBizName}}, this is Tatyana with Zonus. We put together a free mobile preview for your tree crew featuring your 5-star Google reviews and equipment. I’m shooting over a quick text with the link right now so you can take a look when you come off the tree tonight. Have a great day!”`;
      }}

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
    }}

    function formatStatusName(st) {{
      if (st === 'AGREED') return '🟢 Согласен на SMS';
      if (st === 'CALLBACK_930') return '🟡 Созвон в 9:30 AM';
      if (st === 'PHOTOS_SENT') return '📸 Скинул фото';
      if (st === 'VOICEMAIL') return '📼 Автоответчик';
      if (st === 'NO_ANSWER') return '⚪ Не ответил';
      if (st === 'DECLINED') return '🔴 Отказ';
      return st;
    }}

    function logStatusAndNext(status) {{
      const lead = leadsData[currentIndex];
      const note = document.getElementById('leadNoteInput').value.trim();
      
      loggedCalls[lead.phone] = {{
        id: lead.id,
        name: lead.name,
        phone: lead.phone,
        status: status,
        note: note,
        slug: lead.slug,
        timestamp: new Date().toISOString()
      }};

      localStorage.setItem('tatiana_tree_calls', JSON.stringify(loggedCalls));
      updateStats();

      if (currentIndex < leadsData.length - 1) {{
        currentIndex++;
        renderCurrentLead();
      }} else {{
        alert('🎉 Отличная работа! Все 50 контактов пройдены!');
      }}
    }}

    function saveCurrentNote() {{
      const lead = leadsData[currentIndex];
      const note = document.getElementById('leadNoteInput').value.trim();
      if (!loggedCalls[lead.phone]) {{
        loggedCalls[lead.phone] = {{
          id: lead.id,
          name: lead.name,
          phone: lead.phone,
          status: 'NOTE',
          note: note,
          slug: lead.slug,
          timestamp: new Date().toISOString()
        }};
      }} else {{
        loggedCalls[lead.phone].note = note;
      }}
      localStorage.setItem('tatiana_tree_calls', JSON.stringify(loggedCalls));
      alert('Заметка сохранена!');
      updateStats();
    }}

    function nextLead() {{
      if (currentIndex < leadsData.length - 1) {{
        currentIndex++;
        renderCurrentLead();
      }}
    }}

    function prevLead() {{
      if (currentIndex > 0) {{
        currentIndex--;
        renderCurrentLead();
      }}
    }}

    function updateProgressBar() {{
      const total = leadsData.length;
      const count = Object.keys(loggedCalls).length;
      const pct = Math.round((count / total) * 100);
      document.getElementById('progressText').innerText = `${{count}} / ${{total}}`;
      document.getElementById('progressPercent').innerText = `${{pct}}%`;
      document.getElementById('progressBarFill').style.width = `${{pct}}%`;
    }}

    function updateStats() {{
      const values = Object.values(loggedCalls);
      let agreed = 0, callback = 0, photos = 0, voicemail = 0, noAnswer = 0, declined = 0;
      values.forEach(v => {{
        if (v.status === 'AGREED') agreed++;
        else if (v.status === 'CALLBACK_930') callback++;
        else if (v.status === 'PHOTOS_SENT') photos++;
        else if (v.status === 'VOICEMAIL') voicemail++;
        else if (v.status === 'NO_ANSWER') noAnswer++;
        else if (v.status === 'DECLINED') declined++;
      }});

      document.getElementById('statAgreed').innerText = `🟢 ${{agreed}}`;
      document.getElementById('statCallback').innerText = `🟡 ${{callback}}`;
      document.getElementById('statPhotos').innerText = `📸 ${{photos}}`;
      document.getElementById('statVoicemail').innerText = `📼 ${{voicemail}}`;
      document.getElementById('statNoAnswer').innerText = `⚪ ${{noAnswer}}`;
      document.getElementById('statDeclined').innerText = `🔴 ${{declined}}`;
      document.getElementById('totalLoggedCountBadge').innerText = values.length;
      updateProgressBar();
    }}

    function copyPhone() {{
      const phone = leadsData[currentIndex].phone;
      navigator.clipboard.writeText(phone);
      alert(`Номер скопирован: ${{phone}}`);
    }}

    function copyShowcaseUrl() {{
      const slug = leadsData[currentIndex].slug || '';
      const url = `https://${{selectedDomain}}/${{slug}}`;
      navigator.clipboard.writeText(url);
      alert(`Ссылка скопирована: ${{url}}`);
    }}

    function copyText(elementId) {{
      const el = document.getElementById(elementId);
      const text = el.innerText || el.textContent;
      navigator.clipboard.writeText(text);
      alert('Текст скопирован в буфер обмена!');
    }}

    function toggleLogModal() {{
      const modal = document.getElementById('logModal');
      modal.classList.toggle('hidden');
      if (!modal.classList.contains('hidden')) {{
        renderLogTable();
      }}
    }}

    function renderLogTable() {{
      const tbody = document.getElementById('logTableBody');
      tbody.innerHTML = '';
      leadsData.forEach((lead, idx) => {{
        const log = loggedCalls[lead.phone] || {{}};
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-800/50';
        tr.innerHTML = `
          <td class="py-2 font-mono text-slate-500">#${{idx + 1}}</td>
          <td class="py-2 font-bold text-white">${{lead.name}}</td>
          <td class="py-2 font-mono text-emerald-400">${{lead.phone}}</td>
          <td class="py-2">${{formatStatusName(log.status || 'Не звонили')}}</td>
          <td class="py-2 text-slate-300 italic">${{log.note || '-'}}</td>
        `;
        tbody.appendChild(tr);
      }});
    }}

    function exportCsv() {{
      let csv = 'ID,Company,Phone,Status,Note,Timestamp\\n';
      leadsData.forEach((l, idx) => {{
        const log = loggedCalls[l.phone] || {{}};
        const safeName = (l.name || '').replace(/"/g, '""');
        const safeNote = (log.note || '').replace(/"/g, '""');
        csv += `${{idx + 1}},"${{safeName}}","${{l.phone}}","${{log.status || 'UNTOUCHED'}}","${{safeNote}}","${{log.timestamp || ''}}"\\n`;
      }});

      const blob = new Blob([csv], {{ type: 'text/csv;charset=utf-8;' }});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Tatiana_Call_Report_${{new Date().toISOString().slice(0,10)}}.csv`;
      a.click();
    }}

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {{
      if (document.activeElement.tagName === 'INPUT') return;
      if (e.key === 'ArrowRight') nextLead();
      if (e.key === 'ArrowLeft') prevLead();
    }});

    // Init
    renderCurrentLead();
    updateStats();
  </script>
</body>
</html>
"""

with open('/Users/workpc/Documents/google-maps-scraper/output/tree_leads/dialer_batches/dialer_tatiana.html', 'w', encoding='utf-8') as f:
    f.write(html_template)

with open('/Users/workpc/Documents/All Florida Tree Care/public/dialer_tatiana.html', 'w', encoding='utf-8') as f:
    f.write(html_template)

print('Successfully updated dialer_tatiana.html with all 3 pages of ZONUS TREE SERVICE PLAYBOOK!')
