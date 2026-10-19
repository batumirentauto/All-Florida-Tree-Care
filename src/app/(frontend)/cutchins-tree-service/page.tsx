import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCutchinsTreeServiceEn } from '../../../siteConfig.cutchins-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCutchinsTreeServiceEn.businessName} | ${siteConfigCutchinsTreeServiceEn.tagline}`,
  description: `${siteConfigCutchinsTreeServiceEn.tagline}. ${siteConfigCutchinsTreeServiceEn.hero.subhead}`,
  keywords: [
    "Cutchins Tree Service",
    "tree removal Pensacola FL",
    "tree service Pensacola",
    "stump grinding Pensacola",
    "emergency tree service 32505",
    "Cutchins tree service",
  ],
}

export default function CutchinsTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCutchinsTreeServiceEn} />
}
