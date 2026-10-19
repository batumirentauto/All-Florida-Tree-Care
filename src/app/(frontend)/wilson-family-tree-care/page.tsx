import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWilsonFamilyTreeCareEn } from '../../../siteConfig.wilson-family-tree-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWilsonFamilyTreeCareEn.businessName} | ${siteConfigWilsonFamilyTreeCareEn.tagline}`,
  description: `${siteConfigWilsonFamilyTreeCareEn.tagline}. ${siteConfigWilsonFamilyTreeCareEn.hero.subhead}`,
  keywords: [
    "Wilson Family Tree Care, LLC",
    "tree removal Green Cove Springs FL",
    "tree service Green Cove Springs",
    "stump grinding Green Cove Springs",
    "emergency tree service 32043",
    "Daniel tree service",
  ],
}

export default function WilsonFamilyTreeCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigWilsonFamilyTreeCareEn} />
}
