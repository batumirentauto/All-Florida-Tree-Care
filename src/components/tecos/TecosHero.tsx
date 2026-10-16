import React from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'
import { StarRating } from '../StarRating'

export const TecosHero: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn
  const ratingNum = siteConfig.ratingValue || 4.5

  return (
    <section className="relative overflow-hidden bg-[#090d16] pb-16 pt-8 sm:pb-20 sm:pt-12 border-b border-yellow-500/10">
      {/* Heavy industrial grid pattern backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Industrial Positioning */}
          <div className="lg:col-span-6">
            {/* Operator & Service Area Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-yellow-500/40 bg-yellow-950/40 px-3.5 py-1.5 text-xs font-bold text-yellow-300 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="uppercase tracking-wider">{siteConfig.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl xl:text-5xl leading-[1.12]">
              {siteConfig.hero.headline}
            </h1>

            {/* Subhead */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
              {siteConfig.hero.subhead}
            </p>

            {/* 4 Technical Equipment Spec Items */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {siteConfig.ui.heroCheckmarks.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-xl border border-slate-800 bg-slate-900/70 p-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-yellow-400 text-slate-950 text-xs font-black">
                    ✓
                  </span>
                  <div>
                    <div className="font-bold text-white text-[12px]">{item.strong}</div>
                    <div className="text-slate-400 text-[11px] mt-0.5 leading-snug">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-7 py-4 text-base font-black text-slate-950 shadow-xl shadow-yellow-500/25 transition hover:brightness-110 active:scale-98"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.hero.ctaCall}</span>
              </a>

              <a
                href="#text-estimate"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-4 text-base font-bold text-slate-200 transition hover:border-yellow-400 hover:text-yellow-300 active:scale-98"
              >
                <svg className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{siteConfig.hero.ctaText}</span>
              </a>
            </div>

            {/* Social proof micro-bar */}
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
              <StarRating value={ratingNum} size="xs" />
              <span className="font-semibold text-slate-300">({siteConfig.reviewCount} {siteConfig.ui.googleReviews})</span>
              <span className="text-slate-600">•</span>
              <span className="text-yellow-400 font-bold">{siteConfig.ui.fastResponse}</span>
              <span className="text-slate-300">1-hour turnaround</span>
            </div>
          </div>

          {/* Right Column: Triple Bento Machinery Showcase */}
          <div className="lg:col-span-6 space-y-3">
            {/* Top Main Showcase: Mobile Crane */}
            <div className="relative rounded-2xl border-2 border-yellow-500/30 bg-slate-950 overflow-hidden shadow-2xl group">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src="/images/tecos/crane-street.jpg"
                  alt="Teco's Total Tree Heavy Mobile Crane in Bradenton"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 rounded bg-yellow-400 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-slate-950 shadow">
                    {siteConfig.lang === 'ru' ? 'Поддержка автокрана' : 'Mobile Crane Rigging'}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200">
                  <span className="font-bold text-white">
                    {siteConfig.lang === 'ru' ? 'Спуск через крышу:' : 'Over-Roof Crane Access:'}
                  </span>{' '}
                  {siteConfig.lang === 'ru'
                    ? 'безопасный перенос срезанных ветвей и стволов над строениями.'
                    : 'lifts multi-ton sections safely over roofs and delicate landscaping.'}
                </div>
              </div>
            </div>

            {/* Bottom Split Showcase: Vermeer Grinder + Commercial Office 6124 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Card A: Vermeer Stump Grinder */}
              <div className="relative rounded-xl border border-slate-800 bg-slate-950 overflow-hidden group">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/images/tecos/vermeer-grinder.jpg"
                    alt="Yellow commercial Vermeer stump grinder on Diamond C trailer"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className="rounded bg-slate-900/90 border border-yellow-500/50 px-2 py-0.5 text-[10px] font-bold text-yellow-400">
                      {siteConfig.lang === 'ru' ? 'Фреза Vermeer 25–35 см' : 'Vermeer 14" Sub-Grade'}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 text-[11px] text-slate-300 font-medium">
                    {siteConfig.lang === 'ru' ? 'Глубокое удаление корней' : 'Deep root pulverization'}
                  </div>
                </div>
              </div>

              {/* Card B: Commercial Oak Trimming Before & After */}
              <div className="relative rounded-xl border border-slate-800 bg-slate-950 overflow-hidden group">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/images/tecos/before-after-oak.jpg"
                    alt="Commercial oak trimming before and after at medical office 6124"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className="rounded bg-slate-900/90 border border-yellow-500/50 px-2 py-0.5 text-[10px] font-bold text-yellow-400">
                      {siteConfig.lang === 'ru' ? 'Кейс клиники 6124' : 'Commercial Clinic Job'}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 text-[11px] text-slate-300 font-medium">
                    {siteConfig.lang === 'ru' ? 'Чистый тротуар и парковка' : 'Parking & sidewalk clearance'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
