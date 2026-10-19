import React from 'react'
import type { Metadata } from 'next'
import { siteConfigColumbusEn } from '../../../siteConfig.columbus.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigColumbusEn.businessName} | ${siteConfigColumbusEn.tagline}`,
  description: `${siteConfigColumbusEn.tagline}. ${siteConfigColumbusEn.hero.subhead}`,
  keywords: [
    "Columbus Georgia Tree Removal",
    "tree removal Columbus GA",
    "tree service Columbus",
    "stump grinding Columbus",
    "emergency tree service 31904",
    "Russell tree service",
  ],
}

export default function ColumbusEnglishPage() {
  return <UniversalCompanyPage config={siteConfigColumbusEn} />
}
