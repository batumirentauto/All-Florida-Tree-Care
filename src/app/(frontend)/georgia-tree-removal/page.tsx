import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGeorgiaTreeRemovalEn } from '../../../siteConfig.georgia-tree-removal.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGeorgiaTreeRemovalEn.businessName} | ${siteConfigGeorgiaTreeRemovalEn.tagline}`,
  description: `${siteConfigGeorgiaTreeRemovalEn.tagline}. ${siteConfigGeorgiaTreeRemovalEn.hero.subhead}`,
  keywords: [
    "Georgia Tree Removal",
    "tree removal Crawford GA",
    "tree service Crawford",
    "stump grinding Crawford",
    "emergency tree service 30630",
    "Lead Arborist tree service",
  ],
}

export default function GeorgiaTreeRemovalEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGeorgiaTreeRemovalEn} />
}
