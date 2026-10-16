'use client'

import React from 'react'
import { siteConfigHardkorEn } from '../../siteConfig.hardkor.en'

export function HardkorServices({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHardkorEn

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#0b101d] border-b border-red-500/20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-red-950/80 border border-red-700/60 px-3.5 py-1 text-xs font-bold text-red-300 mb-3 uppercase tracking-wider">
            <span>{siteConfig.lang === 'ru' ? 'Полный спектр работ' : 'Hard Kor Certified Services'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Профессиональный уход, спил и ликвидация последствий ураганов' 
              : 'Precision Tree Removal, Crane Rigging & Hurricane Recovery'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'От ювелирной разборки аварийных дубов в узких дворах Сент-Питерсберга до мгновенного вывоза бревен тяжелым ломовозом-клешней и официальных отчетов сертифицированного арбориста.'
              : 'From complex zero-clearance removals between tight St. Pete homes to high-capacity grapple claw debris haul-away and formal Certified Arborist Reports.'}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.services.map((service: any, idx: number) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-[#0f172a] p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:border-red-500/60 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Tagline */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="h-11 w-11 rounded-xl bg-red-950/70 border border-red-800/60 text-red-400 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-red-300 bg-red-950/80 border border-red-800/80 px-3 py-1 rounded-full">
                    {service.tagline}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features list */}
                <ul className="mt-5 space-y-2 pt-5 border-t border-slate-800/80">
                  {service.features.map((feat: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-xs font-bold text-red-400 group-hover:text-red-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>{siteConfig.lang === 'ru' ? 'Заказать расчет' : 'Request Estimate'}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <span className="text-[11px] font-mono text-slate-500">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Storm Dispatch Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-red-950/90 via-red-900/60 to-[#0f172a] border border-red-600/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-700/50">
              <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {siteConfig.lang === 'ru' 
                  ? 'Дерево упало на крышу или провода? Экстренная мобилизация' 
                  : 'Fallen Tree on Roof or Utility Line? 24/7 Rapid Response'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {siteConfig.lang === 'ru'
                  ? 'Керод Рид лично выезжает на аварийные объекты. Честные цены без спекуляций даже в разгар ураганов.'
                  : 'Owner Karode Reid dispatches immediately. Honest emergency pricing with strictly zero hurricane rate gouging.'}
              </p>
            </div>
          </div>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm shadow-lg shadow-red-700/40 transition-all hover:scale-105 shrink-0"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
