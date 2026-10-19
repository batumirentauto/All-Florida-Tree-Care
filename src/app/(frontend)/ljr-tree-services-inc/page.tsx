import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLjrTreeServicesIncEn } from '../../../siteConfig.ljr-tree-services-inc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLjrTreeServicesIncEn.businessName} | ${siteConfigLjrTreeServicesIncEn.tagline}`,
  description: `${siteConfigLjrTreeServicesIncEn.tagline}. ${siteConfigLjrTreeServicesIncEn.hero.subhead}`,
  keywords: [
    "LJR Tree Services Inc",
    "tree removal San Jose CA",
    "tree service San Jose",
    "stump grinding San Jose",
    "emergency tree service 95148",
    "Lead Arborist tree service",
  ],
}

export default function LjrTreeServicesIncEnglishPage() {
  return <UniversalCompanyPage config={siteConfigLjrTreeServicesIncEn} />
}
