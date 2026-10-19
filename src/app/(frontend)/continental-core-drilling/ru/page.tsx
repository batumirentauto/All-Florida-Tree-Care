import React from 'react'
import type { Metadata } from 'next'
import { siteConfigContinentalCoreDrillingRu } from '../../../../siteConfig.continental-core-drilling.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigContinentalCoreDrillingRu.businessName} | ${siteConfigContinentalCoreDrillingRu.tagline}`,
  description: `${siteConfigContinentalCoreDrillingRu.tagline}. ${siteConfigContinentalCoreDrillingRu.hero.subhead}`,
}

export default function ContinentalCoreDrillingRussianPage() {
  return <UniversalCompanyPage config={siteConfigContinentalCoreDrillingRu} />
}
