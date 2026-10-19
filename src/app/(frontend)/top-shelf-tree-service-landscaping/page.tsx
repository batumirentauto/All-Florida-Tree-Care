import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTopShelfTreeServiceLandscapingEn } from '../../../siteConfig.top-shelf-tree-service-landscaping.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTopShelfTreeServiceLandscapingEn.businessName} | ${siteConfigTopShelfTreeServiceLandscapingEn.tagline}`,
  description: `${siteConfigTopShelfTreeServiceLandscapingEn.tagline}. ${siteConfigTopShelfTreeServiceLandscapingEn.hero.subhead}`,
  keywords: [
    "Top Shelf Tree Service & Landscaping",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Pat tree service",
  ],
}

export default function TopShelfTreeServiceLandscapingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTopShelfTreeServiceLandscapingEn} />
}
