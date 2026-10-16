'use client'

import React from 'react'
import { siteConfigSeyboldEn } from '../../siteConfig.seybold.en'

export function SeyboldServices({ config }: { config?: any }) {
  const siteConfig = config || siteConfigSeyboldEn

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800 mb-3">
            <span>{siteConfig.lang === 'ru' ? 'Полный спектр услуг' : 'Comprehensive Tree & Property Care'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Услуги сертифицированного ухода за деревьями и участком' 
              : 'Precision Arborist & Complete Property Solutions'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'От сложного секционного спила дубов-великанов до деликатной очистки от испанского мха и дробления пней вплотную к заборам.'
              : 'From complex dismantling of mature live oaks to delicate Spanish moss stripping and fence-line stump pulverizing across Manatee and Sarasota counties.'}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service: any, idx: number) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Tagline */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-full">
                    {service.tagline}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features list */}
                <ul className="mt-4 space-y-1.5 pt-4 border-t border-slate-100">
                  {service.features.map((feat: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group/btn"
                >
                  <span>{siteConfig.lang === 'ru' ? 'Заказать услугу' : 'Book Service'}</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
                <span className="text-[11px] text-slate-400">
                  {siteConfig.lang === 'ru' ? 'Бесплатный расчет' : 'Free Estimate'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Call Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-900 p-6 sm:p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-700/60 border border-emerald-500/40 px-3 py-1 text-xs font-semibold text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{siteConfig.ui.emergencyBadge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black mt-2">
                {siteConfig.lang === 'ru' 
                  ? 'Упала ветка или дерево угрожает дому?' 
                  : 'Storm Damaged Tree Threatening Your Home or Driveway?'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
                {siteConfig.lang === 'ru'
                  ? 'Круглосуточный экипаж с бензопилами, погрузчиком Vermeer и прицепом готов к экстренному выезду. Ликвидируем угрозу быстро и безопасно.'
                  : 'Our on-call emergency crew mobilizes immediately with Vermeer tracked loaders, aerial lifts, and dump trailers. We protect your home and clear roads within hours.'}
              </p>
            </div>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="shrink-0 inline-flex items-center gap-2.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 font-black px-6 py-3.5 text-sm shadow-md transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
