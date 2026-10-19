import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAlphaTreeCareLlcEn } from '../../../siteConfig.alpha-tree-care-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAlphaTreeCareLlcEn.businessName} | ${siteConfigAlphaTreeCareLlcEn.tagline}`,
  description: `${siteConfigAlphaTreeCareLlcEn.tagline}. ${siteConfigAlphaTreeCareLlcEn.hero.subhead}`,
  keywords: [
    "Alpha Tree Care, LLC",
    "tree removal Vancouver WA",
    "tree service Vancouver",
    "stump grinding Vancouver",
    "emergency tree service 98663",
    "Lonnie tree service",
  ],
}

export default function AlphaTreeCareLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAlphaTreeCareLlcEn} />
}
