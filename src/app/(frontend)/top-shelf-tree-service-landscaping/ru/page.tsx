import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTopShelfTreeServiceLandscapingRu } from '../../../../siteConfig.top-shelf-tree-service-landscaping.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTopShelfTreeServiceLandscapingRu.businessName} | ${siteConfigTopShelfTreeServiceLandscapingRu.tagline}`,
  description: `${siteConfigTopShelfTreeServiceLandscapingRu.tagline}. ${siteConfigTopShelfTreeServiceLandscapingRu.hero.subhead}`,
}

export default function TopShelfTreeServiceLandscapingRussianPage() {
  return <UniversalCompanyPage config={siteConfigTopShelfTreeServiceLandscapingRu} />
}
