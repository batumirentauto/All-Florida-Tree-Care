import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSavannahsLandscapingEn } from '../../../siteConfig.savannahs-landscaping.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSavannahsLandscapingEn.businessName} | ${siteConfigSavannahsLandscapingEn.tagline}`,
  description: `${siteConfigSavannahsLandscapingEn.tagline}. ${siteConfigSavannahsLandscapingEn.hero.subhead}`,
  keywords: [
    "Savannah's Landscaping Services",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Tomico tree service",
  ],
}

export default function SavannahsLandscapingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSavannahsLandscapingEn} />
}
