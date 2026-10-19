import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBigfootForestryRockHillEn } from '../../../siteConfig.bigfoot-forestry-rock-hill.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBigfootForestryRockHillEn.businessName} | ${siteConfigBigfootForestryRockHillEn.tagline}`,
  description: `${siteConfigBigfootForestryRockHillEn.tagline}. ${siteConfigBigfootForestryRockHillEn.hero.subhead}`,
  keywords: [
    "Bigfoot Forestry - Rock Hill",
    "tree removal Rock Hill SC",
    "tree service Rock Hill",
    "stump grinding Rock Hill",
    "emergency tree service 29732",
    "Ben tree service",
  ],
}

export default function BigfootForestryRockHillEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBigfootForestryRockHillEn} />
}
