import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPalmettoLandServicesEn } from '../../../siteConfig.palmetto-land-services.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPalmettoLandServicesEn.businessName} | ${siteConfigPalmettoLandServicesEn.tagline}`,
  description: `${siteConfigPalmettoLandServicesEn.tagline}. ${siteConfigPalmettoLandServicesEn.hero.subhead}`,
  keywords: [
    "Palmetto Land Services",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Curtis tree service",
  ],
}

export default function PalmettoLandServicesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigPalmettoLandServicesEn} />
}
