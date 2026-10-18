import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBrokenBranchEn } from '../../../siteConfig.broken-branch.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBrokenBranchEn.businessName} | ${siteConfigBrokenBranchEn.tagline}`,
  description: `${siteConfigBrokenBranchEn.tagline}. ${siteConfigBrokenBranchEn.hero.subhead}`,
  keywords: [
    "Broken Branch Tree Removal",
    "tree removal Broadalbin NY",
    "tree service Broadalbin",
    "stump grinding Broadalbin",
    "emergency tree service 12025",
    "Fred tree service",
  ],
}

export default function BrokenBranchEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBrokenBranchEn} />
}
