import React from 'react'
import type { Metadata } from 'next'
import { siteConfigKristianTreeServiceEn } from '../../../siteConfig.kristian-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigKristianTreeServiceEn.businessName} | ${siteConfigKristianTreeServiceEn.tagline}`,
  description: `${siteConfigKristianTreeServiceEn.tagline}. ${siteConfigKristianTreeServiceEn.hero.subhead}`,
  keywords: [
    "Kristian Tree Service",
    "tree removal Charlotte NC",
    "tree service Charlotte",
    "stump grinding Charlotte",
    "emergency tree service 28215",
    "Lead Arborist tree service",
  ],
}

export default function KristianTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigKristianTreeServiceEn} />
}
