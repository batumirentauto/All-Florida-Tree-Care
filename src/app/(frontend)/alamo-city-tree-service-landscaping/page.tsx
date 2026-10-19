import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAlamoCityTreeServiceLandscapingEn } from '../../../siteConfig.alamo-city-tree-service-landscaping.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAlamoCityTreeServiceLandscapingEn.businessName} | ${siteConfigAlamoCityTreeServiceLandscapingEn.tagline}`,
  description: `${siteConfigAlamoCityTreeServiceLandscapingEn.tagline}. ${siteConfigAlamoCityTreeServiceLandscapingEn.hero.subhead}`,
  keywords: [
    "Alamo City Tree Service & Landscaping",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Isaac tree service",
  ],
}

export default function AlamoCityTreeServiceLandscapingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAlamoCityTreeServiceLandscapingEn} />
}
