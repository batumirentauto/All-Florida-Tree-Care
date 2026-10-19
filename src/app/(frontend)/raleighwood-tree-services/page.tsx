import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRaleighwoodTreeServicesEn } from '../../../siteConfig.raleighwood-tree-services.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRaleighwoodTreeServicesEn.businessName} | ${siteConfigRaleighwoodTreeServicesEn.tagline}`,
  description: `${siteConfigRaleighwoodTreeServicesEn.tagline}. ${siteConfigRaleighwoodTreeServicesEn.hero.subhead}`,
  keywords: [
    "Raleighwood Tree Services, LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function RaleighwoodTreeServicesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigRaleighwoodTreeServicesEn} />
}
