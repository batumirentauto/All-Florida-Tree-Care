'use client'

import React from 'react'
import { StarRating } from '../StarRating'
import { getTheme } from './themes'

export function UniversalReviews({ config, themeName }: { config: any; themeName?: string }) {
  const theme = getTheme(themeName || config.theme)

  return (
    <section id="reviews" className={`py-16 sm:py-24 ${theme.bgSection} border-b ${theme.borderSubtle} text-white`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header with Summary Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <a
            href={config.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2.5 rounded-full ${theme.badgeBg} ${theme.badgeBorder} border px-4 py-1.5 mb-3 shadow-md hover:border-slate-500 transition`}
          >
            <span className="text-xs font-black text-white flex items-center gap-1.5">
              <svg className={`w-3.5 h-3.5 ${theme.accentText} shrink-0`} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Google Maps
            </span>
            <span className="text-slate-600">•</span>
            <StarRating value={config.ratingValue || 5.0} size="sm" />
            <span className="text-slate-600">•</span>
            <span className={`text-xs font-bold ${theme.badgeText}`}>
              {config.reviewCount} {config.lang === 'ru' ? 'проверенных отзывов' : 'Verified Reviews'}
            </span>
          </a>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {config.reviewsHeadingTitle || (config.lang === 'ru' 
              ? `Отзывы клиентов на Google Maps о компании ${config.businessName}` 
              : `Verified Google Maps Reviews for ${config.businessName}`)}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {config.reviewsHeadingDesc || (config.lang === 'ru'
              ? `Прямые цитаты реальных домовладельцев и клиентов из ${config.city}, ${config.state}.`
              : `Direct testimonials from verified Google Maps homeowners and property managers in ${config.city}, ${config.state}.`)}
          </p>
        </div>

        {/* Reviews Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {config.reviews.map((rev: any, idx: number) => (
            <div
              key={idx}
              className={`rounded-2xl border ${theme.borderSubtle} ${theme.bgCard} p-6 sm:p-7 shadow-xl ${theme.borderHover} hover:shadow-2xl transition-all flex flex-col justify-between`}
            >
              <div>
                {/* Header with stars & reviewer */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <StarRating value={rev.rating || 5} size="xs" />
                    <span className="text-xs font-bold text-white">{(rev.rating || 5.0).toFixed(1)}</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    {rev.date}
                  </span>
                </div>

                {/* Direct Review Quote */}
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className={`mt-6 pt-4 border-t ${theme.borderSubtle} flex items-center justify-between`}>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{rev.author}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {rev.authorMeta || (config.lang === 'ru' ? 'Подтвержденный клиент' : 'Verified Google Maps User')}
                  </div>
                </div>

                <a
                  href={config.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[10px] font-bold ${theme.accentText} bg-black/40 px-2 py-1 rounded border border-slate-700/60 hover:text-white transition`}
                >
                  Google Maps ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
