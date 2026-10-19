import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBackridgeTreeServiceEn } from '../../../siteConfig.backridge-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBackridgeTreeServiceEn.businessName} | ${siteConfigBackridgeTreeServiceEn.tagline}`,
  description: `${siteConfigBackridgeTreeServiceEn.tagline}. ${siteConfigBackridgeTreeServiceEn.hero.subhead}`,
  keywords: [
    "Backridge Tree Service",
    "tree removal Fort Walton Beach FL",
    "tree service Fort Walton Beach",
    "stump grinding Fort Walton Beach",
    "emergency tree service 32548",
    "Steve tree service",
  ],
}

export default function BackridgeTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBackridgeTreeServiceEn} />
}
