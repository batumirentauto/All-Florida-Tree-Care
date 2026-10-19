import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMorganTreeLandServiceRu } from '../../../../siteConfig.morgan-tree-land-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMorganTreeLandServiceRu.businessName} | ${siteConfigMorganTreeLandServiceRu.tagline}`,
  description: `${siteConfigMorganTreeLandServiceRu.tagline}. ${siteConfigMorganTreeLandServiceRu.hero.subhead}`,
}

export default function MorganTreeLandServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigMorganTreeLandServiceRu} />
}
