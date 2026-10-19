import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGomezTreeServiceLlcEn } from '../../../siteConfig.gomez-tree-service-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGomezTreeServiceLlcEn.businessName} | ${siteConfigGomezTreeServiceLlcEn.tagline}`,
  description: `${siteConfigGomezTreeServiceLlcEn.tagline}. ${siteConfigGomezTreeServiceLlcEn.hero.subhead}`,
  keywords: [
    "Gomez Tree Service LLC",
    "tree removal Houston TX",
    "tree service Houston",
    "stump grinding Houston",
    "emergency tree service 77016",
    "Lead Arborist tree service",
  ],
}

export default function GomezTreeServiceLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGomezTreeServiceLlcEn} />
}
