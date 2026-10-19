import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHoustonTreeSurgeonsEn } from '../../../siteConfig.houston-tree-surgeons.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHoustonTreeSurgeonsEn.businessName} | ${siteConfigHoustonTreeSurgeonsEn.tagline}`,
  description: `${siteConfigHoustonTreeSurgeonsEn.tagline}. ${siteConfigHoustonTreeSurgeonsEn.hero.subhead}`,
  keywords: [
    "Houston Tree Surgeons",
    "tree removal Houston TX",
    "tree service Houston",
    "stump grinding Houston",
    "emergency tree service 77005",
    "Houston tree service",
  ],
}

export default function HoustonTreeSurgeonsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigHoustonTreeSurgeonsEn} />
}
