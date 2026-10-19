import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRichmondTreeExpertsGaEn } from '../../../siteConfig.richmond-tree-experts-ga.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRichmondTreeExpertsGaEn.businessName} | ${siteConfigRichmondTreeExpertsGaEn.tagline}`,
  description: `${siteConfigRichmondTreeExpertsGaEn.tagline}. ${siteConfigRichmondTreeExpertsGaEn.hero.subhead}`,
  keywords: [
    "Richmond Tree Experts GA",
    "tree removal Marietta GA",
    "tree service Marietta",
    "stump grinding Marietta",
    "emergency tree service 30068",
    "Lead Arborist tree service",
  ],
}

export default function RichmondTreeExpertsGaEnglishPage() {
  return <UniversalCompanyPage config={siteConfigRichmondTreeExpertsGaEn} />
}
