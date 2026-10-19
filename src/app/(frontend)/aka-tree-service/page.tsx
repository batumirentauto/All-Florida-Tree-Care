import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAkaTreeServiceEn } from '../../../siteConfig.aka-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAkaTreeServiceEn.businessName} | ${siteConfigAkaTreeServiceEn.tagline}`,
  description: `${siteConfigAkaTreeServiceEn.tagline}. ${siteConfigAkaTreeServiceEn.hero.subhead}`,
  keywords: [
    "AKA Tree Service",
    "tree removal Norcross GA",
    "tree service Norcross",
    "stump grinding Norcross",
    "emergency tree service 30071",
    "Joy tree service",
  ],
}

export default function AkaTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAkaTreeServiceEn} />
}
