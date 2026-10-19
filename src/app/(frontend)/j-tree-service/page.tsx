import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJTreeServiceEn } from '../../../siteConfig.j-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJTreeServiceEn.businessName} | ${siteConfigJTreeServiceEn.tagline}`,
  description: `${siteConfigJTreeServiceEn.tagline}. ${siteConfigJTreeServiceEn.hero.subhead}`,
  keywords: [
    "J Tree Service",
    "tree removal Charlotte NC",
    "tree service Charlotte",
    "stump grinding Charlotte",
    "emergency tree service 28269",
    "Lead Arborist tree service",
  ],
}

export default function JTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigJTreeServiceEn} />
}
