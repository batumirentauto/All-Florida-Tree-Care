'use client'

import React from 'react'
import { getTheme } from './themes'

export function UniversalSpecs({ config, themeName }: { config: any; themeName?: string }) {
  const theme = getTheme(themeName || config.theme)

  return (
    <section id="equipment" className={`py-16 sm:py-24 ${theme.bgBody} border-b ${theme.borderSubtle} text-white`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-1.5 rounded-full ${theme.badgeBg} ${theme.badgeBorder} border px-3.5 py-1 text-xs font-bold ${theme.badgeText} mb-3 uppercase tracking-wider`}>
            <span>{config.equipmentHeadingBadge || (config.lang === 'ru' ? 'Собственная профессиональная спецтехника' : 'In-House Commercial Fleet')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {config.equipmentHeadingTitle || (config.lang === 'ru' ? 'Техническое оснащение для безопасной работы' : 'Purpose-Built Equipment for Controlled Tree Care')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {config.equipmentHeadingDesc || (config.lang === 'ru' ? 'Собственный парк оборудования исключает простои и аренду у третьих лиц, гарантируя аккуратность и сохранность вашего участка.' : 'Zero third-party rental delays. Direct deployment of company-owned equipment guarantees fast turnaround and complete turf and structure protection.')}
          </p>
        </div>

        {/* 3 Specialized Heavy Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {config.equipment.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`${theme.bgCard} rounded-2xl border ${theme.borderSubtle} shadow-xl ${theme.borderHover} transition-all overflow-hidden flex flex-col justify-between group`}
            >
              <div>
                {/* Photo showcase with badge: standard img tag with h-64 sm:h-80 */}
                <div className="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[${theme.bgCard.replace('bg-[', '').replace(']', '')}] via-transparent to-black/30`} />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center rounded-lg ${theme.badgeBg} backdrop-blur-md px-3 py-1 text-xs font-bold ${theme.badgeText} shadow-md border ${theme.badgeBorder}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6">
                  <h3 className={`text-xl sm:text-2xl font-bold text-white group-hover:${theme.accentText} transition-colors`}>
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Technical Specifications */}
                  <div className={`mt-6 space-y-2 pt-5 border-t ${theme.borderSubtle}`}>
                    {item.specs.map((spec: any, sIdx: number) => (
                      <div
                        key={sIdx}
                        className={`${theme.bgCardAlt} rounded-xl px-3.5 py-2.5 border ${theme.borderSubtle} flex items-center justify-between gap-3`}
                      >
                        <span className={`text-[11px] font-semibold ${theme.badgeText}/80 uppercase tracking-wider shrink-0`}>
                          {spec.label}
                        </span>
                        <span className="text-xs font-bold text-white text-right leading-snug break-words">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
