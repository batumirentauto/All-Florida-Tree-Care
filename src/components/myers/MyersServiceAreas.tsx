'use client'

import React, { useState } from 'react'
import { siteConfigMyersEn } from '../../siteConfig.myers.en'

export function MyersServiceAreas({ config }: { config?: any }) {
  const siteConfig = config || siteConfigMyersEn
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-[#071120] border-b border-sky-500/20 text-white">
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
                ? 'Кус-Бей, Норт-Бенд, Бандон и Южное побережье Орегона' 
                : 'Serving Coos Bay, North Bend, Bandon & Oregon South Coast'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? `Наша оперативная база расположена в центре Coos Bay: ${siteConfig.streetAddress}, ${siteConfig.city}, OR ${siteConfig.zip}. Быстрый выезд на US-101 и OR-241 обеспечивает оперативное прибытие автовышки и бригады в любую точку округа Кус.`
                : `Centrally dispatched from our yard at ${siteConfig.streetAddress}, ${siteConfig.city}, OR ${siteConfig.zip}. Immediate access to US-101 and coastal corridors ensures prompt deployment of our bucket truck and chippers across Coos County.`}
            </p>

            {/* Service Areas Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {siteConfig.serviceAreas.map((area: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-[#0b172a] rounded-xl p-3.5 border border-sky-900/40 hover:border-sky-500/50 transition-colors shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">
                      {area.name}
                    </span>
                    <span className="font-mono text-[10px] text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/80">
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
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold px-6 py-3.5 text-xs shadow-lg shadow-sky-700/40 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.ui?.callPat || `Call (${siteConfig.phone})`}</span>
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Accordion (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-950/80 border border-sky-700/60 px-3.5 py-1 text-xs font-bold text-sky-300 uppercase tracking-wider">
              <span>{siteConfig.lang === 'ru' ? 'Частые вопросы клиентов' : 'Frequently Asked Questions'}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {siteConfig.lang === 'ru' 
                ? 'Технические регламенты и безопасность' 
                : 'Safety Protocols & Operational Standards'}
            </h3>

            <div className="space-y-3 pt-2">
              {siteConfig.faq.map((item: any, idx: number) => {
                const isOpen = openFaq === idx
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-sky-900/40 bg-[#0b172a] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-4 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-white hover:text-sky-300 transition"
                    >
                      <span>{item.q}</span>
                      <svg
                        className={`w-4 h-4 text-sky-400 shrink-0 transform transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-sky-900/40 pt-3">
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
