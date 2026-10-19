import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMtjTreeRemovalLlcEn } from '../../../siteConfig.mtj-tree-removal-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMtjTreeRemovalLlcEn.businessName} | ${siteConfigMtjTreeRemovalLlcEn.tagline}`,
  description: `${siteConfigMtjTreeRemovalLlcEn.tagline}. ${siteConfigMtjTreeRemovalLlcEn.hero.subhead}`,
  keywords: [
    "MTJ Tree Removal LLC",
    "tree removal Zebulon NC",
    "tree service Zebulon",
    "stump grinding Zebulon",
    "emergency tree service 27597",
    "Lead Arborist tree service",
  ],
}

export default function MtjTreeRemovalLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMtjTreeRemovalLlcEn} />
}
