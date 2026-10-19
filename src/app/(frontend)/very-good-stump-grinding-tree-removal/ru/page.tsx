import React from 'react'
import type { Metadata } from 'next'
import { siteConfigVeryGoodStumpGrindingTreeRemovalRu } from '../../../../siteConfig.very-good-stump-grinding-tree-removal.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigVeryGoodStumpGrindingTreeRemovalRu.businessName} | ${siteConfigVeryGoodStumpGrindingTreeRemovalRu.tagline}`,
  description: `${siteConfigVeryGoodStumpGrindingTreeRemovalRu.tagline}. ${siteConfigVeryGoodStumpGrindingTreeRemovalRu.hero.subhead}`,
}

export default function VeryGoodStumpGrindingTreeRemovalRussianPage() {
  return <UniversalCompanyPage config={siteConfigVeryGoodStumpGrindingTreeRemovalRu} />
}
