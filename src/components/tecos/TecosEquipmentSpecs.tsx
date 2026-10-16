import React from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'

export const TecosEquipmentSpecs: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn

  return (
    <section id="specs" className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6">
      {/* Section Header */}
      <div className="mb-10 max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded bg-yellow-400/10 px-2.5 py-1 text-xs font-black uppercase tracking-wider text-yellow-400 border border-yellow-500/20">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          {siteConfig.lang === 'ru' ? 'Техническое оснащение' : 'Heavy Equipment Advantage'}
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
          {siteConfig.lang === 'ru'
            ? 'Собственный парк спецтехники: кран, фреза Vermeer и самосвалы'
            : 'Commercial Equipment Power: Crane, Vermeer & Diamond C Fleet'}
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          {siteConfig.lang === 'ru'
            ? 'Работаем на собственной технике под личным контролем мастера Дона. Никаких арендных пил и случайных рабочих.'
            : 'We own and operate our fleet under Don’s direct supervision. No rental toys, no subcontracted handymen.'}
        </p>
      </div>

      {/* 4 Technical Specification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {siteConfig.trustBadges.map((badge, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl border border-slate-800 bg-[#0c121e] p-6 shadow-xl transition hover:border-yellow-500/50 hover:bg-[#0f1726] flex flex-col justify-between group"
          >
            <div>
              {/* Numeric indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <span className="font-mono text-xs font-black text-yellow-400 bg-yellow-950/60 border border-yellow-800/60 px-2 py-0.5 rounded">
                  0{idx + 1}
                </span>
                <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                  SPECIFICATION
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mt-4 text-base font-black uppercase tracking-tight text-white group-hover:text-yellow-400 transition">
                {badge.title}
              </h3>
              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                {badge.desc}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-bold text-yellow-400">
              <span>{siteConfig.lang === 'ru' ? 'Контроль Дона на объекте' : 'Supervised on site'}</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Grid: Rental Tools vs Teco's Fleet */}
      <div className="mt-12 rounded-2xl border border-slate-800 bg-[#0b0f19] p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-black uppercase tracking-wider text-yellow-400">
              {siteConfig.ui.comparisonCategory}
            </span>
            <h3 className="mt-2 text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              {siteConfig.realisticComparison.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {siteConfig.ui.comparisonSub}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* The Hard Way */}
            <div className="rounded-xl border border-red-900/30 bg-red-950/10 p-5">
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-3">
                <span>✕</span>
                <span>{siteConfig.ui.diyTitle}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                {siteConfig.realisticComparison.diyRental.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400/80 shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Teco's Commercial Way */}
            <div className="rounded-xl border border-yellow-500/40 bg-yellow-950/20 p-5">
              <div className="flex items-center gap-2 text-xs font-black text-yellow-400 uppercase tracking-wider mb-3">
                <span>✓</span>
                <span>{siteConfig.ui.commercialTitle}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                {siteConfig.realisticComparison.commercialWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-400 shrink-0 font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
