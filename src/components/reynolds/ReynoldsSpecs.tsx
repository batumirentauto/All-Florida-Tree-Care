'use client'

import React from 'react'
import { siteConfigReynoldsEn } from '../../siteConfig.reynolds.en'

export function ReynoldsSpecs({ config }: { config?: any }) {
  const siteConfig = config || siteConfigReynoldsEn

  return (
    <section id="equipment" className="py-16 sm:py-24 bg-[#080e1a] border-b border-sky-500/20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-950/80 border border-sky-700/60 px-3.5 py-1 text-xs font-bold text-sky-300 mb-3 uppercase tracking-wider">
            <span>{siteConfig.lang === 'ru' ? 'Собственный парк техники в Сарасоте' : 'Heavy In-House Sarasota Fleet'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Автовышка 14+ метров, челюстной захват бревен и тракторы New Holland' 
              : 'Aerial Bucket Boom, Hydraulic Log Grapples & New Holland Palm Loaders'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'Никакой аренды втридорога и задержек. Роберт Рейнольдс лично организует работы на объекте с собственной тяжелой техникой, сохраняя плитку, газоны и кровли в первозданном виде.'
              : 'Zero rental markups or subcontract delays. Rob Reynolds deploys company-owned heavy equipment, safeguarding turf, brick pavers, and rooflines with laser precision.'}
          </p>
        </div>

        {/* 3 Specialized Heavy Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.equipment.map((item: any, idx: number) => (
            <div
              key={idx}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 shadow-xl hover:border-sky-500/50 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Photo showcase with badge */}
                <div className="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/30" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-lg bg-sky-950/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-sky-200 shadow-md border border-sky-700/60">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Technical Specifications */}
                  <div className="mt-6 space-y-2 pt-5 border-t border-slate-800/80">
                    {item.specs.map((spec: any, sIdx: number) => (
                      <div
                        key={sIdx}
                        className="bg-slate-900/80 rounded-xl px-3.5 py-2.5 border border-slate-800/80 flex items-center justify-between gap-3"
                      >
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider shrink-0">
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
