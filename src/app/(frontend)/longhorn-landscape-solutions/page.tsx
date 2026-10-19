import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLonghornLandscapeSolutionsEn } from '../../../siteConfig.longhorn-landscape-solutions.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLonghornLandscapeSolutionsEn.businessName} | ${siteConfigLonghornLandscapeSolutionsEn.tagline}`,
  description: `${siteConfigLonghornLandscapeSolutionsEn.tagline}. ${siteConfigLonghornLandscapeSolutionsEn.hero.subhead}`,
  keywords: [
    "Longhorn Landscape Solutions LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function LonghornLandscapeSolutionsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigLonghornLandscapeSolutionsEn} />
}
