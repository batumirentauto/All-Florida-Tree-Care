import React from 'react'
import { Header } from '../../components/Header'
import { MobileActionBar } from '../../components/MobileActionBar'
import { Hero } from '../../components/Hero'
import { TrustBadges } from '../../components/TrustBadges'
import { TextEstimateCard } from '../../components/TextEstimateCard'
import { ServicesGrid } from '../../components/ServicesGrid'
import { EquipmentComparison } from '../../components/EquipmentComparison'
import { EquipmentGallery } from '../../components/EquipmentGallery'
import { ReviewsSection } from '../../components/ReviewsSection'
import { ServiceAreas } from '../../components/ServiceAreas'
import { LeadForm } from '../../components/LeadForm'
import { Footer } from '../../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {/* Sticky top header with verification micro-bar */}
      <Header />

      {/* Main landing content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* 4 Trust Pillars / Badges */}
        <TrustBadges />

        {/* 3-Step Visual Photo Estimate Process */}
        <TextEstimateCard />

        {/* 6 Core Contractor Services */}
        <ServicesGrid />

        {/* Technical Specification Comparison (DIY Rental vs Commercial Track Grinder) */}
        <EquipmentComparison />

        {/* Commercial Equipment & Real Jobs Photo Gallery */}
        <EquipmentGallery />

        {/* Verified Google Reviews */}
        <ReviewsSection />

        {/* Service Area Locations Cloud */}
        <ServiceAreas />

        {/* High-CRO Lead Capture Form */}
        <LeadForm />
      </main>

      {/* Footer with NAP, licensing, and hours */}
      <Footer />

      {/* Fixed bottom action bar for mobile devices */}
      <MobileActionBar />
    </div>
  )
}
