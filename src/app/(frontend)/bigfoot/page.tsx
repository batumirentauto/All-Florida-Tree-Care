import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBigfootEn } from '../../../siteConfig.bigfoot.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBigfootEn.businessName} | ${siteConfigBigfootEn.tagline}`,
  description: `${siteConfigBigfootEn.tagline}. ${siteConfigBigfootEn.hero.subhead}`,
  keywords: [
    "Bigfoot tree care",
    "tree removal Kent WA",
    "tree service Kent",
    "stump grinding Kent",
    "emergency tree service 98032",
    "Dave tree service",
  ],
}

export default function BigfootEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBigfootEn} />
}
