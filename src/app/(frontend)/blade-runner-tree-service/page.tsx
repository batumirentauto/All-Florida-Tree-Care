import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBladeRunnerTreeServiceEn } from '../../../siteConfig.blade-runner-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBladeRunnerTreeServiceEn.businessName} | ${siteConfigBladeRunnerTreeServiceEn.tagline}`,
  description: `${siteConfigBladeRunnerTreeServiceEn.tagline}. ${siteConfigBladeRunnerTreeServiceEn.hero.subhead}`,
  keywords: [
    "Blade Runner Tree Service",
    "tree removal Austin TX",
    "tree service Austin",
    "stump grinding Austin",
    "emergency tree service 78759",
    "Lead Arborist tree service",
  ],
}

export default function BladeRunnerTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBladeRunnerTreeServiceEn} />
}
