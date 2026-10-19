import React from 'react'
import type { Metadata } from 'next'
import { siteConfigASandovalTreeServiceRu } from '../../../../siteConfig.a-sandoval-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigASandovalTreeServiceRu.businessName} | ${siteConfigASandovalTreeServiceRu.tagline}`,
  description: `${siteConfigASandovalTreeServiceRu.tagline}. ${siteConfigASandovalTreeServiceRu.hero.subhead}`,
}

export default function ASandovalTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigASandovalTreeServiceRu} />
}
