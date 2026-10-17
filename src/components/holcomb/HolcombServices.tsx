'use client'

import React from 'react'
import { siteConfigHolcombEn } from '../../siteConfig.holcomb.en'

export function HolcombServices({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHolcombEn

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#0a1810] border-b border-emerald-500/20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 px-3.5 py-1 text-xs font-bold text-emerald-300 mb-3 uppercase tracking-wider">
            <span>{siteConfig.lang === 'ru' ? 'Лесозаготовительные и арбористические услуги' : 'Holcomb Specialized Tree Services'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Валка пихт, разборка секвой, устранение штормовых завалов и измельчение веток' 
              : 'Precision Fir Felling, Redwood Removals, Storm Logging & Chipping'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'От ювелирного спуска верхушек 30-метровых пихт над газонами до распиловки упавших деревьев на крышах дач и измельчения куч веток в чистую щепу.'
              : 'From roping dead tops out of 100+ foot Douglas firs over tender fescue lawns to clearing fallen trees off cabin roofs and chipping massive brush piles.'}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.services.map((service: any, idx: number) => (
            <div
              key={idx}
              className="rounded-2xl border border-emerald-900/40 bg-[#0c1e13] p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:border-emerald-500/60 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Tagline */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="h-11 w-11 rounded-xl bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-green-600 group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full">
                    {service.tagline}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features list */}
                <ul className="mt-5 space-y-2 pt-5 border-t border-emerald-900/40">
                  {service.features.map((feat: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button inside card */}
              <div className="mt-6 pt-4 border-t border-emerald-900/40">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-950/80 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-700 border border-emerald-800/60 hover:border-transparent text-white font-bold py-2.5 px-4 text-xs transition-all"
                >
                  <span>{siteConfig.lang === 'ru' ? 'Вызвать Тони на осмотр' : 'Call Tony for Estimate'}</span>
                  <svg className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
