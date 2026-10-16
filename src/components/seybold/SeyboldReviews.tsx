'use client'

import React from 'react'
import { StarRating } from '../StarRating'
import { siteConfigSeyboldEn } from '../../siteConfig.seybold.en'

export function SeyboldReviews({ config }: { config?: any }) {
  const siteConfig = config || siteConfigSeyboldEn

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header with 5.0 Summary Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 mb-3">
            <StarRating value={5.0} size="xs" />
            <span className="text-xs font-black text-slate-900">
              5.0 {siteConfig.lang === 'ru' ? 'из 5.0 в Google Maps' : 'out of 5.0 on Google Maps'}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold text-emerald-700">
              {siteConfig.lang === 'ru' ? '100% высших оценок' : '100% 5-Star Reviews'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Что говорят домовладельцы и садоводы о нашей работе' 
              : 'Verified Customer Testimonials & Reviews'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'Честные отзывы реальных клиентов: от дипломированных мастеров-садоводов до людей, переживших ночные штормы.'
              : 'Direct quotes from actual clients across Manatee and Sarasota counties—from Master Gardeners to emergency hurricane clearing.'}
          </p>
        </div>

        {/* Reviews Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.reviews.map((rev: any, idx: number) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with stars & reviewer */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <StarRating value={rev.rating} size="xs" />
                    <span className="text-xs font-bold text-slate-800">5.0</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    {rev.date}
                  </span>
                </div>

                {/* Key Highlight Pill */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-md leading-relaxed">
                    {rev.highlight}
                  </span>
                </div>

                {/* Full Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {rev.author}
                  </div>
                  <div className="text-[11px] font-medium text-emerald-700">
                    {rev.role}
                  </div>
                </div>
                <div className="h-7 w-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Official Google Profile */}
        <div className="mt-10 text-center">
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-2.5 text-xs transition border border-slate-200"
          >
            <span>{siteConfig.lang === 'ru' ? 'Читать все 23 отзыва в профиле Google Maps' : 'View all 23 reviews on Google Maps Profile'}</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
