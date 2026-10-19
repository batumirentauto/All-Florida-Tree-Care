'use client'

import React, { useState } from 'react'
import { getTheme } from './themes'

export function UniversalServiceAreas({ config, themeName }: { config: any; themeName?: string }) {
  const theme = getTheme(themeName || config.theme)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id="contact" className={`py-16 sm:py-24 ${theme.bgBody} border-b ${theme.borderSubtle} text-white`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Territory & Depot info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`inline-flex items-center gap-1.5 rounded-full ${theme.badgeBg} ${theme.badgeBorder} border px-3.5 py-1 text-xs font-bold ${theme.badgeText} uppercase tracking-wider`}>
              <span>{config.lang === 'ru' ? 'География обслуживания' : 'Service Territory & Dispatch'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {config.lang === 'ru' 
                ? `Работаем в г. ${config.city} и прилегающих районах`
                : `Serving ${config.city} & Surrounding Communities`}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {config.lang === 'ru'
                ? `База техники расположена по адресу: ${config.fullAddress}. Мобильная бригада оперативно выезжает на оценку и аварийные вызовы.`
                : `Our dispatch base is located at ${config.fullAddress}. Crews deploy with complete equipment for residential and commercial tree operations.`}
            </p>

            {/* Service coverage pills */}
            <div className={`${theme.bgCard} rounded-2xl border ${theme.borderSubtle} p-6 space-y-4`}>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {config.lang === 'ru' ? 'Населенные пункты выезда' : 'Key Communities Served'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(config.serviceAreas)
                    ? config.serviceAreas.map((a: any) => (typeof a === 'string' ? a : a.name))
                    : config.serviceAreas?.cities || [config.city]
                  ).map((c: string, idx: number) => (
                    <span
                      key={idx}
                      className={`text-xs font-semibold ${theme.badgeText} ${theme.badgeBg} ${theme.badgeBorder} border px-3 py-1 rounded-lg break-words max-w-full`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {config.serviceAreas?.counties && (
                <div className="pt-3 border-t border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {config.lang === 'ru' ? 'Округа' : 'Counties'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {config.serviceAreas.counties.map((c: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 px-3 py-1 rounded-lg"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>{config.lang === 'ru' ? 'Часы работы:' : 'Hours:'}</span>
                <span className="font-semibold text-white">{config.workingHours || 'Mon – Sat: 8:00 AM – 6:00 PM'}</span>
              </div>
            </div>

            {/* Direct Call / Contact Box */}
            <div className={`p-5 rounded-2xl ${theme.bgCardAlt} border ${theme.borderAccent} flex items-center justify-between gap-4`}>
              <div>
                <div className="text-xs text-slate-400 font-semibold">{config.lang === 'ru' ? 'Прямой контакт с бригадой:' : 'Direct Dispatch Phone:'}</div>
                <div className="text-lg font-black text-white">{config.phone}</div>
              </div>
              <a
                href={`tel:${config.phoneRaw}`}
                className={`inline-flex items-center gap-2 rounded-xl ${theme.btnPrimary} text-white font-bold px-4 py-2 text-xs shadow-md`}
              >
                <span>{config.lang === 'ru' ? 'Вызов' : 'Call'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {config.lang === 'ru' ? 'Часто задаваемые вопросы (FAQ)' : 'Frequently Asked Questions'}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">
                {config.lang === 'ru' 
                  ? 'Практические ответы о стоимости, технике и регламенте выполнения работ.'
                  : 'Practical details on property protection, timeline, and written quotes.'}
              </p>
            </div>

            <div className="space-y-3">
              {(config.faq || []).map((faqItem: any, idx: number) => {
                const isOpen = openFaq === idx
                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all ${
                      isOpen
                        ? `${theme.badgeBg} ${theme.borderAccent}`
                        : `${theme.bgCard} border-slate-800 hover:border-slate-700`
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-white gap-3"
                    >
                      <span className="break-words min-w-0 pr-2">{faqItem.question || faqItem.q}</span>
                      <svg
                        className={`w-5 h-5 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-white' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 break-words">
                        {faqItem.answer || faqItem.a}
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
