import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDilauroStumpGrindingRu } from '../../../../siteConfig.dilauro-stump-grinding.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDilauroStumpGrindingRu.businessName} | ${siteConfigDilauroStumpGrindingRu.tagline}`,
  description: `${siteConfigDilauroStumpGrindingRu.tagline}. ${siteConfigDilauroStumpGrindingRu.hero.subhead}`,
}

export default function DilauroStumpGrindingRussianPage() {
  return <UniversalCompanyPage config={siteConfigDilauroStumpGrindingRu} />
}
