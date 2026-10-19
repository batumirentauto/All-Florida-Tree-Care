import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBrTreeServiceEn } from '../../../siteConfig.br-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBrTreeServiceEn.businessName} | ${siteConfigBrTreeServiceEn.tagline}`,
  description: `${siteConfigBrTreeServiceEn.tagline}. ${siteConfigBrTreeServiceEn.hero.subhead}`,
  keywords: [
    "B&R Tree Service",
    "tree removal Smiths Station AL",
    "tree service Smiths Station",
    "stump grinding Smiths Station",
    "emergency tree service 36877",
    "Lead Arborist tree service",
  ],
}

export default function BrTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBrTreeServiceEn} />
}
