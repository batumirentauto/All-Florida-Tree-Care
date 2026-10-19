import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeRescueLlcEn } from '../../../siteConfig.tree-rescue-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeRescueLlcEn.businessName} | ${siteConfigTreeRescueLlcEn.tagline}`,
  description: `${siteConfigTreeRescueLlcEn.tagline}. ${siteConfigTreeRescueLlcEn.hero.subhead}`,
  keywords: [
    "Tree Rescue, LLC",
    "tree removal St. Petersburg FL",
    "tree service St. Petersburg",
    "stump grinding St. Petersburg",
    "emergency tree service 33713",
    "Jason tree service",
  ],
}

export default function TreeRescueLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreeRescueLlcEn} />
}
