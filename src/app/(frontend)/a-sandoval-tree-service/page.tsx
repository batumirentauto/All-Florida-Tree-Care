import React from 'react'
import type { Metadata } from 'next'
import { siteConfigASandovalTreeServiceEn } from '../../../siteConfig.a-sandoval-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigASandovalTreeServiceEn.businessName} | ${siteConfigASandovalTreeServiceEn.tagline}`,
  description: `${siteConfigASandovalTreeServiceEn.tagline}. ${siteConfigASandovalTreeServiceEn.hero.subhead}`,
  keywords: [
    "A Sandoval Tree Service",
    "tree removal Arleta CA",
    "tree service Arleta",
    "stump grinding Arleta",
    "emergency tree service 91331",
    "Alfredo tree service",
  ],
}

export default function ASandovalTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigASandovalTreeServiceEn} />
}
