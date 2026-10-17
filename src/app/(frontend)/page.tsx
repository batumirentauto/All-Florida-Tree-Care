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
            8 активных бригад (Флорида и Орегон)
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
        </div>

        {/* Status Callout Banner */}
        <div className="mt-8 rounded-2xl border-2 border-emerald-500/30 bg-emerald-950/20 p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 font-black text-xl">
            ✓
          </div>
          <h3 className="mt-3 text-lg font-bold text-white">
            Все 8 бригад полностью развернуты и готовы к демонстрации
          </h3>
          <p className="mt-1 text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
            Каждая бригада имеет уникальный брендинг, цветовую схему, реальные фотографии техники, подтвержденные отзывы Google и полноценные версии на русском и английском языках.
          </p>
        </div>

        {/* Workflow Guide */}
        <div className="mt-10 rounded-xl bg-slate-900/60 border border-slate-800 p-5 text-xs text-slate-400">
          <div className="font-bold text-slate-200 mb-1">Как быстро передавать ссылки клиентам:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-2">
            <div>
              <span className="text-slate-300 font-semibold">• All Florida Tree Care:</span> <span className="text-amber-400 font-mono">/all-florida</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Teco&apos;s Total Tree:</span> <span className="text-yellow-400 font-mono">/tecos</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Seybold Solutions:</span> <span className="text-emerald-400 font-mono">/seybold</span>
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Hard Kor Tree Care:</span> <span className="text-red-400 font-mono">/hard-kor</span>
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
          </div>
        </div>
      </main>
    </div>
  )
}
