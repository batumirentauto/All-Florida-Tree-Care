import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCompany5StarTreeServiceRu } from '../../../../siteConfig.5-star-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCompany5StarTreeServiceRu.businessName} | ${siteConfigCompany5StarTreeServiceRu.tagline}`,
  description: `${siteConfigCompany5StarTreeServiceRu.tagline}. ${siteConfigCompany5StarTreeServiceRu.hero.subhead}`,
}

export default function Company5StarTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigCompany5StarTreeServiceRu} />
}
