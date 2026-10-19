import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRecoveryTreeTrimmingAndLandscapingEn } from '../../../siteConfig.recovery-tree-trimming-and-landscaping.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRecoveryTreeTrimmingAndLandscapingEn.businessName} | ${siteConfigRecoveryTreeTrimmingAndLandscapingEn.tagline}`,
  description: `${siteConfigRecoveryTreeTrimmingAndLandscapingEn.tagline}. ${siteConfigRecoveryTreeTrimmingAndLandscapingEn.hero.subhead}`,
  keywords: [
    "Recovery Tree Trimming and Landscaping",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function RecoveryTreeTrimmingAndLandscapingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigRecoveryTreeTrimmingAndLandscapingEn} />
}
