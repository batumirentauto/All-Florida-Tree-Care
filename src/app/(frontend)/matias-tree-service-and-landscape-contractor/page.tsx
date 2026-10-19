import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMatiasTreeServiceAndLandscapeContractorEn } from '../../../siteConfig.matias-tree-service-and-landscape-contractor.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMatiasTreeServiceAndLandscapeContractorEn.businessName} | ${siteConfigMatiasTreeServiceAndLandscapeContractorEn.tagline}`,
  description: `${siteConfigMatiasTreeServiceAndLandscapeContractorEn.tagline}. ${siteConfigMatiasTreeServiceAndLandscapeContractorEn.hero.subhead}`,
  keywords: [
    "Matias tree service and landscape contractor",
    "tree removal Sacramento CA",
    "tree service Sacramento",
    "stump grinding Sacramento",
    "emergency tree service 95828",
    "Felipe tree service",
  ],
}

export default function MatiasTreeServiceAndLandscapeContractorEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMatiasTreeServiceAndLandscapeContractorEn} />
}
