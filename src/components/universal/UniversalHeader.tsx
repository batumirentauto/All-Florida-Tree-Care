'use client'

import React, { useState } from 'react'
import { StarRating } from '../StarRating'
import { getTheme } from './themes'

export function UniversalHeader({ config, themeName }: { config: any; themeName?: string }) {
  const theme = getTheme(themeName || config.theme)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: config.lang === 'ru' ? 'Услуги' : 'Services', href: '#services' },
    { label: config.lang === 'ru' ? 'Спецтехника' : 'Equipment', href: '#equipment' },
    { label: config.lang === 'ru' ? 'Калькулятор' : 'Estimator', href: '#calculator' },
    { label: config.lang === 'ru' ? 'Отзывы' : 'Reviews', href: '#reviews' },
    { label: config.lang === 'ru' ? 'Контакты' : 'Contact', href: '#contact' },
  ]

  return (
    <header className={`sticky top-0 z-40 ${theme.bgBody}/95 backdrop-blur-md ${theme.borderSubtle} border-b shadow-lg text-white transition-all`}>
      {/* Top micro verification bar */}
      <div className="bg-black/80 border-b border-slate-800/80 text-xs text-slate-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme.name === 'sky' ? 'bg-sky-400' : theme.name === 'amber' ? 'bg-amber-400' : theme.name === 'teal' ? 'bg-teal-400' : 'bg-emerald-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${theme.name === 'sky' ? 'bg-sky-500' : theme.name === 'amber' ? 'bg-amber-500' : theme.name === 'teal' ? 'bg-teal-500' : 'bg-emerald-500'}`}></span>
            </span>
            <span className={`font-bold ${theme.accentText} text-[11px] sm:text-xs tracking-wide uppercase`}>
              {config.lang === 'ru' ? 'Выезд на штормовые завалы' : 'Emergency Storm Dispatch'}
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden md:inline text-[11px]">
              {config.addressNotes || `${config.city}, ${config.state}`}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={config.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 ${theme.accentTextHover} transition shrink-0`}
              title="Google Maps Profile"
            >
              <span className="font-semibold text-white text-xs flex items-center gap-1">
                <svg className={`w-3.5 h-3.5 ${theme.accentText} shrink-0`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Google Maps
              </span>
              <StarRating value={config.ratingValue || 5.0} size="xs" />
              <span className="text-slate-400 text-xs hidden xs:inline">
                ({config.reviewCount} {config.lang === 'ru' ? 'отзывов' : 'reviews'})
              </span>
            </a>

            <span className="text-slate-700 hidden xs:inline">|</span>

            <span className={`text-[11px] font-bold ${theme.badgeText} ${theme.badgeBg} ${theme.badgeBorder} border px-2 py-0.5 rounded-full hidden sm:inline shrink-0`}>
              {config.shortName || config.businessName}
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Brand identity */}
        <a href="#hero" className="flex items-center gap-3 group shrink-0">
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${theme.badgeBg} ${theme.badgeBorder} border ${theme.accentText} shadow-md`}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <div>
            <div className={`font-black text-lg sm:text-xl tracking-tight text-white ${theme.accentTextHover} transition-colors flex items-center gap-1.5`}>
              <span>{config.businessName}</span>
            </div>
            <p className="text-[11px] text-slate-300 font-medium hidden sm:block">
              {config.tagline}
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold text-slate-300 ${theme.accentTextHover} transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action button & Phone */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${config.phoneRaw}`}
            className={`inline-flex items-center gap-2 rounded-xl ${theme.btnPrimary} ${theme.btnPrimaryHover} text-white font-black px-4 py-2.5 text-sm shadow-md ${theme.btnShadow} transition-all hover:scale-[1.02] active:scale-[0.98]`}
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{config.phone}</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-t ${theme.borderSubtle} ${theme.bgCardAlt} px-4 py-4 space-y-3`}>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800">
            <a
              href={`tel:${config.phoneRaw}`}
              className={`flex items-center justify-center gap-2 w-full rounded-xl ${theme.btnPrimary} text-white font-bold py-3 text-sm shadow`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{config.lang === 'ru' ? 'Позвонить' : 'Call'} {config.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
