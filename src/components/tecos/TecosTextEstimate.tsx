import React from 'react'
import { siteConfigTecosEn } from '../../siteConfig.tecos.en'
import type { SiteConfig } from '../../types/siteConfig'

export const TecosTextEstimate: React.FC<{ config?: SiteConfig }> = ({ config }) => {
  const siteConfig = config || siteConfigTecosEn

  return (
    <section id="text-estimate" className="py-20 bg-[#070b13] border-t border-yellow-500/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border-2 border-yellow-500/30 bg-[#0d121f] p-8 sm:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-yellow-400 border border-yellow-500/30">
              ⚡ {siteConfig.ui.fastestEstimate}
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {siteConfig.howEstimatesWork.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              {siteConfig.ui.estimateSub}
            </p>
          </div>

          {/* 3 Step Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-slate-950 font-black text-sm">
                    1
                  </span>
                  <span className="text-xs font-mono uppercase text-slate-500">PHOTO</span>
                </div>
                <h3 className="mt-4 text-base font-black text-white uppercase tracking-tight">
                  {siteConfig.ui.step1Title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {siteConfig.howEstimatesWork.step1}
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-slate-900/90 p-2.5 text-[11px] text-slate-400 border border-slate-800">
                {siteConfig.ui.step1Tip}
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-slate-950 font-black text-sm">
                    2
                  </span>
                  <span className="text-xs font-mono uppercase text-slate-500">SPECS</span>
                </div>
                <h3 className="mt-4 text-base font-black text-white uppercase tracking-tight">
                  {siteConfig.ui.step2Title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {siteConfig.howEstimatesWork.step2}
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-slate-900/90 p-2.5 text-[11px] text-slate-400 border border-slate-800">
                {siteConfig.ui.step2Tip}
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-yellow-500/40 bg-yellow-950/20 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-slate-950 font-black text-sm">
                    3
                  </span>
                  <span className="text-xs font-mono uppercase text-yellow-400 font-bold">1-HOUR QUOTE</span>
                </div>
                <h3 className="mt-4 text-base font-black text-white uppercase tracking-tight">
                  {siteConfig.ui.step3Title}
                </h3>
                <p className="mt-2 text-xs text-slate-200 leading-relaxed">
                  {siteConfig.howEstimatesWork.step3}
                </p>
              </div>
              <div className="mt-4 rounded-lg bg-yellow-950/60 p-2.5 text-[11px] text-yellow-300 border border-yellow-800/60">
                {siteConfig.ui.step3Tip}
              </div>
            </div>
          </div>

          {/* Action CTA Box */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <a
              href={`sms:${siteConfig.phoneRaw}?&body=${encodeURIComponent(siteConfig.lang === 'ru' ? 'Здравствуйте, отправляю фото пня/дерева для расчета стоимости:' : `Hi ${siteConfig.shortName}, here are photos of my tree/stump for an estimate:`)}`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-8 py-4 text-base font-black uppercase tracking-wider text-slate-950 shadow-xl shadow-yellow-500/25 transition hover:brightness-110 active:scale-98"
            >
              <svg className="h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{siteConfig.hero.ctaText}</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-200 hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              <svg className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{siteConfig.ui.callDirectly} {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
