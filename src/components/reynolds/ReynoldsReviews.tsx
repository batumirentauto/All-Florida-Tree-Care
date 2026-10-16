'use client'

import React from 'react'
import { StarRating } from '../StarRating'
import { siteConfigReynoldsEn } from '../../siteConfig.reynolds.en'

export function ReynoldsReviews({ config }: { config?: any }) {
  const siteConfig = config || siteConfigReynoldsEn

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#080e1a] border-b border-sky-500/20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header with 4.7 Summary Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-sky-950/80 border border-sky-700/60 px-4 py-1.5 mb-3 shadow-md">
            <span className="text-xs font-black text-white flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-sky-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Google Maps
            </span>
            <span className="text-slate-600">•</span>
            <StarRating value={siteConfig.ratingValue || 4.7} size="sm" />
            <span className="text-slate-600">•</span>
            <span className="text-xs font-bold text-sky-300">
              {siteConfig.reviewCount} {siteConfig.lang === 'ru' ? 'проверенных отзывов' : 'Verified Reviews'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {siteConfig.lang === 'ru' 
              ? 'Что говорят риелторы и домовладельцы Сарасоты о Роберте Рейнольдсе' 
              : 'Verified Reviews from Sarasota Realtors & Estate Homeowners'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {siteConfig.lang === 'ru'
              ? 'Реальные слова ведущих риелторов округа Сарасота, управляющих элитными поместьями и владельцев домов с вековыми дубами.'
              : 'Direct testimonials from leading Sarasota real estate brokers, private estate managers, and residents protecting mature live oaks.'}
          </p>
        </div>

        {/* Reviews Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.reviews.map((rev: any, idx: number) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-[#0f172a] p-6 sm:p-7 shadow-xl hover:border-sky-500/50 hover:shadow-2xl transition-all flex flex-col justify-between"
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
                  <span className="inline-block text-[11px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded-md leading-relaxed">
                    {rev.highlight}
                  </span>
                </div>

                {/* Body Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-xs sm:text-sm">
                    {rev.author}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {rev.location}
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded font-bold">
                  {siteConfig.lang === 'ru' ? 'Проверен в Google' : 'Google Verified'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Profile Link Banner */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-sky-400 font-bold px-6 py-3 text-xs sm:text-sm transition-all shadow-md"
          >
            <StarRating value={siteConfig.ratingValue} size="xs" />
            <span>{siteConfig.ui?.viewReviews || 'Read All 27 Reviews on Google Maps'}</span>
            <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
