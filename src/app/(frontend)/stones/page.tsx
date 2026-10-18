import React from 'react'
import type { Metadata } from 'next'
import { siteConfigStonesEn } from '../../../siteConfig.stones.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigStonesEn.businessName} | ${siteConfigStonesEn.tagline}`,
  description: `${siteConfigStonesEn.tagline}. ${siteConfigStonesEn.hero.subhead}`,
  keywords: [
    "Stone's Tree Service and Stump Grinding",
    "tree removal Taylors SC",
    "tree service Taylors",
    "stump grinding Taylors",
    "emergency tree service 29687",
    "Christian Stone tree service",
  ],
}

export default function StonesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigStonesEn} />
}
