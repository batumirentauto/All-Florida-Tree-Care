import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTheUrbanForestersEn } from '../../../siteConfig.the-urban-foresters.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTheUrbanForestersEn.businessName} | ${siteConfigTheUrbanForestersEn.tagline}`,
  description: `${siteConfigTheUrbanForestersEn.tagline}. ${siteConfigTheUrbanForestersEn.hero.subhead}`,
  keywords: [
    "The Urban Foresters",
    "tree removal Stafford TX",
    "tree service Stafford",
    "stump grinding Stafford",
    "emergency tree service 77477",
    "Lead Arborist tree service",
  ],
}

export default function TheUrbanForestersEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTheUrbanForestersEn} />
}
