'use client'

import React, { useState } from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'

export const TecosCalculator: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn
  const [selectedServiceId, setSelectedServiceId] = useState(siteConfig.calculator.services[0].id)
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1) // default medium

  const currentService = siteConfig.calculator.services.find(s => s.id === selectedServiceId) || siteConfig.calculator.services[0]
  const currentSize = currentService.sizes[selectedSizeIndex] || currentService.sizes[0]

  const handleServiceChange = (id: string) => {
    setSelectedServiceId(id)
    setSelectedSizeIndex(1)
  }

  const smsBody = encodeURIComponent(
    siteConfig.lang === 'ru'
      ? `Здравствуйте, интересует ${currentService?.name}, параметр: ${currentSize?.label}. Отправляю 2 фото для точной оценки:`
      : `Hi ${siteConfig.shortName}, I'm interested in ${currentService?.name}, spec: ${currentSize?.label}. Here are 2 photos for an exact quote:`
  )

  return (
    <section id="calculator" className="py-20 bg-[#070b13] border-t border-yellow-500/10 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Estimator Context */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded bg-yellow-400/10 px-2.5 py-1 text-xs font-black uppercase tracking-wider text-yellow-400 border border-yellow-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              {siteConfig.calculator.badge}
            </span>

            <h2 className="mt-3 text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              {siteConfig.calculator.title}
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {siteConfig.calculator.hint}
            </p>

            {/* Direct Verification Callout */}
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 font-black">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    {siteConfig.ui.fastResponse}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {siteConfig.ui.fastResponseDesc}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Estimator Panel */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border-2 border-yellow-500/30 bg-[#0c121e] p-6 sm:p-8 shadow-2xl">
              {/* Service Select Pills */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {siteConfig.calculator.serviceLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {siteConfig.calculator.services.map((svc) => (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => handleServiceChange(svc.id)}
                      className={`rounded-xl px-3 py-2.5 text-xs font-black transition ${
                        selectedServiceId === svc.id
                          ? 'bg-yellow-400 text-slate-950 shadow-md shadow-yellow-500/20'
                          : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-yellow-400/40 hover:text-white'
                      }`}
                    >
                      {svc.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope/Dimension Select */}
              <div className="mt-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {currentService.sizeLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.sizes.map((size, idx) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`text-left rounded-xl p-3 border transition ${
                        selectedSizeIndex === idx
                          ? 'border-yellow-400 bg-yellow-950/30 shadow-sm'
                          : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold ${selectedSizeIndex === idx ? 'text-yellow-400' : 'text-slate-200'}`}>
                          {size.label}
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {size.time}
                        </span>
                      </div>
                      <div className="mt-1 font-mono text-sm font-black text-white">
                        {size.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Result Highlight Box */}
              <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-black/60 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {siteConfig.lang === 'ru' ? 'Ориентир стоимости:' : 'Estimated Price Range:'}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-yellow-400 font-mono mt-0.5">
                    {currentSize.price}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {siteConfig.lang === 'ru' ? 'Примерное время:' : 'Est. time on site:'}{' '}
                    <span className="text-slate-200 font-bold">{currentSize.time}</span>
                  </div>
                </div>

                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${smsBody}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-yellow-500/25 transition hover:brightness-110 active:scale-95 shrink-0"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{siteConfig.calculator.ctaText}</span>
                </a>
              </div>

              {/* What is Included Bullets */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {siteConfig.lang === 'ru' ? 'Что входит в указанную стоимость:' : 'Standard service includes:'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {currentService.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="text-yellow-400 font-bold">✓</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
