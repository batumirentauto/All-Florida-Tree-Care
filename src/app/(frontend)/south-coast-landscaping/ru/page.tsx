import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSouthCoastLandscapingRu } from '../../../../siteConfig.south-coast-landscaping.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSouthCoastLandscapingRu.businessName} | ${siteConfigSouthCoastLandscapingRu.tagline}`,
  description: `${siteConfigSouthCoastLandscapingRu.tagline}. ${siteConfigSouthCoastLandscapingRu.hero.subhead}`,
}

export default function SouthCoastLandscapingRussianPage() {
  return <UniversalCompanyPage config={siteConfigSouthCoastLandscapingRu} />
}
