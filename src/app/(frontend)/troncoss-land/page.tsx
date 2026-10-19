import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTroncossLandEn } from '../../../siteConfig.troncoss-land.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTroncossLandEn.businessName} | ${siteConfigTroncossLandEn.tagline}`,
  description: `${siteConfigTroncossLandEn.tagline}. ${siteConfigTroncossLandEn.hero.subhead}`,
  keywords: [
    "Troncos's Land",
    "tree removal Tampa FL",
    "tree service Tampa",
    "stump grinding Tampa",
    "emergency tree service 33647",
    "Tronco tree service",
  ],
}

export default function TroncossLandEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTroncossLandEn} />
}
