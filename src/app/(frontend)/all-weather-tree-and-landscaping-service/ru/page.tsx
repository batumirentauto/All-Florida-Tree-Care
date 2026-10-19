import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAllWeatherTreeAndLandscapingServiceRu } from '../../../../siteConfig.all-weather-tree-and-landscaping-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAllWeatherTreeAndLandscapingServiceRu.businessName} | ${siteConfigAllWeatherTreeAndLandscapingServiceRu.tagline}`,
  description: `${siteConfigAllWeatherTreeAndLandscapingServiceRu.tagline}. ${siteConfigAllWeatherTreeAndLandscapingServiceRu.hero.subhead}`,
}

export default function AllWeatherTreeAndLandscapingServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigAllWeatherTreeAndLandscapingServiceRu} />
}
