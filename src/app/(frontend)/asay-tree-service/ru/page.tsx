import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAsayTreeServiceRu } from '../../../../siteConfig.asay-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAsayTreeServiceRu.businessName} | ${siteConfigAsayTreeServiceRu.tagline}`,
  description: `${siteConfigAsayTreeServiceRu.tagline}. ${siteConfigAsayTreeServiceRu.hero.subhead}`,
}

export default function AsayTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigAsayTreeServiceRu} />
}
