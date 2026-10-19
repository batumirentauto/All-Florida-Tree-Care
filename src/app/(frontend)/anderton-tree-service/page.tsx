import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAndertonTreeServiceEn } from '../../../siteConfig.anderton-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAndertonTreeServiceEn.businessName} | ${siteConfigAndertonTreeServiceEn.tagline}`,
  description: `${siteConfigAndertonTreeServiceEn.tagline}. ${siteConfigAndertonTreeServiceEn.hero.subhead}`,
  keywords: [
    "Anderton Tree Service",
    "tree removal Fort Worth TX",
    "tree service Fort Worth",
    "stump grinding Fort Worth",
    "emergency tree service 76116",
    "Michael tree service",
  ],
}

export default function AndertonTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAndertonTreeServiceEn} />
}
