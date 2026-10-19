import React from 'react'
import type { Metadata } from 'next'
import { siteConfigForestOutdoorLivingLlcHardscapingLandscapingRu } from '../../../../siteConfig.forest-outdoor-living-llc-hardscaping-landscaping.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigForestOutdoorLivingLlcHardscapingLandscapingRu.businessName} | ${siteConfigForestOutdoorLivingLlcHardscapingLandscapingRu.tagline}`,
  description: `${siteConfigForestOutdoorLivingLlcHardscapingLandscapingRu.tagline}. ${siteConfigForestOutdoorLivingLlcHardscapingLandscapingRu.hero.subhead}`,
}

export default function ForestOutdoorLivingLlcHardscapingLandscapingRussianPage() {
  return <UniversalCompanyPage config={siteConfigForestOutdoorLivingLlcHardscapingLandscapingRu} />
}
