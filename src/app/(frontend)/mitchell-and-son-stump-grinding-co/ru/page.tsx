import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMitchellAndSonStumpGrindingCoRu } from '../../../../siteConfig.mitchell-and-son-stump-grinding-co.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMitchellAndSonStumpGrindingCoRu.businessName} | ${siteConfigMitchellAndSonStumpGrindingCoRu.tagline}`,
  description: `${siteConfigMitchellAndSonStumpGrindingCoRu.tagline}. ${siteConfigMitchellAndSonStumpGrindingCoRu.hero.subhead}`,
}

export default function MitchellAndSonStumpGrindingCoRussianPage() {
  return <UniversalCompanyPage config={siteConfigMitchellAndSonStumpGrindingCoRu} />
}
