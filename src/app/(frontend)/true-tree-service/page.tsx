import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTrueTreeServiceEn } from '../../../siteConfig.true-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTrueTreeServiceEn.businessName} | ${siteConfigTrueTreeServiceEn.tagline}`,
  description: `${siteConfigTrueTreeServiceEn.tagline}. ${siteConfigTrueTreeServiceEn.hero.subhead}`,
  keywords: [
    "True Tree Service",
    "tree removal Miami FL",
    "tree service Miami",
    "stump grinding Miami",
    "emergency tree service 33125",
    "Lead Arborist tree service",
  ],
}

export default function TrueTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTrueTreeServiceEn} />
}
