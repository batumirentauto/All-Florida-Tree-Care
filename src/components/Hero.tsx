import { siteConfig as defaultSiteConfig } from '../siteConfig'
import type { SiteConfig } from '../types/siteConfig'
import { ExpressCalculator } from './ExpressCalculator'

export const Hero: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || defaultSiteConfig
  return (
    <section className="relative overflow-hidden bg-[#080d1a] pb-16 pt-8 sm:pb-20 sm:pt-12">
      {/* Subtle ambient lighting gradients */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="h-[550px] w-[800px] rounded-full bg-gradient-to-tr from-amber-600/20 via-sky-600/15 to-transparent blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Commercial Arborist Positioning */}
          <div className="lg:col-span-7">
            {/* County & License Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/60 px-4 py-1.5 text-xs font-bold text-amber-300 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{siteConfig.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl xl:text-5xl leading-[1.12]">
              {siteConfig.hero.headline}
            </h1>

            {/* Subhead */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl">
              {siteConfig.hero.subhead}
            </p>

            {/* 3 Core Capability Callout Badges */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 shadow-md">
                <div className="text-amber-400 font-black text-sm">60+ FT Reach</div>
                <div className="text-slate-300 text-xs mt-0.5">{siteConfig.lang === 'ru' ? 'Собственная автовышка' : 'Heavy Commercial Bucket'}</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 shadow-md">
                <div className="text-cyan-400 font-black text-sm">{siteConfig.lang === 'ru' ? 'Арбористы-альпинисты' : 'Expert Climbers'}</div>
                <div className="text-slate-300 text-xs mt-0.5">{siteConfig.lang === 'ru' ? 'Узкие дворы и бассейны' : 'Zero lawn & gate issues'}</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 shadow-md">
                <div className="text-amber-400 font-black text-sm">{siteConfig.lang === 'ru' ? 'Смета за 1 час' : '1-Hour Quotes'}</div>
                <div className="text-slate-300 text-xs mt-0.5">{siteConfig.lang === 'ru' ? 'Письменный расчет' : 'Fast Written Bids'}</div>
              </div>
            </div>

            {/* Customer Pain-Killer bullet points */}
            <ul className="mt-6 space-y-2.5 text-sm text-slate-200">
              {siteConfig.ui.heroCheckmarks.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-950/80 text-amber-400 border border-amber-600/60 text-xs">✓</span>
                  <span><strong className="text-white">{item.strong}</strong> — <span className="text-slate-300">{item.text}</span></span>
                </li>
              ))}
            </ul>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-7 py-4 text-base font-black text-slate-950 shadow-xl shadow-amber-500/25 transition hover:brightness-110 active:scale-98"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.hero.ctaCall}</span>
              </a>

              <a
                href="#text-estimate"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-4 text-base font-bold text-slate-200 transition hover:border-amber-400 hover:text-amber-300 active:scale-98"
              >
                <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{siteConfig.hero.ctaText}</span>
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-400 flex items-center gap-2">
              <span className="text-amber-400 font-bold">{siteConfig.ui.fastResponse}</span>
              <span>{siteConfig.ui.fastResponseDesc}</span>
            </p>
          </div>

          {/* Right Column: Visual Equipment Authority Card & Fast Estimator Link */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border-2 border-amber-500/30 bg-slate-900/80 p-3 shadow-2xl backdrop-blur-xl">
              {/* Photo Showcase with Boom Truck */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-950">
                <img
                  src="/images/all-florida-truck-bucket.jpg"
                  alt="All Florida Tree Care 60+ Ft Commercial Bucket Truck"
                  className="h-full w-full object-cover"
                />
                
                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="rounded-lg bg-slate-950/90 backdrop-blur-md px-3 py-1.5 text-xs font-black text-amber-400 border border-slate-700 shadow-lg inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                    60+ FT Commercial Reach
                  </span>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="rounded-xl bg-slate-950/90 backdrop-blur-md p-3 border border-slate-700/80 shadow-lg text-xs">
                    <div className="flex items-center justify-between text-white font-bold">
                      <span>{siteConfig.businessName}</span>
                      <span className="text-amber-400 flex items-center gap-2">
                        <span className="tracking-widest text-xs">★★★★★</span>
                        <span className="font-mono text-xs text-amber-300 font-bold bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-900/60">{siteConfig.rating}</span>
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">
                      {siteConfig.lang === 'ru'
                        ? 'Бригада Джастина и Алекса Кэрриер • Палметто, Брейдентон, Сарасота'
                        : 'Justin & Alex Carrier Fleet • Palmetto, Bradenton, Sarasota'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Estimator Callout Bar underneath photo */}
              <div className="p-4 flex items-center justify-between gap-3 border-t border-slate-800/80 mt-2">
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-amber-400">
                    {siteConfig.lang === 'ru' ? 'Калькулятор стоимости' : 'Need An Instant Estimate?'}
                  </div>
                  <div className="text-xs text-slate-300">
                    {siteConfig.lang === 'ru' ? 'Рассчитайте спил или дробление пней' : 'Calculate tree removal or stump grinding'}
                  </div>
                </div>

                <a
                  href="#calculator"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-3.5 py-2 text-xs font-black text-slate-950 shadow hover:brightness-110 shrink-0"
                >
                  <span>{siteConfig.lang === 'ru' ? 'Калькулятор' : 'Try Estimator'}</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
