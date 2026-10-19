import React from 'react'
import type { Metadata } from 'next'
import { siteConfigExtremeTreeServiceRu } from '../../../../siteConfig.extreme-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigExtremeTreeServiceRu.businessName} | ${siteConfigExtremeTreeServiceRu.tagline}`,
  description: `${siteConfigExtremeTreeServiceRu.tagline}. ${siteConfigExtremeTreeServiceRu.hero.subhead}`,
}

export default function ExtremeTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigExtremeTreeServiceRu} />
}
