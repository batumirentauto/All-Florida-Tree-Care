import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTrueNorthTreeCareIncEn } from '../../../siteConfig.true-north-tree-care-inc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTrueNorthTreeCareIncEn.businessName} | ${siteConfigTrueNorthTreeCareIncEn.tagline}`,
  description: `${siteConfigTrueNorthTreeCareIncEn.tagline}. ${siteConfigTrueNorthTreeCareIncEn.hero.subhead}`,
  keywords: [
    "True North Tree Care Inc.",
    "tree removal Marcola OR",
    "tree service Marcola",
    "stump grinding Marcola",
    "emergency tree service 97454",
    "Ben tree service",
  ],
}

export default function TrueNorthTreeCareIncEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTrueNorthTreeCareIncEn} />
}
