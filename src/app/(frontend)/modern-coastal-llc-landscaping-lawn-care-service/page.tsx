import React from 'react'
import type { Metadata } from 'next'
import { siteConfigModernCoastalLlcLandscapingLawnCareServiceEn } from '../../../siteConfig.modern-coastal-llc-landscaping-lawn-care-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigModernCoastalLlcLandscapingLawnCareServiceEn.businessName} | ${siteConfigModernCoastalLlcLandscapingLawnCareServiceEn.tagline}`,
  description: `${siteConfigModernCoastalLlcLandscapingLawnCareServiceEn.tagline}. ${siteConfigModernCoastalLlcLandscapingLawnCareServiceEn.hero.subhead}`,
  keywords: [
    "Modern Coastal LLC - Landscaping & Lawn Care Service",
    "tree removal Wilmington NC",
    "tree service Wilmington",
    "stump grinding Wilmington",
    "emergency tree service 28405",
    "Noah tree service",
  ],
}

export default function ModernCoastalLlcLandscapingLawnCareServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigModernCoastalLlcLandscapingLawnCareServiceEn} />
}
