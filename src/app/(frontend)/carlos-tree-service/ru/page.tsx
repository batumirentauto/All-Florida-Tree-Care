import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCarlosTreeServiceRu } from '../../../../siteConfig.carlos-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCarlosTreeServiceRu.businessName} | ${siteConfigCarlosTreeServiceRu.tagline}`,
  description: `${siteConfigCarlosTreeServiceRu.tagline}. ${siteConfigCarlosTreeServiceRu.hero.subhead}`,
}

export default function CarlosTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigCarlosTreeServiceRu} />
}
