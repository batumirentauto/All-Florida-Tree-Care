import React from 'react'
import type { Metadata } from 'next'
import { siteConfigA1TreeCareLlcEn } from '../../../siteConfig.a1-tree-care-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigA1TreeCareLlcEn.businessName} | ${siteConfigA1TreeCareLlcEn.tagline}`,
  description: `${siteConfigA1TreeCareLlcEn.tagline}. ${siteConfigA1TreeCareLlcEn.hero.subhead}`,
  keywords: [
    "A1 Tree Care LLC",
    "tree removal San Jose CA",
    "tree service San Jose",
    "stump grinding San Jose",
    "emergency tree service 95126",
    "Lead Arborist tree service",
  ],
}

export default function A1TreeCareLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigA1TreeCareLlcEn} />
}
