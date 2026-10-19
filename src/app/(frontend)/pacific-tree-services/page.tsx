import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPacificTreeServicesEn } from '../../../siteConfig.pacific-tree-services.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPacificTreeServicesEn.businessName} | ${siteConfigPacificTreeServicesEn.tagline}`,
  description: `${siteConfigPacificTreeServicesEn.tagline}. ${siteConfigPacificTreeServicesEn.hero.subhead}`,
  keywords: [
    "Pacific Tree Services",
    "tree removal Tacoma WA",
    "tree service Tacoma",
    "stump grinding Tacoma",
    "emergency tree service 98418",
    "Will tree service",
  ],
}

export default function PacificTreeServicesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigPacificTreeServicesEn} />
}
