import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBigTreeExpertsLlcRu } from '../../../../siteConfig.big-tree-experts-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBigTreeExpertsLlcRu.businessName} | ${siteConfigBigTreeExpertsLlcRu.tagline}`,
  description: `${siteConfigBigTreeExpertsLlcRu.tagline}. ${siteConfigBigTreeExpertsLlcRu.hero.subhead}`,
}

export default function BigTreeExpertsLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigBigTreeExpertsLlcRu} />
}
