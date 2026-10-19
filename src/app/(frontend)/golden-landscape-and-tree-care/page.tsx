import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGoldenLandscapeAndTreeCareEn } from '../../../siteConfig.golden-landscape-and-tree-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGoldenLandscapeAndTreeCareEn.businessName} | ${siteConfigGoldenLandscapeAndTreeCareEn.tagline}`,
  description: `${siteConfigGoldenLandscapeAndTreeCareEn.tagline}. ${siteConfigGoldenLandscapeAndTreeCareEn.hero.subhead}`,
  keywords: [
    "Golden landscape and tree care",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Dara tree service",
  ],
}

export default function GoldenLandscapeAndTreeCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGoldenLandscapeAndTreeCareEn} />
}
