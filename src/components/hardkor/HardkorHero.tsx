'use client'

import React from 'react'
import { StarRating } from '../StarRating'
import { siteConfigHardkorEn } from '../../siteConfig.hardkor.en'

export function HardkorHero({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHardkorEn

  return (
    <section id="hero" className="relative overflow-hidden bg-[#090d16] text-white pt-8 pb-16 sm:pt-12 sm:pb-20 border-b border-red-500/20">
      {/* Dynamic ambient red & storm blue glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 h-[450px] w-[550px] rounded-full bg-red-600/15 blur-[120px]" />
        <div className="absolute top-1/2 -left-20 h-[380px] w-[450px] rounded-full bg-blue-900/20 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Value Proposition & Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top credibility pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-3.5 py-1.5 shadow-xs backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold text-red-300 tracking-tight">
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
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black px-6 py-3.5 text-sm sm:text-base shadow-lg shadow-red-700/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-5 h-5 text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.hero.ctaCall}</span>
              </a>

              <a
                href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? 'Здравствуйте, Карод! Хочу отправить фото дерева для расчета сметы:' : 'Hello Karode, I would like to text photos for a tree service estimate:')}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold px-5 py-3.5 text-sm sm:text-base border border-slate-700 shadow-xs hover:border-red-400 transition-all"
              >
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{siteConfig.hero.ctaText}</span>
              </a>
            </div>

            {/* 3 Core Trust Badges in Bento strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800">
              <div className="flex items-center gap-3 bg-slate-900/70 p-3 rounded-xl border border-slate-800 shadow-xs">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <StarRating value={4.9} size="xs" />
                    <span className="font-black text-white text-xs">4.9</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-0.5">
                    {siteConfig.lang === 'ru' ? '30 проверенных отзывов' : '30 Verified Reviews'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-900/70 p-3 rounded-xl border border-slate-800 shadow-xs">
                <div className="h-7 w-7 rounded-lg bg-red-950/80 border border-red-800/80 text-red-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-[11px] font-bold text-slate-200 leading-tight">
                  {siteConfig.lang === 'ru' ? 'Без накруток в шторм' : 'No Storm Price Gouging'}
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-900/70 p-3 rounded-xl border border-slate-800 shadow-xs">
                <div className="h-7 w-7 rounded-lg bg-red-950/80 border border-red-800/80 text-red-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-[11px] font-bold text-slate-200 leading-tight">
                  {siteConfig.lang === 'ru' ? 'Вывоз ломовозом Claw-Truck' : 'Claw-Truck Rapid Haul'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Triple Bento Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {/* Bento Main Large Card: Hurricane Milton Fallen Oak on Roof (Spans 2 cols) */}
            <div className="col-span-2 relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl border border-red-500/30 group">
              <img
                src="/images/hardkor/milton-uprooted-oak-roof.jpg"
                alt={siteConfig.hero.heroImageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
              
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-red-600/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-black text-white shadow-sm border border-red-400/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                  {siteConfig.lang === 'ru' ? 'Ураган «Милтон» • Снятие с крыши' : 'Hurricane Milton Roof Extraction'}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                <div className="text-xs sm:text-sm font-black drop-shadow-sm">
                  {siteConfig.lang === 'ru' ? 'Снятие поваленного дуба с жилого дома' : 'Safe Emergency Extraction From Roof Structure'}
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                  {siteConfig.lang === 'ru' ? 'Арборист на кровле: секционный срез без доламывания стропил' : 'Piecemeal chainsaw dismantling preventing structural collapse'}
                </div>
              </div>
            </div>

            {/* Bento Card 2: Precision roof clearance over gutter */}
            <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden shadow-sm border border-slate-800 group">
              <img
                src="/images/hardkor/climber-over-roof-gutter.jpg"
                alt="Arborist cutting limb directly over house roof gutter"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white pointer-events-none">
                <span className="text-[10px] sm:text-[11px] font-bold block leading-tight">
                  {siteConfig.lang === 'ru' ? 'Спил над водостоками' : 'Precision Gutter Clearance'}
                </span>
                <span className="text-[9px] text-red-400">
                  {siteConfig.lang === 'ru' ? '0 повреждений кровли' : 'Zero Roof Damage'}
                </span>
              </div>
            </div>

            {/* Bento Card 3: Zero-Clearance Passage Rounds */}
            <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden shadow-sm border border-slate-800 group">
              <img
                src="/images/hardkor/trunk-rounds-between-houses.jpg"
                alt="Massive trunk cut into rounds between two blue houses"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white pointer-events-none">
                <span className="text-[10px] sm:text-[11px] font-bold block leading-tight">
                  {siteConfig.lang === 'ru' ? 'Спил между двумя домами' : 'Zero-Clearance Passage'}
                </span>
                <span className="text-[9px] text-red-400">
                  {siteConfig.lang === 'ru' ? 'Тесная застройка' : 'Tight Urban Lots'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
