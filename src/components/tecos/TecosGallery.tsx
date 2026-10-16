import React from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'

export const TecosGallery: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn

  return (
    <section id="gallery" className="py-20 bg-[#090d16]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded bg-yellow-400/10 px-2.5 py-1 text-xs font-black uppercase tracking-wider text-yellow-400 border border-yellow-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            {siteConfig.gallery.badge}
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
            {siteConfig.gallery.title}
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {siteConfig.gallery.subhead}
          </p>
        </div>

        {/* Gallery Grid (3x2 with heavy industrial styling) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.gallery.items.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-xl hover:border-yellow-500/50 transition duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Badge top-left */}
                <div className="absolute top-3 left-3">
                  <span className="rounded bg-yellow-400 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-slate-950 shadow">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Caption Content */}
              <div className="p-5">
                <h3 className="text-base font-black uppercase tracking-tight text-white group-hover:text-yellow-400 transition">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
