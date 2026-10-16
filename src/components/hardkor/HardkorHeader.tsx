'use client'

import React, { useState } from 'react'
import { StarRating } from '../StarRating'
import { siteConfigHardkorEn } from '../../siteConfig.hardkor.en'

export function HardkorHeader({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHardkorEn
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: siteConfig.lang === 'ru' ? 'Услуги' : 'Services', href: '#services' },
    { label: siteConfig.lang === 'ru' ? 'Спецтехника' : 'Equipment', href: '#equipment' },
    { label: siteConfig.lang === 'ru' ? 'Галерея' : 'Gallery', href: '#gallery' },
    { label: siteConfig.lang === 'ru' ? 'Калькулятор' : 'Estimator', href: '#calculator' },
    { label: siteConfig.lang === 'ru' ? 'Отзывы' : 'Reviews', href: '#reviews' },
    { label: siteConfig.lang === 'ru' ? 'Контакты' : 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-[#090d16]/95 backdrop-blur-md border-b border-red-500/20 shadow-lg text-white transition-all">
      {/* Top micro verification bar */}
      <div className="bg-black/80 border-b border-slate-800/80 px-4 py-1 text-xs text-slate-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="font-bold text-red-400 text-[11px] sm:text-xs tracking-wide uppercase">
              {siteConfig.lang === 'ru' ? 'Экстренный выезд 24/7' : '24/7 Emergency Storm Dispatch'}
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden md:inline text-[11px]">
              {siteConfig.lang === 'ru' ? 'База: Сент-Питерсберг • Округ Пинеллас' : 'HQ: St. Petersburg, FL • Pinellas County'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-red-400 transition"
              title="Google Maps Profile"
            >
              <StarRating value={4.9} size="xs" />
              <span className="font-bold text-white text-xs">4.9</span>
              <span className="text-slate-400 text-xs hidden xs:inline">
                ({siteConfig.reviewCount} {siteConfig.lang === 'ru' ? 'отзывов' : 'reviews'})
              </span>
            </a>

            <span className="text-slate-700 hidden xs:inline">|</span>

            <span className="text-[11px] font-bold text-red-300 bg-red-950/80 border border-red-800/80 px-2 py-0.5 rounded-full hidden sm:inline">
              {siteConfig.lang === 'ru' ? 'Без спекуляций в шторм' : 'No Price Gouging'}
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Brand identity with Rescue Red badge */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white flex flex-col items-center justify-center font-black shadow-md shadow-red-700/30 group-hover:scale-105 transition-transform border border-red-500/40">
            <span className="text-[13px] sm:text-[14px] tracking-tight leading-none">HKT</span>
            <span className="text-[7.5px] font-extrabold tracking-widest text-red-200 uppercase leading-none mt-0.5">ELITE</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-red-400 transition-colors">
                Hard Kor Tree Care
              </span>
            </div>
            <div className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
              <span className="text-red-400">FL, LLC</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">{siteConfig.slogan}</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-red-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right action group */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black px-4 py-2 text-xs shadow-md shadow-red-700/30 transition-all hover:scale-105"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{siteConfig.phone}</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-900 transition"
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
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-red-950/50 hover:text-red-400 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full text-center py-2.5 rounded-xl bg-red-600 text-white font-black text-xs shadow-md"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
