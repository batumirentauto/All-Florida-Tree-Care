'use client'

import React, { useState } from 'react'
import { StarRating } from '../StarRating'
import { siteConfigSeyboldEn } from '../../siteConfig.seybold.en'

export function SeyboldHeader({ config }: { config?: any }) {
  const siteConfig = config || siteConfigSeyboldEn
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top micro verification bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 px-4 py-1 text-xs text-slate-600">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-semibold text-slate-800 text-[11px] sm:text-xs">
              {siteConfig.lang === 'ru' ? '24/7 Экстренный выезд' : '24/7 Emergency Storm Dispatch'}
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-500 hidden md:inline text-[11px]">
              {siteConfig.lang === 'ru' ? 'База: Эллентон • Округа Манати и Сарасота' : 'HQ: Ellenton, FL • Serving Manatee & Sarasota'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-700 transition"
              title="Google Maps Rating"
            >
              <StarRating value={5.0} size="xs" />
              <span className="font-bold text-slate-900 text-xs">5.0</span>
              <span className="text-slate-500 text-xs hidden xs:inline">
                ({siteConfig.reviewCount} {siteConfig.lang === 'ru' ? 'отзывов' : 'reviews'})
              </span>
            </a>

            <span className="text-slate-300 hidden xs:inline">|</span>

            <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full hidden sm:inline">
              {siteConfig.lang === 'ru' ? 'Без колеи на газоне' : 'Turf-Safe Equipment'}
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Brand identity with Florida outline emblem */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex flex-col items-center justify-center font-black shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
            <span className="text-[14px] sm:text-[15px] tracking-tight leading-none">SPS</span>
            <span className="text-[8px] font-semibold tracking-wider text-emerald-100 uppercase leading-none mt-0.5">FL</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                Seybold Property Solutions
              </span>
            </div>
            <div className="text-[11px] font-medium text-emerald-700 flex items-center gap-1.5">
              <span>{siteConfig.slogan}</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-700 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right action group */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 text-xs shadow-md shadow-emerald-700/20 transition hover:shadow-lg"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{siteConfig.phone}</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full text-center py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
