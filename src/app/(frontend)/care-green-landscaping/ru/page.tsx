import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCareGreenLandscapingRu } from '../../../../siteConfig.care-green-landscaping.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCareGreenLandscapingRu.businessName} | ${siteConfigCareGreenLandscapingRu.tagline}`,
  description: `${siteConfigCareGreenLandscapingRu.tagline}. ${siteConfigCareGreenLandscapingRu.hero.subhead}`,
}

export default function CareGreenLandscapingRussianPage() {
  return <UniversalCompanyPage config={siteConfigCareGreenLandscapingRu} />
}
