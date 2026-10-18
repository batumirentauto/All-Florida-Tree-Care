import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAllensEn } from '../../../siteConfig.allens.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAllensEn.businessName} | ${siteConfigAllensEn.tagline}`,
  description: `${siteConfigAllensEn.tagline}. ${siteConfigAllensEn.hero.subhead}`,
  keywords: [
    "Allen's Tree Service",
    "tree removal Youngsville NC",
    "tree service Youngsville",
    "stump grinding Youngsville",
    "emergency tree service 27596",
    "Mr. Allen tree service",
  ],
}

export default function AllensEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAllensEn} />
}
