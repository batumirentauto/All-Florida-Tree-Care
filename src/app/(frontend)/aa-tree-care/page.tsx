import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAaTreeCareEn } from '../../../siteConfig.aa-tree-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAaTreeCareEn.businessName} | ${siteConfigAaTreeCareEn.tagline}`,
  description: `${siteConfigAaTreeCareEn.tagline}. ${siteConfigAaTreeCareEn.hero.subhead}`,
  keywords: [
    "A&A Tree Care",
    "tree removal Jacksonville FL",
    "tree service Jacksonville",
    "stump grinding Jacksonville",
    "emergency tree service 32254",
    "Lead Arborist tree service",
  ],
}

export default function AaTreeCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAaTreeCareEn} />
}
