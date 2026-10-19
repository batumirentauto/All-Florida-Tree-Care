import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTomsTreeServiceRu } from '../../../../siteConfig.toms-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTomsTreeServiceRu.businessName} | ${siteConfigTomsTreeServiceRu.tagline}`,
  description: `${siteConfigTomsTreeServiceRu.tagline}. ${siteConfigTomsTreeServiceRu.hero.subhead}`,
}

export default function TomsTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigTomsTreeServiceRu} />
}
