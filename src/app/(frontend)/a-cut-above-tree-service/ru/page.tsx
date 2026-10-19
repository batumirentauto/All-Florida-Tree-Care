import React from 'react'
import type { Metadata } from 'next'
import { siteConfigACutAboveTreeServiceRu } from '../../../../siteConfig.a-cut-above-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigACutAboveTreeServiceRu.businessName} | ${siteConfigACutAboveTreeServiceRu.tagline}`,
  description: `${siteConfigACutAboveTreeServiceRu.tagline}. ${siteConfigACutAboveTreeServiceRu.hero.subhead}`,
}

export default function ACutAboveTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigACutAboveTreeServiceRu} />
}
