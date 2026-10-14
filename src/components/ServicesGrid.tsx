import React from 'react'
import { siteConfig } from '../siteConfig'

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Возможности спецтехники
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Услуги по спилу деревьев и удалению пней
          </h2>
          <p className="mt-3 text-base text-neutral-300">
            Все работы выполняются на профессиональном оборудовании лично Брэдом Фредериком. Никакой спешки, грязи или брошенных куч щепы на вашем газоне.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 transition hover:border-neutral-700 hover:bg-neutral-900 shadow-lg"
            >
              <div>
                {/* Header with index and tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-neutral-800 px-2.5 py-1 text-xs font-mono font-bold text-neutral-400">
                    0{idx + 1}
                  </span>
                  <span className="rounded-full bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                    {service.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-white group-hover:text-emerald-400 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {service.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <a
                  href={`sms:${siteConfig.phoneRaw}?&body=Здравствуйте,%20интересует%20расчет%20по%20услуге%20${encodeURIComponent(service.title)}:`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>Узнать цену</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="#estimate-form"
                  className="text-xs text-neutral-400 hover:text-white"
                >
                  Заполнить форму →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
