import React from 'react'
import { siteConfig } from '../siteConfig'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 pb-24 pt-16 text-neutral-400 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & NAP info */}
          <div className="md:col-span-5">
            <h3 className="text-lg font-extrabold text-white">
              {siteConfig.businessName}
            </h3>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed max-w-sm">
              {siteConfig.tagline}.
            </p>

            <div className="mt-4 space-y-1.5 text-xs text-neutral-300">
              <p>
                <strong className="text-white">{siteConfig.lang === 'ru' ? 'Телефон: ' : 'Phone: '}</strong>
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-emerald-400 font-semibold hover:underline">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <strong className="text-white">{siteConfig.lang === 'ru' ? 'Зона покрытия: ' : 'Coverage: '}</strong>
                <span>{siteConfig.city}, {siteConfig.state}</span>
              </p>
              <p>
                <strong className="text-white">{siteConfig.lang === 'ru' ? 'Базирование: ' : 'Dispatch Base: '}</strong>
                <span>{siteConfig.addressNotes}</span>
              </p>
              <p>
                <strong className="text-white">{siteConfig.lang === 'ru' ? 'График: ' : 'Hours: '}</strong>
                <span>{siteConfig.workingHours}</span>
              </p>
            </div>
          </div>

          {/* Core Services */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {siteConfig.ui.footerCoreServices}
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-emerald-400 transition">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Licensing & Trust Statement */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {siteConfig.ui.footerLicensing}
            </h4>
            <div className="mt-3 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>{siteConfig.licenseBadge}</span>
              </div>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                {siteConfig.ui.footerLiability}
              </p>
              <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-500">
                {siteConfig.rating} ★ • {siteConfig.reviewCount} {siteConfig.ui.googleReviews}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & CRO note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-900 pt-8 text-xs text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. {siteConfig.ui.footerRights}
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Payload CMS &amp; Next.js</span>
            <span>•</span>
            <span className="text-emerald-500">{siteConfig.ui.footerModular}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
