import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGoldenLandscapeAndTreeCareRu } from '../../../../siteConfig.golden-landscape-and-tree-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGoldenLandscapeAndTreeCareRu.businessName} | ${siteConfigGoldenLandscapeAndTreeCareRu.tagline}`,
  description: `${siteConfigGoldenLandscapeAndTreeCareRu.tagline}. ${siteConfigGoldenLandscapeAndTreeCareRu.hero.subhead}`,
}

export default function GoldenLandscapeAndTreeCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigGoldenLandscapeAndTreeCareRu} />
}
