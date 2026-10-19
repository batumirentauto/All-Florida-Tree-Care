import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPennysTreeServiceEn } from '../../../siteConfig.pennys-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPennysTreeServiceEn.businessName} | ${siteConfigPennysTreeServiceEn.tagline}`,
  description: `${siteConfigPennysTreeServiceEn.tagline}. ${siteConfigPennysTreeServiceEn.hero.subhead}`,
  keywords: [
    "Penny's Tree Service",
    "tree removal High Point NC",
    "tree service High Point",
    "stump grinding High Point",
    "emergency tree service 27265",
    "Lead Arborist tree service",
  ],
}

export default function PennysTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigPennysTreeServiceEn} />
}
