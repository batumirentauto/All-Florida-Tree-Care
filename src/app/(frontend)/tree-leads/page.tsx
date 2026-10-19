'use client'

import React, { useState, useMemo } from 'react'
import { treeLeadsData, TreeLeadItem } from './leadsData'
import { StarRating } from '../../../components/StarRating'

export default function TreeLeadsCatalogPage() {
  const [search, setSearch] = useState('')
  const [selectedState, setSelectedState] = useState<string>('ALL')

  // Available states with counts
  const stateCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    treeLeadsData.forEach((item) => {
      const st = item.state || 'Other'
      counts[st] = (counts[st] || 0) + 1
    })
    return counts
  }, [])

  const sortedStates = useMemo(() => {
    return Object.entries(stateCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([st]) => st)
  }, [stateCounts])

  // Filtered companies
  const filteredCompanies = useMemo(() => {
    const q = search.trim().toLowerCase()
    return treeLeadsData.filter((item) => {
      // State filter
      if (selectedState !== 'ALL' && item.state !== selectedState) {
        return false
      }
      // Search filter
      if (!q) return true
      return (
        item.name.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q) ||
        item.state.toLowerCase().includes(q) ||
        item.phone.toLowerCase().includes(q) ||
        item.ownerEn.toLowerCase().includes(q) ||
        item.ownerRu.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q)
      )
    })
  }, [search, selectedState])

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-sans antialiased">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[1000px] bg-gradient-to-tr from-amber-500/15 via-emerald-500/10 to-transparent blur-[150px]" />
      </div>

      {/* Top navigation status bar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md px-4 py-3 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 font-bold text-slate-200 transition hover:border-amber-400 hover:text-white"
            >
              <span>←</span>
              <span>Главный каталог бригад</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline font-semibold text-slate-300">
              📁 Папка: База «Tree Leads»
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs font-bold text-emerald-400">
              {treeLeadsData.length} активных макетов
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-3.5 py-1 text-xs font-bold text-amber-300">
            <span>⚡ Сгенерированная база лидов Google Maps</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white">
            Каталог бригад «Tree Leads»
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Отдельная рабочая папка для управления новыми посадочными страницами. Все страницы снабжены уникальным фотоконтентом, цитатами реальных отзывов и версиями на русском и английском языках.
          </p>

          {/* Key Metrics */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-mono">
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2">
              <span className="text-slate-400">Всего бригад: </span>
              <span className="font-bold text-white">{treeLeadsData.length}</span>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2">
              <span className="text-slate-400">Средний рейтинг: </span>
              <span className="font-bold text-amber-400">4.9 ★</span>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2">
              <span className="text-slate-400">Штатов в базе: </span>
              <span className="font-bold text-emerald-400">{sortedStates.length}</span>
            </div>
          </div>
        </div>

        {/* Search & State Filters Control Bar */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-6 shadow-xl backdrop-blur-sm">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔍 Быстрый поиск по названию, городу, телефону, владельцу или ссылке..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 pl-11 text-sm text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition"
            />
            <div className="absolute left-3.5 top-3.5 text-slate-400 text-sm">
              🔎
            </div>
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-3 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-1 rounded-md transition"
              >
                Очистить
              </button>
            )}
          </div>

          {/* State Filter Chips */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-400 mr-1">Штат:</span>
            <button
              onClick={() => setSelectedState('ALL')}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                selectedState === 'ALL'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Все штаты ({treeLeadsData.length})
            </button>
            {sortedStates.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedState(st)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                  selectedState === st
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {st} ({stateCounts[st]})
              </button>
            ))}
          </div>

          {/* Active Filter Counter */}
          <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/80">
            <div>
              Показано компаний: <span className="font-bold text-white">{filteredCompanies.length}</span> из {treeLeadsData.length}
            </div>
            {(search || selectedState !== 'ALL') && (
              <button
                onClick={() => {
                  setSearch('')
                  setSelectedState('ALL')
                }}
                className="text-amber-400 hover:underline"
              >
                Сбросить фильтры
              </button>
            )}
          </div>
        </div>

        {/* Companies Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((item, index) => {
            return (
              <div
                key={item.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-5 shadow-lg transition hover:border-amber-400/80 hover:shadow-amber-500/10"
              >
                <div>
                  {/* Card Top Pill & Index */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 text-[11px] font-bold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {item.state} • Готов
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-slate-400">
                      #{index + 1}
                    </span>
                  </div>

                  {/* Thumbnail Banner (if available) */}
                  {item.mainPhoto && (
                    <div className="mt-3 relative h-36 w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
                      <img
                        src={item.mainPhoto}
                        alt={item.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-white">
                        <span className="truncate font-semibold bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                          📍 {item.city}, {item.state}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Business Name */}
                  <h2 className="mt-3 text-lg font-black text-white group-hover:text-amber-400 transition leading-snug break-words">
                    {item.name}
                  </h2>

                  {/* Rating & Phone */}
                  <div className="mt-2 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between rounded-lg bg-slate-950/80 border border-slate-800/80 p-2 gap-2">
                      <span className="text-slate-400 shrink-0">Рейтинг Google:</span>
                      <div className="flex items-center gap-1.5 font-bold text-amber-400 font-mono shrink-0">
                        <StarRating value={item.rating} size="xs" />
                        <span>{item.ratingStr} ({item.reviewCount})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-slate-950/80 border border-slate-800/80 p-2 gap-2">
                      <span className="text-slate-400 shrink-0">Владелец / Контакт:</span>
                      <span className="text-slate-200 font-semibold truncate text-right">{item.ownerRu}</span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-slate-950/80 border border-slate-800/80 p-2 gap-2">
                      <span className="text-slate-400 shrink-0">Телефон:</span>
                      <a
                        href={`tel:${item.phoneRaw}`}
                        className="text-amber-400 font-bold font-mono hover:underline truncate text-right"
                      >
                        {item.phone}
                      </a>
                    </div>
                  </div>

                  {/* Tagline snippet */}
                  <p className="mt-3 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.taglineRu}
                  </p>
                </div>

                {/* Actions Footer */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
                  <a
                    href={`/${item.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-3.5 py-2 text-xs font-black text-slate-950 shadow transition hover:brightness-110"
                  >
                    <span>Открыть макет (English)</span>
                    <span>→</span>
                  </a>

                  <div className="flex gap-2">
                    <a
                      href={`/${item.slug}/ru`}
                      className="flex-1 inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-bold text-slate-200 hover:border-amber-400 transition"
                      title="Русская версия макета"
                    >
                      <span>Русская версия</span>
                    </a>

                    <a
                      href={item.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-400 hover:text-white transition"
                      title="Google Maps"
                    >
                      <span>Карты ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="mt-16 text-center py-12 rounded-2xl border border-dashed border-slate-800">
            <div className="text-3xl">🔍</div>
            <h3 className="mt-2 text-lg font-bold text-white">Ничего не найдено</h3>
            <p className="mt-1 text-sm text-slate-400">
              По запросу «{search}» компании не обнаружены. Попробуйте изменить параметры поиска или штата.
            </p>
            <button
              onClick={() => {
                setSearch('')
                setSelectedState('ALL')
              }}
              className="mt-4 rounded-xl bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-300 transition"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
