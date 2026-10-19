import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHeartwoodTreeCareAshevilleNcEn } from '../../../siteConfig.heartwood-tree-care-asheville-nc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHeartwoodTreeCareAshevilleNcEn.businessName} | ${siteConfigHeartwoodTreeCareAshevilleNcEn.tagline}`,
  description: `${siteConfigHeartwoodTreeCareAshevilleNcEn.tagline}. ${siteConfigHeartwoodTreeCareAshevilleNcEn.hero.subhead}`,
  keywords: [
    "Heartwood Tree Care Asheville NC",
    "tree removal Asheville NC",
    "tree service Asheville",
    "stump grinding Asheville",
    "emergency tree service 28806",
    "Lead Arborist tree service",
  ],
}

export default function HeartwoodTreeCareAshevilleNcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigHeartwoodTreeCareAshevilleNcEn} />
}
