import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRu } from '../../../siteConfig.ru.js'
import { Header } from '../../../components/Header'
import { MobileActionBar } from '../../../components/MobileActionBar'
import { Hero } from '../../../components/Hero'
import { TrustBadges } from '../../../components/TrustBadges'
import { ExpressCalculator } from '../../../components/ExpressCalculator'
import { ServicesGrid } from '../../../components/ServicesGrid'
import { EquipmentGallery } from '../../../components/EquipmentGallery'
import { TextEstimateCard } from '../../../components/TextEstimateCard'
import { ReviewsSection } from '../../../components/ReviewsSection'
import { ServiceAreas } from '../../../components/ServiceAreas'
import { LeadForm } from '../../../components/LeadForm'
import { Footer } from '../../../components/Footer'

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

export default function RussianPage() {
  const config = siteConfigRu

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
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
