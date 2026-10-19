import React from 'react'
import type { Metadata } from 'next'
import { siteConfigStumps2GoEn } from '../../../siteConfig.stumps-2-go.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigStumps2GoEn.businessName} | ${siteConfigStumps2GoEn.tagline}`,
  description: `${siteConfigStumps2GoEn.tagline}. ${siteConfigStumps2GoEn.hero.subhead}`,
  keywords: [
    "Stumps 2 Go",
    "tree removal Huntersville NC",
    "tree service Huntersville",
    "stump grinding Huntersville",
    "emergency tree service 28078",
    "John tree service",
  ],
}

export default function Stumps2GoEnglishPage() {
  return <UniversalCompanyPage config={siteConfigStumps2GoEn} />
}
