import React from 'react'
import type { Metadata } from 'next'
import { siteConfigARTreeServiceRu } from '../../../../siteConfig.a-r-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigARTreeServiceRu.businessName} | ${siteConfigARTreeServiceRu.tagline}`,
  description: `${siteConfigARTreeServiceRu.tagline}. ${siteConfigARTreeServiceRu.hero.subhead}`,
}

export default function ARTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigARTreeServiceRu} />
}
