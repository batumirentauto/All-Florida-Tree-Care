import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBigDawgsStumpgrindingAndEn } from '../../../siteConfig.big-dawgs-stumpgrinding-and.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBigDawgsStumpgrindingAndEn.businessName} | ${siteConfigBigDawgsStumpgrindingAndEn.tagline}`,
  description: `${siteConfigBigDawgsStumpgrindingAndEn.tagline}. ${siteConfigBigDawgsStumpgrindingAndEn.hero.subhead}`,
  keywords: [
    "Big Dawgs Stumpgrinding and Tree Service",
    "tree removal Dania Beach FL",
    "tree service Dania Beach",
    "stump grinding Dania Beach",
    "emergency tree service 33004",
    "Lead Arborist tree service",
  ],
}

export default function BigDawgsStumpgrindingAndEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBigDawgsStumpgrindingAndEn} />
}
