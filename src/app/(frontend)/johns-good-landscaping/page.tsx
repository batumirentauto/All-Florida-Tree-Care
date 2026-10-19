import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJohnsGoodLandscapingEn } from '../../../siteConfig.johns-good-landscaping.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJohnsGoodLandscapingEn.businessName} | ${siteConfigJohnsGoodLandscapingEn.tagline}`,
  description: `${siteConfigJohnsGoodLandscapingEn.tagline}. ${siteConfigJohnsGoodLandscapingEn.hero.subhead}`,
  keywords: [
    "John's Good Landscaping Services",
    "tree removal Oakland CA",
    "tree service Oakland",
    "stump grinding Oakland",
    "emergency tree service 94605",
    "John tree service",
  ],
}

export default function JohnsGoodLandscapingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigJohnsGoodLandscapingEn} />
}
