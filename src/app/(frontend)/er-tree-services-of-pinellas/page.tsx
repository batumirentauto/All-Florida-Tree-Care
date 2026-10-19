import React from 'react'
import type { Metadata } from 'next'
import { siteConfigErTreeServicesOfPinellasEn } from '../../../siteConfig.er-tree-services-of-pinellas.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigErTreeServicesOfPinellasEn.businessName} | ${siteConfigErTreeServicesOfPinellasEn.tagline}`,
  description: `${siteConfigErTreeServicesOfPinellasEn.tagline}. ${siteConfigErTreeServicesOfPinellasEn.hero.subhead}`,
  keywords: [
    "ER TREE SERVICES OF PINELLAS",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Ernest tree service",
  ],
}

export default function ErTreeServicesOfPinellasEnglishPage() {
  return <UniversalCompanyPage config={siteConfigErTreeServicesOfPinellasEn} />
}
