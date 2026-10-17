'use client'

import React from 'react'
import { StarRating } from '../StarRating'
import { siteConfigHolcombEn } from '../../siteConfig.holcomb.en'

export function HolcombHero({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHolcombEn

  return (
    <section id="hero" className="relative overflow-hidden bg-[#07130c] text-white pt-8 pb-16 sm:pt-12 sm:pb-20 border-b border-emerald-500/20">
      {/* Dynamic ambient Oregon pine forest glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 h-[450px] w-[550px] rounded-full bg-emerald-600/15 blur-[120px]" />
        <div className="absolute top-1/2 -left-20 h-[380px] w-[450px] rounded-full bg-green-600/15 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Value Proposition & Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top credibility pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 shadow-xs backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-300 tracking-tight">
                {siteConfig.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-black tracking-tight text-white leading-[1.12]">
              {siteConfig.hero.headline}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {siteConfig.hero.subhead}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-black px-6 py-3.5 text-sm sm:text-base shadow-lg shadow-emerald-700/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.hero.ctaPrimary}</span>
              </a>

              <a
                href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? 'Здравствуйте, Тони! Хочу отправить фото дерева для расчета сметы:' : 'Hello Tony, I would like to text photos for a tree service estimate:')}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold px-5 py-3.5 text-sm sm:text-base border border-slate-700 shadow-xs hover:border-emerald-400 transition-all"
              >
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{siteConfig.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* 3 Core Trust Badges in Bento strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-900/70 hover:bg-slate-900 p-3 rounded-xl border border-slate-800 hover:border-emerald-500/50 shadow-xs transition group"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <StarRating value={siteConfig.ratingValue || 5.0} size="sm" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-300 mt-1">
                    <span className="font-semibold text-white group-hover:text-emerald-300 transition">Google Maps</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">
                      {siteConfig.reviewCount} {siteConfig.lang === 'ru' ? 'отзывов' : 'reviews'}
                    </span>
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-2.5 bg-slate-900/70 p-3 rounded-xl border border-slate-800 shadow-xs">
                <div className="h-7 w-7 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-[11px] font-bold text-slate-200 leading-tight">
                  {siteConfig.lang === 'ru' ? 'Oregon CCB Лицензия и страховка' : 'Oregon CCB & Fully Insured'}
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-900/70 p-3 rounded-xl border border-slate-800 shadow-xs">
                <div className="h-7 w-7 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-[11px] font-bold text-slate-200 leading-tight">
                  {siteConfig.lang === 'ru' ? 'Валка деревьев 30+ метров' : '100+ Ft Timber Falling'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Bento Showcase (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            {/* Top Large Feature: Heavy Timber Logging Rig */}
            <div className="col-span-2 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-emerald-500/30 bg-slate-900 group shadow-xl">
              <img
                src="/images/holcomb/hero-main-logging.jpg"
                alt={siteConfig.hero.heroImageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-300 bg-emerald-950/85 border border-emerald-700/60 px-2 py-0.5 rounded">
                    {siteConfig.lang === 'ru' ? 'Лесозаготовительная бригада' : 'Technical Logging Crew'}
                  </span>
                  <p className="text-xs font-bold text-white mt-1">
                    Holcomb Timber & Tree Services LLC
                  </p>
                </div>
                <span className="font-mono text-xs font-black text-emerald-300 bg-emerald-950/85 px-2 py-1 rounded border border-emerald-700/60">
                  (541) 844-4111
                </span>
              </div>
            </div>

            {/* Bottom Left Card: Technical Canopy Rigging */}
            <div className="relative h-44 sm:h-48 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 group shadow-md hover:border-emerald-500/50 transition-colors">
              <img
                src="/images/holcomb/hero-climber-rigging.jpg"
                alt="Holcomb aerial climber and roping rigging in Douglas Fir"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm block truncate">
                  {siteConfig.lang === 'ru' ? 'Высотная разборка канатами' : 'Aerial High-Lead Rigging'}
                </span>
              </div>
            </div>

            {/* Bottom Right Card: Pristine Clean Lawn After Work */}
            <div className="relative h-44 sm:h-48 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 group shadow-md hover:border-emerald-500/50 transition-colors">
              <img
                src="/images/holcomb/hero-clean-lawn.jpg"
                alt="Pristine lawn condition and property grounds after Holcomb tree service"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm block truncate">
                  {siteConfig.lang === 'ru' ? 'Идеальная чистота газона' : 'Spotless Lawn Protection'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
