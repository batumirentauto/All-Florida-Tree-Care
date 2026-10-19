import React from 'react'
import type { Metadata } from 'next'
import { siteConfigEliteQualityTreeStumpGrindingRu } from '../../../../siteConfig.elite-quality-tree-stump-grinding.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigEliteQualityTreeStumpGrindingRu.businessName} | ${siteConfigEliteQualityTreeStumpGrindingRu.tagline}`,
  description: `${siteConfigEliteQualityTreeStumpGrindingRu.tagline}. ${siteConfigEliteQualityTreeStumpGrindingRu.hero.subhead}`,
}

export default function EliteQualityTreeStumpGrindingRussianPage() {
  return <UniversalCompanyPage config={siteConfigEliteQualityTreeStumpGrindingRu} />
}
