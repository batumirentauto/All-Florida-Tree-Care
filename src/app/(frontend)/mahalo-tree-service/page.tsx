import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMahaloTreeServiceEn } from '../../../siteConfig.mahalo-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMahaloTreeServiceEn.businessName} | ${siteConfigMahaloTreeServiceEn.tagline}`,
  description: `${siteConfigMahaloTreeServiceEn.tagline}. ${siteConfigMahaloTreeServiceEn.hero.subhead}`,
  keywords: [
    "Mahalo Tree Service",
    "tree removal Fort Lauderdale FL",
    "tree service Fort Lauderdale",
    "stump grinding Fort Lauderdale",
    "emergency tree service 33306",
    "Lead Arborist tree service",
  ],
}

export default function MahaloTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMahaloTreeServiceEn} />
}
