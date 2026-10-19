import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAndersTreeServiceRu } from '../../../../siteConfig.anders-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAndersTreeServiceRu.businessName} | ${siteConfigAndersTreeServiceRu.tagline}`,
  description: `${siteConfigAndersTreeServiceRu.tagline}. ${siteConfigAndersTreeServiceRu.hero.subhead}`,
}

export default function AndersTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigAndersTreeServiceRu} />
}
