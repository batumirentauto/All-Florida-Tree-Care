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
    <section className="relative z-20 mx-auto max-w-7xl px-4 py-12 sm:px-6">
      {/* Section Pre-heading */}
      <div className="mb-8 max-w-2xl">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          {siteConfig.lang === 'ru' ? 'Преимущества All Florida Tree Care' : 'The All Florida Advantage'}
        </span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white tracking-tight">
          {siteConfig.lang === 'ru'
            ? 'Мощность коммерческой спецтехники и ювелирная защита вашего участка'
            : 'Commercial Equipment Power with Zero Lawn & Structure Damage'}
        </h2>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Bento Card 1: Difficult Jobs & Climbers (Span 7 cols) */}
        <div className="md:col-span-7 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition hover:border-amber-500/40">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-lg bg-amber-950/80 border border-amber-800/80 px-3 py-1 text-xs font-bold text-amber-300">
                {siteConfig.lang === 'ru' ? 'Сложный доступ' : 'Challenging Access'}
              </span>
              <span className="text-xs font-mono text-slate-400">01 / Access</span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
              {siteConfig.trustBadges[0]?.title}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {siteConfig.trustBadges[0]?.desc}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            <span className="rounded-md bg-slate-950 px-2.5 py-1 text-xs text-amber-400 font-semibold border border-slate-800">
              ✓ {siteConfig.lang === 'ru' ? 'Высота до 18+ метров' : '60+ Ft Boom Reach'}
            </span>
            <span className="rounded-md bg-slate-950 px-2.5 py-1 text-xs text-cyan-400 font-semibold border border-slate-800">
              ✓ {siteConfig.lang === 'ru' ? 'Узкие проходы и калитки' : 'Backyard Gate Climbers'}
            </span>
            <span className="rounded-md bg-slate-950 px-2.5 py-1 text-xs text-slate-300 font-semibold border border-slate-800">
              ✓ {siteConfig.lang === 'ru' ? 'Сохранение газона' : 'Zero Lawn Ruts'}
            </span>
          </div>
        </div>

        {/* Bento Card 2: Solar Panels & Pool Cage (Span 5 cols) */}
        <div className="md:col-span-5 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition hover:border-cyan-500/40">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-lg bg-cyan-950/80 border border-cyan-800/80 px-3 py-1 text-xs font-bold text-cyan-300">
                {siteConfig.lang === 'ru' ? 'Солнечная энергия и террасы' : 'Solar & Lanai Care'}
              </span>
              <span className="text-xs font-mono text-slate-400">02 / Solar</span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
              {siteConfig.trustBadges[1]?.title}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {siteConfig.trustBadges[1]?.desc}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-bold">
            <span>🛡️ {siteConfig.lang === 'ru' ? 'Такелажный спуск на блоках' : 'Controlled Rigging Pulleys'}</span>
          </div>
        </div>

        {/* Bento Card 3: 1-Hour Quotes & HOA Reports (Span 5 cols) */}
        <div className="md:col-span-5 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition hover:border-amber-500/40">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-lg bg-amber-950/80 border border-amber-800/80 px-3 py-1 text-xs font-bold text-amber-300">
                {siteConfig.lang === 'ru' ? 'Согласования и документы' : 'Permits & HOA'}
              </span>
              <span className="text-xs font-mono text-slate-400">03 / Approval</span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
              {siteConfig.trustBadges[2]?.title}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {siteConfig.trustBadges[2]?.desc}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
            <span>📋 {siteConfig.lang === 'ru' ? 'Заключения арбориста для города и HOA' : 'Official arborist documentation'}</span>
          </div>
        </div>

        {/* Bento Card 4: Complete Haul Away & Spotless Yard (Span 7 cols) */}
        <div className="md:col-span-7 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition hover:border-orange-500/40">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-lg bg-orange-950/80 border border-orange-800/80 px-3 py-1 text-xs font-bold text-orange-300">
                {siteConfig.lang === 'ru' ? 'Чистота под ключ' : 'Turnkey Clean'}
              </span>
              <span className="text-xs font-mono text-slate-400">04 / Clean</span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
              {siteConfig.trustBadges[3]?.title}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {siteConfig.trustBadges[3]?.desc}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
            <span className="text-orange-400 font-bold">🧹 {siteConfig.lang === 'ru' ? 'Участок чище, чем до начала работ' : 'Left cleaner than when we arrived'}</span>
            <a href={`tel:${siteConfig.phoneRaw}`} className="text-white hover:text-amber-400 font-bold underline transition">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
