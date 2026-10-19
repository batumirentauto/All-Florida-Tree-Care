import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDillardsTreeServiceEn } from '../../../siteConfig.dillards-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDillardsTreeServiceEn.businessName} | ${siteConfigDillardsTreeServiceEn.tagline}`,
  description: `${siteConfigDillardsTreeServiceEn.tagline}. ${siteConfigDillardsTreeServiceEn.hero.subhead}`,
  keywords: [
    "Dillard's Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Travis tree service",
  ],
}

export default function DillardsTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigDillardsTreeServiceEn} />
}
