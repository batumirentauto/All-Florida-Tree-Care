import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMatiasTreeServiceAndLandscapeContractorRu } from '../../../../siteConfig.matias-tree-service-and-landscape-contractor.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMatiasTreeServiceAndLandscapeContractorRu.businessName} | ${siteConfigMatiasTreeServiceAndLandscapeContractorRu.tagline}`,
  description: `${siteConfigMatiasTreeServiceAndLandscapeContractorRu.tagline}. ${siteConfigMatiasTreeServiceAndLandscapeContractorRu.hero.subhead}`,
}

export default function MatiasTreeServiceAndLandscapeContractorRussianPage() {
  return <UniversalCompanyPage config={siteConfigMatiasTreeServiceAndLandscapeContractorRu} />
}
