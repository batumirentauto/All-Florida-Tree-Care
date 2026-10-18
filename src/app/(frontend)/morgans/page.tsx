import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMorgansEn } from '../../../siteConfig.morgans.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMorgansEn.businessName} | ${siteConfigMorgansEn.tagline}`,
  description: `${siteConfigMorgansEn.tagline}. ${siteConfigMorgansEn.hero.subhead}`,
  keywords: [
    "Morgan's Tree & Stump Removal",
    "tree removal Rock Hill SC",
    "tree service Rock Hill",
    "stump grinding Rock Hill",
    "emergency tree service 29730",
    "Mike Morgan tree service",
  ],
}

export default function MorgansEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMorgansEn} />
}
