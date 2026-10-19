import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPrecisionTreeServiceRu } from '../../../../siteConfig.precision-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPrecisionTreeServiceRu.businessName} | ${siteConfigPrecisionTreeServiceRu.tagline}`,
  description: `${siteConfigPrecisionTreeServiceRu.tagline}. ${siteConfigPrecisionTreeServiceRu.hero.subhead}`,
}

export default function PrecisionTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigPrecisionTreeServiceRu} />
}
