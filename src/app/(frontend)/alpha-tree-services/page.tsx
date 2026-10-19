import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAlphaTreeServicesEn } from '../../../siteConfig.alpha-tree-services.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAlphaTreeServicesEn.businessName} | ${siteConfigAlphaTreeServicesEn.tagline}`,
  description: `${siteConfigAlphaTreeServicesEn.tagline}. ${siteConfigAlphaTreeServicesEn.hero.subhead}`,
  keywords: [
    "Alpha Tree Services",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Bruce tree service",
  ],
}

export default function AlphaTreeServicesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAlphaTreeServicesEn} />
}
