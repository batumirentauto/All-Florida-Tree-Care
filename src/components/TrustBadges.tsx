import { siteConfig as defaultSiteConfig } from '../siteConfig'
import type { SiteConfig } from '../types/siteConfig'

const icons = [
  // Heavy bucket truck / certified climber icon
  (
    <svg key="1" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  // Pool cage / solar panel zero damage shield
  (
    <svg key="2" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  // 60+ FT reach crane / boom
  (
    <svg key="3" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  ),
  // Full cleanup & haul away
  (
    <svg key="4" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
            className="flex items-start gap-4 rounded-xl border border-slate-800/90 bg-slate-900/95 p-4 shadow-xl backdrop-blur-md transition hover:border-amber-500/40 hover:bg-slate-900 hover:shadow-lg hover:shadow-amber-500/5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-950 border border-slate-800">
              {icons[index % icons.length]}
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide">
                {badge.title}
              </h3>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                {badge.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
