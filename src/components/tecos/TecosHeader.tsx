'use client'

import React, { useState } from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'
import { StarRating } from '../StarRating'

export const TecosHeader: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const ratingNum = siteConfig.ratingValue || 4.5

  return (
    <header className="sticky top-0 z-40 w-full border-b border-yellow-500/20 bg-[#090d16]/95 backdrop-blur-md">
      {/* Top micro-bar with industrial trust markers */}
      <div className="border-b border-slate-800/80 bg-black/60 px-4 py-1.5 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-bold text-yellow-400">
              <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              {siteConfig.licenseBadge}
            </span>
            <span className="hidden text-slate-700 sm:inline">•</span>
            <span className="hidden text-slate-300 sm:inline">
              {siteConfig.workingHours}
            </span>
            <span className="hidden text-slate-700 md:inline">•</span>
            <span className="hidden text-slate-400 md:inline font-mono">
              {siteConfig.lang === 'ru' ? 'База: Брейдентон, Флорида' : 'HQ: Bradenton, FL'}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-85 transition"
              title="Google Maps Profile"
            >
              <StarRating value={ratingNum} size="xs" />
              <span className="text-slate-400 text-xs">
                ({siteConfig.reviewCount} {siteConfig.ui.googleReviews})
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 sm:gap-4">
        {/* Brand identity */}
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3 group min-w-0 pr-2">
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950 font-black shadow-lg shadow-yellow-500/20 group-hover:brightness-110 transition">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-yellow-400 transition truncate">
                {siteConfig.shortName}
              </span>
              <span className="rounded bg-yellow-400/10 px-1.5 py-0.5 text-[10px] font-bold text-yellow-400 border border-yellow-500/30 shrink-0 hidden xs:inline">
                CRANE & VERMEER
              </span>
            </div>
            <div className="text-[11px] text-slate-400 font-medium truncate">
              {siteConfig.city}
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-300 md:flex shrink-0">
          <a href="#specs" className="hover:text-yellow-400 transition whitespace-nowrap">
            {siteConfig.lang === 'ru' ? 'Спецтехника' : 'Equipment Specs'}
          </a>
          <a href="#services" className="hover:text-yellow-400 transition whitespace-nowrap">
            {siteConfig.lang === 'ru' ? 'Услуги' : 'Services'}
          </a>
          <a href="#showcase" className="hover:text-yellow-400 transition whitespace-nowrap">
            {siteConfig.lang === 'ru' ? 'Объекты' : 'Job Showcase'}
          </a>
          <a href="#calculator" className="hover:text-yellow-400 transition whitespace-nowrap">
            {siteConfig.lang === 'ru' ? 'Калькулятор' : 'Estimator'}
          </a>
          <a href="#reviews" className="hover:text-yellow-400 transition whitespace-nowrap">
            {siteConfig.lang === 'ru' ? 'Отзывы' : 'Reviews'}
          </a>
        </nav>

        {/* Action Callouts */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? 'Здравствуйте, отправляю фото пня/дерева для расчета стоимости:' : `Hi ${siteConfig.shortName}, here are photos of my tree/stump for an estimate:`)}`}
            className="hidden items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-200 transition hover:border-yellow-400 hover:text-yellow-300 lg:inline-flex whitespace-nowrap"
          >
            <svg className="h-4 w-4 text-yellow-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{siteConfig.ui.textPhotos}</span>
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-950 shadow-md shadow-yellow-500/20 transition hover:brightness-110 active:scale-95 whitespace-nowrap"
          >
            <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{siteConfig.phone}</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-slate-700 bg-slate-900 p-2 text-slate-300 md:hidden shrink-0"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drop-down drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-[#090d16] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-slate-200">
            <a href="#specs" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400">
              {siteConfig.lang === 'ru' ? 'Спецтехника' : 'Equipment Specs'}
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400">
              {siteConfig.lang === 'ru' ? 'Услуги' : 'Services'}
            </a>
            <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400">
              {siteConfig.lang === 'ru' ? 'Объекты' : 'Job Showcase'}
            </a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400">
              {siteConfig.lang === 'ru' ? 'Калькулятор стоимости' : 'Interactive Estimator'}
            </a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400">
              {siteConfig.lang === 'ru' ? 'Отзывы клиентов' : 'Customer Reviews'}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
