import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCleanCutEn } from '../../../siteConfig.clean-cut.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCleanCutEn.businessName} | ${siteConfigCleanCutEn.tagline}`,
  description: `${siteConfigCleanCutEn.tagline}. ${siteConfigCleanCutEn.hero.subhead}`,
  keywords: [
    "Clean Cut Tree Service",
    "tree removal Puyallup WA",
    "tree service Puyallup",
    "stump grinding Puyallup",
    "emergency tree service 98374",
    "Wade tree service",
  ],
}

export default function CleanCutEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCleanCutEn} />
}
