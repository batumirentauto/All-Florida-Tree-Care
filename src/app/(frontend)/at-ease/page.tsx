import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAtEaseEn } from '../../../siteConfig.at-ease.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAtEaseEn.businessName} | ${siteConfigAtEaseEn.tagline}`,
  description: `${siteConfigAtEaseEn.tagline}. ${siteConfigAtEaseEn.hero.subhead}`,
  keywords: [
    "At Ease Land & Tree Services LLC",
    "tree removal Cairo GA",
    "tree service Cairo",
    "stump grinding Cairo",
    "emergency tree service 39828",
    "John tree service",
  ],
}

export default function AtEaseEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAtEaseEn} />
}
