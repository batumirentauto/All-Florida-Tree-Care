import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHappysTreeServiceEn } from '../../../siteConfig.happys-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHappysTreeServiceEn.businessName} | ${siteConfigHappysTreeServiceEn.tagline}`,
  description: `${siteConfigHappysTreeServiceEn.tagline}. ${siteConfigHappysTreeServiceEn.hero.subhead}`,
  keywords: [
    "Happy's Tree Service",
    "tree removal St. Petersburg FL",
    "tree service St. Petersburg",
    "stump grinding St. Petersburg",
    "emergency tree service 33710",
    "Steve tree service",
  ],
}

export default function HappysTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigHappysTreeServiceEn} />
}
