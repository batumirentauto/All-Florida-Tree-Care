import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAllWeatherTreeAndLandscapingServiceEn } from '../../../siteConfig.all-weather-tree-and-landscaping-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAllWeatherTreeAndLandscapingServiceEn.businessName} | ${siteConfigAllWeatherTreeAndLandscapingServiceEn.tagline}`,
  description: `${siteConfigAllWeatherTreeAndLandscapingServiceEn.tagline}. ${siteConfigAllWeatherTreeAndLandscapingServiceEn.hero.subhead}`,
  keywords: [
    "All Weather Tree and Landscaping Service, Inc.",
    "tree removal Tampa FL",
    "tree service Tampa",
    "stump grinding Tampa",
    "emergency tree service 33626",
    "Lead Arborist tree service",
  ],
}

export default function AllWeatherTreeAndLandscapingServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAllWeatherTreeAndLandscapingServiceEn} />
}
