import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDolleyTreeServiceEn } from '../../../siteConfig.dolley-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDolleyTreeServiceEn.businessName} | ${siteConfigDolleyTreeServiceEn.tagline}`,
  description: `${siteConfigDolleyTreeServiceEn.tagline}. ${siteConfigDolleyTreeServiceEn.hero.subhead}`,
  keywords: [
    "Dolley tree service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function DolleyTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigDolleyTreeServiceEn} />
}
