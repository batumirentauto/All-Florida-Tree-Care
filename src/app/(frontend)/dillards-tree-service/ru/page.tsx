import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDillardsTreeServiceRu } from '../../../../siteConfig.dillards-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDillardsTreeServiceRu.businessName} | ${siteConfigDillardsTreeServiceRu.tagline}`,
  description: `${siteConfigDillardsTreeServiceRu.tagline}. ${siteConfigDillardsTreeServiceRu.hero.subhead}`,
}

export default function DillardsTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigDillardsTreeServiceRu} />
}
