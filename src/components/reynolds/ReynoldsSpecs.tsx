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

        {/* 4 Fleet & Rigging Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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

                  {/* Spec Chips */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-5 border-t border-slate-800/80">
                    {item.specs.map((spec: any, sIdx: number) => (
                      <div key={sIdx} className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                          {spec.label}
                        </div>
                        <div className="text-xs font-bold text-white mt-0.5 leading-snug">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Realtor & Hurricane Safety Callout */}
        <div className="mt-12 bg-gradient-to-br from-[#0c182c] to-[#0f172a] rounded-2xl border border-sky-500/30 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {siteConfig.lang === 'ru' ? 'Практика Флориды: Защита от штормов и рост стоимости дома' : 'Florida Field Protocol: Hurricane Relief & Real Estate Value'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {siteConfig.lang === 'ru' 
                  ? 'Почему риелторы и владельцы доверяют вековые дубы Роберту Рейнольдсу?' 
                  : 'Why Do Sarasota Realtors & Homeowners Entrust Majestic Oaks to Rob?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {siteConfig.lang === 'ru'
                  ? 'Как доказано в отзыве Марвина Шебро, своевременное прореживание 4 вековых дубов снимает парусность кроны перед ураганами, не давая штормовому ветру сломать гигантские ветви над спальнями. А риелтор Трой Роббинс подтверждает: цены Роберта выгоднее конкурентов, а преображение участка существенно ускоряет продажу недвижимости.'
                  : 'As verified by homeowner Marvin Shebroe, scientifically thinning 4 majestic live oaks relieves lethal wind resistance before hurricane strikes, preventing trunk snapping over roofs. Meanwhile, leading realtor Troy Robbins trusts Rob for both personal homes and client listings because his prices beat competing bids and elevate curb appeal.'}
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-600 hover:from-sky-400 hover:to-emerald-500 text-white font-bold px-6 py-3.5 text-xs shadow-lg shadow-sky-700/40 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.ui?.callRob || siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
