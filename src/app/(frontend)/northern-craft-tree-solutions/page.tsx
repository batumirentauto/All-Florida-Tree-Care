import React from 'react'
import type { Metadata } from 'next'
import { siteConfigNorthernCraftTreeSolutionsEn } from '../../../siteConfig.northern-craft-tree-solutions.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigNorthernCraftTreeSolutionsEn.businessName} | ${siteConfigNorthernCraftTreeSolutionsEn.tagline}`,
  description: `${siteConfigNorthernCraftTreeSolutionsEn.tagline}. ${siteConfigNorthernCraftTreeSolutionsEn.hero.subhead}`,
  keywords: [
    "Northern Craft Tree Solutions",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function NorthernCraftTreeSolutionsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigNorthernCraftTreeSolutionsEn} />
}
