import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSouthCoastLandscapingEn } from '../../../siteConfig.south-coast-landscaping.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSouthCoastLandscapingEn.businessName} | ${siteConfigSouthCoastLandscapingEn.tagline}`,
  description: `${siteConfigSouthCoastLandscapingEn.tagline}. ${siteConfigSouthCoastLandscapingEn.hero.subhead}`,
  keywords: [
    "South Coast Landscaping Inc.",
    "tree removal Pensacola FL",
    "tree service Pensacola",
    "stump grinding Pensacola",
    "emergency tree service 32514",
    "Southcoast tree service",
  ],
}

export default function SouthCoastLandscapingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSouthCoastLandscapingEn} />
}
