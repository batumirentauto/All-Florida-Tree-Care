import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMyersEn } from '../../../siteConfig.myers.en.js'
import { MyersHeader } from '../../../components/myers/MyersHeader'
import { MyersHero } from '../../../components/myers/MyersHero'
import { MyersSpecs } from '../../../components/myers/MyersSpecs'
import { MyersServices } from '../../../components/myers/MyersServices'
import { MyersCalculator } from '../../../components/myers/MyersCalculator'
import { MyersReviews } from '../../../components/myers/MyersReviews'
import { MyersServiceAreas } from '../../../components/myers/MyersServiceAreas'
import { MyersFooter } from '../../../components/myers/MyersFooter'
import { MyersMobileBar } from '../../../components/myers/MyersMobileBar'

export const metadata: Metadata = {
  title: `${siteConfigMyersEn.businessName} | Coastal Tree Surgery, Dying Cedar Removals & Commercial Clearance Coos Bay OR`,
  description: `${siteConfigMyersEn.tagline}. ${siteConfigMyersEn.hero.subhead}`,
  keywords: [
    'Patrick Myers Tree Service LLC',
    'tree removal Coos Bay OR',
    'North Bend tree service',
    'dying cedar tree removal Oregon',
    'aerial bucket truck Coos County',
    'commercial apartment tree clearing',
    'brush chipping Coos Bay',
    'stump grinding Coos Bay Oregon',
  ],
}

export default function MyersEnglishPage() {
  const config = siteConfigMyersEn

  return (
    <div className="min-h-screen bg-[#071120] text-white selection:bg-sky-500 selection:text-white font-sans antialiased">
      {/* Very Top Row: All Crews Navigation & Language Switcher */}
      <div className="bg-black border-b border-slate-800 text-xs">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2 sm:px-6">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-400 hover:to-blue-500 font-bold px-3 py-1 rounded shadow transition text-xs"
          >
            <span>←</span>
            <span>All Crews</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 hidden xs:inline">Language:</span>
            <span className="font-black text-white bg-sky-600 px-2 py-0.5 rounded text-[11px]">EN</span>
            <a href="/myers/ru" className="text-slate-400 hover:text-white transition text-[11px] font-semibold px-1.5 py-0.5">RU</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <MyersHeader config={config} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section with Asymmetric Bento Showcase */}
        <MyersHero config={config} />

        {/* Heavy Rigging & Equipment Specs */}
        <MyersSpecs config={config} />

        {/* 6 Core Services */}
        <MyersServices config={config} />

        {/* Interactive Instant Estimator */}
        <MyersCalculator config={config} />

        {/* Verified Google Maps Reviews */}
        <MyersReviews config={config} />

        {/* Service Territory & FAQ Accordion */}
        <MyersServiceAreas config={config} />
      </main>

      {/* Footer */}
      <MyersFooter config={config} />

      {/* Mobile Sticky Action Bar */}
      <MyersMobileBar config={config} />
    </div>
  )
}
