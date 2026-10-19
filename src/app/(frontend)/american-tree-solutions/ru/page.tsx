import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAmericanTreeSolutionsRu } from '../../../../siteConfig.american-tree-solutions.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAmericanTreeSolutionsRu.businessName} | ${siteConfigAmericanTreeSolutionsRu.tagline}`,
  description: `${siteConfigAmericanTreeSolutionsRu.tagline}. ${siteConfigAmericanTreeSolutionsRu.hero.subhead}`,
}

export default function AmericanTreeSolutionsRussianPage() {
  return <UniversalCompanyPage config={siteConfigAmericanTreeSolutionsRu} />
}
