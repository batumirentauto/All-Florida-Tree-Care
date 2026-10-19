import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCompany5StarTreeServiceEn } from '../../../siteConfig.5-star-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCompany5StarTreeServiceEn.businessName} | ${siteConfigCompany5StarTreeServiceEn.tagline}`,
  description: `${siteConfigCompany5StarTreeServiceEn.tagline}. ${siteConfigCompany5StarTreeServiceEn.hero.subhead}`,
  keywords: [
    "5 Star Tree Service",
    "tree removal North Augusta SC",
    "tree service North Augusta",
    "stump grinding North Augusta",
    "emergency tree service 29860",
    "Cody tree service",
  ],
}

export default function Company5StarTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCompany5StarTreeServiceEn} />
}
