import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDmTreeAndLandServicesEn } from '../../../siteConfig.dm-tree-and-land-services.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDmTreeAndLandServicesEn.businessName} | ${siteConfigDmTreeAndLandServicesEn.tagline}`,
  description: `${siteConfigDmTreeAndLandServicesEn.tagline}. ${siteConfigDmTreeAndLandServicesEn.hero.subhead}`,
  keywords: [
    "D&M Tree and Land Services, LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Him tree service",
  ],
}

export default function DmTreeAndLandServicesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigDmTreeAndLandServicesEn} />
}
