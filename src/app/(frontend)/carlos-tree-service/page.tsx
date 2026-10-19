import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCarlosTreeServiceEn } from '../../../siteConfig.carlos-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCarlosTreeServiceEn.businessName} | ${siteConfigCarlosTreeServiceEn.tagline}`,
  description: `${siteConfigCarlosTreeServiceEn.tagline}. ${siteConfigCarlosTreeServiceEn.hero.subhead}`,
  keywords: [
    "Carlos Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Carlos tree service",
  ],
}

export default function CarlosTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCarlosTreeServiceEn} />
}
