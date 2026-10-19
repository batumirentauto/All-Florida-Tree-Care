import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHighStandardsTreeCareRu } from '../../../../siteConfig.high-standards-tree-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHighStandardsTreeCareRu.businessName} | ${siteConfigHighStandardsTreeCareRu.tagline}`,
  description: `${siteConfigHighStandardsTreeCareRu.tagline}. ${siteConfigHighStandardsTreeCareRu.hero.subhead}`,
}

export default function HighStandardsTreeCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigHighStandardsTreeCareRu} />
}
