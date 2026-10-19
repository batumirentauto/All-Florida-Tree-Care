import React from 'react'
import type { Metadata } from 'next'
import { siteConfigNorthernCraftTreeSolutionsRu } from '../../../../siteConfig.northern-craft-tree-solutions.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigNorthernCraftTreeSolutionsRu.businessName} | ${siteConfigNorthernCraftTreeSolutionsRu.tagline}`,
  description: `${siteConfigNorthernCraftTreeSolutionsRu.tagline}. ${siteConfigNorthernCraftTreeSolutionsRu.hero.subhead}`,
}

export default function NorthernCraftTreeSolutionsRussianPage() {
  return <UniversalCompanyPage config={siteConfigNorthernCraftTreeSolutionsRu} />
}
