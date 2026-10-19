import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAndertonTreeServiceRu } from '../../../../siteConfig.anderton-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAndertonTreeServiceRu.businessName} | ${siteConfigAndertonTreeServiceRu.tagline}`,
  description: `${siteConfigAndertonTreeServiceRu.tagline}. ${siteConfigAndertonTreeServiceRu.hero.subhead}`,
}

export default function AndertonTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigAndertonTreeServiceRu} />
}
