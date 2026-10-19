import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAsayTreeServiceEn } from '../../../siteConfig.asay-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAsayTreeServiceEn.businessName} | ${siteConfigAsayTreeServiceEn.tagline}`,
  description: `${siteConfigAsayTreeServiceEn.tagline}. ${siteConfigAsayTreeServiceEn.hero.subhead}`,
  keywords: [
    "Asay Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Asay tree service",
  ],
}

export default function AsayTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAsayTreeServiceEn} />
}
