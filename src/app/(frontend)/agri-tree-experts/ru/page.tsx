import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAgriTreeExpertsRu } from '../../../../siteConfig.agri-tree-experts.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAgriTreeExpertsRu.businessName} | ${siteConfigAgriTreeExpertsRu.tagline}`,
  description: `${siteConfigAgriTreeExpertsRu.tagline}. ${siteConfigAgriTreeExpertsRu.hero.subhead}`,
}

export default function AgriTreeExpertsRussianPage() {
  return <UniversalCompanyPage config={siteConfigAgriTreeExpertsRu} />
}
