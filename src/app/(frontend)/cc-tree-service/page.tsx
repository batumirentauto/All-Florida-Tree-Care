import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCcTreeServiceEn } from '../../../siteConfig.cc-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCcTreeServiceEn.businessName} | ${siteConfigCcTreeServiceEn.tagline}`,
  description: `${siteConfigCcTreeServiceEn.tagline}. ${siteConfigCcTreeServiceEn.hero.subhead}`,
  keywords: [
    "CC Tree Service",
    "tree removal Corpus Christi TX",
    "tree service Corpus Christi",
    "stump grinding Corpus Christi",
    "emergency tree service 78411",
    "Matt tree service",
  ],
}

export default function CcTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCcTreeServiceEn} />
}
