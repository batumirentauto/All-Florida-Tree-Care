import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWausonTreeServiceEn } from '../../../siteConfig.wauson-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWausonTreeServiceEn.businessName} | ${siteConfigWausonTreeServiceEn.tagline}`,
  description: `${siteConfigWausonTreeServiceEn.tagline}. ${siteConfigWausonTreeServiceEn.hero.subhead}`,
  keywords: [
    "Wauson Tree Service",
    "tree removal Allen TX",
    "tree service Allen",
    "stump grinding Allen",
    "emergency tree service 75013",
    "Walt tree service",
  ],
}

export default function WausonTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigWausonTreeServiceEn} />
}
