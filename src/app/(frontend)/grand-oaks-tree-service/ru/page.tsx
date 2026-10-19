import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGrandOaksTreeServiceRu } from '../../../../siteConfig.grand-oaks-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGrandOaksTreeServiceRu.businessName} | ${siteConfigGrandOaksTreeServiceRu.tagline}`,
  description: `${siteConfigGrandOaksTreeServiceRu.tagline}. ${siteConfigGrandOaksTreeServiceRu.hero.subhead}`,
}

export default function GrandOaksTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigGrandOaksTreeServiceRu} />
}
