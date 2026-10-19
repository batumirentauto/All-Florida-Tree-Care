import React from 'react'
import type { Metadata } from 'next'
import { siteConfigForestOutdoorLivingLlcHardscapingLandscapingEn } from '../../../siteConfig.forest-outdoor-living-llc-hardscaping-landscaping.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigForestOutdoorLivingLlcHardscapingLandscapingEn.businessName} | ${siteConfigForestOutdoorLivingLlcHardscapingLandscapingEn.tagline}`,
  description: `${siteConfigForestOutdoorLivingLlcHardscapingLandscapingEn.tagline}. ${siteConfigForestOutdoorLivingLlcHardscapingLandscapingEn.hero.subhead}`,
  keywords: [
    "Forest Outdoor Living LLC Hardscaping & Landscaping",
    "tree removal Wilmington NC",
    "tree service Wilmington",
    "stump grinding Wilmington",
    "emergency tree service 28401",
    "Lead Arborist tree service",
  ],
}

export default function ForestOutdoorLivingLlcHardscapingLandscapingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigForestOutdoorLivingLlcHardscapingLandscapingEn} />
}
