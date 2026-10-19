import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGulfCoastTreeAndLandEn } from '../../../siteConfig.gulf-coast-tree-and-land.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGulfCoastTreeAndLandEn.businessName} | ${siteConfigGulfCoastTreeAndLandEn.tagline}`,
  description: `${siteConfigGulfCoastTreeAndLandEn.tagline}. ${siteConfigGulfCoastTreeAndLandEn.hero.subhead}`,
  keywords: [
    "Gulf Coast Tree and Land",
    "tree removal Pensacola FL",
    "tree service Pensacola",
    "stump grinding Pensacola",
    "emergency tree service 32526",
    "Gulf tree service",
  ],
}

export default function GulfCoastTreeAndLandEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGulfCoastTreeAndLandEn} />
}
