import React from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'
import { StarRating } from '../StarRating'

export const TecosReviews: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn
  const ratingNum = siteConfig.ratingValue || 4.5

  return (
    <section id="reviews" className="py-20 bg-[#090d16]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="flex items-center gap-3">
              <StarRating value={ratingNum} size="md" />
              <span className="text-xs sm:text-sm font-bold text-slate-200 bg-slate-900/90 border border-slate-800 px-3 py-1 rounded-lg shadow-sm">
                {siteConfig.ui.reviewsGoogle}
              </span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {siteConfig.ui.reviewsCategory}
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              {siteConfig.ui.reviewsSub} {siteConfig.city}.
            </p>
          </div>

          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/90 p-4 shrink-0 transition hover:border-yellow-500/60 hover:bg-slate-900 group shadow-lg"
            title="View on Google Maps"
          >
            <div className="text-2xl font-black text-yellow-400 font-mono">
              {siteConfig.reviewCount}
            </div>
            <div className="text-xs text-slate-400">
              <span className="block font-bold text-white group-hover:text-yellow-400 transition">{siteConfig.ui.reviewsBadge}</span>
              <span className="flex items-center gap-1 text-yellow-400 font-semibold">{siteConfig.ui.reviewsGoogle} ↗</span>
            </div>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.reviews.map((review, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0c121e] p-6 shadow-xl transition hover:border-yellow-500/40 hover:bg-[#0f1726] group"
            >
              <div>
                {/* Tag Badge */}
                {review.tag && (
                  <div className="mb-4">
                    <span className="inline-flex items-center text-[11px] font-bold text-yellow-400 bg-yellow-950/60 px-2.5 py-1 rounded border border-yellow-800/60 uppercase tracking-wider">
                      {review.tag}
                    </span>
                  </div>
                )}

                {/* Stars and Source */}
                <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <StarRating value={review.rating} size="xs" />
                    <span className="text-xs font-mono font-bold text-yellow-400">
                      {review.rating}.0
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    {review.source}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-bold text-white">
                  {review.author}
                </span>
                <span className="text-[11px] text-slate-400">
                  {siteConfig.ui.propertyOwner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
