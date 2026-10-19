import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreevantageEn } from '../../../siteConfig.treevantage.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreevantageEn.businessName} | ${siteConfigTreevantageEn.tagline}`,
  description: `${siteConfigTreevantageEn.tagline}. ${siteConfigTreevantageEn.hero.subhead}`,
  keywords: [
    "TreeVantage",
    "tree removal Tampa FL",
    "tree service Tampa",
    "stump grinding Tampa",
    "emergency tree service 33604",
    "Jacob tree service",
  ],
}

export default function TreevantageEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreevantageEn} />
}
