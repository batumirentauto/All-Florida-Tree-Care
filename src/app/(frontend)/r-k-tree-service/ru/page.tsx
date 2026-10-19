import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRKTreeServiceRu } from '../../../../siteConfig.r-k-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRKTreeServiceRu.businessName} | ${siteConfigRKTreeServiceRu.tagline}`,
  description: `${siteConfigRKTreeServiceRu.tagline}. ${siteConfigRKTreeServiceRu.hero.subhead}`,
}

export default function RKTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigRKTreeServiceRu} />
}
