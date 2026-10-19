import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAffordableArborCareEn } from '../../../siteConfig.affordable-arbor-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAffordableArborCareEn.businessName} | ${siteConfigAffordableArborCareEn.tagline}`,
  description: `${siteConfigAffordableArborCareEn.tagline}. ${siteConfigAffordableArborCareEn.hero.subhead}`,
  keywords: [
    "Affordable Arbor Care",
    "tree removal Orlando FL",
    "tree service Orlando",
    "stump grinding Orlando",
    "emergency tree service 32807",
    "Joe tree service",
  ],
}

export default function AffordableArborCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAffordableArborCareEn} />
}
