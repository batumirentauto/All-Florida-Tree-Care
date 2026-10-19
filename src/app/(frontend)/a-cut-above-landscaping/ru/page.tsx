import React from 'react'
import type { Metadata } from 'next'
import { siteConfigACutAboveLandscapingRu } from '../../../../siteConfig.a-cut-above-landscaping.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigACutAboveLandscapingRu.businessName} | ${siteConfigACutAboveLandscapingRu.tagline}`,
  description: `${siteConfigACutAboveLandscapingRu.tagline}. ${siteConfigACutAboveLandscapingRu.hero.subhead}`,
}

export default function ACutAboveLandscapingRussianPage() {
  return <UniversalCompanyPage config={siteConfigACutAboveLandscapingRu} />
}
