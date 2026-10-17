'use client'

import React from 'react'
import { getTheme } from './themes'

export function UniversalServices({ config, themeName }: { config: any; themeName?: string }) {
  const theme = getTheme(themeName || config.theme)

  return (
    <section id="services" className={`py-16 sm:py-24 ${theme.bgSection} border-b ${theme.borderSubtle} text-white`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-1.5 rounded-full ${theme.badgeBg} ${theme.badgeBorder} border px-3.5 py-1 text-xs font-bold ${theme.badgeText} mb-3 uppercase tracking-wider`}>
            <span>{config.servicesHeadingBadge || (config.lang === 'ru' ? 'Полный спектр арбористики' : 'Core Tree Services')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {config.servicesHeadingTitle || (config.lang === 'ru' ? 'Профессиональные услуги по удалению и уходу за деревьями' : 'Precision Tree Care, Removals & Emergency Response')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {config.servicesHeadingDesc || (config.lang === 'ru' ? 'От ювелирного удаления деревьев вблизи домов до высотной санитарной обрезки и расчистки территорий.' : 'From surgical hazard dismantling over delicate buildings to high-canopy crown reduction and rapid brush chipping.')}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {config.services.map((service: any, idx: number) => (
            <div
              key={idx}
              className={`${theme.bgCard} rounded-2xl border ${theme.borderSubtle} p-6 sm:p-7 shadow-lg ${theme.borderHover} hover:shadow-xl transition-all flex flex-col justify-between group`}
            >
              <div>
                {/* Header with icon & badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`h-11 w-11 rounded-xl ${theme.badgeBg} ${theme.badgeBorder} border ${theme.accentText} flex items-center justify-center font-bold text-lg`}>
                    0{idx + 1}
                  </div>
                  <span className={`text-[11px] font-bold ${theme.badgeText} bg-black/40 px-2.5 py-1 rounded-full border border-slate-700/60`}>
                    {service.tagline}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className={`text-lg sm:text-xl font-bold text-white group-hover:${theme.accentText} transition-colors`}>
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.desc}
                </p>

                {/* Key Points / Features */}
                <ul className="mt-5 space-y-2 pt-4 border-t border-slate-800">
                  {service.features.map((feature: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <svg className={`w-4 h-4 ${theme.accentText} shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <a
                  href={`tel:${config.phoneRaw}`}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold ${theme.accentText} ${theme.accentTextHover} transition-colors`}
                >
                  <span>{config.lang === 'ru' ? 'Обсудить смету' : 'Get Exact Price'}</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
