import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHamiltonTreeServiceEn } from '../../../siteConfig.hamilton-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHamiltonTreeServiceEn.businessName} | ${siteConfigHamiltonTreeServiceEn.tagline}`,
  description: `${siteConfigHamiltonTreeServiceEn.tagline}. ${siteConfigHamiltonTreeServiceEn.hero.subhead}`,
  keywords: [
    "Hamilton Tree Service",
    "tree removal Jacksonville FL",
    "tree service Jacksonville",
    "stump grinding Jacksonville",
    "emergency tree service 32244",
    "John tree service",
  ],
}

export default function HamiltonTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigHamiltonTreeServiceEn} />
}
