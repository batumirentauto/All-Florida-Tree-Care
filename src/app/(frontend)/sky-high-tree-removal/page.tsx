import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSkyHighTreeRemovalEn } from '../../../siteConfig.sky-high-tree-removal.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSkyHighTreeRemovalEn.businessName} | ${siteConfigSkyHighTreeRemovalEn.tagline}`,
  description: `${siteConfigSkyHighTreeRemovalEn.tagline}. ${siteConfigSkyHighTreeRemovalEn.hero.subhead}`,
  keywords: [
    "Sky High Tree Removal",
    "tree removal Auburn WA",
    "tree service Auburn",
    "stump grinding Auburn",
    "emergency tree service 98001",
    "Lead Arborist tree service",
  ],
}

export default function SkyHighTreeRemovalEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSkyHighTreeRemovalEn} />
}
