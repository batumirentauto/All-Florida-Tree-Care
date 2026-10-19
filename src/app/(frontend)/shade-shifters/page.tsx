import React from 'react'
import type { Metadata } from 'next'
import { siteConfigShadeShiftersEn } from '../../../siteConfig.shade-shifters.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigShadeShiftersEn.businessName} | ${siteConfigShadeShiftersEn.tagline}`,
  description: `${siteConfigShadeShiftersEn.tagline}. ${siteConfigShadeShiftersEn.hero.subhead}`,
  keywords: [
    "Shade Shifters Tree Service",
    "tree removal Gainesville FL",
    "tree service Gainesville",
    "stump grinding Gainesville",
    "emergency tree service 32608",
    "John tree service",
  ],
}

export default function ShadeShiftersEnglishPage() {
  return <UniversalCompanyPage config={siteConfigShadeShiftersEn} />
}
