import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGardenOaksTreeServiceRu } from '../../../../siteConfig.garden-oaks-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGardenOaksTreeServiceRu.businessName} | ${siteConfigGardenOaksTreeServiceRu.tagline}`,
  description: `${siteConfigGardenOaksTreeServiceRu.tagline}. ${siteConfigGardenOaksTreeServiceRu.hero.subhead}`,
}

export default function GardenOaksTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigGardenOaksTreeServiceRu} />
}
