import React from 'react'
import type { Metadata } from 'next'
import { siteConfigFurstieEn } from '../../../siteConfig.furstie.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigFurstieEn.businessName} | ${siteConfigFurstieEn.tagline}`,
  description: `${siteConfigFurstieEn.tagline}. ${siteConfigFurstieEn.hero.subhead}`,
  keywords: [
    "Furstie Tree & Stump, LLC",
    "tree removal Efland NC",
    "tree service Efland",
    "stump grinding Efland",
    "emergency tree service 27243",
    "Nate Furstie tree service",
  ],
}

export default function FurstieEnglishPage() {
  return <UniversalCompanyPage config={siteConfigFurstieEn} />
}
