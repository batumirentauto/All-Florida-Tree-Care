import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBigfootForestryRockHillRu } from '../../../../siteConfig.bigfoot-forestry-rock-hill.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBigfootForestryRockHillRu.businessName} | ${siteConfigBigfootForestryRockHillRu.tagline}`,
  description: `${siteConfigBigfootForestryRockHillRu.tagline}. ${siteConfigBigfootForestryRockHillRu.hero.subhead}`,
}

export default function BigfootForestryRockHillRussianPage() {
  return <UniversalCompanyPage config={siteConfigBigfootForestryRockHillRu} />
}
