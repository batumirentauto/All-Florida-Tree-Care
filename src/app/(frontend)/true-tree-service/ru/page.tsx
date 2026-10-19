import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTrueTreeServiceRu } from '../../../../siteConfig.true-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTrueTreeServiceRu.businessName} | ${siteConfigTrueTreeServiceRu.tagline}`,
  description: `${siteConfigTrueTreeServiceRu.tagline}. ${siteConfigTrueTreeServiceRu.hero.subhead}`,
}

export default function TrueTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigTrueTreeServiceRu} />
}
