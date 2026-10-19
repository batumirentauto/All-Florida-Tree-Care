import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRegionalTreeCareRu } from '../../../../siteConfig.regional-tree-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRegionalTreeCareRu.businessName} | ${siteConfigRegionalTreeCareRu.tagline}`,
  description: `${siteConfigRegionalTreeCareRu.tagline}. ${siteConfigRegionalTreeCareRu.hero.subhead}`,
}

export default function RegionalTreeCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigRegionalTreeCareRu} />
}
