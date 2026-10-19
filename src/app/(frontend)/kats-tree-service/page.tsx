import React from 'react'
import type { Metadata } from 'next'
import { siteConfigKatsTreeServiceEn } from '../../../siteConfig.kats-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigKatsTreeServiceEn.businessName} | ${siteConfigKatsTreeServiceEn.tagline}`,
  description: `${siteConfigKatsTreeServiceEn.tagline}. ${siteConfigKatsTreeServiceEn.hero.subhead}`,
  keywords: [
    "Kats Tree Service",
    "tree removal Lady Lake FL",
    "tree service Lady Lake",
    "stump grinding Lady Lake",
    "emergency tree service 32159",
    "Kats tree service",
  ],
}

export default function KatsTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigKatsTreeServiceEn} />
}
