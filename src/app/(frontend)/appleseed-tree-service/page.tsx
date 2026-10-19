import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAppleseedTreeServiceEn } from '../../../siteConfig.appleseed-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAppleseedTreeServiceEn.businessName} | ${siteConfigAppleseedTreeServiceEn.tagline}`,
  description: `${siteConfigAppleseedTreeServiceEn.tagline}. ${siteConfigAppleseedTreeServiceEn.hero.subhead}`,
  keywords: [
    "Appleseed Tree Service",
    "tree removal Atlanta GA",
    "tree service Atlanta",
    "stump grinding Atlanta",
    "emergency tree service 30317",
    "Robbie tree service",
  ],
}

export default function AppleseedTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAppleseedTreeServiceEn} />
}
