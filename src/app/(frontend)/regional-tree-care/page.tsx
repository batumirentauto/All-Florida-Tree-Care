import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRegionalTreeCareEn } from '../../../siteConfig.regional-tree-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRegionalTreeCareEn.businessName} | ${siteConfigRegionalTreeCareEn.tagline}`,
  description: `${siteConfigRegionalTreeCareEn.tagline}. ${siteConfigRegionalTreeCareEn.hero.subhead}`,
  keywords: [
    "Regional Tree Care",
    "tree removal Orlando FL",
    "tree service Orlando",
    "stump grinding Orlando",
    "emergency tree service 32824",
    "Lead Arborist tree service",
  ],
}

export default function RegionalTreeCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigRegionalTreeCareEn} />
}
