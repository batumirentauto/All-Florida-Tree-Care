import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWaltersTreeServiceEn } from '../../../siteConfig.walters-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWaltersTreeServiceEn.businessName} | ${siteConfigWaltersTreeServiceEn.tagline}`,
  description: `${siteConfigWaltersTreeServiceEn.tagline}. ${siteConfigWaltersTreeServiceEn.hero.subhead}`,
  keywords: [
    "Walter\u2019s Tree Service",
    "tree removal Dallas TX",
    "tree service Dallas",
    "stump grinding Dallas",
    "emergency tree service 75230",
    "Walter tree service",
  ],
}

export default function WaltersTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigWaltersTreeServiceEn} />
}
