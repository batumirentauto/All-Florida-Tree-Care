import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHoustonTreeSurgeonsRu } from '../../../../siteConfig.houston-tree-surgeons.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHoustonTreeSurgeonsRu.businessName} | ${siteConfigHoustonTreeSurgeonsRu.tagline}`,
  description: `${siteConfigHoustonTreeSurgeonsRu.tagline}. ${siteConfigHoustonTreeSurgeonsRu.hero.subhead}`,
}

export default function HoustonTreeSurgeonsRussianPage() {
  return <UniversalCompanyPage config={siteConfigHoustonTreeSurgeonsRu} />
}
