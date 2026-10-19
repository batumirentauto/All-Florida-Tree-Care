import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMitchellAndSonStumpGrindingCoEn } from '../../../siteConfig.mitchell-and-son-stump-grinding-co.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMitchellAndSonStumpGrindingCoEn.businessName} | ${siteConfigMitchellAndSonStumpGrindingCoEn.tagline}`,
  description: `${siteConfigMitchellAndSonStumpGrindingCoEn.tagline}. ${siteConfigMitchellAndSonStumpGrindingCoEn.hero.subhead}`,
  keywords: [
    "Mitchell and Son Stump Grinding Co.",
    "tree removal Columbia SC",
    "tree service Columbia",
    "stump grinding Columbia",
    "emergency tree service 29229",
    "Lead Arborist tree service",
  ],
}

export default function MitchellAndSonStumpGrindingCoEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMitchellAndSonStumpGrindingCoEn} />
}
