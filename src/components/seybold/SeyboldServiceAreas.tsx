'use client'

import React, { useState } from 'react'
import { siteConfigSeyboldEn } from '../../siteConfig.seybold.en'

export function SeyboldServiceAreas({ config }: { config?: any }) {
  const siteConfig = config || siteConfigSeyboldEn
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section id="service-areas" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Grid: Service Areas & Coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Geographic Coverage (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-300/80 px-3 py-1 text-xs font-bold text-emerald-900">
              <span>{siteConfig.lang === 'ru' ? 'Зона обслуживания' : 'Service Territory'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {siteConfig.lang === 'ru' 
                ? 'Округа Манати и Сарасота: оперативный выезд бригады' 
                : 'Serving Manatee & Sarasota Counties with Rapid Response'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? `Наша операционная база расположена по адресу ${siteConfig.streetAddress}, ${siteConfig.city}. Благодаря удобному выезду на ключевые трассы US-301 и I-75 мы быстро доставляем гусеничную технику и подъемники в любую точку региона.`
                : `Strategically dispatched from our headquarters at ${siteConfig.streetAddress}, ${siteConfig.city}. Rapid access to I-75 and US-301 ensures swift mobilization of our Vermeer tracked machinery and aerial lifts.`}
            </p>

            {/* Service Areas Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {siteConfig.serviceAreas.map((area: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 hover:border-emerald-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs">
                      {area.name}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      {area.zip}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {area.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct dispatch button */}
            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold px-5 py-3 text-xs shadow-md transition-colors"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{siteConfig.lang === 'ru' ? 'Уточнить выезд по вашему адресу' : 'Check Service Availability for Your Address'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Accordion (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-bold text-slate-800">
              <span>{siteConfig.lang === 'ru' ? 'Частые вопросы' : 'Frequently Asked Questions'}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {siteConfig.lang === 'ru' 
                ? 'Детали работы, безопасности и ценообразования' 
                : 'Key Answers on Safety, Lawn Care & Pricing'}
            </h3>

            <div className="space-y-3 pt-2">
              {siteConfig.faq.map((item: any, idx: number) => {
                const isOpen = openFaq === idx
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-slate-900 hover:text-emerald-700 transition-colors"
                    >
                      <span>{item.q}</span>
                      <span className={`shrink-0 h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-black transition-transform ${isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'text-slate-500'}`}>
                        ↓
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
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
