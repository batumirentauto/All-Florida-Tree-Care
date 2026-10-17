import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHolcombRu } from '../../../../siteConfig.holcomb.ru.js'
import { HolcombHeader } from '../../../../components/holcomb/HolcombHeader'
import { HolcombHero } from '../../../../components/holcomb/HolcombHero'
import { HolcombSpecs } from '../../../../components/holcomb/HolcombSpecs'
import { HolcombServices } from '../../../../components/holcomb/HolcombServices'
import { HolcombCalculator } from '../../../../components/holcomb/HolcombCalculator'
import { HolcombReviews } from '../../../../components/holcomb/HolcombReviews'
import { HolcombServiceAreas } from '../../../../components/holcomb/HolcombServiceAreas'
import { HolcombFooter } from '../../../../components/holcomb/HolcombFooter'
import { HolcombMobileBar } from '../../../../components/holcomb/HolcombMobileBar'

export const metadata: Metadata = {
  title: `${siteConfigHolcombRu.businessName} | Валка леса, спил 30-метровых пихт и удаление секвой в округе Лейн, Орегон`,
  description: `${siteConfigHolcombRu.tagline}. ${siteConfigHolcombRu.hero.subhead}`,
  keywords: [
    'спил деревьев Орегон',
    'Holcomb Timber and Tree Services',
    'валка пихт Дугласа Lane County',
    'удаление секвой Pleasant Hill OR',
    'расчистка бурелома с крыш',
    'дробление веток щепорезом',
    'Тони Холкомб лесоруб',
  ],
}

export default function HolcombRussianPage() {
  const config = siteConfigHolcombRu

  return (
    <div className="min-h-screen bg-[#07130c] text-white selection:bg-emerald-500 selection:text-white font-sans antialiased">
      {/* Very Top Row: All Crews Navigation & Language Switcher */}
      <div className="bg-black border-b border-slate-800 text-xs">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2 sm:px-6">
          <a
            href="/ru"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-green-700 text-white hover:from-emerald-500 hover:to-green-600 font-bold px-3 py-1 rounded shadow transition text-xs"
          >
            <span>←</span>
            <span>Все бригады</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 hidden xs:inline">Язык:</span>
            <a href="/holcomb" className="text-slate-400 hover:text-white transition text-[11px] font-semibold px-1.5 py-0.5">EN</a>
            <span className="font-black text-white bg-emerald-700 px-2 py-0.5 rounded text-[11px]">RU</span>
          </div>
        </div>
      </div>

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
