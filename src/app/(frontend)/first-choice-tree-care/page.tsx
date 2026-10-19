import React from 'react'
import type { Metadata } from 'next'
import { siteConfigFirstChoiceTreeCareEn } from '../../../siteConfig.first-choice-tree-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigFirstChoiceTreeCareEn.businessName} | ${siteConfigFirstChoiceTreeCareEn.tagline}`,
  description: `${siteConfigFirstChoiceTreeCareEn.tagline}. ${siteConfigFirstChoiceTreeCareEn.hero.subhead}`,
  keywords: [
    "First Choice Tree Care",
    "tree removal West Columbia SC",
    "tree service West Columbia",
    "stump grinding West Columbia",
    "emergency tree service 29170",
    "Daniel tree service",
  ],
}

export default function FirstChoiceTreeCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigFirstChoiceTreeCareEn} />
}
