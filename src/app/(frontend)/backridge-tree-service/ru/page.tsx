import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBackridgeTreeServiceRu } from '../../../../siteConfig.backridge-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBackridgeTreeServiceRu.businessName} | ${siteConfigBackridgeTreeServiceRu.tagline}`,
  description: `${siteConfigBackridgeTreeServiceRu.tagline}. ${siteConfigBackridgeTreeServiceRu.hero.subhead}`,
}

export default function BackridgeTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigBackridgeTreeServiceRu} />
}
