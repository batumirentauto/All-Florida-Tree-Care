import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBriansQualityEn } from '../../../siteConfig.brians-quality.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBriansQualityEn.businessName} | ${siteConfigBriansQualityEn.tagline}`,
  description: `${siteConfigBriansQualityEn.tagline}. ${siteConfigBriansQualityEn.hero.subhead}`,
  keywords: [
    "Brian's Quality Tree Service",
    "tree removal St. Petersburg FL",
    "tree service St. Petersburg",
    "stump grinding St. Petersburg",
    "emergency tree service 33702",
    "Brian tree service",
  ],
}

export default function BriansQualityEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBriansQualityEn} />
}
