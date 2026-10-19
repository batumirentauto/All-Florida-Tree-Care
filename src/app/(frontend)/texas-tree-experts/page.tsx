import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTexasTreeExpertsEn } from '../../../siteConfig.texas-tree-experts.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTexasTreeExpertsEn.businessName} | ${siteConfigTexasTreeExpertsEn.tagline}`,
  description: `${siteConfigTexasTreeExpertsEn.tagline}. ${siteConfigTexasTreeExpertsEn.hero.subhead}`,
  keywords: [
    "Texas Tree Experts",
    "tree removal Manchaca TX",
    "tree service Manchaca",
    "stump grinding Manchaca",
    "emergency tree service 78652",
    "Lead Arborist tree service",
  ],
}

export default function TexasTreeExpertsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTexasTreeExpertsEn} />
}
