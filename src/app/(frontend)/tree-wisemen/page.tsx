import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeWisemenEn } from '../../../siteConfig.tree-wisemen.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeWisemenEn.businessName} | ${siteConfigTreeWisemenEn.tagline}`,
  description: `${siteConfigTreeWisemenEn.tagline}. ${siteConfigTreeWisemenEn.hero.subhead}`,
  keywords: [
    "Tree Wisemen Upstate",
    "tree removal Anderson SC",
    "tree service Anderson",
    "stump grinding Anderson",
    "emergency tree service 29621",
    "Evan tree service",
  ],
}

export default function TreeWisemenEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreeWisemenEn} />
}
