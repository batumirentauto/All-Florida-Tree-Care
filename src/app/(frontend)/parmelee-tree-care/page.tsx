import React from 'react'
import type { Metadata } from 'next'
import { siteConfigParmeleeTreeCareEn } from '../../../siteConfig.parmelee-tree-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigParmeleeTreeCareEn.businessName} | ${siteConfigParmeleeTreeCareEn.tagline}`,
  description: `${siteConfigParmeleeTreeCareEn.tagline}. ${siteConfigParmeleeTreeCareEn.hero.subhead}`,
  keywords: [
    "Parmelee Tree Care",
    "tree removal St. Petersburg FL",
    "tree service St. Petersburg",
    "stump grinding St. Petersburg",
    "emergency tree service 33710",
    "Lead Arborist tree service",
  ],
}

export default function ParmeleeTreeCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigParmeleeTreeCareEn} />
}
