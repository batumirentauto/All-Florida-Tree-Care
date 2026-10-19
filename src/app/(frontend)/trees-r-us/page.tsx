import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreesRUsEn } from '../../../siteConfig.trees-r-us.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreesRUsEn.businessName} | ${siteConfigTreesRUsEn.tagline}`,
  description: `${siteConfigTreesRUsEn.tagline}. ${siteConfigTreesRUsEn.hero.subhead}`,
  keywords: [
    "Trees R Us",
    "tree removal Austin TX",
    "tree service Austin",
    "stump grinding Austin",
    "emergency tree service 78750",
    "Lead Arborist tree service",
  ],
}

export default function TreesRUsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreesRUsEn} />
}
