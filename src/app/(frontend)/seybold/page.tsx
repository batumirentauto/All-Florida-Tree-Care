import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSeyboldEn } from '../../../siteConfig.seybold.en.js'
import { SeyboldHeader } from '../../../components/seybold/SeyboldHeader'
import { SeyboldHero } from '../../../components/seybold/SeyboldHero'
import { SeyboldSpecs } from '../../../components/seybold/SeyboldSpecs'
import { SeyboldServices } from '../../../components/seybold/SeyboldServices'
import { SeyboldCalculator } from '../../../components/seybold/SeyboldCalculator'
import { SeyboldGallery } from '../../../components/seybold/SeyboldGallery'
import { SeyboldReviews } from '../../../components/seybold/SeyboldReviews'
import { SeyboldServiceAreas } from '../../../components/seybold/SeyboldServiceAreas'
import { SeyboldFooter } from '../../../components/seybold/SeyboldFooter'
import { SeyboldMobileBar } from '../../../components/seybold/SeyboldMobileBar'

export const metadata: Metadata = {
  title: `${siteConfigSeyboldEn.businessName} | Turf-Safe Tree Removal & Tracked Vermeer Stump Grinding`,
  description: `${siteConfigSeyboldEn.tagline}. ${siteConfigSeyboldEn.hero.subhead}`,
  keywords: [
    'tree removal Ellenton FL',
    'tree service Bradenton FL',
    'Vermeer stump grinding Manatee County',
    'turf safe tree removal Sarasota',
    'Spanish moss removal live oak',
    'emergency tree service Ellenton',
    'Seybold Property Solutions',
  ],
}

export default function SeyboldEnglishPage() {
  const config = siteConfigSeyboldEn

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      {/* Very Top Row: All Crews Navigation & Language Switcher */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2 sm:px-6">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 bg-emerald-600 text-white hover:bg-emerald-500 font-bold px-3 py-1 rounded shadow transition text-xs"
          >
            <span>←</span>
            <span>All Crews</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 hidden xs:inline">Language:</span>
            <span className="font-black text-white bg-emerald-700 px-2 py-0.5 rounded text-[11px]">EN</span>
            <a href="/seybold/ru" className="text-slate-400 hover:text-white transition text-[11px] font-semibold px-1.5 py-0.5">RU</a>
          </div>
        </div>
      </div>

      {/* Light Theme Bespoke Header */}
      <SeyboldHeader config={config} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section with Asymmetric Bento Showcase */}
        <SeyboldHero config={config} />

        {/* The SPS Precision Standard: Vermeer Tracked Specs & Comparisons */}
        <SeyboldSpecs config={config} />

        {/* 6 Core Services: Tree Removal, Spanish Moss, Vermeer Stumps, Emergency */}
        <SeyboldServices config={config} />

        {/* Interactive Instant Estimator */}
        <SeyboldCalculator config={config} />

        {/* Real Photo Gallery of Machinery & Jobs */}
        <SeyboldGallery config={config} />

        {/* Verified 5.0 Google Reviews (Master Gardener, 2-Hr Response, 15-ft Oak) */}
        <SeyboldReviews config={config} />

        {/* Service Territory & FAQ Accordion */}
        <SeyboldServiceAreas config={config} />
      </main>

      {/* Light Theme Footer */}
      <SeyboldFooter config={config} />

      {/* Mobile Bottom Floating Action Bar */}
      <SeyboldMobileBar config={config} />
    </div>
  )
}
