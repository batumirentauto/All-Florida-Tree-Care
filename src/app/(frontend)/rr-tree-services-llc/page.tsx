import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRrTreeServicesLlcEn } from '../../../siteConfig.rr-tree-services-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRrTreeServicesLlcEn.businessName} | ${siteConfigRrTreeServicesLlcEn.tagline}`,
  description: `${siteConfigRrTreeServicesLlcEn.tagline}. ${siteConfigRrTreeServicesLlcEn.hero.subhead}`,
  keywords: [
    "R&R Tree Services LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Jesus tree service",
  ],
}

export default function RrTreeServicesLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigRrTreeServicesLlcEn} />
}
