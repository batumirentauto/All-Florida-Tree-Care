import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAffordableEn } from '../../../siteConfig.affordable.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAffordableEn.businessName} | ${siteConfigAffordableEn.tagline}`,
  description: `${siteConfigAffordableEn.tagline}. ${siteConfigAffordableEn.hero.subhead}`,
  keywords: [
    "Affordable Tree and Palm Tree Services",
    "tree removal Sacramento CA",
    "tree service Sacramento",
    "stump grinding Sacramento",
    "emergency tree service 95822",
    "Francisco tree service",
  ],
}

export default function AffordableEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAffordableEn} />
}
