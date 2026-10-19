import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPalmettoLandServicesRu } from '../../../../siteConfig.palmetto-land-services.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPalmettoLandServicesRu.businessName} | ${siteConfigPalmettoLandServicesRu.tagline}`,
  description: `${siteConfigPalmettoLandServicesRu.tagline}. ${siteConfigPalmettoLandServicesRu.hero.subhead}`,
}

export default function PalmettoLandServicesRussianPage() {
  return <UniversalCompanyPage config={siteConfigPalmettoLandServicesRu} />
}
