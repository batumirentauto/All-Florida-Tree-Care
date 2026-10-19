import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDilauroStumpGrindingEn } from '../../../siteConfig.dilauro-stump-grinding.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDilauroStumpGrindingEn.businessName} | ${siteConfigDilauroStumpGrindingEn.tagline}`,
  description: `${siteConfigDilauroStumpGrindingEn.tagline}. ${siteConfigDilauroStumpGrindingEn.hero.subhead}`,
  keywords: [
    "DiLauro Stump Grinding",
    "tree removal Raleigh NC",
    "tree service Raleigh",
    "stump grinding Raleigh",
    "emergency tree service 27612",
    "Lead Arborist tree service",
  ],
}

export default function DilauroStumpGrindingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigDilauroStumpGrindingEn} />
}
