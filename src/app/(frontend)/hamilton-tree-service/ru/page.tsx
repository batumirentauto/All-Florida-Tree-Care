import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHamiltonTreeServiceRu } from '../../../../siteConfig.hamilton-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHamiltonTreeServiceRu.businessName} | ${siteConfigHamiltonTreeServiceRu.tagline}`,
  description: `${siteConfigHamiltonTreeServiceRu.tagline}. ${siteConfigHamiltonTreeServiceRu.hero.subhead}`,
}

export default function HamiltonTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigHamiltonTreeServiceRu} />
}
