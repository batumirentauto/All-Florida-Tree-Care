import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHighStandardsTreeCareEn } from '../../../siteConfig.high-standards-tree-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHighStandardsTreeCareEn.businessName} | ${siteConfigHighStandardsTreeCareEn.tagline}`,
  description: `${siteConfigHighStandardsTreeCareEn.tagline}. ${siteConfigHighStandardsTreeCareEn.hero.subhead}`,
  keywords: [
    "High Standards Tree Care LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function HighStandardsTreeCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigHighStandardsTreeCareEn} />
}
