import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAppleseedTreeServiceRu } from '../../../../siteConfig.appleseed-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAppleseedTreeServiceRu.businessName} | ${siteConfigAppleseedTreeServiceRu.tagline}`,
  description: `${siteConfigAppleseedTreeServiceRu.tagline}. ${siteConfigAppleseedTreeServiceRu.hero.subhead}`,
}

export default function AppleseedTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigAppleseedTreeServiceRu} />
}
