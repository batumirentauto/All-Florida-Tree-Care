import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMapleTreeServiceRu } from '../../../../siteConfig.maple-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMapleTreeServiceRu.businessName} | ${siteConfigMapleTreeServiceRu.tagline}`,
  description: `${siteConfigMapleTreeServiceRu.tagline}. ${siteConfigMapleTreeServiceRu.hero.subhead}`,
}

export default function MapleTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigMapleTreeServiceRu} />
}
