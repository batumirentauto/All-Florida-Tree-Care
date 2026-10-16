import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHardkorEn } from '../../../siteConfig.hardkor.en.js'
import { HardkorHeader } from '../../../components/hardkor/HardkorHeader'
import { HardkorHero } from '../../../components/hardkor/HardkorHero'
import { HardkorSpecs } from '../../../components/hardkor/HardkorSpecs'
import { HardkorServices } from '../../../components/hardkor/HardkorServices'
import { HardkorCalculator } from '../../../components/hardkor/HardkorCalculator'
import { HardkorGallery } from '../../../components/hardkor/HardkorGallery'
import { HardkorReviews } from '../../../components/hardkor/HardkorReviews'
import { HardkorServiceAreas } from '../../../components/hardkor/HardkorServiceAreas'
import { HardkorFooter } from '../../../components/hardkor/HardkorFooter'
import { HardkorMobileBar } from '../../../components/hardkor/HardkorMobileBar'

export const metadata: Metadata = {
  title: `${siteConfigHardkorEn.businessName} | Elite Arborist Rigging, Claw-Truck Haul & Storm Recovery`,
  description: `${siteConfigHardkorEn.tagline}. ${siteConfigHardkorEn.hero.subhead}`,
  keywords: [
    'tree removal St Petersburg FL',
    'Hard Kor Tree Care',
    'emergency tree service Pinellas County',
    'crane tree removal St Pete',
    'grapple claw truck tree debris haul',
    'Karode Reid arborist',
    'hurricane tree removal Helene Milton',
    'certified arborist reports St Petersburg',
  ],
}

export default function HardkorEnglishPage() {
  const config = siteConfigHardkorEn

  return (
    <div className="min-h-screen bg-[#090d16] text-white selection:bg-red-600 selection:text-white font-sans antialiased">
      {/* Very Top Row: All Crews Navigation & Language Switcher */}
      <div className="bg-black border-b border-slate-800 text-xs">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2 sm:px-6">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 bg-red-600 text-white hover:bg-red-500 font-bold px-3 py-1 rounded shadow transition text-xs"
          >
            <span>←</span>
            <span>All Crews</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 hidden xs:inline">Language:</span>
            <span className="font-black text-white bg-red-700 px-2 py-0.5 rounded text-[11px]">EN</span>
            <a href="/hard-kor/ru" className="text-slate-400 hover:text-white transition text-[11px] font-semibold px-1.5 py-0.5">RU</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <HardkorHeader config={config} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section with Asymmetric Bento Showcase */}
        <HardkorHero config={config} />

        {/* Heavy Rigging & Equipment Specs */}
        <HardkorSpecs config={config} />

        {/* 6 Core Services + Hurricane Recovery Banner */}
        <HardkorServices config={config} />

        {/* Interactive Instant Estimator */}
        <HardkorCalculator config={config} />

        {/* Real Photo Gallery of Storm & Arborist Operations */}
        <HardkorGallery config={config} />

        {/* Verified 4.9 Google Reviews */}
        <HardkorReviews config={config} />

        {/* Service Territory & FAQ Accordion */}
        <HardkorServiceAreas config={config} />
      </main>

      {/* Footer */}
      <HardkorFooter config={config} />

      {/* Mobile Floating Action Bar */}
      <HardkorMobileBar config={config} />
    </div>
  )
}
