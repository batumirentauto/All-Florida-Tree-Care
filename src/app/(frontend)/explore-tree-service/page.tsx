import React from 'react'
import type { Metadata } from 'next'
import { siteConfigExploreTreeServiceEn } from '../../../siteConfig.explore-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigExploreTreeServiceEn.businessName} | ${siteConfigExploreTreeServiceEn.tagline}`,
  description: `${siteConfigExploreTreeServiceEn.tagline}. ${siteConfigExploreTreeServiceEn.hero.subhead}`,
  keywords: [
    "Explore Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Javier tree service",
  ],
}

export default function ExploreTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigExploreTreeServiceEn} />
}
