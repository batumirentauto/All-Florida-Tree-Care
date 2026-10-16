import React from 'react'
import { siteConfig as defaultSiteConfig } from '../siteConfig'
import type { SiteConfig } from '../types/siteConfig'

export const Header: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || defaultSiteConfig

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#080d1a]/95 backdrop-blur-md">
      {/* Top micro-bar for trust & license */}
      <div className="border-b border-slate-800/70 bg-slate-950/60 px-4 py-1.5 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-amber-400">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              {siteConfig.licenseBadge}
            </span>
            <span className="hidden text-slate-600 sm:inline">•</span>
            <span className="hidden text-slate-300 sm:inline">
              {siteConfig.workingHours}
            </span>
            <span className="hidden text-slate-600 md:inline">•</span>
            <span className="hidden text-slate-400 md:inline">
              {siteConfig.experienceYears} {siteConfig.ui.inBusiness}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:opacity-85 transition"
              title="Google Maps Profile"
            >
              <div className="flex text-amber-400 tracking-wider text-xs" aria-label="5 stars">
                {'★★★★★'}
              </div>
              <span className="font-bold text-white bg-slate-900/80 px-1.5 py-0.5 rounded text-xs border border-slate-800">
                {siteConfig.rating}
              </span>
              <span className="text-slate-400 hidden xs:inline text-xs">
                ({siteConfig.reviewCount} {siteConfig.ui.googleReviews})
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <a href={siteConfig.lang === 'ru' ? '/ru' : '/'} className="group block focus:outline-none">
            <span className="block text-sm font-extrabold tracking-tight text-white group-hover:text-amber-400 sm:text-xl leading-tight transition-colors">
              <span className="sm:hidden">{siteConfig.shortName} <span className="font-normal text-xs text-amber-300/80 block">{siteConfig.lang === 'ru' ? 'Спил деревьев и пней' : 'Tree & Stump Care'}</span></span>
              <span className="hidden sm:inline">{siteConfig.businessName}</span>
            </span>
            <span className="hidden text-xs text-slate-400 md:block mt-0.5">
              {siteConfig.tagline}
            </span>
          </a>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-slate-300">
          <a href="#services" className="hover:text-amber-400 transition-colors">
            {siteConfig.lang === 'ru' ? 'Услуги' : 'Services'}
          </a>
          <a href="#equipment" className="hover:text-amber-400 transition-colors">
            {siteConfig.lang === 'ru' ? 'Спецтехника' : 'Fleet & Reach'}
          </a>
          <a href="#calculator" className="hover:text-amber-400 transition-colors">
            {siteConfig.lang === 'ru' ? 'Калькулятор' : 'Estimator'}
          </a>
          <a href="#reviews" className="hover:text-amber-400 transition-colors">
            {siteConfig.lang === 'ru' ? 'Отзывы' : 'Reviews'}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick text quote button (desktop/tablet) */}
          <a
            href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? 'Здравствуйте, отправляю фото пня/дерева для расчета стоимости:' : 'Hi All Florida Tree Care, here are photos of my stump/tree for an estimate:')}`}
            className="hidden items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2 text-sm font-semibold text-slate-200 transition hover:border-amber-400 hover:text-amber-300 lg:inline-flex"
          >
            <svg
              className="h-4 w-4 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {siteConfig.ui.textPhotos}
          </a>

          {/* Primary phone call button */}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-3.5 py-2.5 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-black text-slate-950 shadow-md shadow-amber-500/25 transition hover:brightness-110 active:scale-95 shrink-0 whitespace-nowrap"
          >
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="sm:hidden">{siteConfig.ui.callBrad}</span>
            <span className="hidden sm:inline font-mono tracking-tight">{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
