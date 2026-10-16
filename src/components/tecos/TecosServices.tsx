import React from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'

export const TecosServices: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn

  return (
    <section id="services" className="py-20 bg-[#090d16]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded bg-yellow-400/10 px-2.5 py-1 text-xs font-black uppercase tracking-wider text-yellow-400 border border-yellow-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              {siteConfig.ui.servicesCategory}
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {siteConfig.ui.servicesTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
              {siteConfig.ui.servicesSub}
            </p>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-yellow-500/40 px-5 py-3 text-xs font-black uppercase tracking-wider text-yellow-400 hover:bg-yellow-400 hover:text-slate-950 transition shadow-lg shrink-0"
          >
            <span>{siteConfig.ui.callBrad}</span>
            <span>→</span>
          </a>
        </div>

        {/* Services Grid (3x2 with heavy industrial styling) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col justify-between rounded-2xl border-t-4 border-t-yellow-400 border-x border-b border-slate-800 bg-[#0d121f] p-7 shadow-xl transition hover:border-yellow-400/60 hover:bg-[#101726] group"
            >
              <div>
                {/* Tagline Badge */}
                <div className="text-[11px] font-bold text-yellow-400/90 uppercase tracking-wider font-mono">
                  {service.tagline}
                </div>

                {/* Service Title */}
                <h3 className="mt-2 text-xl font-black text-white group-hover:text-yellow-400 transition">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.desc}
                </p>

                {/* Bullet Features */}
                <ul className="mt-5 space-y-2 border-t border-slate-800/80 pt-4 text-xs text-slate-200">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-yellow-400 text-slate-950 text-[10px] font-black">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer with Direct Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? `Здравствуйте, интересует расчет по услуге ${service.title}:` : `Hi ${siteConfig.shortName}, I'm interested in an estimate for ${service.title}:`)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-yellow-400 hover:text-yellow-300 transition"
                >
                  <span>{siteConfig.ui.textForQuote}</span>
                  <span>→</span>
                </a>

                <a
                  href="#calculator"
                  className="text-[11px] text-slate-400 hover:text-slate-200 transition"
                >
                  {siteConfig.ui.formQuote}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
