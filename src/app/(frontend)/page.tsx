import React from 'react'
import type { Metadata } from 'next'

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
          <div className="text-xs font-mono text-amber-400 font-medium">
            2 активные бригады
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

        {/* Crews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Crew Card 1: All Florida Tree Care LLC */}
          <div className="relative rounded-2xl border-2 border-amber-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-7 shadow-xl flex flex-col justify-between transition hover:border-amber-400 group">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-950/80 border border-amber-800/80 px-2.5 py-1 text-xs font-bold text-amber-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  В этом проекте • Готов к показу
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #1
                </span>
              </div>

              {/* Title & Location */}
              <h2 className="mt-4 text-2xl font-black text-white group-hover:text-amber-400 transition">
                All Florida Tree Care LLC
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex items-center gap-2">
                <span>📍 Palmetto, Bradenton, Sarasota</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-400 font-semibold">Justin & Alex Carrier</span>
              </div>

              {/* Stats & Equipment */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг Google:</div>
                  <div className="text-amber-400 font-bold font-mono mt-0.5">★★★★★ 4.9 (50+ отзывов)</div>
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
                  <li>• Автовышка 60+ футов + верхолазы-альпинисты в узких дворах</li>
                  <li>• Официальные отчеты арбориста для разрешений HOA и города</li>
                  <li>• Расчистка деревьев для солнечных батарей и защита террас</li>
                  <li>• Фиксированная письменная смета в течение 1 часа</li>
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
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2.5">
              <a
                href="/all-florida"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2.5 text-xs font-black text-slate-950 shadow-md transition hover:brightness-110"
              >
                <span>Открыть макет (English)</span>
                <span>→</span>
              </a>

              <a
                href="/all-florida/ru"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs font-bold text-slate-200 hover:border-amber-400 transition"
                title="Русская версия"
              >
                <span>Русская версия</span>
              </a>

              <a
                href="https://maps.app.goo.gl/hdLrE1cP6UX1NF7F9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950 px-3 py-2.5 text-xs font-semibold text-slate-400 hover:text-white transition"
                title="Google Maps"
              >
                <span>Карты ↗</span>
              </a>
            </div>
          </div>

          {/* Crew Card 2: Tree Removers (Brad Frederick) */}
          <div className="relative rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-7 shadow-xl flex flex-col justify-between transition hover:border-emerald-400 group">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 text-xs font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Отдельный независимый проект
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  Бригада #2
                </span>
              </div>

              {/* Title & Location */}
              <h2 className="mt-4 text-2xl font-black text-white group-hover:text-emerald-400 transition">
                Tree Removers
              </h2>
              <div className="mt-1 text-xs text-slate-300 flex items-center gap-2">
                <span>📍 Venice, Englewood, North Port, Sarasota</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">Brad Frederick</span>
              </div>

              {/* Stats & Equipment */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-2.5">
                  <div className="text-slate-400 text-[11px]">Рейтинг Google:</div>
                  <div className="text-emerald-400 font-bold font-mono mt-0.5">★★★★★ 5.0 Google Verified</div>
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
                  <li>• Мощная гусеничная пнедробилка Bobcat SG60 (заглубление до 14 дюймов)</li>
                  <li>• Тяжелый измельчитель веток и самосвальный прицеп для вывоза</li>
                  <li>• Прямой выезд мастера Брэда без посредников</li>
                  <li>• Репозиторий: batumirentauto/treeremovers</li>
                </ul>
              </div>

              {/* Color Scheme Tag */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                <span>Палитра:</span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 text-emerald-300 font-mono">
                  Emerald Arborist Forest Green
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2.5">
              <a
                href="https://treeremovers-production.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2.5 text-xs font-black text-slate-950 shadow-md transition hover:brightness-110"
              >
                <span>Открыть проект Брэда (Railway) ↗</span>
              </a>

              <a
                href="https://github.com/batumirentauto/treeremovers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs font-bold text-slate-300 hover:text-white transition"
              >
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Slot for Crew #3 (Placeholder for next client) */}
        <div className="mt-6 rounded-2xl border-2 border-dashed border-slate-800 bg-slate-950/40 p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-amber-400 font-black text-xl">
            +
          </div>
          <h3 className="mt-3 text-lg font-bold text-white">
            Готово к добавлению следующей бригады
          </h3>
          <p className="mt-1 text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
            Как только у вас появится следующая бригада во Флориде (Тампа, Орландо, Клируотер или Майами) — мы просто создадим для неё файл конфига и откроем страницу прямо в этом проекте (например, <code className="text-amber-300 font-mono">/tampa-tree</code>).
          </p>
        </div>

        {/* Workflow Guide */}
        <div className="mt-12 rounded-xl bg-slate-900/60 border border-slate-800 p-5 text-xs text-slate-400">
          <div className="font-bold text-slate-200 mb-1">Как быстро передавать ссылки клиентам:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <div>
              <span className="text-slate-300 font-semibold">• Для бригады All Florida:</span> отправляйте прямую ссылку <span className="text-amber-400 font-mono">/all-florida</span> (на английском) или <span className="text-amber-400 font-mono">/all-florida/ru</span>.
            </div>
            <div>
              <span className="text-slate-300 font-semibold">• Для новых бригад:</span> дайте ссылку на Google Maps или имя бригады — мы за 15 минут добавим для неё готовый лендинг.
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
