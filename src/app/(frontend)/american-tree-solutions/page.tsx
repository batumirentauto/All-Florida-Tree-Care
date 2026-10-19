import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAmericanTreeSolutionsEn } from '../../../siteConfig.american-tree-solutions.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAmericanTreeSolutionsEn.businessName} | ${siteConfigAmericanTreeSolutionsEn.tagline}`,
  description: `${siteConfigAmericanTreeSolutionsEn.tagline}. ${siteConfigAmericanTreeSolutionsEn.hero.subhead}`,
  keywords: [
    "American Tree Solutions",
    "tree removal Jacksonville FL",
    "tree service Jacksonville",
    "stump grinding Jacksonville",
    "emergency tree service 32207",
    "Lead Arborist tree service",
  ],
}

export default function AmericanTreeSolutionsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAmericanTreeSolutionsEn} />
}
