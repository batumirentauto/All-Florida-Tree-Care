import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWoodfellasEn } from '../../../siteConfig.woodfellas.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWoodfellasEn.businessName} | ${siteConfigWoodfellasEn.tagline}`,
  description: `${siteConfigWoodfellasEn.tagline}. ${siteConfigWoodfellasEn.hero.subhead}`,
  keywords: [
    "WoodFellas Tree Service",
    "tree removal Johnson City TN",
    "tree service Johnson City",
    "stump grinding Johnson City",
    "emergency tree service 37604",
    "John tree service",
  ],
}

export default function WoodfellasEnglishPage() {
  return <UniversalCompanyPage config={siteConfigWoodfellasEn} />
}
