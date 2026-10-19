import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLawnworksEn } from '../../../siteConfig.lawnworks.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLawnworksEn.businessName} | ${siteConfigLawnworksEn.tagline}`,
  description: `${siteConfigLawnworksEn.tagline}. ${siteConfigLawnworksEn.hero.subhead}`,
  keywords: [
    "LawnWorks",
    "tree removal Macon GA",
    "tree service Macon",
    "stump grinding Macon",
    "emergency tree service 31216",
    "Rick tree service",
  ],
}

export default function LawnworksEnglishPage() {
  return <UniversalCompanyPage config={siteConfigLawnworksEn} />
}
