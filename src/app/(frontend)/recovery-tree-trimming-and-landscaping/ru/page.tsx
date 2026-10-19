import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRecoveryTreeTrimmingAndLandscapingRu } from '../../../../siteConfig.recovery-tree-trimming-and-landscaping.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRecoveryTreeTrimmingAndLandscapingRu.businessName} | ${siteConfigRecoveryTreeTrimmingAndLandscapingRu.tagline}`,
  description: `${siteConfigRecoveryTreeTrimmingAndLandscapingRu.tagline}. ${siteConfigRecoveryTreeTrimmingAndLandscapingRu.hero.subhead}`,
}

export default function RecoveryTreeTrimmingAndLandscapingRussianPage() {
  return <UniversalCompanyPage config={siteConfigRecoveryTreeTrimmingAndLandscapingRu} />
}
