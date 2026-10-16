import React from 'react'
import type { Metadata } from 'next'
import { siteConfigReynoldsRu } from '../../../../siteConfig.reynolds.ru.js'
import { ReynoldsHeader } from '../../../../components/reynolds/ReynoldsHeader'
import { ReynoldsHero } from '../../../../components/reynolds/ReynoldsHero'
import { ReynoldsSpecs } from '../../../../components/reynolds/ReynoldsSpecs'
import { ReynoldsServices } from '../../../../components/reynolds/ReynoldsServices'
import { ReynoldsCalculator } from '../../../../components/reynolds/ReynoldsCalculator'
import { ReynoldsReviews } from '../../../../components/reynolds/ReynoldsReviews'
import { ReynoldsServiceAreas } from '../../../../components/reynolds/ReynoldsServiceAreas'
import { ReynoldsFooter } from '../../../../components/reynolds/ReynoldsFooter'
import { ReynoldsMobileBar } from '../../../../components/reynolds/ReynoldsMobileBar'

export const metadata: Metadata = {
  title: `${siteConfigReynoldsRu.businessName} | Аккуратный спил деревьев, автовышка и ландшафт в Сарасоте`,
  description: `${siteConfigReynoldsRu.tagline}. ${siteConfigReynoldsRu.hero.subhead}`,
  keywords: [
    'спил деревьев Сарасота Флорида',
    'Robert Reynolds Landscape Inc',
    'автовышка спил деревьев над крышей Сарасота',
    'прореживание дубов защита от ураганов',
    'погрузчик захват бревен',
    'посадка крупномерных пальм New Holland',
    'спил веток над бассейном Сарасота',
    'подготовка участка к продаже риелторы',
  ],
}

export default function ReynoldsRussianPage() {
  const config = siteConfigReynoldsRu

  return (
    <div className="min-h-screen bg-[#080e1a] text-white selection:bg-sky-500 selection:text-white font-sans antialiased">
      {/* Very Top Row: All Crews Navigation & Language Switcher */}
      <div className="bg-black border-b border-slate-800 text-xs">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2 sm:px-6">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-500 to-emerald-600 text-white hover:from-sky-400 hover:to-emerald-500 font-bold px-3 py-1 rounded shadow transition text-xs"
          >
            <span>←</span>
            <span>Все бригады</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 hidden xs:inline">Язык:</span>
            <a href="/reynolds" className="text-slate-400 hover:text-white transition text-[11px] font-semibold px-1.5 py-0.5">EN</a>
            <span className="font-black text-white bg-sky-600 px-2 py-0.5 rounded text-[11px]">RU</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <ReynoldsHeader config={config} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section with Asymmetric Bento Showcase */}
        <ReynoldsHero config={config} />

        {/* Heavy Rigging & Equipment Specs */}
        <ReynoldsSpecs config={config} />

        {/* 6 Core Services + Realtor & Hurricane Banner */}
        <ReynoldsServices config={config} />

        {/* Interactive Instant Estimator */}
        <ReynoldsCalculator config={config} />

        {/* Verified Google Maps Reviews */}
        <ReynoldsReviews config={config} />

        {/* Service Territory & FAQ Accordion */}
        <ReynoldsServiceAreas config={config} />
      </main>

      {/* Footer */}
      <ReynoldsFooter config={config} />

      {/* Mobile Floating Action Bar */}
      <ReynoldsMobileBar config={config} />
    </div>
  )
}
