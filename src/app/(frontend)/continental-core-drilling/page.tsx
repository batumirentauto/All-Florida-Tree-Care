import React from 'react'
import type { Metadata } from 'next'
import { siteConfigContinentalCoreDrillingEn } from '../../../siteConfig.continental-core-drilling.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigContinentalCoreDrillingEn.businessName} | ${siteConfigContinentalCoreDrillingEn.tagline}`,
  description: `${siteConfigContinentalCoreDrillingEn.tagline}. ${siteConfigContinentalCoreDrillingEn.hero.subhead}`,
  keywords: [
    "Continental Core Drilling & Tree Service",
    "tree removal Buena Ventura Lakes FL",
    "tree service Buena Ventura Lakes",
    "stump grinding Buena Ventura Lakes",
    "emergency tree service 34743",
    "Juan tree service",
  ],
}

export default function ContinentalCoreDrillingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigContinentalCoreDrillingEn} />
}
