import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTrueNorthTreeCareIncRu } from '../../../../siteConfig.true-north-tree-care-inc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTrueNorthTreeCareIncRu.businessName} | ${siteConfigTrueNorthTreeCareIncRu.tagline}`,
  description: `${siteConfigTrueNorthTreeCareIncRu.tagline}. ${siteConfigTrueNorthTreeCareIncRu.hero.subhead}`,
}

export default function TrueNorthTreeCareIncRussianPage() {
  return <UniversalCompanyPage config={siteConfigTrueNorthTreeCareIncRu} />
}
