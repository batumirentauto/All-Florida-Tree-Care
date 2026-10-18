import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAlwaysGrindingEn } from '../../../siteConfig.always-grinding.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAlwaysGrindingEn.businessName} | ${siteConfigAlwaysGrindingEn.tagline}`,
  description: `${siteConfigAlwaysGrindingEn.tagline}. ${siteConfigAlwaysGrindingEn.hero.subhead}`,
  keywords: [
    "Always Grinding Tree & Stump Removal",
    "tree removal Flowery Branch GA",
    "tree service Flowery Branch",
    "stump grinding Flowery Branch",
    "emergency tree service 30542",
    "Dustin tree service",
  ],
}

export default function AlwaysGrindingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAlwaysGrindingEn} />
}
