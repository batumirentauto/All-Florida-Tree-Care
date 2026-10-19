import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWillsTreeServiceRu } from '../../../../siteConfig.wills-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWillsTreeServiceRu.businessName} | ${siteConfigWillsTreeServiceRu.tagline}`,
  description: `${siteConfigWillsTreeServiceRu.tagline}. ${siteConfigWillsTreeServiceRu.hero.subhead}`,
}

export default function WillsTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigWillsTreeServiceRu} />
}
