import React from 'react'
import type { Metadata } from 'next'
import { siteConfigNavarijosTreeServiceRu } from '../../../../siteConfig.navarijos-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigNavarijosTreeServiceRu.businessName} | ${siteConfigNavarijosTreeServiceRu.tagline}`,
  description: `${siteConfigNavarijosTreeServiceRu.tagline}. ${siteConfigNavarijosTreeServiceRu.hero.subhead}`,
}

export default function NavarijosTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigNavarijosTreeServiceRu} />
}
