import React from 'react'
import type { Metadata } from 'next'
import { siteConfigReynoldsEn } from '../../../siteConfig.reynolds.en.js'
import { ReynoldsHeader } from '../../../components/reynolds/ReynoldsHeader'
import { ReynoldsHero } from '../../../components/reynolds/ReynoldsHero'
import { ReynoldsSpecs } from '../../../components/reynolds/ReynoldsSpecs'
import { ReynoldsServices } from '../../../components/reynolds/ReynoldsServices'
import { ReynoldsCalculator } from '../../../components/reynolds/ReynoldsCalculator'
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
