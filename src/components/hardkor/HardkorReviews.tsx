'use client'

import React from 'react'
import { StarRating } from '../StarRating'
import { siteConfigHardkorEn } from '../../siteConfig.hardkor.en'

export function HardkorReviews({ config }: { config?: any }) {
  const siteConfig = config || siteConfigHardkorEn

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#090d16] border-b border-red-500/20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header with 4.9 Summary Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-950/80 border border-red-700/60 px-4 py-1.5 mb-3 shadow-md">
            <StarRating value={4.9} size="xs" />
            <span className="text-xs font-black text-white">
              4.9 {siteConfig.lang === 'ru' ? 'из 5.0 в Google Maps' : 'out of 5.0 on Google Maps'}
            </span>
            <span className="text-red-500">•</span>
            <span className="text-xs font-bold text-red-300">
              {siteConfig.reviewCount} {siteConfig.lang === 'ru' ? 'подтвержденных отзывов' : 'Verified Reviews'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Что говорят жители Сент-Питерсберга о Hard Kor Tree Care' 
              : 'Verified Customer Testimonials & Storm Survival Reviews'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'Реальные слова людей, переживших разрушительные ураганы Helene и Milton 2024 года, а также жителей, доверявших нам вековые дубы.'
              : 'Direct quotes from homeowners in Pinellas County who experienced Hurricanes Helene and Milton, and residents trusting us with century-old trees.'}
          </p>
        </div>

        {/* Reviews Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.reviews.map((rev: any, idx: number) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-[#0f172a] p-6 sm:p-7 shadow-xl hover:border-red-500/50 hover:shadow-2xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with stars & reviewer */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <StarRating value={rev.rating} size="xs" />
                    <span className="text-xs font-bold text-white">5.0</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    {rev.date}
                  </span>
                </div>

                {/* Key Highlight Pill */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-bold text-red-300 bg-red-950/80 border border-red-800/80 px-2.5 py-1 rounded-md leading-relaxed">
                    {rev.highlight}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-white">{rev.author}</div>
                  <div className="text-[11px] text-slate-400">{rev.location}</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-red-400 font-bold bg-red-950/60 px-2 py-0.5 rounded border border-red-900/60">
                  <span>✓</span>
                  <span>{siteConfig.lang === 'ru' ? 'Проверено' : 'Verified'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Profile Link Callout */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 text-xs border border-slate-700 hover:border-red-500/50 transition-all shadow-md"
          >
            <StarRating value={4.9} size="xs" />
            <span>{siteConfig.lang === 'ru' ? 'Смотреть все 30 отзывов в Google Maps' : 'Read All 30 Reviews on Google Maps'}</span>
            <span className="text-red-400">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
