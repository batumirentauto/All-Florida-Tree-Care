import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHenriquezTreeServiceRu } from '../../../../siteConfig.henriquez-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHenriquezTreeServiceRu.businessName} | ${siteConfigHenriquezTreeServiceRu.tagline}`,
  description: `${siteConfigHenriquezTreeServiceRu.tagline}. ${siteConfigHenriquezTreeServiceRu.hero.subhead}`,
}

export default function HenriquezTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigHenriquezTreeServiceRu} />
}
