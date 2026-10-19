import React from 'react'
import type { Metadata } from 'next'
import { siteConfigErTreeServicesOfPinellasRu } from '../../../../siteConfig.er-tree-services-of-pinellas.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigErTreeServicesOfPinellasRu.businessName} | ${siteConfigErTreeServicesOfPinellasRu.tagline}`,
  description: `${siteConfigErTreeServicesOfPinellasRu.tagline}. ${siteConfigErTreeServicesOfPinellasRu.hero.subhead}`,
}

export default function ErTreeServicesOfPinellasRussianPage() {
  return <UniversalCompanyPage config={siteConfigErTreeServicesOfPinellasRu} />
}
