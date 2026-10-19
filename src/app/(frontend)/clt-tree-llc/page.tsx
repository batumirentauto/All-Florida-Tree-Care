import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCltTreeLlcEn } from '../../../siteConfig.clt-tree-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCltTreeLlcEn.businessName} | ${siteConfigCltTreeLlcEn.tagline}`,
  description: `${siteConfigCltTreeLlcEn.tagline}. ${siteConfigCltTreeLlcEn.hero.subhead}`,
  keywords: [
    "CLT Tree LLC",
    "tree removal Charlotte NC",
    "tree service Charlotte",
    "stump grinding Charlotte",
    "emergency tree service 28226",
    "Barry tree service",
  ],
}

export default function CltTreeLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCltTreeLlcEn} />
}
