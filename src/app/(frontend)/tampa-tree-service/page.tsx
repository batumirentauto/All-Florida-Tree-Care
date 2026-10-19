import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTampaTreeServiceEn } from '../../../siteConfig.tampa-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTampaTreeServiceEn.businessName} | ${siteConfigTampaTreeServiceEn.tagline}`,
  description: `${siteConfigTampaTreeServiceEn.tagline}. ${siteConfigTampaTreeServiceEn.hero.subhead}`,
  keywords: [
    "Tampa Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function TampaTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTampaTreeServiceEn} />
}
