import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJwPalmTreeServicesLlcEn } from '../../../siteConfig.jw-palm-tree-services-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJwPalmTreeServicesLlcEn.businessName} | ${siteConfigJwPalmTreeServicesLlcEn.tagline}`,
  description: `${siteConfigJwPalmTreeServicesLlcEn.tagline}. ${siteConfigJwPalmTreeServicesLlcEn.hero.subhead}`,
  keywords: [
    "JW Palm Tree Services LLC",
    "tree removal Pensacola FL",
    "tree service Pensacola",
    "stump grinding Pensacola",
    "emergency tree service 32534",
    "Jonathan tree service",
  ],
}

export default function JwPalmTreeServicesLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigJwPalmTreeServicesLlcEn} />
}
