import React from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'
import { StarRating } from '../StarRating'

export const TecosFooter: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn
  const ratingNum = siteConfig.ratingValue || 4.5

  return (
    <footer className="border-t border-yellow-500/20 bg-[#060910] pb-24 pt-16 text-slate-400 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & NAP info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 font-black shadow-md shadow-yellow-500/20">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-black uppercase tracking-tight text-white">
                  {siteConfig.businessName}
                </span>
                <span className="block text-xs text-yellow-400 font-mono">
                  {siteConfig.legalName}
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-sm">
              {siteConfig.tagline}. {siteConfig.addressNotes}
            </p>

            <div className="mt-5 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold">📍 Base:</span>
                <span>{siteConfig.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold">⏱️ Hours:</span>
                <span>{siteConfig.workingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold">📞 Direct:</span>
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-white hover:text-yellow-400 font-bold transition">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              {siteConfig.ui.footerCoreServices}
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              {siteConfig.services.map((svc) => (
                <li key={svc.id}>
                  <a href="#services" className="hover:text-yellow-400 transition">
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Licensing & Coverage */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              {siteConfig.ui.footerLicensing}
            </h4>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-yellow-400">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span>{siteConfig.licenseBadge}</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                {siteConfig.ui.footerLiability}
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px]">
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-400 hover:text-yellow-400 transition"
                >
                  <div className="flex items-center gap-1.5">
                    <StarRating value={ratingNum} size="xs" />
                    <span>• {siteConfig.reviewCount} {siteConfig.ui.googleReviews}</span>
                  </div>
                  <span className="text-[10px] text-yellow-400 font-semibold underline">Google Maps →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.legalName}. {siteConfig.ui.footerRights}
          </div>
          <div className="font-mono text-slate-600">
            {siteConfig.ui.footerModular}
          </div>
        </div>
      </div>
    </footer>
  )
}
