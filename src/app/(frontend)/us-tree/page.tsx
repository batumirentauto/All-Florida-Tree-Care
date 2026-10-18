import React from 'react'
import type { Metadata } from 'next'
import { siteConfigUsTreeEn } from '../../../siteConfig.us-tree.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigUsTreeEn.businessName} | ${siteConfigUsTreeEn.tagline}`,
  description: `${siteConfigUsTreeEn.tagline}. ${siteConfigUsTreeEn.hero.subhead}`,
  keywords: [
    "US TREE REMOVAL",
    "tree removal Dearborn MI",
    "tree service Dearborn",
    "stump grinding Dearborn",
    "emergency tree service 48126",
    "Cass tree service",
  ],
}

export default function UsTreeEnglishPage() {
  return <UniversalCompanyPage config={siteConfigUsTreeEn} />
}
