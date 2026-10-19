import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSavannahsLandscapingRu } from '../../../../siteConfig.savannahs-landscaping.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSavannahsLandscapingRu.businessName} | ${siteConfigSavannahsLandscapingRu.tagline}`,
  description: `${siteConfigSavannahsLandscapingRu.tagline}. ${siteConfigSavannahsLandscapingRu.hero.subhead}`,
}

export default function SavannahsLandscapingRussianPage() {
  return <UniversalCompanyPage config={siteConfigSavannahsLandscapingRu} />
}
