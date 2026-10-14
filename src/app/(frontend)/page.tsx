import React from 'react'
import { Header } from '../../components/Header'
import { MobileActionBar } from '../../components/MobileActionBar'
import { Hero } from '../../components/Hero'
import { TrustBadges } from '../../components/TrustBadges'
import { ExpressCalculator } from '../../components/ExpressCalculator'
import { ServicesGrid } from '../../components/ServicesGrid'
import { EquipmentGallery } from '../../components/EquipmentGallery'
import { EquipmentComparison } from '../../components/EquipmentComparison'
import { TextEstimateCard } from '../../components/TextEstimateCard'
import { ReviewsSection } from '../../components/ReviewsSection'
import { ServiceAreas } from '../../components/ServiceAreas'
import { LeadForm } from '../../components/LeadForm'
import { Footer } from '../../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      {/* Sticky top header with verification micro-bar & desktop navigation */}
      <Header />

      {/* Main landing content */}
      <main>
        {/* Authority Arborist Hero with Boom Truck Visual Showcase */}
        <Hero />

        {/* 4 The All Florida Advantage - Asymmetric Bento Grid */}
        <TrustBadges />

        {/* Standalone Interactive Job Estimator (#calculator) */}
        <ExpressCalculator />

        {/* 6 Core Contractor Services */}
        <ServicesGrid />

        {/* Commercial Equipment & Real Jobs Asymmetric Spotlight Gallery */}
        <EquipmentGallery />

        {/* Technical Specification Comparison (Unlicensed Handyman vs All Florida Fleet) */}
        <EquipmentComparison />

        {/* 3-Step Visual Photo Estimate Process */}
        <TextEstimateCard />

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
