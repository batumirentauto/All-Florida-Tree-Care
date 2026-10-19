import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLivingTreeServicesEn } from '../../../siteConfig.living-tree-services.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLivingTreeServicesEn.businessName} | ${siteConfigLivingTreeServicesEn.tagline}`,
  description: `${siteConfigLivingTreeServicesEn.tagline}. ${siteConfigLivingTreeServicesEn.hero.subhead}`,
  keywords: [
    "Living Tree Services",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function LivingTreeServicesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigLivingTreeServicesEn} />
}
