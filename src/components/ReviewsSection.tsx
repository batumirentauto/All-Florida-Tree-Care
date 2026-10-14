import { siteConfig as defaultSiteConfig } from '../siteConfig'
import type { SiteConfig } from '../types/siteConfig'

export const ReviewsSection: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || defaultSiteConfig
  return (
    <section id="reviews" className="py-20 bg-[#080d1a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex text-amber-400 text-lg tracking-widest" aria-label="5 stars">★★★★★</span>
              <span className="text-xs sm:text-sm font-bold text-white bg-slate-900/90 border border-slate-800 px-3 py-1 rounded-lg shadow-sm">
                {siteConfig.rating} {siteConfig.ui.googleReviews}
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white">
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
            className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/90 p-4 shrink-0 transition hover:border-amber-500/80 hover:bg-slate-900 group shadow-lg"
            title="View on Google Maps"
          >
            <div className="text-2xl font-black text-amber-400 font-mono">
              {siteConfig.reviewCount}+
            </div>
            <div className="text-xs text-slate-400">
              <span className="block font-bold text-white group-hover:text-amber-400 transition">{siteConfig.ui.reviewsBadge}</span>
              <span className="flex items-center gap-1 text-amber-400 font-semibold">{siteConfig.ui.reviewsGoogle} ↗</span>
            </div>
          </a>
        </div>

        {/* Reviews Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.reviews.map((review) => (
            <div
              key={review.author}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/75 p-6 shadow-md transition hover:border-amber-500/40 hover:bg-slate-900"
            >
              <div>
                {/* Tag Badge */}
                {review.tag && (
                  <div className="mb-5">
                    <span className="inline-flex items-center text-[11px] font-semibold text-amber-300 bg-amber-950/70 px-3 py-1 rounded-md border border-amber-800/60 shadow-sm">
                      {review.tag}
                    </span>
                  </div>
                )}

                {/* Stars and Source with generous breathing room and clear divider */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-5 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="flex text-amber-400 text-sm tracking-widest" aria-label="5 stars">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/60">
                      5.0
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">
                    {review.source}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm leading-relaxed text-slate-300 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 font-bold text-xs text-slate-300">
                  {review.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    {review.author}
                  </h4>
                  <span className="text-[11px] text-slate-400">
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
