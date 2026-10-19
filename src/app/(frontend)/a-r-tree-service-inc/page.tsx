import React from 'react'
import type { Metadata } from 'next'
import { siteConfigARTreeServiceIncEn } from '../../../siteConfig.a-r-tree-service-inc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigARTreeServiceIncEn.businessName} | ${siteConfigARTreeServiceIncEn.tagline}`,
  description: `${siteConfigARTreeServiceIncEn.tagline}. ${siteConfigARTreeServiceIncEn.hero.subhead}`,
  keywords: [
    "A & R Tree Service, Inc",
    "tree removal Richmond Hill GA",
    "tree service Richmond Hill",
    "stump grinding Richmond Hill",
    "emergency tree service 31324",
    "Lead Arborist tree service",
  ],
}

export default function ARTreeServiceIncEnglishPage() {
  return <UniversalCompanyPage config={siteConfigARTreeServiceIncEn} />
}
