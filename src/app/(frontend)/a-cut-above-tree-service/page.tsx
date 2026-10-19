import React from 'react'
import type { Metadata } from 'next'
import { siteConfigACutAboveTreeServiceEn } from '../../../siteConfig.a-cut-above-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigACutAboveTreeServiceEn.businessName} | ${siteConfigACutAboveTreeServiceEn.tagline}`,
  description: `${siteConfigACutAboveTreeServiceEn.tagline}. ${siteConfigACutAboveTreeServiceEn.hero.subhead}`,
  keywords: [
    "A Cut Above Tree Service",
    "tree removal Supply NC",
    "tree service Supply",
    "stump grinding Supply",
    "emergency tree service 28462",
    "Matt tree service",
  ],
}

export default function ACutAboveTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigACutAboveTreeServiceEn} />
}
