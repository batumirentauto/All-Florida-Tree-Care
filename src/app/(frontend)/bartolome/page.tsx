import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBartolomeEn } from '../../../siteConfig.bartolome.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBartolomeEn.businessName} | ${siteConfigBartolomeEn.tagline}`,
  description: `${siteConfigBartolomeEn.tagline}. ${siteConfigBartolomeEn.hero.subhead}`,
  keywords: [
    "Bartolome's Tree service",
    "tree removal Sanford NC",
    "tree service Sanford",
    "stump grinding Sanford",
    "emergency tree service 27330",
    "Bartolome tree service",
  ],
}

export default function BartolomeEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBartolomeEn} />
}
