import { siteConfig as defaultSiteConfig } from '../siteConfig'
import type { SiteConfig } from '../types/siteConfig'

export const ServicesGrid: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || defaultSiteConfig
  return (
    <section id="services" className="py-20 bg-[#080d1a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            {siteConfig.ui.servicesCategory}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            {siteConfig.ui.servicesTitle}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {siteConfig.ui.servicesSub}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/85 p-6 transition hover:border-amber-500/40 hover:bg-slate-900 shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                {/* Header with index and tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-slate-950 px-2.5 py-1 text-xs font-mono font-bold text-slate-400 border border-slate-800">
                    0{idx + 1}
                  </span>
                  <span className="rounded-full bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 text-[11px] font-semibold text-amber-300">
                    {service.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-white group-hover:text-amber-400 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {service.desc}
                </p>

                {/* Arborist Capability Specific Micro-Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.features ? (
                    service.features.map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className="rounded bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-amber-300 border border-slate-800"
                      >
                        ✓ {feature}
                      </span>
                    ))
                  ) : (
                    <span className="rounded bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-amber-300 border border-slate-800">
                      ✓ {siteConfig.lang === 'ru' ? 'Собственная техника' : 'Commercial Equipment'}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? `Здравствуйте, интересует расчет по услуге ${service.title}:` : `Hi ${siteConfig.shortName}, I'm interested in an estimate for ${service.title}:`)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
                >
                  <span>{siteConfig.ui.textForQuote}</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="#estimate-form"
                  className="text-xs text-slate-400 hover:text-white transition"
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
