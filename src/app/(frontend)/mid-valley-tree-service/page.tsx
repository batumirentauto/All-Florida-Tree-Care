import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMidValleyTreeServiceEn } from '../../../siteConfig.mid-valley-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMidValleyTreeServiceEn.businessName} | ${siteConfigMidValleyTreeServiceEn.tagline}`,
  description: `${siteConfigMidValleyTreeServiceEn.tagline}. ${siteConfigMidValleyTreeServiceEn.hero.subhead}`,
  keywords: [
    "Mid-Valley Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function MidValleyTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMidValleyTreeServiceEn} />
}
