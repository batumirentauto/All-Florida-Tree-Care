import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWimberleyTreeServiceEn } from '../../../siteConfig.wimberley-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWimberleyTreeServiceEn.businessName} | ${siteConfigWimberleyTreeServiceEn.tagline}`,
  description: `${siteConfigWimberleyTreeServiceEn.tagline}. ${siteConfigWimberleyTreeServiceEn.hero.subhead}`,
  keywords: [
    "Wimberley Tree Service",
    "tree removal Wimberley TX",
    "tree service Wimberley",
    "stump grinding Wimberley",
    "emergency tree service 78676",
    "Santos tree service",
  ],
}

export default function WimberleyTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigWimberleyTreeServiceEn} />
}
