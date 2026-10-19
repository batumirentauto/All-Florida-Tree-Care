import React from 'react'
import type { Metadata } from 'next'
import { siteConfigReleafTreeServicesLlcEn } from '../../../siteConfig.releaf-tree-services-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigReleafTreeServicesLlcEn.businessName} | ${siteConfigReleafTreeServicesLlcEn.tagline}`,
  description: `${siteConfigReleafTreeServicesLlcEn.tagline}. ${siteConfigReleafTreeServicesLlcEn.hero.subhead}`,
  keywords: [
    "Releaf Tree Services LLC",
    "tree removal Sarasota FL",
    "tree service Sarasota",
    "stump grinding Sarasota",
    "emergency tree service 34243",
    "Lead Arborist tree service",
  ],
}

export default function ReleafTreeServicesLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigReleafTreeServicesLlcEn} />
}
