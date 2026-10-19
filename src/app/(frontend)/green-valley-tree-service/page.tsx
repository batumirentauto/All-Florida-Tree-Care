import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGreenValleyTreeServiceEn } from '../../../siteConfig.green-valley-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGreenValleyTreeServiceEn.businessName} | ${siteConfigGreenValleyTreeServiceEn.tagline}`,
  description: `${siteConfigGreenValleyTreeServiceEn.tagline}. ${siteConfigGreenValleyTreeServiceEn.hero.subhead}`,
  keywords: [
    "Green Valley Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function GreenValleyTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGreenValleyTreeServiceEn} />
}
