import React from 'react'
import type { Metadata } from 'next'
import { siteConfigChapmansTreeServiceIncEn } from '../../../siteConfig.chapmans-tree-service-inc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigChapmansTreeServiceIncEn.businessName} | ${siteConfigChapmansTreeServiceIncEn.tagline}`,
  description: `${siteConfigChapmansTreeServiceIncEn.tagline}. ${siteConfigChapmansTreeServiceIncEn.hero.subhead}`,
  keywords: [
    "Chapman's Tree Service Inc.",
    "tree removal Marietta GA",
    "tree service Marietta",
    "stump grinding Marietta",
    "emergency tree service 30062",
    "Lead Arborist tree service",
  ],
}

export default function ChapmansTreeServiceIncEnglishPage() {
  return <UniversalCompanyPage config={siteConfigChapmansTreeServiceIncEn} />
}
