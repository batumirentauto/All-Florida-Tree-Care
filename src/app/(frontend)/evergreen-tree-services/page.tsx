import React from 'react'
import type { Metadata } from 'next'
import { siteConfigEvergreenTreeServicesEn } from '../../../siteConfig.evergreen-tree-services.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigEvergreenTreeServicesEn.businessName} | ${siteConfigEvergreenTreeServicesEn.tagline}`,
  description: `${siteConfigEvergreenTreeServicesEn.tagline}. ${siteConfigEvergreenTreeServicesEn.hero.subhead}`,
  keywords: [
    "Evergreen Tree Services",
    "tree removal Sherwood OR",
    "tree service Sherwood",
    "stump grinding Sherwood",
    "emergency tree service 97140",
    "Eddie tree service",
  ],
}

export default function EvergreenTreeServicesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigEvergreenTreeServicesEn} />
}
