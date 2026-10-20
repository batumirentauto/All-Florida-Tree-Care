import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHolcombEn } from '../../../siteConfig.holcomb.en.js'
import { HolcombHeader } from '../../../components/holcomb/HolcombHeader'
import { HolcombHero } from '../../../components/holcomb/HolcombHero'
import { HolcombSpecs } from '../../../components/holcomb/HolcombSpecs'
import { HolcombServices } from '../../../components/holcomb/HolcombServices'
import { HolcombCalculator } from '../../../components/holcomb/HolcombCalculator'
import { HolcombReviews } from '../../../components/holcomb/HolcombReviews'
import { HolcombServiceAreas } from '../../../components/holcomb/HolcombServiceAreas'
import { HolcombFooter } from '../../../components/holcomb/HolcombFooter'
import { HolcombMobileBar } from '../../../components/holcomb/HolcombMobileBar'

export const metadata: Metadata = {
  title: `${siteConfigHolcombEn.businessName} | Technical Timber Felling & 100+ Ft Fir Tree Surgery Lane County OR`,
  description: `${siteConfigHolcombEn.tagline}. ${siteConfigHolcombEn.hero.subhead}`,
  keywords: [
    'Holcomb Timber and Tree Services',
    'tree removal Pleasant Hill OR',
    'Eugene tree faller',
    'Douglas Fir takedown Lane County',
    'coastal redwood removal Oregon',
    'emergency storm tree clearing cabin',
    'brush chipping Pleasant Hill Oregon',
    'Tony Holcomb tree service',
  ],
}

export default function HolcombEnglishPage() {
  const config = siteConfigHolcombEn

  return (
    <div className="min-h-screen bg-[#07130c] text-white selection:bg-emerald-500 selection:text-white font-sans antialiased">
      {/* Header */}
      <HolcombHeader config={config} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section with Asymmetric Bento Showcase */}
        <HolcombHero config={config} />

        {/* Heavy Rigging & Equipment Specs */}
        <HolcombSpecs config={config} />

        {/* 6 Core Services */}
        <HolcombServices config={config} />

        {/* Interactive Instant Estimator */}
        <HolcombCalculator config={config} />

        {/* Verified Google Maps Reviews */}
        <HolcombReviews config={config} />

        {/* Service Territory & FAQ Accordion */}
        <HolcombServiceAreas config={config} />
      </main>

      {/* Footer */}
      <HolcombFooter config={config} />

      {/* Mobile Sticky Action Bar */}
      <HolcombMobileBar config={config} />
    </div>
  )
}
