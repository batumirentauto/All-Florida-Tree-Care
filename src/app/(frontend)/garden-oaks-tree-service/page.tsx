import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGardenOaksTreeServiceEn } from '../../../siteConfig.garden-oaks-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGardenOaksTreeServiceEn.businessName} | ${siteConfigGardenOaksTreeServiceEn.tagline}`,
  description: `${siteConfigGardenOaksTreeServiceEn.tagline}. ${siteConfigGardenOaksTreeServiceEn.hero.subhead}`,
  keywords: [
    "Garden Oaks Tree Service LLC",
    "tree removal Houston TX",
    "tree service Houston",
    "stump grinding Houston",
    "emergency tree service 77067",
    "Melvyn tree service",
  ],
}

export default function GardenOaksTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGardenOaksTreeServiceEn} />
}
