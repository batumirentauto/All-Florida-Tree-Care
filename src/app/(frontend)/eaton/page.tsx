import React from 'react'
import type { Metadata } from 'next'
import { siteConfigEatonEn } from '../../../siteConfig.eaton.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigEatonEn.businessName} | ${siteConfigEatonEn.tagline}`,
  description: `${siteConfigEatonEn.tagline}. ${siteConfigEatonEn.hero.subhead}`,
  keywords: [
    "Eaton Tree Removal",
    "tree removal Blue Ridge GA",
    "tree service Blue Ridge",
    "stump grinding Blue Ridge",
    "emergency tree service 30513",
    "Chris tree service",
  ],
}

export default function EatonEnglishPage() {
  return <UniversalCompanyPage config={siteConfigEatonEn} />
}
