import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPiedmontTreeExpertsEn } from '../../../siteConfig.piedmont-tree-experts.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPiedmontTreeExpertsEn.businessName} | ${siteConfigPiedmontTreeExpertsEn.tagline}`,
  description: `${siteConfigPiedmontTreeExpertsEn.tagline}. ${siteConfigPiedmontTreeExpertsEn.hero.subhead}`,
  keywords: [
    "Piedmont Tree Experts",
    "tree removal Mint Hill NC",
    "tree service Mint Hill",
    "stump grinding Mint Hill",
    "emergency tree service 28227",
    "Bob tree service",
  ],
}

export default function PiedmontTreeExpertsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigPiedmontTreeExpertsEn} />
}
