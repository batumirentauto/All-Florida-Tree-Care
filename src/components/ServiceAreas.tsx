import React from 'react'
import { siteConfig } from '../siteConfig'

export const ServiceAreas: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-900/40 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-8 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {siteConfig.ui.areasCategory}
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
                {siteConfig.ui.areasTitle} {siteConfig.city}
              </h2>
              <p className="mt-2 text-sm text-neutral-300">
                {siteConfig.ui.areasSub}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-neutral-700 transition border border-neutral-700"
              >
                <span>{siteConfig.ui.checkNeighborhood}</span>
                <span className="text-emerald-400">→</span>
              </a>
            </div>
          </div>

          {/* Cities Tags Grid */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {siteConfig.serviceAreas.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950/80 px-3.5 py-2 text-xs font-semibold text-neutral-200 transition hover:border-emerald-600/60 hover:text-white"
              >
                <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {city}, {siteConfig.state}
              </span>
            ))}
          </div>

          {/* Dispatch Notice */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-6 border-t border-neutral-800/80 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>{siteConfig.ui.dispatchNotice}</span>
            </div>
            <span className="font-semibold text-neutral-300">
              {siteConfig.addressNotes}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
