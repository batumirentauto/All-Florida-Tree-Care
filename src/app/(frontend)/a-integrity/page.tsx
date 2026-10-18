import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAIntegrityEn } from '../../../siteConfig.a-integrity.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAIntegrityEn.businessName} | ${siteConfigAIntegrityEn.tagline}`,
  description: `${siteConfigAIntegrityEn.tagline}. ${siteConfigAIntegrityEn.hero.subhead}`,
  keywords: [
    "A Integrity Tree Surgeons Inc",
    "tree removal Jacksonville FL",
    "tree service Jacksonville",
    "stump grinding Jacksonville",
    "emergency tree service 32216",
    "Steve tree service",
  ],
}

export default function AIntegrityEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAIntegrityEn} />
}
