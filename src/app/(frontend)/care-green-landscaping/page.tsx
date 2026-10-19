import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCareGreenLandscapingEn } from '../../../siteConfig.care-green-landscaping.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCareGreenLandscapingEn.businessName} | ${siteConfigCareGreenLandscapingEn.tagline}`,
  description: `${siteConfigCareGreenLandscapingEn.tagline}. ${siteConfigCareGreenLandscapingEn.hero.subhead}`,
  keywords: [
    "Care Green Landscaping & Tree Service",
    "tree removal Dallas TX",
    "tree service Dallas",
    "stump grinding Dallas",
    "emergency tree service 75227",
    "Lead Arborist tree service",
  ],
}

export default function CareGreenLandscapingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCareGreenLandscapingEn} />
}
