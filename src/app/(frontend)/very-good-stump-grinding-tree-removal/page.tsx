import React from 'react'
import type { Metadata } from 'next'
import { siteConfigVeryGoodStumpGrindingTreeRemovalEn } from '../../../siteConfig.very-good-stump-grinding-tree-removal.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigVeryGoodStumpGrindingTreeRemovalEn.businessName} | ${siteConfigVeryGoodStumpGrindingTreeRemovalEn.tagline}`,
  description: `${siteConfigVeryGoodStumpGrindingTreeRemovalEn.tagline}. ${siteConfigVeryGoodStumpGrindingTreeRemovalEn.hero.subhead}`,
  keywords: [
    "Very Good Stump Grinding & Tree Removal",
    "tree removal Lake Oswego OR",
    "tree service Lake Oswego",
    "stump grinding Lake Oswego",
    "emergency tree service 97035",
    "Bryce tree service",
  ],
}

export default function VeryGoodStumpGrindingTreeRemovalEnglishPage() {
  return <UniversalCompanyPage config={siteConfigVeryGoodStumpGrindingTreeRemovalEn} />
}
