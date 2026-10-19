import React from 'react'
import type { Metadata } from 'next'
import { siteConfigNavarijosTreeServiceEn } from '../../../siteConfig.navarijos-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigNavarijosTreeServiceEn.businessName} | ${siteConfigNavarijosTreeServiceEn.tagline}`,
  description: `${siteConfigNavarijosTreeServiceEn.tagline}. ${siteConfigNavarijosTreeServiceEn.hero.subhead}`,
  keywords: [
    "Navarijo\u2019s tree service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Maz tree service",
  ],
}

export default function NavarijosTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigNavarijosTreeServiceEn} />
}
