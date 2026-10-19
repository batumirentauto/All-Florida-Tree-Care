import React from 'react'
import type { Metadata } from 'next'
import { siteConfigChampionsTreePreservationEn } from '../../../siteConfig.champions-tree-preservation.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigChampionsTreePreservationEn.businessName} | ${siteConfigChampionsTreePreservationEn.tagline}`,
  description: `${siteConfigChampionsTreePreservationEn.tagline}. ${siteConfigChampionsTreePreservationEn.hero.subhead}`,
  keywords: [
    "Champions Tree Preservation",
    "tree removal Houston TX",
    "tree service Houston",
    "stump grinding Houston",
    "emergency tree service 77066",
    "Lead Arborist tree service",
  ],
}

export default function ChampionsTreePreservationEnglishPage() {
  return <UniversalCompanyPage config={siteConfigChampionsTreePreservationEn} />
}
