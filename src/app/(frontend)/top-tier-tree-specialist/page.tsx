import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTopTierTreeSpecialistEn } from '../../../siteConfig.top-tier-tree-specialist.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTopTierTreeSpecialistEn.businessName} | ${siteConfigTopTierTreeSpecialistEn.tagline}`,
  description: `${siteConfigTopTierTreeSpecialistEn.tagline}. ${siteConfigTopTierTreeSpecialistEn.hero.subhead}`,
  keywords: [
    "Top Tier Tree Specialist",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function TopTierTreeSpecialistEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTopTierTreeSpecialistEn} />
}
