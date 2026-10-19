import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJesseScottsEn } from '../../../siteConfig.jesse-scotts.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJesseScottsEn.businessName} | ${siteConfigJesseScottsEn.tagline}`,
  description: `${siteConfigJesseScottsEn.tagline}. ${siteConfigJesseScottsEn.hero.subhead}`,
  keywords: [
    "Jesse Scotts",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Jesse tree service",
  ],
}

export default function JesseScottsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigJesseScottsEn} />
}
