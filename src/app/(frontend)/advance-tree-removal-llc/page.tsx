import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAdvanceTreeRemovalLlcEn } from '../../../siteConfig.advance-tree-removal-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAdvanceTreeRemovalLlcEn.businessName} | ${siteConfigAdvanceTreeRemovalLlcEn.tagline}`,
  description: `${siteConfigAdvanceTreeRemovalLlcEn.tagline}. ${siteConfigAdvanceTreeRemovalLlcEn.hero.subhead}`,
  keywords: [
    "Advance Tree Removal LLC",
    "tree removal Ocala FL",
    "tree service Ocala",
    "stump grinding Ocala",
    "emergency tree service 34475",
    "Lead Arborist tree service",
  ],
}

export default function AdvanceTreeRemovalLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAdvanceTreeRemovalLlcEn} />
}
