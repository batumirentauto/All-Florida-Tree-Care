import { siteConfig as defaultSiteConfig } from '../siteConfig'
import type { SiteConfig } from '../types/siteConfig'

const icons = [
  // Owner on site icon (hard hat / arborist user)
  (
    <svg key="1" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  // 36" Gate Access (dimensions / yard protection)
  (
    <svg key="2" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  // Below-grade grinding (depth / gear / shovel)
  (
    <svg key="3" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  ),
  // Full cleanup (rake / check / sparkling)
  (
    <svg key="4" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
]

export const TrustBadges: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || defaultSiteConfig
  return (
    <section className="relative -mt-6 z-20 mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.trustBadges.map((badge, index) => (
          <div
            key={badge.title}
            className="flex items-start gap-4 rounded-xl border border-neutral-800 bg-neutral-900/90 p-4 shadow-xl backdrop-blur-md transition hover:border-neutral-700 hover:bg-neutral-900"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neutral-800/80 border border-neutral-700/60">
              {icons[index % icons.length]}
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide">
                {badge.title}
              </h3>
              <p className="mt-0.5 text-xs leading-relaxed text-neutral-400">
                {badge.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
