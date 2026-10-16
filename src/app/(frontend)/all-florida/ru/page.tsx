import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRu } from '../../../../siteConfig.ru.js'
import { Header } from '../../../../components/Header'
import { MobileActionBar } from '../../../../components/MobileActionBar'
import { Hero } from '../../../../components/Hero'
import { TrustBadges } from '../../../../components/TrustBadges'
import { ExpressCalculator } from '../../../../components/ExpressCalculator'
import { ServicesGrid } from '../../../../components/ServicesGrid'
import { EquipmentGallery } from '../../../../components/EquipmentGallery'
import { TextEstimateCard } from '../../../../components/TextEstimateCard'
import { ReviewsSection } from '../../../../components/ReviewsSection'
import { ServiceAreas } from '../../../../components/ServiceAreas'
import { LeadForm } from '../../../../components/LeadForm'
import { Footer } from '../../../../components/Footer'

export const metadata: Metadata = {
  title: `${siteConfigRu.businessName} | ${siteConfigRu.shortName}`,
  description: `${siteConfigRu.tagline}. ${siteConfigRu.hero.subhead}`,
  keywords: [
    'спил деревьев Палметто',
    'удаление деревьев Сарасота',
    'дробление пней Брейдентон',
    'кронирование дубов',
    'обрезка пальм Флорида',
    'аварийный спил деревьев',
  ],
}

export default function AllFloridaRussianPage() {
  const config = siteConfigRu

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {/* Back to Hub shortcut bar */}
      <div className="bg-slate-950/90 border-b border-slate-800 py-1 px-4 text-xs text-slate-400 flex items-center justify-between">
        <a href="/" className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition">
          <span>←</span>
          <span>Каталог всех бригад (Hub)</span>
        </a>
        <div className="flex items-center gap-2">
          <span className="text-slate-500">Язык:</span>
          <a href="/all-florida" className="text-slate-400 hover:text-white transition text-[10px]">EN</a>
          <span className="font-bold text-white bg-slate-800 px-1.5 py-0.5 rounded text-[10px]">RU</span>
        </div>
      </div>

      {/* Sticky top header with interactive language switcher & navigation */}
      <Header config={config} />

      {/* Main landing content */}
      <main>
        {/* Authority Arborist Hero with Boom Truck Visual Showcase */}
        <Hero config={config} />

        {/* 4 The All Florida Advantage - Asymmetric Bento Grid */}
        <TrustBadges config={config} />

        {/* Standalone Interactive Job Estimator (#calculator) */}
        <ExpressCalculator config={config} />

        {/* 6 Core Contractor Services */}
        <ServicesGrid config={config} />

        {/* Commercial Equipment & Real Jobs Asymmetric Spotlight Gallery */}
        <EquipmentGallery config={config} />

        {/* 3-Step Visual Photo Estimate Process */}
        <TextEstimateCard config={config} />

        {/* Verified Google Reviews */}
        <ReviewsSection config={config} />

        {/* Service Area Locations Cloud */}
        <ServiceAreas config={config} />

        {/* High-CRO Lead Capture Form */}
        <LeadForm config={config} />
      </main>

      {/* Footer with NAP, licensing, and hours */}
      <Footer config={config} />

      {/* Fixed bottom action bar for mobile devices */}
      <MobileActionBar config={config} />
    </div>
  )
}
