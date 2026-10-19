import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAgriTreeExpertsEn } from '../../../siteConfig.agri-tree-experts.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAgriTreeExpertsEn.businessName} | ${siteConfigAgriTreeExpertsEn.tagline}`,
  description: `${siteConfigAgriTreeExpertsEn.tagline}. ${siteConfigAgriTreeExpertsEn.hero.subhead}`,
  keywords: [
    "Agri Tree Experts",
    "tree removal San Antonio TX",
    "tree service San Antonio",
    "stump grinding San Antonio",
    "emergency tree service 78209",
    "Crow tree service",
  ],
}

export default function AgriTreeExpertsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAgriTreeExpertsEn} />
}
