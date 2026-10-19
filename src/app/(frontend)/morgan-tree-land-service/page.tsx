import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMorganTreeLandServiceEn } from '../../../siteConfig.morgan-tree-land-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMorganTreeLandServiceEn.businessName} | ${siteConfigMorganTreeLandServiceEn.tagline}`,
  description: `${siteConfigMorganTreeLandServiceEn.tagline}. ${siteConfigMorganTreeLandServiceEn.hero.subhead}`,
  keywords: [
    "Morgan Tree & Land Service, LLC",
    "tree removal Sarasota FL",
    "tree service Sarasota",
    "stump grinding Sarasota",
    "emergency tree service 34240",
    "Morgan tree service",
  ],
}

export default function MorganTreeLandServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMorganTreeLandServiceEn} />
}
