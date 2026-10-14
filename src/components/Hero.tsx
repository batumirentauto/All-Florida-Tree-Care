import { siteConfig as defaultSiteConfig } from '../siteConfig'
import type { SiteConfig } from '../types/siteConfig'
import { ExpressCalculator } from './ExpressCalculator'

export const Hero: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || defaultSiteConfig
  return (
    <section className="relative overflow-hidden bg-[#080d1a] pb-16 pt-10 sm:pb-24 sm:pt-16">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="h-[450px] w-[650px] rounded-full bg-gradient-to-tr from-amber-600/15 via-sky-600/15 to-transparent blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Value Proposition & High CRO actions */}
          <div className="lg:col-span-6">
            {/* County / Experience Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/50 px-3.5 py-1.5 text-xs font-semibold text-amber-300">
              <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{siteConfig.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-4xl xl:text-5xl leading-[1.18]">
              {siteConfig.hero.headline}
            </h1>

            {/* Subhead - strictly factual contractor language */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              {siteConfig.hero.subhead}
            </p>

            {/* Customer Pain-Killer bullet points */}
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
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
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-6 py-4 text-base font-black text-slate-950 shadow-xl shadow-amber-500/25 transition hover:brightness-110 active:scale-98"
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

          {/* Right Column: Interactive Express Calculator instead of redundant text table */}
          <div className="lg:col-span-6">
            <ExpressCalculator config={siteConfig} />
          </div>
        </div>
      </div>
    </section>
  )
}
