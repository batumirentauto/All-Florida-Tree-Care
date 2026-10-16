'use client'

import React, { useState } from 'react'
import { siteConfigReynoldsEn } from '../../siteConfig.reynolds.en'

export function ReynoldsServiceAreas({ config }: { config?: any }) {
  const siteConfig = config || siteConfigReynoldsEn
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-[#0a1120] border-b border-sky-500/20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Grid: Service Areas & Coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Geographic Coverage (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-950/80 border border-sky-700/60 px-3.5 py-1 text-xs font-bold text-sky-300 uppercase tracking-wider">
              <span>{siteConfig.lang === 'ru' ? 'География выездов' : 'Service Territory'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {siteConfig.lang === 'ru' 
                ? 'Сарасота, Siesta Key и Lakewood Ranch: оперативный выезд' 
                : 'Serving Sarasota, Siesta Key, Palmer Ranch & Lakewood Ranch'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? `Наша операционная база и стоянка спецтехники расположены в Ashton Center: ${siteConfig.streetAddress}, ${siteConfig.city}, FL ${siteConfig.zip}. Быстрый выезд на Clark Rd, Bee Ridge Rd и I-75 обеспечивает оперативную доставку автовышки и погрузчиков на любой объект.`
                : `Centrally dispatched from Ashton Center at ${siteConfig.streetAddress}, ${siteConfig.city}, FL ${siteConfig.zip}. Immediate access to Clark Rd, Bee Ridge Rd, and I-75 ensures prompt arrival of our bucket trucks and loaders across Sarasota and Manatee counties.`}
            </p>

            {/* Service Areas Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {siteConfig.serviceAreas.map((area: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-[#0f172a] rounded-xl p-3.5 border border-slate-800 hover:border-sky-500/50 transition-colors shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">
                      {area.name}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                      {area.zip}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {area.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct dispatch button */}
            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-600 hover:from-sky-400 hover:to-emerald-500 text-white font-bold px-6 py-3.5 text-xs shadow-lg shadow-sky-700/40 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.ui?.callRob || siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Accordion (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 px-3.5 py-1 text-xs font-bold text-emerald-300 uppercase tracking-wider">
              <span>{siteConfig.lang === 'ru' ? 'Частые вопросы домовладельцев' : 'Sarasota Tree Care FAQ'}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {siteConfig.lang === 'ru' 
                ? 'Все, что нужно знать перед заказом работ' 
                : 'Key Answers on Permits, Storm Trimming & Equipment'}
            </h3>

            <div className="space-y-3 pt-2">
              {siteConfig.faq.map((item: any, idx: number) => {
                const isOpen = openFaq === idx
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-white hover:text-sky-300 transition"
                    >
                      <span className="pr-3">{item.q}</span>
                      <span className={`text-sky-400 transform transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80">
                        {item.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
