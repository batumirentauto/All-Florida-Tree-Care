'use client'

import React from 'react'
import { StarRating } from '../StarRating'
import { siteConfigSeyboldEn } from '../../siteConfig.seybold.en'

export function SeyboldHero({ config }: { config?: any }) {
  const siteConfig = config || siteConfigSeyboldEn

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-slate-50/40 to-white pt-8 pb-16 sm:pt-12 sm:pb-20 border-b border-slate-200/60">
      {/* Subtle organic light gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 h-[420px] w-[500px] rounded-full bg-emerald-200/30 blur-[110px]" />
        <div className="absolute top-1/2 -left-20 h-[360px] w-[450px] rounded-full bg-teal-100/40 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top credibility pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/80 bg-white/90 px-3.5 py-1.5 shadow-xs backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600" />
              <span className="text-xs font-bold text-emerald-900 tracking-tight">
                {siteConfig.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-black tracking-tight text-slate-900 leading-[1.12]">
              {siteConfig.hero.headline}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {siteConfig.hero.subhead}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black px-6 py-3.5 text-sm sm:text-base shadow-lg shadow-emerald-700/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-5 h-5 text-emerald-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.hero.ctaCall}</span>
              </a>

              <a
                href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? 'Здравствуйте, Райан! Хочу отправить фото для расчета стоимости работ по деревьям/участку:' : 'Hello Ryan, I would like to send photos for a tree service estimate:')}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold px-5 py-3.5 text-sm sm:text-base border border-slate-300 shadow-xs hover:border-emerald-500 transition-all"
              >
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{siteConfig.hero.ctaText}</span>
              </a>
            </div>

            {/* 3 Core Trust Badges in Bento strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200">
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <StarRating value={5.0} size="xs" />
                    <span className="font-black text-slate-900 text-xs">5.0</span>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-0.5">
                    {siteConfig.lang === 'ru' ? '100% 5-звездные отзывы' : '100% 5-Star Reviews'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="h-7 w-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-[11px] font-bold text-slate-800 leading-tight">
                  {siteConfig.lang === 'ru' ? 'Гусеницы без колеи на газоне' : 'Turf-Safe Rubber Tracks'}
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="h-7 w-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-[11px] font-bold text-slate-800 leading-tight">
                  {siteConfig.lang === 'ru' ? 'Выезд за 2 часа при шторме' : 'Rapid Storm Clearing'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Triple Bento Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {/* Bento Main Large Card: Tracked Vermeer CTX100 on grass (Spans 2 cols) */}
            <div className="col-span-2 relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
              <img
                src="/images/seybold/vermeer-grapple-lawn.jpg"
                alt={siteConfig.hero.heroImageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-emerald-900 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Vermeer CTX100 • {siteConfig.lang === 'ru' ? 'Бережет газон' : 'Zero Lawn Ruts'}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-xs sm:text-sm font-black drop-shadow-sm">
                  {siteConfig.lang === 'ru' ? 'Вывоз бревен и корней через ухоженный газон' : 'Hauling Heavy Debris Without Turf Tear'}
                </div>
                <div className="text-[11px] text-slate-200 mt-0.5 line-clamp-1">
                  {siteConfig.lang === 'ru' ? 'Широкие резиновые гусеницы с низким удельным давлением' : 'Wide rubber tracks distribute weight evenly'}
                </div>
              </div>
            </div>

            {/* Bento Card 2: Spider Lift / Driveway Setup */}
            <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden shadow-sm border border-slate-200 group">
              <img
                src="/images/seybold/spider-lift-tall-pine.jpg"
                alt="High aerial boom lift setup on driveway"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <span className="text-[10px] sm:text-[11px] font-bold block leading-tight">
                  {siteConfig.lang === 'ru' ? 'Высотные вышки 60+ футов' : '60+ Ft Aerial Lifts'}
                </span>
                <span className="text-[9px] text-slate-300">
                  {siteConfig.lang === 'ru' ? 'Опоры на дорожке' : 'Driveway Protected'}
                </span>
              </div>
            </div>

            {/* Bento Card 3: Coastal Palm Climber */}
            <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden shadow-sm border border-slate-200 group">
              <img
                src="/images/seybold/coastal-palm-climber.jpg"
                alt="Arborist climbing coconut palm near waterfront"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <span className="text-[10px] sm:text-[11px] font-bold block leading-tight">
                  {siteConfig.lang === 'ru' ? 'Арбо-альпинизм у воды' : 'Coastal Arborist Rigging'}
                </span>
                <span className="text-[9px] text-slate-300">
                  {siteConfig.lang === 'ru' ? 'Пальмы и набережные' : 'Waterfront Palms'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
