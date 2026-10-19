import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAndersTreeServiceEn } from '../../../siteConfig.anders-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAndersTreeServiceEn.businessName} | ${siteConfigAndersTreeServiceEn.tagline}`,
  description: `${siteConfigAndersTreeServiceEn.tagline}. ${siteConfigAndersTreeServiceEn.hero.subhead}`,
  keywords: [
    "Anders Tree Service",
    "tree removal Weaverville NC",
    "tree service Weaverville",
    "stump grinding Weaverville",
    "emergency tree service 28787",
    "Michael tree service",
  ],
}

export default function AndersTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAndersTreeServiceEn} />
}
