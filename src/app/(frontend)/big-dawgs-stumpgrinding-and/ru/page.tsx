import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBigDawgsStumpgrindingAndRu } from '../../../../siteConfig.big-dawgs-stumpgrinding-and.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBigDawgsStumpgrindingAndRu.businessName} | ${siteConfigBigDawgsStumpgrindingAndRu.tagline}`,
  description: `${siteConfigBigDawgsStumpgrindingAndRu.tagline}. ${siteConfigBigDawgsStumpgrindingAndRu.hero.subhead}`,
}

export default function BigDawgsStumpgrindingAndRussianPage() {
  return <UniversalCompanyPage config={siteConfigBigDawgsStumpgrindingAndRu} />
}
