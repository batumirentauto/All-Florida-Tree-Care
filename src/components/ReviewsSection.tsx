import React from 'react'
import { siteConfig } from '../siteConfig'

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-neutral-800 pb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex text-amber-400 text-lg">★★★★★</span>
              <span className="text-sm font-bold text-white">
                {siteConfig.rating} {siteConfig.ui.googleReviews}
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white">
              {siteConfig.ui.reviewsCategory}
            </h2>
            <p className="mt-2 text-sm text-neutral-300">
              {siteConfig.ui.reviewsSub} {siteConfig.city}.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/90 p-4 shrink-0">
            <div className="text-2xl font-black text-amber-400 font-mono">
              {siteConfig.reviewCount}+
            </div>
            <div className="text-xs text-neutral-400">
              <span className="block font-bold text-white">{siteConfig.ui.reviewsBadge}</span>
              <span>{siteConfig.ui.reviewsGoogle}</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.reviews.map((review) => (
            <div
              key={review.author}
              className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-md transition hover:border-neutral-700 hover:bg-neutral-900"
            >
              <div>
                {/* Stars and Source */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/60">
                    {review.source}
                  </span>
                </div>

                {/* Review Text */}
                <p className="mt-4 text-sm leading-relaxed text-neutral-300 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 font-bold text-xs text-neutral-300">
                  {review.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    {review.author}
                  </h4>
                  <span className="text-[11px] text-neutral-400">
                    {siteConfig.ui.propertyOwner}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
