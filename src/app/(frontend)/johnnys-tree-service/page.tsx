import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJohnnysTreeServiceEn } from '../../../siteConfig.johnnys-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJohnnysTreeServiceEn.businessName} | ${siteConfigJohnnysTreeServiceEn.tagline}`,
  description: `${siteConfigJohnnysTreeServiceEn.tagline}. ${siteConfigJohnnysTreeServiceEn.hero.subhead}`,
  keywords: [
    "Johnny's Tree Service",
    "tree removal Dallas TX",
    "tree service Dallas",
    "stump grinding Dallas",
    "emergency tree service 75203",
    "Johnny tree service",
  ],
}

export default function JohnnysTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigJohnnysTreeServiceEn} />
}
