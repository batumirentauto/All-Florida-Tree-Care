import React from 'react'
import type { Metadata } from 'next'
import { siteConfigExploreTreeServiceRu } from '../../../../siteConfig.explore-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigExploreTreeServiceRu.businessName} | ${siteConfigExploreTreeServiceRu.tagline}`,
  description: `${siteConfigExploreTreeServiceRu.tagline}. ${siteConfigExploreTreeServiceRu.hero.subhead}`,
}

export default function ExploreTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigExploreTreeServiceRu} />
}
