import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGrowEn } from '../../../siteConfig.grow.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGrowEn.businessName} | ${siteConfigGrowEn.tagline}`,
  description: `${siteConfigGrowEn.tagline}. ${siteConfigGrowEn.hero.subhead}`,
  keywords: [
    "G.R.O.W. Outdoor Services, Inc",
    "tree removal Jacksonville FL",
    "tree service Jacksonville",
    "stump grinding Jacksonville",
    "emergency tree service 32244",
    "Donnie tree service",
  ],
}

export default function GrowEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGrowEn} />
}
