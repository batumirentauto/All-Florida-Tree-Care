import React from 'react'
import type { Metadata } from 'next'
import { siteConfigFreedomStumpGrindingRu } from '../../../../siteConfig.freedom-stump-grinding.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigFreedomStumpGrindingRu.businessName} | ${siteConfigFreedomStumpGrindingRu.tagline}`,
  description: `${siteConfigFreedomStumpGrindingRu.tagline}. ${siteConfigFreedomStumpGrindingRu.hero.subhead}`,
}

export default function FreedomStumpGrindingRussianPage() {
  return <UniversalCompanyPage config={siteConfigFreedomStumpGrindingRu} />
}
