import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLeflerTreeServiceEn } from '../../../siteConfig.lefler-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLeflerTreeServiceEn.businessName} | ${siteConfigLeflerTreeServiceEn.tagline}`,
  description: `${siteConfigLeflerTreeServiceEn.tagline}. ${siteConfigLeflerTreeServiceEn.hero.subhead}`,
  keywords: [
    "Lefler Tree Service",
    "tree removal Port Orchard WA",
    "tree service Port Orchard",
    "stump grinding Port Orchard",
    "emergency tree service 98366",
    "Lefler tree service",
  ],
}

export default function LeflerTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigLeflerTreeServiceEn} />
}
