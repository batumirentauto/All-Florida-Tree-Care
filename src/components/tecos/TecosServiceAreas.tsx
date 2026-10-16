import React from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'

export const TecosServiceAreas: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn

  return (
    <section id="areas" className="py-16 bg-[#070b13] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded bg-yellow-400/10 px-2.5 py-1 text-xs font-black uppercase tracking-wider text-yellow-400 border border-yellow-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            {siteConfig.ui.areasCategory}
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            {siteConfig.ui.areasTitle} {siteConfig.city}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            {siteConfig.ui.areasSub}
          </p>
        </div>

        {/* Location Badges Grid */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {siteConfig.serviceAreas.map((area, idx) => (
            <div
              key={idx}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition ${
                area === 'Bradenton' || area === 'Брейдентон'
                  ? 'bg-yellow-400 text-slate-950 font-black shadow-md shadow-yellow-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-200 hover:border-yellow-400/40 hover:text-yellow-300'
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${area === 'Bradenton' || area === 'Брейдентон' ? 'bg-slate-950' : 'bg-yellow-400'}`} />
              <span>{area}</span>
              {(area === 'Bradenton' || area === 'Брейдентон') && (
                <span className="text-[10px] uppercase font-mono tracking-wider ml-1 opacity-80">HQ BASE</span>
              )}
            </div>
          ))}
        </div>

        {/* Dispatch Footnote */}
        <div className="mt-6 text-xs text-slate-400 flex items-center gap-2">
          <span className="text-yellow-400">📍</span>
          <span>{siteConfig.addressNotes}</span>
        </div>
      </div>
    </section>
  )
}
