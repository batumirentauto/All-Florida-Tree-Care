import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAlamoCityTreeServiceLandscapingRu } from '../../../../siteConfig.alamo-city-tree-service-landscaping.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAlamoCityTreeServiceLandscapingRu.businessName} | ${siteConfigAlamoCityTreeServiceLandscapingRu.tagline}`,
  description: `${siteConfigAlamoCityTreeServiceLandscapingRu.tagline}. ${siteConfigAlamoCityTreeServiceLandscapingRu.hero.subhead}`,
}

export default function AlamoCityTreeServiceLandscapingRussianPage() {
  return <UniversalCompanyPage config={siteConfigAlamoCityTreeServiceLandscapingRu} />
}
