import React from 'react'
import type { Metadata } from 'next'
import { siteConfigKristianTreeServiceRu } from '../../../../siteConfig.kristian-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigKristianTreeServiceRu.businessName} | ${siteConfigKristianTreeServiceRu.tagline}`,
  description: `${siteConfigKristianTreeServiceRu.tagline}. ${siteConfigKristianTreeServiceRu.hero.subhead}`,
}

export default function KristianTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigKristianTreeServiceRu} />
}
