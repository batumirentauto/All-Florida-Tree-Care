import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHappysTreeServiceRu } from '../../../../siteConfig.happys-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHappysTreeServiceRu.businessName} | ${siteConfigHappysTreeServiceRu.tagline}`,
  description: `${siteConfigHappysTreeServiceRu.tagline}. ${siteConfigHappysTreeServiceRu.hero.subhead}`,
}

export default function HappysTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigHappysTreeServiceRu} />
}
