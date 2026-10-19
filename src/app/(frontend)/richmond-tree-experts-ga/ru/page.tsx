import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRichmondTreeExpertsGaRu } from '../../../../siteConfig.richmond-tree-experts-ga.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRichmondTreeExpertsGaRu.businessName} | ${siteConfigRichmondTreeExpertsGaRu.tagline}`,
  description: `${siteConfigRichmondTreeExpertsGaRu.tagline}. ${siteConfigRichmondTreeExpertsGaRu.hero.subhead}`,
}

export default function RichmondTreeExpertsGaRussianPage() {
  return <UniversalCompanyPage config={siteConfigRichmondTreeExpertsGaRu} />
}
