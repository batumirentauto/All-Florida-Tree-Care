import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGrandOaksTreeServiceEn } from '../../../siteConfig.grand-oaks-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGrandOaksTreeServiceEn.businessName} | ${siteConfigGrandOaksTreeServiceEn.tagline}`,
  description: `${siteConfigGrandOaksTreeServiceEn.tagline}. ${siteConfigGrandOaksTreeServiceEn.hero.subhead}`,
  keywords: [
    "Grand Oaks Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function GrandOaksTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGrandOaksTreeServiceEn} />
}
