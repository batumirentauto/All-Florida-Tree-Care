import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTexasTreeAuthorityEn } from '../../../siteConfig.texas-tree-authority.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTexasTreeAuthorityEn.businessName} | ${siteConfigTexasTreeAuthorityEn.tagline}`,
  description: `${siteConfigTexasTreeAuthorityEn.tagline}. ${siteConfigTexasTreeAuthorityEn.hero.subhead}`,
  keywords: [
    "Texas Tree Authority",
    "tree removal San Antonio TX",
    "tree service San Antonio",
    "stump grinding San Antonio",
    "emergency tree service 78238",
    "Santos tree service",
  ],
}

export default function TexasTreeAuthorityEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTexasTreeAuthorityEn} />
}
