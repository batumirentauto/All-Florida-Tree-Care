import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTimberlandTreeServiceRu } from '../../../../siteConfig.timberland-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTimberlandTreeServiceRu.businessName} | ${siteConfigTimberlandTreeServiceRu.tagline}`,
  description: `${siteConfigTimberlandTreeServiceRu.tagline}. ${siteConfigTimberlandTreeServiceRu.hero.subhead}`,
}

export default function TimberlandTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigTimberlandTreeServiceRu} />
}
