import React from 'react'
import type { Metadata } from 'next'
import { siteConfigValeriosTreeServiceMoreEn } from '../../../siteConfig.valerios-tree-service-more.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigValeriosTreeServiceMoreEn.businessName} | ${siteConfigValeriosTreeServiceMoreEn.tagline}`,
  description: `${siteConfigValeriosTreeServiceMoreEn.tagline}. ${siteConfigValeriosTreeServiceMoreEn.hero.subhead}`,
  keywords: [
    "Valerio's Tree Service & More",
    "tree removal Houston TX",
    "tree service Houston",
    "stump grinding Houston",
    "emergency tree service 77028",
    "Lead Arborist tree service",
  ],
}

export default function ValeriosTreeServiceMoreEnglishPage() {
  return <UniversalCompanyPage config={siteConfigValeriosTreeServiceMoreEn} />
}
