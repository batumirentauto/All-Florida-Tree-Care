import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAffordableTreeServiceIncTreeServiceMiamiDadeBrowardEn } from '../../../siteConfig.affordable-tree-service-inc-tree-service-miami-dade-broward.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAffordableTreeServiceIncTreeServiceMiamiDadeBrowardEn.businessName} | ${siteConfigAffordableTreeServiceIncTreeServiceMiamiDadeBrowardEn.tagline}`,
  description: `${siteConfigAffordableTreeServiceIncTreeServiceMiamiDadeBrowardEn.tagline}. ${siteConfigAffordableTreeServiceIncTreeServiceMiamiDadeBrowardEn.hero.subhead}`,
  keywords: [
    "Affordable Tree Service, Inc. - Tree Service Miami-Dade & Broward",
    "tree removal Pembroke Pines FL",
    "tree service Pembroke Pines",
    "stump grinding Pembroke Pines",
    "emergency tree service 33029",
    "Lead Arborist tree service",
  ],
}

export default function AffordableTreeServiceIncTreeServiceMiamiDadeBrowardEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAffordableTreeServiceIncTreeServiceMiamiDadeBrowardEn} />
}
