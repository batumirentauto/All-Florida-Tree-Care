import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAffordableTreeServiceIncTreeServiceMiamiEn } from '../../../siteConfig.affordable-tree-service-inc-tree-service-miami.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAffordableTreeServiceIncTreeServiceMiamiEn.businessName} | ${siteConfigAffordableTreeServiceIncTreeServiceMiamiEn.tagline}`,
  description: `${siteConfigAffordableTreeServiceIncTreeServiceMiamiEn.tagline}. ${siteConfigAffordableTreeServiceIncTreeServiceMiamiEn.hero.subhead}`,
  keywords: [
    "Affordable Tree Service Inc. - Tree Service Miami",
    "tree removal Miami FL",
    "tree service Miami",
    "stump grinding Miami",
    "emergency tree service 33155",
    "Bill tree service",
  ],
}

export default function AffordableTreeServiceIncTreeServiceMiamiEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAffordableTreeServiceIncTreeServiceMiamiEn} />
}
