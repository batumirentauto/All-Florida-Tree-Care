import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMidValleyTreeServiceRu } from '../../../../siteConfig.mid-valley-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMidValleyTreeServiceRu.businessName} | ${siteConfigMidValleyTreeServiceRu.tagline}`,
  description: `${siteConfigMidValleyTreeServiceRu.tagline}. ${siteConfigMidValleyTreeServiceRu.hero.subhead}`,
}

export default function MidValleyTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigMidValleyTreeServiceRu} />
}
