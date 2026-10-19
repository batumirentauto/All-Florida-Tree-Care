import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPrecisionTreeServiceEn } from '../../../siteConfig.precision-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPrecisionTreeServiceEn.businessName} | ${siteConfigPrecisionTreeServiceEn.tagline}`,
  description: `${siteConfigPrecisionTreeServiceEn.tagline}. ${siteConfigPrecisionTreeServiceEn.hero.subhead}`,
  keywords: [
    "Precision Tree Service",
    "tree removal Bellingham WA",
    "tree service Bellingham",
    "stump grinding Bellingham",
    "emergency tree service 98229",
    "Larry tree service",
  ],
}

export default function PrecisionTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigPrecisionTreeServiceEn} />
}
