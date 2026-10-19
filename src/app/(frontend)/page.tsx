import React from 'react'
import type { Metadata } from 'next'
import { StarRating } from '../../components/StarRating'

export const metadata: Metadata = {
  title: 'Florida Tree Care Crews | Каталог макетов для бригад',
  description: 'Панель управления и быстрый переход между посадочными страницами бригад по спилу деревьев во Флориде.',
}

export default function CrewsHubPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] bg-gradient-to-tr from-amber-500/10 via-emerald-500/10 to-transparent blur-[140px]" />
      </div>

      {/* Top micro status bar */}
      <div className="border-b border-slate-800/80 bg-slate-950/80 px-4 py-2 text-xs text-slate-400">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-200">Florida Tree Care Network</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-400">Единая панель макетов бригад</span>
          </div>
          <div className="text-xs font-mono text-emerald-400 font-bold">
            49 активных бригад (Флорида, Орегон, Вашингтон, Джорджия, Техас, Каролины и др.)
          </div>
        </div>
      </div>

      {/* Main Hub Content */}
      <main className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-3.5 py-1 text-xs font-bold text-amber-300">
            <span>Каталог сайтов для демонстрации и продаж</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white">
            Макеты посадочных страниц для бригад
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Выберите нужную бригаду для быстрого перехода к её персонализированному лендингу. Все новые бригады создаются прямо в этом проекте без запуска отдельных серверов.
          </p>
        </div>

        {/* Featured Tree Leads Folder / Workspace Card */}
        <div className="mt-10 overflow-hidden rounded-3xl border-2 border-amber-500/60 bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-950 p-6 sm:p-8 shadow-2xl transition hover:border-amber-400">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-amber-950/60 px-3.5 py-1 text-xs font-bold text-amber-300">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                Новая выделенная папка • Tree Leads
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
                <span>📁</span>
                <span>База «Tree Leads» (235 новых компаний)</span>
              </h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Все новые компании из базы <code className="text-amber-400 font-mono font-bold">tree_leads</code> вынесены в отдельный интерактивный каталог. Внутри реализован мгновенный поиск по названию, фильтрация по штатам (Флорида, Техас, Джорджия, Каролины и др.) и прямой доступ к макетам на английском и русском языках.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono">
                <span className="rounded-lg bg-slate-950/90 border border-slate-800 px-3 py-1 text-slate-200">
                  🏢 235 макетов
                </span>
                <span className="rounded-lg bg-slate-950/90 border border-slate-800 px-3 py-1 text-amber-400 font-bold">
                  ⭐ Средний рейтинг 4.9
                </span>
                <span className="rounded-lg bg-slate-950/90 border border-slate-800 px-3 py-1 text-emerald-400">
                  📍 10+ штатов США
                </span>
                <span className="rounded-lg bg-slate-950/90 border border-slate-800 px-3 py-1 text-sky-400">
                  🌐 EN / RU версии
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                href="/tree-leads"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 px-6 py-4 text-sm font-black text-slate-950 shadow-xl hover:shadow-amber-500/25 transition hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="text-xl">📁</span>
                <span>Открыть папку Tree Leads →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Crews Grid: Grid Layout for 5 Active Crews */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Crew Card 1: All Florida Tree Care LLC */}
          <div className="relative rounded-2xl border-2 border-amber-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-amber-400 group">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-950/80 border border-amber-800/80 px-2.5 py-1 text-xs font-bold text-amber-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #1
                </span>
              </div>

              {/* Title & Location */}
              <h2 className="mt-4 text-xl font-black text-white group-hover:text-amber-400 transition">
                All Florida Tree Care
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Palmetto, Bradenton, Sarasota</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">Justin & Alex Carrier</span>
              </div>

              {/* Stats & Equipment */}
              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг Google:</div>
                  <div className="text-amber-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (50+ отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(941) 587-9271</div>
                </div>
              </div>

              {/* Strengths & Features */}
              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Автовышка 60+ футов + верхолазы в узких дворах</li>
                  <li>• Отчеты арбориста для разрешений HOA</li>
                  <li>• Расчистка для солнечных батарей и террас</li>
                  <li>• Фиксированная смета в течение 1 часа</li>
                </ul>
              </div>

              {/* Color Scheme Tag */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 text-amber-300 font-mono">
                  Coastal Slate & Warm Amber
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/all-florida"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 text-xs font-black text-slate-950 shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/all-florida/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-amber-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://maps.app.goo.gl/hdLrE1cP6UX1NF7F9"
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

          {/* Crew Card 2: Tree Removers (Brad Frederick) */}
          <div className="relative rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-emerald-400 group">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 text-xs font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Отдельный репозиторий
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #2
                </span>
              </div>

              {/* Title & Location */}
              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                Tree Removers
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Venice, Englewood, North Port</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Brad Frederick</span>
              </div>

              {/* Stats & Equipment */}
              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг Google:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 Verified</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(941) 270-1311</div>
                </div>
              </div>

              {/* Strengths & Features */}
              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Гусеничная пнедробилка Bobcat SG60 (до 14″)</li>
                  <li>• Тяжелый измельчитель веток и самосвал</li>
                  <li>• Прямой выезд мастера Брэда без посредников</li>
                  <li>• Репозиторий: batumirentauto/treeremovers</li>
                </ul>
              </div>

              {/* Color Scheme Tag */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 text-emerald-300 font-mono">
                  Emerald Arborist Green
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="https://treeremovers-production.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-xs font-black text-slate-950 shadow-md transition hover:brightness-110"
              >
                <span>Открыть проект Брэда (Railway) ↗</span>
              </a>

              <a
                href="https://github.com/batumirentauto/treeremovers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white transition"
              >
                <span>GitHub Репозиторий ↗</span>
              </a>
            </div>
          </div>

          {/* Crew Card 3: Teco's Total Tree LLC */}
          <div className="relative rounded-2xl border-2 border-yellow-500/50 bg-gradient-to-b from-slate-900/95 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-yellow-400 group">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-yellow-950/80 border border-yellow-800/80 px-2.5 py-1 text-xs font-bold text-yellow-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                  В этом проекте • Новинка
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #3
                </span>
              </div>

              {/* Title & Location */}
              <h2 className="mt-4 text-xl font-black text-white group-hover:text-yellow-400 transition">
                Teco&apos;s Total Tree LLC
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Bradenton, Lakewood Ranch, Sarasota</span>
                <span className="text-slate-600">•</span>
                <span className="text-yellow-400 font-semibold">Дон (Don & Crew)</span>
              </div>

              {/* Stats & Equipment */}
              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг Google:</div>
                  <div className="text-yellow-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.5} size="xs" />
                    <span>(23 отзыва в Google)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(941) 345-0444</div>
                </div>
              </div>

              {/* Strengths & Features */}
              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Поддержка автокрана: перенос тяжелых ветвей над крышами</li>
                  <li>• Мощная фреза Vermeer: корчевка пней на глубину 25–35 см</li>
                  <li>• Дон рассчитывает спуск: 0 повреждений газона и плитки</li>
                  <li>• Выезд в день обращения + самосвал Diamond C</li>
                </ul>
              </div>

              {/* Color Scheme Tag */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-yellow-950/60 border border-yellow-800/60 px-2 py-0.5 text-yellow-300 font-mono">
                  Heavy Equipment Gold & Slate
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/tecos"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-4 py-2 text-xs font-black text-slate-950 shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/tecos/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-yellow-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://maps.app.goo.gl/SpQ6NxTEbGMgCCN6A"
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

          {/* Crew Card 4: Seybold Property Solutions (SPS) */}
          <div className="relative rounded-2xl border-2 border-emerald-500/50 bg-gradient-to-b from-slate-900/95 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-emerald-400 group">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/90 border border-emerald-700/80 px-2.5 py-1 text-xs font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  В этом проекте • Светлая тема
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #4
                </span>
              </div>

              {/* Title & Location */}
              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                Seybold Property Solutions (SPS)
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Ellenton, Bradenton, Parrish, Sarasota</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Райан Сейболд (Ryan Seybold)</span>
              </div>

              {/* Stats & Equipment */}
              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг Google:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (23 отзыва, 100% высший балл)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефоны бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(941) 212-8294 • (941) 812-2741</div>
                </div>
              </div>

              {/* Strengths & Features */}
              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Гусеничный Vermeer CTX100: 0 повреждений и колеи на газоне</li>
                  <li>• Очистка дубов от испанского мха (оценка Master Gardener)</li>
                  <li>• Дробление пней в 5 см от заборов гидрофрезой</li>
                  <li>• Экстренный выезд 24/7: ликвидация завалов за 2 часа</li>
                </ul>
              </div>

              {/* Color Scheme Tag */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 text-emerald-300 font-mono">
                  Clean Light Theme & Florida Emerald
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/seybold"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 px-4 py-2 text-xs font-black text-slate-950 shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/seybold/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-emerald-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Seybold+Property+Solutions+Ellenton+FL"
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

          {/* Crew Card 5: Hard Kor Tree Care FL, LLC */}
          <div className="relative rounded-2xl border-2 border-red-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-red-400 group">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-red-950/80 border border-red-800/80 px-2.5 py-1 text-xs font-bold text-red-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #5
                </span>
              </div>

              {/* Title & Location */}
              <h2 className="mt-4 text-xl font-black text-white group-hover:text-red-400 transition">
                Hard Kor Tree Care
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 St. Petersburg, Gulfport, Pinellas</span>
                <span className="text-slate-600">•</span>
                <span className="text-red-400 font-semibold">Karode Reid (&ldquo;Reid&rdquo;)</span>
              </div>

              {/* Stats & Equipment */}
              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг Google:</div>
                  <div className="text-red-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (30 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(727) 318-8691</div>
                </div>
              </div>

              {/* Strengths & Features */}
              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Тяжелый ломовоз с гидрозахватом-клешней (вывоз бревен за минуты)</li>
                  <li>• Опыт ураганов Helene и Milton: честные цены без спекуляций</li>
                  <li>• Автокран в узких дворах Сент-Питерсберга и арбористический альпинизм</li>
                  <li>• Официальные отчеты сертифицированного арбориста (Certified Arborist)</li>
                </ul>
              </div>

              {/* Color Scheme Tag */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-red-950/60 border border-red-800/60 px-2 py-0.5 text-red-300 font-mono">
                  Rescue Crimson & Storm Slate
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/hard-kor"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/hard-kor/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-red-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Hard+Kor+Tree+Care+St+Petersburg+FL"
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

          {/* Crew Card 6: Robert Reynolds Landscape & Tree Service, Inc. */}
          <div className="relative rounded-2xl border-2 border-sky-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-sky-400 group">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-950/80 border border-sky-800/80 px-2.5 py-1 text-xs font-bold text-sky-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #6
                </span>
              </div>

              {/* Title & Location */}
              <h2 className="mt-4 text-xl font-black text-white group-hover:text-sky-400 transition">
                Robert Reynolds Landscape & Tree
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Sarasota, Siesta Key, Lakewood Ranch</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Robert Reynolds (&ldquo;Rob&rdquo;)</span>
              </div>

              {/* Stats & Equipment */}
              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Отзывы на Google Maps:</div>
                  <div className="text-sky-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.7} size="xs" />
                    <span>27 проверенных отзывов</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(941) 356-2761 • Офис: (941) 960-1147</div>
                </div>
              </div>

              {/* Strengths & Features */}
              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Автовышка 14+ метров над крышами + челюстной гидрозахват бревен</li>
                  <li>• Ветрозащитное прореживание вековых дубов перед сезоном ураганов</li>
                  <li>• Спил нависающих крон над забором для солнца у бассейна</li>
                  <li>• Выбор ведущих риелторов Сарасоты: цены часто выгоднее конкурентов</li>
                </ul>
              </div>

              {/* Color Scheme Tag */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-sky-950/60 border border-sky-800/60 px-2 py-0.5 text-sky-300 font-mono">
                  Sarasota Azure & Palm Green
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/reynolds"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/reynolds/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-sky-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Robert+Reynolds+Landscape+Inc+Sarasota+FL"
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

          {/* Crew Card 7: Holcomb Timber & Tree Services LLC */}
          <div className="relative rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-b from-[#07130c]/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-emerald-400 group">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 text-xs font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #7 (Орегон)
                </span>
              </div>

              {/* Title & Location */}
              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                Holcomb Timber & Tree Services
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Pleasant Hill, Eugene, Lane County & Coast, OR</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Tony Holcomb (Мастер точной валки)</span>
              </div>

              {/* Stats & Equipment */}
              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Отзывы на Google Maps:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (24 проверенных отзыва)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(541) 844-4111</div>
                </div>
              </div>

              {/* Strengths & Features */}
              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Валка вековых пихт Дугласа 30+ метров и зависших сучьев (Widow Makers)</li>
                  <li>• Спуск двухметровых секвой в 15 см от карнизов домов над мощеными дорожками</li>
                  <li>• Устранение завалов деревьев с крыш дач и распиловка на дрова</li>
                  <li>• Собственный измельчитель веток + идеальная чистота газона</li>
                </ul>
              </div>

              {/* Color Scheme Tag */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 text-emerald-300 font-mono">
                  Oregon Pine & Timber Green
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/holcomb"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/holcomb/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-emerald-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Holcomb+Timber+%26+Tree+Services+LLC/@43.9733474,-122.9302864,17z/data=!3m1!4b1!4m6!3m5!1s0x54c0e13b58932c5f:0xb7cded6b3d1ef7f4!8m2!3d43.9733474!4d-122.9302864!16s%2Fg%2F11f7b5djnj"
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

          {/* Crew Card 8: Patrick Myers Tree Service LLC */}
          <div className="relative rounded-2xl border-2 border-sky-500/40 bg-gradient-to-b from-[#071120]/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-sky-400 group">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-950/80 border border-sky-800/80 px-2.5 py-1 text-xs font-bold text-sky-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #8 (Орегон)
                </span>
              </div>

              {/* Title & Location */}
              <h2 className="mt-4 text-xl font-black text-white group-hover:text-sky-400 transition">
                Patrick Myers Tree Service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Coos Bay, North Bend, Bandon, OR</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-semibold">Patrick Myers • Джо, Уэс и Дэниел</span>
              </div>

              {/* Stats & Equipment */}
              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Отзывы на Google Maps:</div>
                  <div className="text-sky-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.7} size="xs" />
                    <span>4.7 (40 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(541) 756-3197</div>
                </div>
              </div>

              {/* Strengths & Features */}
              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Автовышка с телескопической стрелой + пофрагментный спуск сухих кедров</li>
                  <li>• Опыт безопасной расчистки масштабных объектов на 30+ деревьев у жилых комплексов</li>
                  <li>• Скоростное измельчение больших завалов веток коммерческим щепорезом</li>
                  <li>• Честные цены без посредников (часто почти в 2 раза выгоднее конкурентов)</li>
                </ul>
              </div>

              {/* Color Scheme Tag */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-sky-950/60 border border-sky-800/60 px-2 py-0.5 text-sky-300 font-mono">
                  Pacific Ocean Blue & Marine Navy
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/myers"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/myers/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-sky-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Patrick+Myers+Tree+Service+LLC/@43.3586752,-124.2150181,17z/data=!3m1!4b1!4m6!3m5!1s0x54c385a8a6974a3b:0x573493891177a1cb!8m2!3d43.3586752!4d-124.2150181!16s%2Fg%2F1tdkxdft"
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

          {/* Crew Card 9: Allwood Tree Service */}
          <div className="relative rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-emerald-400 group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 text-xs font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Новый лендинг • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #9
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                Allwood Tree Service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Jacksonville & Fruit Cove, FL</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Владелец Джеймс</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Отзывы на Google Maps:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (58 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(904) 315-8870</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Спил вековых дубов и магнолий в стесненных условиях</li>
                  <li>• Дробление пней мощной фрезой Vermeer SC852 на глубину до 25 дюймов</li>
                  <li>• Расчистка ранчо, конных владений и участков от 1 до 20+ акров</li>
                  <li>• Расчет сметы на следующее утро и оперативный выезд</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 text-emerald-300 font-mono">
                  Deep Emerald & Forest Green
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/allwood"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/allwood/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-emerald-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Allwood+Tree+Service/@30.076977,-81.6405676,17z/data=!3m1!4b1!4m6!3m5!1s0x88e5d1d7de49e8a1:0x361a13038384a192!8m2!3d30.0769724!4d-81.6379873!16s%2Fg%2F11dxm5p968"
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

          {/* Crew Card 10: Hawkinberry Tree Company */}
          <div className="relative rounded-2xl border-2 border-sky-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-sky-400 group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-950/80 border border-sky-800/80 px-2.5 py-1 text-xs font-bold text-sky-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  Новый лендинг • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #10
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-sky-400 transition">
                Hawkinberry Tree Company
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Jacksonville Beach & Ponte Vedra, FL</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-semibold">Джефф Хокинберри</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Отзывы на Google Maps:</div>
                  <div className="text-sky-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (32 проверенных отзыва)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(904) 545-8376</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Гусеничный спайдер-подъемник Platform Basket 18.90 Pro (высота 18+ м)</li>
                  <li>• Проезжает в садовые калитки и проходы шириной от 90 см без повреждения газона</li>
                  <li>• Ювелирная обрезка крон в охранной зоне проводов ЛЭП и сервисных вводов</li>
                  <li>• Идеальная чистота территории «под грабли» после завершения работ</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-sky-950/60 border border-sky-800/60 px-2 py-0.5 text-sky-300 font-mono">
                  Coastal Sky & Ocean Blue
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/hawkinberry"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/hawkinberry/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-sky-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Hawkinberry+Tree+Company/@30.2979045,-81.4102687,17z/data=!3m1!4b1!4m6!3m5!1s0x4ca5d49d4f3877b:0xb28f3e7c0c976ae9!8m2!3d30.2979045!4d-81.4102687!16s%2Fg%2F11xw4q79f_"
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

          {/* Crew Card 11: Tally Trees */}
          <div className="relative rounded-2xl border-2 border-amber-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-amber-400 group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-950/80 border border-amber-800/80 px-2.5 py-1 text-xs font-bold text-amber-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Новый лендинг • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #11
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-amber-400 transition">
                Tally Trees
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Tallahassee & Leon County, FL</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">Тяжелый такелаж</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Отзывы на Google Maps:</div>
                  <div className="text-amber-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (36 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(850) 509-6805</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Мобильный автокран для подъема срезанных сосен прямо через крыши</li>
                  <li>• Погрузчик CAT с гидравлическим захватом, работающий по защитным настилам</li>
                  <li>• Безопасный демонтаж дуплистых и расколотых опасных стволов</li>
                  <li>• Срочный выезд на устранение угрозы дому в течение 48 часов</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 text-amber-300 font-mono">
                  CAT Industrial Gold & Amber
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/tally"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/tally/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-amber-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Tally+Trees/@30.4444942,-84.2591755,17z/data=!3m1!4b1!4m6!3m5!1s0x88ec597b684a58b9:0x8b9c5ac2a7b43195!8m2!3d30.4444942!4d-84.2591755!16s%2Fg%2F11p55sn001"
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

          {/* Crew Card 12: Bramlitt Tree Service LLC */}
          <div className="relative rounded-2xl border-2 border-teal-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-teal-400 group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-950/80 border border-teal-800/80 px-2.5 py-1 text-xs font-bold text-teal-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  Новый лендинг • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #12
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-teal-400 transition">
                Bramlitt Tree Service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Green Cove Springs & Clay County, FL</span>
                <span className="text-slate-600">•</span>
                <span className="text-teal-400 font-semibold">Дерек Брамлитт</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Отзывы на Google Maps:</div>
                  <div className="text-teal-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (62 проверенных отзыва)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(904) 646-8862</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Алмазная фигурная стрижка стволов финиковых пальм Сильвестра (Diamond Cut)</li>
                  <li>• Отвод тяжелых ветвей королевских пальм от черепицы и водостоков</li>
                  <li>• Честная расстановка приоритетов: что спилить срочно, а что безопасно сохранить</li>
                  <li>• Полный вывоз волокон и пальмовых остатков, безупречный порядок на газоне</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-teal-950/60 border border-teal-800/60 px-2 py-0.5 text-teal-300 font-mono">
                  Florida Coastal Teal & Emerald
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/bramlitt"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/bramlitt/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-teal-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Bramlitt+Tree+Service+LLC/@29.9873597,-81.6900902,17z/data=!3m1!4b1!4m6!3m5!1s0x88e5d7d99d7cdb13:0xebdfd4c9775f7b07!8m2!3d29.9873597!4d-81.6900902!16s%2Fg%2F11spl2ftsv"
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

          {/* Crew Card 13: Dane’s Tree & Excavation Service */}
          <div className="relative rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition hover:border-emerald-400 group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 text-xs font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Новый лендинг • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #13
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                Dane’s Tree & Excavation
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Aumsville, Salem & Marion County, OR</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Вальщик Дейн</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Отзывы на Google Maps:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (43 проверенных отзыва)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(971) 720-7509</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и преимущества:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Направленная валка леса с укладкой ствола точно между навесами и кемперами</li>
                  <li>• Верхолазный спил 25–40-метровых дугласовых пихт на гаффах в тесных дворах</li>
                  <li>• Снятие опасных 6-метровых зависших ветвей-«убийц» (widowmakers)</li>
                  <li>• Раскряжевка на дровяные чурки 40 см + возможности мини-экскавации</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 text-emerald-300 font-mono">
                  Oregon Timber Forest & Moss Green
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/danes"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/danes/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-emerald-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Dane%E2%80%99s+Tree+%26+Excavation+Service/@44.8453759,-122.8685648,17z/data=!3m1!4b1!4m6!3m5!1s0x54bff7e18f263f01:0xcdc814a1c1dc8e33!8m2!3d44.8453759!4d-122.8685648!16s%2Fg%2F11xssx4h0w"
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
                  {/* Crew Card 14: A Integrity Tree Surgeons Inc */}
          <div className="relative rounded-2xl border-2 border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border-emerald-800/80 text-emerald-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #14
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                A Integrity Tree Surgeons Inc
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Jacksonville, FL</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Стив</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.7} size="xs" />
                    <span>4.7 (218 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(904) 487-0197</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Гусеничная пнедробилка Vermeer SC362</li>
                  <li>• Такелажный комплекс для подвесного спуска</li>
                  <li>• Комплекс чистовой уборки и восстановления дерна</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border-emerald-800/60 text-emerald-300 border px-2 py-0.5 font-mono">
                  Emerald Forest & Pine Green
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/a-integrity"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/a-integrity/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/A+Integrity+Tree+Surgeons+Inc/@30.309613,-81.5981985,10z/data=!3m1!4b1!4m6!3m5!1s0x88e5b4bc7465e9d5:0xc41e22bfa6af0ed1!8m2!3d30.309613!4d-81.5981985!16s%2Fg%2F11cn8s4kns?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=487c57c7-eced-4208-bb2d-822d64d8f7cf"
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

          {/* Crew Card 15: Affordable Tree and Palm Tree Services */}
          <div className="relative rounded-2xl border-2 border-teal-500/40 hover:border-teal-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-950/80 border-teal-800/80 text-teal-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #15
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-teal-400 transition">
                Affordable Tree and Palm Tree Services
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Sacramento, CA</span>
                <span className="text-slate-600">•</span>
                <span className="text-teal-400 font-semibold">Франциско</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-teal-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.7} size="xs" />
                    <span>4.7 (93 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(916) 701-6839</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Высотный альпинистский комплект для пальм</li>
                  <li>• Комплекс фигурной стрижки и бритья ствола</li>
                  <li>• Прицеп повышенной вместимости для пальмовых веток</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-teal-950/60 border-teal-800/60 text-teal-300 border px-2 py-0.5 font-mono">
                  Coastal Teal & Palm Emerald
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/affordable"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/affordable/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Affordable+Tree+and+Palm+Tree+Services/@38.4930161,-121.4755882,17z/data=!3m1!4b1!4m6!3m5!1s0x809acf822ed5a11d:0xd07d5f0f18e3ad64!8m2!3d38.4930161!4d-121.4755882!16s%2Fg%2F11j7jnftzz?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=1032ba54-069c-403a-8b98-4f3688af6285"
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

          {/* Crew Card 16: Allen's Tree Service */}
          <div className="relative rounded-2xl border-2 border-amber-500/40 hover:border-amber-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-950/80 border-amber-800/80 text-amber-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #16
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-amber-400 transition">
                Allen's Tree Service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Youngsville, NC</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">Мистер Аллен</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-amber-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (43 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(919) 761-3159</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Коммерческая пнедробилка Rayco</li>
                  <li>• Самосвальный прицеп и ранцевые воздуходувки</li>
                  <li>• Комплекс кронирования и подъема ветвей над проездом</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-amber-950/60 border-amber-800/60 text-amber-300 border px-2 py-0.5 font-mono">
                  Warm Amber & Hardwood Gold
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/allens"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/allens/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Allen's+Tree+Service/@35.9686894,-78.4024283,17z/data=!3m1!4b1!4m6!3m5!1s0x89ac4c199492c2b5:0x7b7703a45dd787b7!8m2!3d35.9686894!4d-78.4024283!16s%2Fg%2F11g6qypvnn?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=d3893dae-dc79-40f5-be01-781587d3f31b"
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

          {/* Crew Card 17: Always Grinding Tree & Stump Removal */}
          <div className="relative rounded-2xl border-2 border-sky-500/40 hover:border-sky-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-950/80 border-sky-800/80 text-sky-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #17
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-sky-400 transition">
                Always Grinding Tree & Stump Removal
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Flowery Branch, GA</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-semibold">Дастин</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-sky-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (152 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(404) 797-1784</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Гусеничная пнедробилка Carlton SP8018 TRX</li>
                  <li>• Комплекс измельчения поверхностных корней</li>
                  <li>• Гусеничная система бережного движения по газону</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-sky-950/60 border-sky-800/60 text-sky-300 border px-2 py-0.5 font-mono">
                  Azure Sky & Mountain Blue
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/always-grinding"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/always-grinding/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Always+Grinding+Tree+%26+Stump+Removal/@34.2007085,-83.963505,10z/data=!3m1!4b1!4m6!3m5!1s0x88f5f3007f06af01:0xbd82a23df0d22bfd!8m2!3d34.2007084!4d-83.963505!16s%2Fg%2F11h5rzqhy8?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=cd481452-3f25-4baa-b70c-e1ab0f04be40"
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

          {/* Crew Card 18: At Ease Land & Tree Services LLC */}
          <div className="relative rounded-2xl border-2 border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border-emerald-800/80 text-emerald-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #18
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                At Ease Land & Tree Services LLC
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Cairo, GA</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Джон</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (82 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(229) 977-1139</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Мини-экскаватор с гидравлическим захватом бревен</li>
                  <li>• Комплекс расчистки линий ограждений и периметра</li>
                  <li>• Тяжелый лесовозный комплекс для бурелома</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border-emerald-800/60 text-emerald-300 border px-2 py-0.5 font-mono">
                  Emerald Forest & Pine Green
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/at-ease"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/at-ease/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/At+Ease+Land+%26+Tree+Services+LLC/@30.7447025,-84.077607,10z/data=!3m1!4b1!4m6!3m5!1s0x88edb1ce2dd9156f:0x5fd1524c876c068c!8m2!3d30.7447025!4d-84.077607!16s%2Fg%2F11kfw_fbr5?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=ee6283c1-1cd8-4684-bd9b-35b2d32ac554"
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

          {/* Crew Card 19: Bartolome's Tree service */}
          <div className="relative rounded-2xl border-2 border-teal-500/40 hover:border-teal-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-950/80 border-teal-800/80 text-teal-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #19
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-teal-400 transition">
                Bartolome's Tree service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Sanford, NC</span>
                <span className="text-slate-600">•</span>
                <span className="text-teal-400 font-semibold">Бартоломе</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-teal-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.8} size="xs" />
                    <span>4.8 (33 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(919) 356-3501</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Телескопическая автовышка Altec 18+ метров</li>
                  <li>• Пнедробилка Rayco повышенной мощности</li>
                  <li>• Промышленный измельчитель веток Bandit 12X</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-teal-950/60 border-teal-800/60 text-teal-300 border px-2 py-0.5 font-mono">
                  Coastal Teal & Palm Emerald
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/bartolome"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/bartolome/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Bartolome's+Tree+service/@35.4454466,-79.1767604,17z/data=!3m1!4b1!4m6!3m5!1s0x89aca767235c8439:0x82d86e5386c706ec!8m2!3d35.4454466!4d-79.1767604!16s%2Fg%2F11hx3nt8kq?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=5d9557f2-37ec-4235-a944-2de5b48f6954"
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

          {/* Crew Card 20: Best For Less Tree Care */}
          <div className="relative rounded-2xl border-2 border-amber-500/40 hover:border-amber-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-950/80 border-amber-800/80 text-amber-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #20
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-amber-400 transition">
                Best For Less Tree Care
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Vancouver, WA</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">Джеймс</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-amber-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (34 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(360) 771-1450</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Высотный комплект для спила пихт выше 30 метров</li>
                  <li>• Бензопилы высокой мощности для раскряжевки бревен</li>
                  <li>• Комплекс удаления опасных хвойных деревьев-великанов</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-amber-950/60 border-amber-800/60 text-amber-300 border px-2 py-0.5 font-mono">
                  Warm Amber & Hardwood Gold
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/best-for-less"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/best-for-less/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Best+For+Less+Tree+Care/@45.6411988,-122.5310826,17z/data=!3m1!4b1!4m6!3m5!1s0x5495a54b3a6fffff:0x116a4da7a76e9b30!8m2!3d45.6411988!4d-122.5310826!16s%2Fg%2F11fll64sxw?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=6d87415d-8342-4ce5-a4b1-a58529fb2be1"
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

          {/* Crew Card 21: Bigfoot tree care */}
          <div className="relative rounded-2xl border-2 border-sky-500/40 hover:border-sky-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-950/80 border-sky-800/80 text-sky-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #21
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-sky-400 transition">
                Bigfoot tree care
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Kent, WA</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-semibold">Дэйв</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-sky-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (31 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(253) 293-1046</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Высотная автовышка с изолированной люлькой</li>
                  <li>• Промышленная пнедробилка</li>
                  <li>• Измельчитель веток высокой производительности</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-sky-950/60 border-sky-800/60 text-sky-300 border px-2 py-0.5 font-mono">
                  Azure Sky & Mountain Blue
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/bigfoot"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/bigfoot/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Bigfoot+tree+care/@47.375699,-122.273046,17z/data=!3m1!4b1!4m6!3m5!1s0xad505c2c2941e141:0xffb586c0c5b1f588!8m2!3d47.375699!4d-122.273046!16s%2Fg%2F11w8tkwy0t?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=5e1f2335-69b4-4c84-b6d0-ef24212e33fb"
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

          {/* Crew Card 22: Broken Branch Tree Removal */}
          <div className="relative rounded-2xl border-2 border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border-emerald-800/80 text-emerald-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #22
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                Broken Branch Tree Removal
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Broadalbin, NY</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Фред</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (33 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(518) 752-9009</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Гусеничный мини-погрузчик Bobcat MT100 с захватом бревен</li>
                  <li>• Аварийный комплекс снятия упавших деревьев со строений</li>
                  <li>• Альпинистский комплект для спила аварийных сосен</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border-emerald-800/60 text-emerald-300 border px-2 py-0.5 font-mono">
                  Emerald Forest & Pine Green
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/broken-branch"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/broken-branch/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Broken+Branch+Tree+Removal/@43.057411,-74.175678,17z/data=!3m1!4b1!4m6!3m5!1s0x89de5f2f3054f441:0xa16273a172c1eab1!8m2!3d43.057411!4d-74.175678!16s%2Fg%2F1tfjx8qt?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=6eaccfc8-5ed3-4c98-94ea-e1598a9e326c"
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

          {/* Crew Card 23: Clean Cut Tree Service */}
          <div className="relative rounded-2xl border-2 border-teal-500/40 hover:border-teal-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-950/80 border-teal-800/80 text-teal-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #23
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-teal-400 transition">
                Clean Cut Tree Service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Puyallup, WA</span>
                <span className="text-slate-600">•</span>
                <span className="text-teal-400 font-semibold">Уэйд</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-teal-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (40 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(253) 249-4432</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Комплекс направленной валки хвойных великанов</li>
                  <li>• Такелажный комплект для разборки ствола на высоте</li>
                  <li>• Комплекс чистовой уборки подъездных путей</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-teal-950/60 border-teal-800/60 text-teal-300 border px-2 py-0.5 font-mono">
                  Coastal Teal & Palm Emerald
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/clean-cut"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/clean-cut/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Clean+Cut+Tree+Service/@47.1316301,-122.2887025,17z/data=!3m1!4b1!4m6!3m5!1s0x5490fd5579ce6e91:0x5007cb918b969e10!8m2!3d47.1316301!4d-122.2887025!16s%2Fg%2F1vxvhkms?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=d00f6606-f283-4f2c-90b7-4f371a6e7280"
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

          {/* Crew Card 24: Columbus Georgia Tree Removal */}
          <div className="relative rounded-2xl border-2 border-amber-500/40 hover:border-amber-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-950/80 border-amber-800/80 text-amber-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #24
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-amber-400 transition">
                Columbus Georgia Tree Removal
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Columbus, GA</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">Рассел</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-amber-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (20 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(706) 580-2933</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Автовышка Altec с изолированной стрелой</li>
                  <li>• Мощная пнедробилка</li>
                  <li>• Измельчитель веток и погрузчик</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-amber-950/60 border-amber-800/60 text-amber-300 border px-2 py-0.5 font-mono">
                  Warm Amber & Hardwood Gold
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/columbus"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/columbus/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Columbus+Georgia+Tree+Removal/@32.45106,-84.9395035,12z/data=!3m1!4b1!4m6!3m5!1s0x88f333427865f1d1:0x7eb175241436ea70!8m2!3d32.45106!4d-84.9395036!16s%2Fg%2F11j0sgtk1l?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=eeeeef7a-e6cf-4db5-a5f8-0a2d078c8ba4"
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

          {/* Crew Card 25: Eaton Tree Removal */}
          <div className="relative rounded-2xl border-2 border-sky-500/40 hover:border-sky-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-950/80 border-sky-800/80 text-sky-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #25
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-sky-400 transition">
                Eaton Tree Removal
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Blue Ridge, GA</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-semibold">Крис</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-sky-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (35 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(404) 227-0193</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Комплекс удаления аварийных сосен у горных шале</li>
                  <li>• Альпинистский комплект для работы у каминных труб</li>
                  <li>• Комплекс чистовой уборки лесной подстилки</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-sky-950/60 border-sky-800/60 text-sky-300 border px-2 py-0.5 font-mono">
                  Azure Sky & Mountain Blue
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/eaton"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/eaton/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Eaton+Tree+Removal/@34.8732811,-84.3005742,17z/data=!3m1!4b1!4m6!3m5!1s0x885fa7eceec43c2d:0xeca741ace43516ee!8m2!3d34.8732811!4d-84.3005742!16s%2Fg%2F11rhppmddy?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=6b6deb32-6c53-43d9-ac76-422b05927fb3"
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

          {/* Crew Card 26: Family Tree Service LLC */}
          <div className="relative rounded-2xl border-2 border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border-emerald-800/80 text-emerald-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #26
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                Family Tree Service LLC
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 St Marys, GA</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Джейкоб</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.6} size="xs" />
                    <span>4.6 (71 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(912) 464-4535</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Комплекс посекционного спила прибрежных дубов</li>
                  <li>• Автовышка для работы над улицами и проводами</li>
                  <li>• Промышленная гидравлическая пнедробилка</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border-emerald-800/60 text-emerald-300 border px-2 py-0.5 font-mono">
                  Emerald Forest & Pine Green
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/family-tree"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/family-tree/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Family+Tree+Service+LLC/@30.4782458,-81.6249666,17z/data=!3m1!4b1!4m6!3m5!1s0x88e505528dd38abd:0x3603723de9bc527a!8m2!3d30.4782458!4d-81.6249666!16s%2Fg%2F11hdc3q3w5?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=7a713b83-9ae7-4d35-86f7-a3ffcdea4334"
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

          {/* Crew Card 27: Furstie Tree & Stump, LLC */}
          <div className="relative rounded-2xl border-2 border-teal-500/40 hover:border-teal-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-950/80 border-teal-800/80 text-teal-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #27
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-teal-400 transition">
                Furstie Tree & Stump, LLC
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Efland, NC</span>
                <span className="text-slate-600">•</span>
                <span className="text-teal-400 font-semibold">Нейт Ферсти</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-teal-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (66 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(734) 637-6297</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Тяжелый самосвал и трактор Kubota с лесным захватом</li>
                  <li>• Лесохозяйственная автовышка повышенной проходимости</li>
                  <li>• Промышленный измельчитель с прямой подачей в кузов</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-teal-950/60 border-teal-800/60 text-teal-300 border px-2 py-0.5 font-mono">
                  Coastal Teal & Palm Emerald
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/furstie"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/furstie/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Furstie+Tree+%26+Stump,+LLC/@36.1329792,-79.1921275,17z/data=!3m1!4b1!4m6!3m5!1s0x9b83a43b2af2ab3:0xf6d01b83949457d6!8m2!3d36.1329792!4d-79.1921275!16s%2Fg%2F11kc5j3hcl?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=ac9a1a32-e75e-4c24-bb77-86fee5524848"
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

          {/* Crew Card 28: G.R.O.W. Outdoor Services, Inc */}
          <div className="relative rounded-2xl border-2 border-amber-500/40 hover:border-amber-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-950/80 border-amber-800/80 text-amber-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #28
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-amber-400 transition">
                G.R.O.W. Outdoor Services, Inc
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Jacksonville, FL</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">Донни</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-amber-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (50 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(904) 859-4188</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Арбористский такелажный комплекс для спила дубов</li>
                  <li>• Комплекс складирования и транспортировки бревен</li>
                  <li>• Комплекс чистовой уборки элитных газонов</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-amber-950/60 border-amber-800/60 text-amber-300 border px-2 py-0.5 font-mono">
                  Warm Amber & Hardwood Gold
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/grow"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/grow/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/G.R.O.W.+Outdoor+Services,+Inc/@30.2460258,-81.941427,17z/data=!3m1!4b1!4m6!3m5!1s0x88e5ebb99655cc49:0xfe9f4c43450d37ba!8m2!3d30.2460258!4d-81.941427!16s%2Fg%2F11h42z_nnv?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=23836604-33bc-4ad2-a0c0-7945f50d1f57"
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

          {/* Crew Card 29: I NOAH GUY TREE & OUTDOORS LLC */}
          <div className="relative rounded-2xl border-2 border-sky-500/40 hover:border-sky-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-950/80 border-sky-800/80 text-sky-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #29
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-sky-400 transition">
                I NOAH GUY TREE & OUTDOORS LLC
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Jacksonville, FL</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-semibold">Ной</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-sky-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (32 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(904) 200-4381</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Комплекс стрижки пальм Сабаль с оформлением приствольных кругов</li>
                  <li>• Алмазная стрижка Канарской финиковой пальмы</li>
                  <li>• Комплекс обрезки деревьев в стесненных дворах</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-sky-950/60 border-sky-800/60 text-sky-300 border px-2 py-0.5 font-mono">
                  Azure Sky & Mountain Blue
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/i-noah-guy"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/i-noah-guy/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/I+NOAH+GUY+TREE+%26+OUTDOORS+LLC/@30.4047236,-81.683107,10z/data=!3m1!4b1!4m6!3m5!1s0x63d869fcfd7bed1f:0x667da869a1fa8761!8m2!3d30.4047236!4d-81.683107!16s%2Fg%2F11xp62pfks?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=128d2e5d-0151-46aa-a083-d3da1b79717e"
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

          {/* Crew Card 30: JSI Tree Service LLC */}
          <div className="relative rounded-2xl border-2 border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border-emerald-800/80 text-emerald-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #30
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                JSI Tree Service LLC
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Morganton, NC</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Нейтан</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (52 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(828) 448-7047</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Лесохозяйственная автовышка для труднодоступных мест</li>
                  <li>• Комплекс раскряжевки и штабелирования деловой древесины</li>
                  <li>• Дробление пней и планировка грунта</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border-emerald-800/60 text-emerald-300 border px-2 py-0.5 font-mono">
                  Emerald Forest & Pine Green
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/jsi"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/jsi/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/JSI+Tree+Service+LLC/@35.7924148,-81.7595816,17z/data=!3m1!4b1!4m6!3m5!1s0x8850cff32f30a6f1:0x4b2c07abb3c9b4ce!8m2!3d35.7924148!4d-81.7595816!16s%2Fg%2F11t4dzzmbz?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=9a499d81-cee2-4d46-8d42-f91dbb43d715"
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

          {/* Crew Card 31: L&M Tree Service */}
          <div className="relative rounded-2xl border-2 border-teal-500/40 hover:border-teal-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-950/80 border-teal-800/80 text-teal-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #31
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-teal-400 transition">
                L&M Tree Service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Muskogee, OK</span>
                <span className="text-slate-600">•</span>
                <span className="text-teal-400 font-semibold">Логан и Тайлер</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-teal-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.7} size="xs" />
                    <span>4.7 (50 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(918) 616-9466</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Комплекс автовышки и крана для спуска тяжелых крон</li>
                  <li>• Бригада скоростного измельчения веток в щепу</li>
                  <li>• Комплекс чистовой уборки придомовой территории</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-teal-950/60 border-teal-800/60 text-teal-300 border px-2 py-0.5 font-mono">
                  Coastal Teal & Palm Emerald
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/lm-tree"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/lm-tree/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/L%26M+Tree+Service/@35.7361694,-95.3657499,17z/data=!3m1!4b1!4m6!3m5!1s0x87b5e1fde0fcfce5:0x299031636b2bafcd!8m2!3d35.7361694!4d-95.3657499!16s%2Fg%2F11g1pmxbqc?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=8056b998-3ae6-4fbf-ab6e-994b95aab775"
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

          {/* Crew Card 32: Limbwalkers Tree & Crane Service */}
          <div className="relative rounded-2xl border-2 border-amber-500/40 hover:border-amber-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-950/80 border-amber-800/80 text-amber-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #32
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-amber-400 transition">
                Limbwalkers Tree & Crane Service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Morganton, NC</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">Калеб</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-amber-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (155 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(828) 413-7227</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Тяжелый манипулятор-кран Palfinger PK 65002-SH</li>
                  <li>• Система арбористского спила с фиксацией на крюке крана</li>
                  <li>• Комплекс перемещения многотонных бревен-великанов</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-amber-950/60 border-amber-800/60 text-amber-300 border px-2 py-0.5 font-mono">
                  Warm Amber & Hardwood Gold
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/limbwalkers"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/limbwalkers/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Limbwalkers+Tree+%26+Crane+Service/@35.7735732,-81.7404691,17z/data=!3m1!4b1!4m6!3m5!1s0x8850cf05e4da7679:0xc3e33363f2cebc0c!8m2!3d35.7735732!4d-81.7404691!16s%2Fg%2F11clyslyqt?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=75375ab5-4f93-411c-9062-160adc930138"
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

          {/* Crew Card 33: M Rosales Tree Service */}
          <div className="relative rounded-2xl border-2 border-sky-500/40 hover:border-sky-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-950/80 border-sky-800/80 text-sky-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #33
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-sky-400 transition">
                M Rosales Tree Service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Houston, TX</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-semibold">Родриго</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-sky-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (82 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(281) 804-5020</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Городская телескопическая автовышка</li>
                  <li>• Альпинистский комплект для спила дуба в обвязке</li>
                  <li>• Комплекс скоростного измельчения и вывоза щепы</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-sky-950/60 border-sky-800/60 text-sky-300 border px-2 py-0.5 font-mono">
                  Azure Sky & Mountain Blue
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/rosales"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/rosales/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/M+Rosales+Tree+Service/@29.8065125,-95.4990732,17z/data=!3m1!4b1!4m6!3m5!1s0x8640c5332defb201:0xfdfb3017647c70e!8m2!3d29.8065125!4d-95.4990732!16s%2Fg%2F11pwykbbc9?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=581e2c47-bf00-4ae2-8e22-97a6f29bbb36"
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

          {/* Crew Card 34: Maldonado Tree Service */}
          <div className="relative rounded-2xl border-2 border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border-emerald-800/80 text-emerald-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #34
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                Maldonado Tree Service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Houston, TX</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Мальдонадо</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.7} size="xs" />
                    <span>4.7 (35 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(832) 679-5637</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Высотный комплект для разборки сосен на гаффах</li>
                  <li>• Автовышка для работы с подъездных дорожек</li>
                  <li>• Комплекс чистовой уборки газона после спила</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border-emerald-800/60 text-emerald-300 border px-2 py-0.5 font-mono">
                  Emerald Forest & Pine Green
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/maldonado"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/maldonado/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Maldonado+Tree+Service/@29.9247908,-95.4003805,17z/data=!3m1!4b1!4m6!3m5!1s0x8640c9e82ea998af:0x60c6baab7e7d7b31!8m2!3d29.9247908!4d-95.4003805!16s%2Fg%2F11rdgl5c90?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=4d4cfddb-6cc0-45b0-a3d6-73e2250f1e1f"
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

          {/* Crew Card 35: Morgan's Tree & Stump Removal */}
          <div className="relative rounded-2xl border-2 border-teal-500/40 hover:border-teal-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-950/80 border-teal-800/80 text-teal-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #35
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-teal-400 transition">
                Morgan's Tree & Stump Removal
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Rock Hill, SC</span>
                <span className="text-slate-600">•</span>
                <span className="text-teal-400 font-semibold">Майк Морган</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-teal-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (29 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(803) 981-9085</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Промышленная пнедробилка для придомовых газонов</li>
                  <li>• Комплекс обратной засыпки лунки древесной мульчей</li>
                  <li>• Комплекс чистового подметания и продувки дорожек</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-teal-950/60 border-teal-800/60 text-teal-300 border px-2 py-0.5 font-mono">
                  Coastal Teal & Palm Emerald
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/morgans"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/morgans/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Morgan's+Tree+%26+Stump+Removal/@34.8984396,-80.9718784,17z/data=!3m1!4b1!4m6!3m5!1s0x885687e9a1cfe3e9:0x81317a7e44a4fbb6!8m2!3d34.8984396!4d-80.9718784!16s%2Fg%2F1tf_n_yh?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=9dcf688b-f75d-4a80-b0f1-604e14dc8dda"
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

          {/* Crew Card 36: Norvell's Tree & Landscape Services LLC */}
          <div className="relative rounded-2xl border-2 border-amber-500/40 hover:border-amber-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-950/80 border-amber-800/80 text-amber-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #36
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-amber-400 transition">
                Norvell's Tree & Landscape Services LLC
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Spartanburg, SC</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">Стиви</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-amber-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.8} size="xs" />
                    <span>4.8 (22 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(864) 345-0466</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Компактный гусеничный подъемник-спайдер 22+ метра</li>
                  <li>• Аварийный комплекс распила расколотых штормом стволов</li>
                  <li>• Комплекс срочной защиты кровли и вывоза веток</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-amber-950/60 border-amber-800/60 text-amber-300 border px-2 py-0.5 font-mono">
                  Warm Amber & Hardwood Gold
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/norvells"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/norvells/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Norvell's+Tree+%26+Landscape+Services+LLC/@34.8773786,-81.9424369,17z/data=!3m1!4b1!4m6!3m5!1s0x88579fbe54b74839:0x6585dee26398c11c!8m2!3d34.8773786!4d-81.9424369!16s%2Fg%2F11rf0jf0v1?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=0596be09-5184-44a7-9a15-efd046d817d3"
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

          {/* Crew Card 37: Panhandle Tree Pros LLC */}
          <div className="relative rounded-2xl border-2 border-sky-500/40 hover:border-sky-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-950/80 border-sky-800/80 text-sky-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #37
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-sky-400 transition">
                Panhandle Tree Pros LLC
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Chipley, FL</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-semibold">Майк</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-sky-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (27 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(850) 851-5297</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Комплекс валки и спуска сосен рядом с постройками</li>
                  <li>• Мини-экскаватор с лесным челюстным захватом</li>
                  <li>• Комплекс чистовой уборки двора после спила</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-sky-950/60 border-sky-800/60 text-sky-300 border px-2 py-0.5 font-mono">
                  Azure Sky & Mountain Blue
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/panhandle"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/panhandle/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Panhandle+Tree+Pros+LLC/@30.5837619,-85.5883153,17z/data=!3m1!4b1!4m6!3m5!1s0xa322432f6c442ec3:0xb52161bc48d0af5b!8m2!3d30.5837619!4d-85.5883153!16s%2Fg%2F11mk9rdyc_?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=c63c14ea-9815-4eea-ba92-02249f488f80"
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

          {/* Crew Card 38: Pro Beaver Tree Service */}
          <div className="relative rounded-2xl border-2 border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border-emerald-800/80 text-emerald-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #38
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                Pro Beaver Tree Service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Waxhaw, NC</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Иван</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (26 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(980) 833-4894</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Гусеничный мини-погрузчик с гидравлическим захватом</li>
                  <li>• Альпинистский комплект для разборки вековых дубов</li>
                  <li>• Промышленный дисковый измельчитель веток</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border-emerald-800/60 text-emerald-300 border px-2 py-0.5 font-mono">
                  Emerald Forest & Pine Green
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/pro-beaver"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/pro-beaver/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Pro+Beaver+Tree+Service/@34.8741225,-80.6606256,17z/data=!3m1!4b1!4m6!3m5!1s0x88542d2c38d61a13:0x64f5115d917f6f34!8m2!3d34.8741225!4d-80.6606256!16s%2Fg%2F11x6j_306_?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=a20d40ce-5d04-4951-b559-4b5590a24937"
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

          {/* Crew Card 39: S & S Tree Service */}
          <div className="relative rounded-2xl border-2 border-teal-500/40 hover:border-teal-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-950/80 border-teal-800/80 text-teal-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #39
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-teal-400 transition">
                S & S Tree Service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Jacksonville, FL</span>
                <span className="text-slate-600">•</span>
                <span className="text-teal-400 font-semibold">Скотт</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-teal-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.7} size="xs" />
                    <span>4.7 (32 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(904) 510-9359</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Автовышка Altec с вылетом стрелы 18+ метров</li>
                  <li>• Промышленная пнедробилка Rayco</li>
                  <li>• Комплекс чистовой уборки и планировки газона</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-teal-950/60 border-teal-800/60 text-teal-300 border px-2 py-0.5 font-mono">
                  Coastal Teal & Palm Emerald
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/ss-tree"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/ss-tree/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/S+%26+S+Tree+Service/@30.1419615,-81.5536865,17z/data=!3m1!4b1!4m6!3m5!1s0x88e5cdf6607d10a1:0xc42259041ae82a88!8m2!3d30.1419615!4d-81.5536865!16s%2Fg%2F11mw01sx9d?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=c20d2c80-1115-4747-a58c-ed58bc491bb2"
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

          {/* Crew Card 40: Stone's Tree Service and Stump Grinding */}
          <div className="relative rounded-2xl border-2 border-amber-500/40 hover:border-amber-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-950/80 border-amber-800/80 text-amber-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #40
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-amber-400 transition">
                Stone's Tree Service and Stump Grinding
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Taylors, SC</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">Кристиан Стоун</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-amber-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (32 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(864) 914-1381</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Промышленная пнедробилка Bandit высокой мощности</li>
                  <li>• Комплекс удаления гигантских дубовых пней</li>
                  <li>• Комплекс чистового подметания и выравнивания газона</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-amber-950/60 border-amber-800/60 text-amber-300 border px-2 py-0.5 font-mono">
                  Warm Amber & Hardwood Gold
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/stones"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/stones/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Stone's+Tree+Service+and+Stump+Grinding/@34.9186816,-82.3020256,17z/data=!3m1!4b1!4m6!3m5!1s0xa577eddddd3470e1:0x146ed3ca9dbb6722!8m2!3d34.9186816!4d-82.3020256!16s%2Fg%2F11m61bs1d3?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=3c1efe36-23a0-48db-b48f-451f25b8ca62"
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

          {/* Crew Card 41: Superior Tree Service aka little tree lady */}
          <div className="relative rounded-2xl border-2 border-sky-500/40 hover:border-sky-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-950/80 border-sky-800/80 text-sky-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #41
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-sky-400 transition">
                Superior Tree Service aka little tree lady
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Senoia, GA</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-semibold">Наоми</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-sky-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (31 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(678) 491-4703</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Телескопическая автовышка Altec</li>
                  <li>• Комплект альпинистского снаряжения для верхолазов</li>
                  <li>• Пнедробилка и выравнивание территории</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-sky-950/60 border-sky-800/60 text-sky-300 border px-2 py-0.5 font-mono">
                  Azure Sky & Mountain Blue
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/superior"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/superior/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Superior+Tree+Service+aka+little+tree+lady/@33.2576964,-84.6010281,17z/data=!3m1!4b1!4m6!3m5!1s0x88f495ab7fb1a417:0x3131988193411775!8m2!3d33.2576964!4d-84.6010281!16s%2Fg%2F11h3g760q4?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=00212a14-6131-4710-83fb-ef1f9ff2ca67"
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

          {/* Crew Card 42: Sutton's Tree Service Inc */}
          <div className="relative rounded-2xl border-2 border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border-emerald-800/80 text-emerald-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #42
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                Sutton's Tree Service Inc
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Midway Park, NC</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Мистер Саттон</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.8} size="xs" />
                    <span>4.8 (24 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(910) 577-1111</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Телескопическая автовышка Altec 18+ метров</li>
                  <li>• Промышленная пнедробилка Rayco</li>
                  <li>• Измельчитель веток Bandit 12X с прицепом</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border-emerald-800/60 text-emerald-300 border px-2 py-0.5 font-mono">
                  Emerald Forest & Pine Green
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/suttons"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/suttons/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Sutton's+Tree+Service+Inc/@34.7179538,-77.3155166,17z/data=!3m1!4b1!4m6!3m5!1s0x89a904cec8dde475:0x6397476dadbee66!8m2!3d34.7179538!4d-77.3155166!16s%2Fg%2F1tdx9kj5?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=d8be317f-b887-4877-bc40-0eb85bab823b"
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

          {/* Crew Card 43: T & D Professional Tree Removal */}
          <div className="relative rounded-2xl border-2 border-teal-500/40 hover:border-teal-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-950/80 border-teal-800/80 text-teal-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #43
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-teal-400 transition">
                T & D Professional Tree Removal
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Saucier, MS</span>
                <span className="text-slate-600">•</span>
                <span className="text-teal-400 font-semibold">Тимоти и Дон</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-teal-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (65 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(228) 206-2351</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Автовышка для расчистки охранных зон ЛЭП</li>
                  <li>• Альпинистский комплект для посекционного спила сосен</li>
                  <li>• Комплекс чистовой уборки приусадебного участка</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-teal-950/60 border-teal-800/60 text-teal-300 border px-2 py-0.5 font-mono">
                  Coastal Teal & Palm Emerald
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/td-tree"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/td-tree/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/T+%26+D+Professional+Tree+Removal/@30.5580588,-89.1802527,17z/data=!3m1!4b1!4m6!3m5!1s0x889c473a9e8238e1:0x40f5db0f9c9cf83d!8m2!3d30.5580588!4d-89.1802527!16s%2Fg%2F11c594dmnv?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=f7dea943-1e52-4182-add9-95e64bebddb9"
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

          {/* Crew Card 44: TLG Tree Service LLC */}
          <div className="relative rounded-2xl border-2 border-amber-500/40 hover:border-amber-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-950/80 border-amber-800/80 text-amber-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #44
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-amber-400 transition">
                TLG Tree Service LLC
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Raleigh, NC</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">Оливер</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-amber-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (29 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(984) 242-7561</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Телескопическая автовышка Altec</li>
                  <li>• Промышленная пнедробилка Rayco</li>
                  <li>• Измельчитель веток Bandit с самосвальным прицепом</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-amber-950/60 border-amber-800/60 text-amber-300 border px-2 py-0.5 font-mono">
                  Warm Amber & Hardwood Gold
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/tlg"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/tlg/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/TLG+Tree+Service+LLC/@35.8784324,-78.5964498,17z/data=!3m1!4b1!4m6!3m5!1s0x89ac59272e97561f:0xdd29580b7220167f!8m2!3d35.8784324!4d-78.5964498!16s%2Fg%2F11hg51w8w_?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=dc53dd3c-cbbf-4e54-b9c4-1ee3814124f8"
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

          {/* Crew Card 45: Tafoya's Tree Service & Stump Grinding */}
          <div className="relative rounded-2xl border-2 border-sky-500/40 hover:border-sky-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-950/80 border-sky-800/80 text-sky-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #45
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-sky-400 transition">
                Tafoya's Tree Service & Stump Grinding
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Houston, TX</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-semibold">Нестер Тафойя</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-sky-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.8} size="xs" />
                    <span>4.8 (99 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(713) 594-5062</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Альпинистский комплект верхолаза с тормозным блоком</li>
                  <li>• Автовышка для работы вдоль линии заборов</li>
                  <li>• Наземная бригада вальщиков и скоростной погрузки</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-sky-950/60 border-sky-800/60 text-sky-300 border px-2 py-0.5 font-mono">
                  Azure Sky & Mountain Blue
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/tafoya"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/tafoya/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Tafoya's+Tree+Service+%26+Stump+Grinding/@29.9246258,-95.4583739,17z/data=!3m1!4b1!4m6!3m5!1s0x8640c93dde965f59:0x5cb474939b43a986!8m2!3d29.9246258!4d-95.4583739!16s%2Fg%2F11bycl0g_g?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=386394ec-982b-4e21-9e27-da849fd2e9af"
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

          {/* Crew Card 46: Tree Wisemen Upstate */}
          <div className="relative rounded-2xl border-2 border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border-emerald-800/80 text-emerald-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #46
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-emerald-400 transition">
                Tree Wisemen Upstate
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Anderson, SC</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Эван</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.9} size="xs" />
                    <span>4.9 (71 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(415) 850-7584</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Комплекс удаления деревьев с привлечением автокрана</li>
                  <li>• Высотный альпинистский комплект для спила стволов</li>
                  <li>• Комплекс чистовой уборки асфальта и газона</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border-emerald-800/60 text-emerald-300 border px-2 py-0.5 font-mono">
                  Emerald Forest & Pine Green
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/tree-wisemen"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/tree-wisemen/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Tree+Wisemen+Upstate/@34.4568959,-82.896309,9z/data=!3m1!4b1!4m6!3m5!1s0x885815089c5b03b9:0xef0cc669d93ae9bc!8m2!3d34.4568959!4d-82.896309!16s%2Fg%2F11rwsb9vfd?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=5c3a522f-c8e3-4c98-94e0-0bc4261cdaaf"
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

          {/* Crew Card 47: US TREE REMOVAL */}
          <div className="relative rounded-2xl border-2 border-teal-500/40 hover:border-teal-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-950/80 border-teal-800/80 text-teal-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #47
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-teal-400 transition">
                US TREE REMOVAL
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Dearborn, MI</span>
                <span className="text-slate-600">•</span>
                <span className="text-teal-400 font-semibold">Касс</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-teal-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (113 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(313) 936-4140</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Городская телескопическая автовышка</li>
                  <li>• Измельчитель веток с закрытым кузовом</li>
                  <li>• Комплекс чистового подметания асфальта и тротуаров</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-teal-950/60 border-teal-800/60 text-teal-300 border px-2 py-0.5 font-mono">
                  Coastal Teal & Palm Emerald
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/us-tree"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/us-tree/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/US+TREE+REMOVAL/@42.3437042,-83.1838612,17z/data=!3m1!4b1!4m6!3m5!1s0xa831bdb7503f36cd:0xdf5eb13413257b59!8m2!3d42.3437042!4d-83.1838612!16s%2Fg%2F11r_k6kb65?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=b285dfcc-c746-4ac4-8c60-c61546e8f107"
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

          {/* Crew Card 48: Wateree Tree RemovalLLC */}
          <div className="relative rounded-2xl border-2 border-amber-500/40 hover:border-amber-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-950/80 border-amber-800/80 text-amber-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #48
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-amber-400 transition">
                Wateree Tree RemovalLLC
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Lugoff, SC</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">Дэвид</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-amber-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={4.5} size="xs" />
                    <span>4.5 (32 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(803) 445-6434</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Комплекс санитарной обрезки и балансировки дуба</li>
                  <li>• Подъем нижней линии кроны над подъездной дорогой</li>
                  <li>• Комплекс чистовой засыпки лунки после пнедробилки</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-amber-950/60 border-amber-800/60 text-amber-300 border px-2 py-0.5 font-mono">
                  Warm Amber & Hardwood Gold
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/wateree"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/wateree/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Wateree+Tree+RemovalLLC/@34.3016607,-80.7397753,17z/data=!3m1!4b1!4m6!3m5!1s0x8855fc5e185ff6ad:0xd537b228d60935fe!8m2!3d34.3016607!4d-80.7397753!16s%2Fg%2F11hy9p2jdg?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=74f66c1c-a2ca-4506-b55a-8d3934abc4fe"
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

          {/* Crew Card 49: WoodFellas Tree Service */}
          <div className="relative rounded-2xl border-2 border-sky-500/40 hover:border-sky-400 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl flex flex-col justify-between transition group">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-950/80 border-sky-800/80 text-sky-300 border px-2.5 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  В этом проекте • Готов
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #49
                </span>
              </div>

              <h2 className="mt-4 text-xl font-black text-white group-hover:text-sky-400 transition">
                WoodFellas Tree Service
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex flex-wrap items-center gap-1.5">
                <span>📍 Johnson City, TN</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-semibold">Джон</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг на Google Maps:</div>
                  <div className="text-sky-400 font-bold font-mono mt-0.5 flex items-center gap-1.5">
                    <StarRating value={5.0} size="xs" />
                    <span>5.0 (39 проверенных отзывов)</span>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Телефон бригады:</div>
                  <div className="text-white font-bold font-mono mt-0.5">(423) 270-4224</div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-300 leading-relaxed bg-slate-950/50 rounded-xl p-3 border border-slate-800/70">
                <div className="font-semibold text-white mb-1">Специфика и оснащение:</div>
                <ul className="space-y-1 text-slate-300">
                  <li>• Телескопическая автовышка Altec 18+ метров</li>
                  <li>• Промышленная пнедробилка глубокого фрезерования</li>
                  <li>• Комплекс чистовой уборки и восстановления дерна</li>
                  <li>• Быстрый расчет сметы и бережная уборка участка</li>
                </ul>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-sky-950/60 border-sky-800/60 text-sky-300 border px-2 py-0.5 font-mono">
                  Azure Sky & Mountain Blue
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/woodfellas"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-xs font-black text-white shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <div className="flex gap-2">
                <a
                  href="/woodfellas/ru"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold text-slate-200 hover:border-slate-400 transition"
                  title="Русская версия"
                >
                  <span>Русская версия</span>
                </a>

                <a
                  href="https://www.google.com/maps/place/WoodFellas+Tree+Service/@36.322659,-82.3715945,17z/data=!3m1!4b1!4m6!3m5!1s0x81785c79a0a9b539:0x25643b8ec428149a!8m2!3d36.322659!4d-82.3715945!16s%2Fg%2F11kjplg0t4?authuser=0&entry=tts&g_ep=EgoyMDI2MTAxMy4wIPu8ASoASAFQAw%3D%3D&skid=eaeb6012-7476-4822-b7b4-4430de80f160"
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
        </div>

        {/* Status Callout Banner */}
        <div className="mt-8 rounded-2xl border-2 border-emerald-500/30 bg-emerald-950/20 p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 font-black text-xl">
            ✓
          </div>
          <h3 className="mt-3 text-lg font-bold text-white">
            Все 49 бригад полностью развернуты и готовы к демонстрации
          </h3>
          <p className="mt-1 text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
            Каждая бригада имеет уникальный брендинг, цветовую схему, реальные проверенные фотографии техники, подтвержденные отзывы Google и полноценные версии на русском и английском языках.
          </p>
        </div>

        {/* Workflow Guide */}
        <div className="mt-10 rounded-xl bg-slate-900/60 border border-slate-800 p-5 text-xs text-slate-400">
          <div className="font-bold text-slate-200 mb-1">Как быстро передавать ссылки клиентам:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-2">
            <div>
              <span className="text-slate-300 font-semibold">• All Florida Tree:</span> <span className="text-amber-400 font-mono">/all-florida</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Teco&apos;s Total Tree:</span> <span className="text-yellow-400 font-mono">/tecos</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Seybold Solutions:</span> <span className="text-emerald-400 font-mono">/seybold</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Hard Kor Tree:</span> <span className="text-red-400 font-mono">/hard-kor</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Robert Reynolds:</span> <span className="text-sky-400 font-mono">/reynolds</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Holcomb Timber (OR):</span> <span className="text-emerald-400 font-mono">/holcomb</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Patrick Myers (OR):</span> <span className="text-sky-400 font-mono">/myers</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Allwood Tree:</span> <span className="text-emerald-400 font-mono">/allwood</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Hawkinberry Tree:</span> <span className="text-sky-400 font-mono">/hawkinberry</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Tally Trees:</span> <span className="text-amber-400 font-mono">/tally</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Bramlitt Tree:</span> <span className="text-teal-400 font-mono">/bramlitt</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Dane’s Tree (OR):</span> <span className="text-emerald-400 font-mono">/danes</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
