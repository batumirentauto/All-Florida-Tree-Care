import React from 'react'
import type { Metadata } from 'next'
import { siteConfigReynoldsEn } from '../../../siteConfig.reynolds.en.js'
import { ReynoldsHeader } from '../../../components/reynolds/ReynoldsHeader'
import { ReynoldsHero } from '../../../components/reynolds/ReynoldsHero'
import { ReynoldsSpecs } from '../../../components/reynolds/ReynoldsSpecs'
import { ReynoldsServices } from '../../../components/reynolds/ReynoldsServices'
import { ReynoldsCalculator } from '../../../components/reynolds/ReynoldsCalculator'
import { ReynoldsGallery } from '../../../components/reynolds/ReynoldsGallery'
import { ReynoldsReviews } from '../../../components/reynolds/ReynoldsReviews'
import { ReynoldsServiceAreas } from '../../../components/reynolds/ReynoldsServiceAreas'
import { ReynoldsFooter } from '../../../components/reynolds/ReynoldsFooter'
import { ReynoldsMobileBar } from '../../../components/reynolds/ReynoldsMobileBar'

export const metadata: Metadata = {
  title: `${siteConfigReynoldsEn.businessName} | Aerial Bucket Tree Removal & Estate Landscape Sarasota`,
  description: `${siteConfigReynoldsEn.tagline}. ${siteConfigReynoldsEn.hero.subhead}`,
  keywords: [
    'tree removal Sarasota FL',
    'Robert Reynolds Landscape Inc',
    'aerial bucket truck tree trimming Sarasota',
    'live oak thinning hurricane mitigation',
    'hydraulic log grapple loader',
    'New Holland palm transplanting',
    'pool sunlight tree clearance Sarasota',
    'realtor curb appeal landscape Sarasota',
  ],
}

export default function ReynoldsEnglishPage() {
  const config = siteConfigReynoldsEn

  return (
    <div className="min-h-screen bg-[#080e1a] text-white selection:bg-sky-500 selection:text-white font-sans antialiased">
      {/* Very Top Row: All Crews Navigation & Language Switcher */}
      <div className="bg-black border-b border-slate-800 py-2 px-4 sm:px-6 text-xs flex items-center justify-between">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-500 to-emerald-600 text-white hover:from-sky-400 hover:to-emerald-500 font-bold px-3 py-1 rounded shadow transition text-xs"
        >
          <span>←</span>
          <span>All Crews</span>
        </a>
        <div className="flex items-center gap-2">
          <span className="text-slate-400 hidden xs:inline">Language:</span>
          <span className="font-black text-white bg-sky-600 px-2 py-0.5 rounded text-[11px]">EN</span>
          <a href="/reynolds/ru" className="text-slate-400 hover:text-white transition text-[11px] font-semibold px-1.5 py-0.5">RU</a>
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

        {/* Real Photo Gallery */}
        <ReynoldsGallery config={config} />

        {/* Verified 4.7 Google Reviews */}
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
