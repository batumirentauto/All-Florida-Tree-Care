'use client'

import React, { useState } from 'react'
import { StarRating } from '../StarRating'
import { siteConfigReynoldsEn } from '../../siteConfig.reynolds.en'

export function ReynoldsHeader({ config }: { config?: any }) {
  const siteConfig = config || siteConfigReynoldsEn
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: siteConfig.lang === 'ru' ? 'Услуги' : 'Services', href: '#services' },
    { label: siteConfig.lang === 'ru' ? 'Спецтехника' : 'Equipment', href: '#equipment' },
    { label: siteConfig.lang === 'ru' ? 'Калькулятор' : 'Estimator', href: '#calculator' },
    { label: siteConfig.lang === 'ru' ? 'Отзывы' : 'Reviews', href: '#reviews' },
    { label: siteConfig.lang === 'ru' ? 'Контакты' : 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-[#080e1a]/95 backdrop-blur-md border-b border-sky-500/20 shadow-lg text-white transition-all">
      {/* Top micro verification bar */}
      <div className="bg-black/80 border-b border-slate-800/80 text-xs text-slate-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-1.5 sm:px-6 sm:gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-emerald-400 text-[11px] sm:text-xs tracking-wide uppercase truncate">
              {siteConfig.lang === 'ru' ? 'Выезд на штормы и ураганы 24/7' : '24/7 Storm & Emergency Dispatch'}
            </span>
            <span className="text-slate-700 hidden sm:inline shrink-0">•</span>
            <span className="text-slate-400 hidden md:inline text-[11px] truncate">
              {siteConfig.addressNotes}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-sky-300 transition shrink-0"
              title="Google Maps Profile"
            >
              <span className="font-semibold text-white text-xs flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-sky-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Google Maps
              </span>
              <StarRating value={siteConfig.ratingValue || 4.7} size="xs" />
              <span className="text-slate-400 text-xs hidden xs:inline">
                ({siteConfig.reviewCount} {siteConfig.lang === 'ru' ? 'отзывов' : 'reviews'})
              </span>
            </a>

            <span className="text-slate-700 hidden xs:inline">|</span>

            <span className="text-[11px] font-bold text-sky-300 bg-sky-950/80 border border-sky-800/80 px-2 py-0.5 rounded-full hidden sm:inline shrink-0">
              {siteConfig.lang === 'ru' ? 'Выбор риелторов Сарасоты' : 'Top Realtor Recommended'}
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 sm:gap-4">
        {/* Brand identity */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group min-w-0 pr-2">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-600 text-white flex flex-col items-center justify-center font-black shadow-md shadow-sky-700/30 group-hover:scale-105 transition-transform border border-sky-400/40 shrink-0">
            <span className="text-[13px] sm:text-[14px] tracking-tight leading-none">RRL</span>
            <span className="text-[7.5px] font-extrabold tracking-widest text-emerald-100 uppercase leading-none mt-0.5">ELITE</span>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-sky-400 transition-colors truncate">
                Robert Reynolds
              </span>
            </div>
            <div className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5 truncate">
              <span className="text-emerald-400 font-bold shrink-0">Landscape & Tree</span>
              <span className="text-slate-600 shrink-0 hidden xs:inline">•</span>
              <span className="text-slate-300 truncate hidden xs:inline">
                {siteConfig.lang === 'ru' ? 'Сарасота, FL • с 2004 г.' : 'Sarasota, FL • Est. 2004'}
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-300 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-sky-400 transition-colors py-1 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right action group */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-600 hover:from-sky-400 hover:to-emerald-500 text-white font-black px-4 py-2 text-xs sm:text-sm shadow-md shadow-sky-600/30 transition-all hover:scale-105 whitespace-nowrap"
          >
            <svg className="w-4 h-4 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{siteConfig.ui?.callRob || siteConfig.phone}</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1424] border-b border-sky-500/30 px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-900/90 text-slate-200 hover:bg-sky-950/60 hover:text-sky-300 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-600 text-white font-bold py-2.5 text-xs shadow-md"
            >
              <span>{siteConfig.ui?.callRob || siteConfig.phone}</span>
            </a>
            <a
              href={`tel:9419601147`}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-700 font-bold py-2 text-xs"
            >
              <span>{siteConfig.ui?.officeLine || 'Office: (941) 960-1147'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
