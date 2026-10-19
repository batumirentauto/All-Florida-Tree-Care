import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRKTreeServiceEn } from '../../../siteConfig.r-k-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRKTreeServiceEn.businessName} | ${siteConfigRKTreeServiceEn.tagline}`,
  description: `${siteConfigRKTreeServiceEn.tagline}. ${siteConfigRKTreeServiceEn.hero.subhead}`,
  keywords: [
    "R & K Tree Service",
    "tree removal Weaverville NC",
    "tree service Weaverville",
    "stump grinding Weaverville",
    "emergency tree service 28787",
    "Dave tree service",
  ],
}

export default function RKTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigRKTreeServiceEn} />
}
