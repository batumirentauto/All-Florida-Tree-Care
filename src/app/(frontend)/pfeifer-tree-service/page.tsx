import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPfeiferTreeServiceEn } from '../../../siteConfig.pfeifer-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPfeiferTreeServiceEn.businessName} | ${siteConfigPfeiferTreeServiceEn.tagline}`,
  description: `${siteConfigPfeiferTreeServiceEn.tagline}. ${siteConfigPfeiferTreeServiceEn.hero.subhead}`,
  keywords: [
    "Pfeifer Tree Service",
    "tree removal Sarasota FL",
    "tree service Sarasota",
    "stump grinding Sarasota",
    "emergency tree service 34234",
    "Lead Arborist tree service",
  ],
}

export default function PfeiferTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigPfeiferTreeServiceEn} />
}
