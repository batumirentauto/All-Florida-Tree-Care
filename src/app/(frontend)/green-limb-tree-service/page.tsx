import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGreenLimbTreeServiceEn } from '../../../siteConfig.green-limb-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGreenLimbTreeServiceEn.businessName} | ${siteConfigGreenLimbTreeServiceEn.tagline}`,
  description: `${siteConfigGreenLimbTreeServiceEn.tagline}. ${siteConfigGreenLimbTreeServiceEn.hero.subhead}`,
  keywords: [
    "Green Limb Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Woan tree service",
  ],
}

export default function GreenLimbTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGreenLimbTreeServiceEn} />
}
