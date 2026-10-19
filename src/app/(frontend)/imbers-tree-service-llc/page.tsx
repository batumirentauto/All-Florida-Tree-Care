import React from 'react'
import type { Metadata } from 'next'
import { siteConfigImbersTreeServiceLlcEn } from '../../../siteConfig.imbers-tree-service-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigImbersTreeServiceLlcEn.businessName} | ${siteConfigImbersTreeServiceLlcEn.tagline}`,
  description: `${siteConfigImbersTreeServiceLlcEn.tagline}. ${siteConfigImbersTreeServiceLlcEn.hero.subhead}`,
  keywords: [
    "Imber's Tree Service LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function ImbersTreeServiceLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigImbersTreeServiceLlcEn} />
}
