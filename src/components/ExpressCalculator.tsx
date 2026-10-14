'use client'

import React, { useState } from 'react'
import { siteConfig as defaultSiteConfig } from '../siteConfig'
import type { SiteConfig } from '../types/siteConfig'

export const ExpressCalculator: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || defaultSiteConfig
  const calc = siteConfig.calculator
  const [selectedServiceId, setSelectedServiceId] = useState(calc.services[0]?.id || 'stump')
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1) // default medium tier

  const currentService =
    calc.services.find((s) => s.id === selectedServiceId) || calc.services[0]

  const currentSize =
    currentService?.sizes[selectedSizeIndex] || currentService?.sizes[0]

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id)
    setSelectedSizeIndex(1) // reset to medium option
  }

  const smsBody = encodeURIComponent(
    siteConfig.lang === 'ru'
      ? `Здравствуйте, интересует ${currentService?.name}, параметр: ${currentSize?.label}. Отправляю 2 фото для точной оценки:`
      : `Hi All Florida Tree Care, I'm interested in ${currentService?.name}, spec: ${currentSize?.label}. Here are 2 photos for an exact quote:`
  )

  return (
    <section id="calculator" className="py-20 bg-[#080d1a] border-t border-slate-800 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Explanatory Context & Trust Guarantees */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              {siteConfig.lang === 'ru' ? 'Прозрачные цены' : 'Transparent Pricing'}
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-black text-white tracking-tight">
              {siteConfig.lang === 'ru'
                ? 'Мгновенный ориентир стоимости работ'
                : 'Interactive Job Estimator & Pricing Guide'}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {siteConfig.lang === 'ru'
                ? 'Выберите тип услуги и размер объекта, чтобы увидеть ориентировочную стоимость и среднее время выполнения. Мы работаем открыто — без скрытых платежей за вывоз мусора.'
                : 'Select your project scope to see typical pricing and project duration. What we quote is what you pay — no surprise debris dumping fees or hidden trip charges.'}
            </p>

            {/* 3 Value bullets */}
            <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-950 text-amber-400 border border-amber-800 text-xs font-bold">✓</span>
                <span><strong>{siteConfig.lang === 'ru' ? 'Фиксированная цена' : 'Guaranteed Price'}</strong> — {siteConfig.lang === 'ru' ? 'Согласованная смета не меняется в процессе.' : 'Written firm estimate before work starts.'}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-950 text-amber-400 border border-amber-800 text-xs font-bold">✓</span>
                <span><strong>{siteConfig.lang === 'ru' ? 'Вывоз включен' : 'Debris Disposal Included'}</strong> — {siteConfig.lang === 'ru' ? 'Распил, щепа и стволы вывозятся нашей техникой.' : 'Chipping and hauling away included in quote.'}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-950 text-amber-400 border border-amber-800 text-xs font-bold">✓</span>
                <span><strong>{siteConfig.lang === 'ru' ? 'Быстрая оценка по SMS' : '15-Min SMS Quotes'}</strong> — {siteConfig.lang === 'ru' ? 'Отправьте 2 фото и получите точный расчет.' : 'Send 2 photos to Justin for an exact quote.'}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-2.5 text-xs font-bold text-white hover:border-amber-400 transition"
              >
                <span>{siteConfig.ui.callBrad}</span>
                <span className="font-mono text-amber-400">{siteConfig.phone}</span>
              </a>
              <span className="text-xs text-slate-400">{siteConfig.workingHours}</span>
            </div>
          </div>

          {/* Right Column: Interactive Console */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border-2 border-amber-500/30 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
              {/* Top Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                    <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                    {calc.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">
                    {calc.title}
                  </h3>
                </div>
                <span className="hidden sm:inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-500/30">
                  {siteConfig.lang === 'ru' ? 'Расчет онлайн' : 'Instant Guide'}
                </span>
              </div>

              {/* Service Type Selection */}
              <div className="mt-4">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {calc.serviceLabel}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {calc.services.map((service) => {
                    const isSelected = selectedServiceId === service.id
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleSelectService(service.id)}
                        className={`rounded-lg px-2.5 py-2.5 text-xs font-bold transition text-center leading-snug ${
                          isSelected
                            ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black shadow-md ring-1 ring-amber-300'
                            : 'bg-slate-950/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        {service.name}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Dynamic Size / Complexity Selection */}
              <div className="mt-4">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                  <span>{currentService?.sizeLabel}</span>
                  <span className="text-[11px] text-amber-400 normal-case font-mono font-bold">
                    {currentSize?.price}
                  </span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {currentService?.sizes.map((size, idx) => {
                    const isSelected = selectedSizeIndex === idx
                    return (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() => setSelectedSizeIndex(idx)}
                        className={`rounded-lg p-2.5 text-left transition border ${
                          isSelected
                            ? 'border-amber-400 bg-amber-950/40 text-white ring-1 ring-amber-400 shadow-sm'
                            : 'border-slate-800 bg-slate-950/80 text-slate-300 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        <div className="text-xs font-bold text-white">{size.label}</div>
                        <div className="text-[11px] text-amber-400 font-mono font-semibold mt-0.5">{size.price}</div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Dynamic Price & Timing Result Box */}
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/90 p-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-400">
                      {siteConfig.lang === 'ru' ? 'Ориентир стоимости:' : 'Estimated Range:'}
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                      {currentSize?.price}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] uppercase font-bold text-slate-400">
                      {siteConfig.lang === 'ru' ? 'Время работы:' : 'Est. Duration:'}
                    </span>
                    <div className="text-sm font-semibold text-slate-200">
                      ~{currentSize?.time}
                    </div>
                  </div>
                </div>

                {/* Dynamic Included Checklist */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-1.5 text-[11px] text-slate-300">
                  {currentService?.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Lock-In CTA Button */}
              <div className="mt-4">
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${smsBody}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-4 py-3.5 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/25 transition hover:brightness-110 active:scale-98"
                >
                  <svg className="h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{calc.ctaText}</span>
                </a>
              </div>

              {/* Trust Micro-Note */}
              <p className="mt-3 text-[11px] text-center text-slate-400 leading-relaxed">
                {calc.hint}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
