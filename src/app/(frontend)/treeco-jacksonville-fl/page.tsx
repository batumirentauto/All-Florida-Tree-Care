import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreecoJacksonvilleFlEn } from '../../../siteConfig.treeco-jacksonville-fl.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreecoJacksonvilleFlEn.businessName} | ${siteConfigTreecoJacksonvilleFlEn.tagline}`,
  description: `${siteConfigTreecoJacksonvilleFlEn.tagline}. ${siteConfigTreecoJacksonvilleFlEn.hero.subhead}`,
  keywords: [
    "Treeco Jacksonville FL",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Michael tree service",
  ],
}

export default function TreecoJacksonvilleFlEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreecoJacksonvilleFlEn} />
}
