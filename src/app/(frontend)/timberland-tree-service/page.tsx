import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTimberlandTreeServiceEn } from '../../../siteConfig.timberland-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTimberlandTreeServiceEn.businessName} | ${siteConfigTimberlandTreeServiceEn.tagline}`,
  description: `${siteConfigTimberlandTreeServiceEn.tagline}. ${siteConfigTimberlandTreeServiceEn.hero.subhead}`,
  keywords: [
    "Timberland Tree Service",
    "tree removal Sacramento CA",
    "tree service Sacramento",
    "stump grinding Sacramento",
    "emergency tree service 95823",
    "Timberland tree service",
  ],
}

export default function TimberlandTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTimberlandTreeServiceEn} />
}
