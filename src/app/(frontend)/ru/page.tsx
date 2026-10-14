import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRu } from '../../../siteConfig.ru.js'
import { Header } from '../../../components/Header'
import { MobileActionBar } from '../../../components/MobileActionBar'
import { Hero } from '../../../components/Hero'
import { TrustBadges } from '../../../components/TrustBadges'
import { TextEstimateCard } from '../../../components/TextEstimateCard'
import { ServicesGrid } from '../../../components/ServicesGrid'
import { EquipmentComparison } from '../../../components/EquipmentComparison'
import { EquipmentGallery } from '../../../components/EquipmentGallery'
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
      {/* Sticky top header with interactive language switcher */}
      <Header config={config} />

      {/* Main landing content */}
      <main>
        {/* Hero Section */}
        <Hero config={config} />

        {/* 4 Trust Pillars / Badges */}
        <TrustBadges config={config} />

        {/* 3-Step Visual Photo Estimate Process */}
        <TextEstimateCard config={config} />

        {/* 6 Core Contractor Services */}
        <ServicesGrid config={config} />

        {/* Technical Specification Comparison */}
        <EquipmentComparison config={config} />

        {/* Commercial Equipment & Real Jobs Photo Gallery */}
        <EquipmentGallery config={config} />

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
