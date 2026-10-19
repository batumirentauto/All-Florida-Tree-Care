import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBrTreeServiceRu } from '../../../../siteConfig.br-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBrTreeServiceRu.businessName} | ${siteConfigBrTreeServiceRu.tagline}`,
  description: `${siteConfigBrTreeServiceRu.tagline}. ${siteConfigBrTreeServiceRu.hero.subhead}`,
}

export default function BrTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigBrTreeServiceRu} />
}
