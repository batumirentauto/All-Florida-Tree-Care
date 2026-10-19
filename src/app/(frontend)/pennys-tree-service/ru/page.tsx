import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPennysTreeServiceRu } from '../../../../siteConfig.pennys-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPennysTreeServiceRu.businessName} | ${siteConfigPennysTreeServiceRu.tagline}`,
  description: `${siteConfigPennysTreeServiceRu.tagline}. ${siteConfigPennysTreeServiceRu.hero.subhead}`,
}

export default function PennysTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigPennysTreeServiceRu} />
}
