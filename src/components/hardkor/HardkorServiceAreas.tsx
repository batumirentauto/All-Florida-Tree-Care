'use client'

import React, { useState } from 'react'
import { siteConfigHardkorEn } from '../../siteConfig.hardkor.en'

export function HardkorServiceAreas({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHardkorEn
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-[#0b101d] border-b border-red-500/20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Grid: Service Areas & Coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Geographic Coverage (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-red-950/80 border border-red-700/60 px-3.5 py-1 text-xs font-bold text-red-300 uppercase tracking-wider">
              <span>{siteConfig.lang === 'ru' ? 'География выездов' : 'Service Territory'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {siteConfig.lang === 'ru' 
                ? 'Сент-Питерсберг и весь округ Пинеллас: выезд от 15 минут' 
                : 'Serving St. Petersburg & Pinellas County with Fast Response'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? `Наша операционная база и стоянка техники расположены по адресу: ${siteConfig.streetAddress}, ${siteConfig.city}, ${siteConfig.zip}. Мгновенный выезд на магистрали I-275 и US-19 позволяет нашей бригаде и ломовозу прибывать на экстренные вызовы в кратчайшие сроки.`
                : `Strategically dispatched from our operations base at ${siteConfig.streetAddress}, ${siteConfig.city}, FL ${siteConfig.zip}. Rapid access to I-275 and US-19 ensures prompt mobilization of our industrial claw-truck and rigging crew across Pinellas.`}
            </p>

            {/* Service Areas Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {siteConfig.serviceAreas.map((area: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-[#0f172a] rounded-xl p-3.5 border border-slate-800 hover:border-red-500/50 transition-colors shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">
                      {area.name}
                    </span>
                    <span className="font-mono text-[10px] text-red-300 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/80">
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
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3.5 text-xs shadow-lg shadow-red-700/40 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.lang === 'ru' ? 'Вызвать бригаду в ваш район' : 'Dispatch Crew to Your Area'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Verified FAQ Accordion (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                {siteConfig.lang === 'ru' ? 'Часто задаваемые вопросы' : 'Frequently Asked Questions'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {siteConfig.lang === 'ru' ? 'Честные ответы без уловок' : 'Direct Answers from Karode Reid'}
              </h3>
            </div>

            <div className="space-y-3">
              {siteConfig.faq.map((item: any, idx: number) => {
                const isOpen = openFaq === idx
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-800 bg-[#0f172a] shadow-lg overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-red-400 transition-colors"
                    >
                      <span>{item.q}</span>
                      <span className={`text-red-400 transition-transform font-mono text-lg shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
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
