import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJohnsGoodLandscapingRu } from '../../../../siteConfig.johns-good-landscaping.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJohnsGoodLandscapingRu.businessName} | ${siteConfigJohnsGoodLandscapingRu.tagline}`,
  description: `${siteConfigJohnsGoodLandscapingRu.tagline}. ${siteConfigJohnsGoodLandscapingRu.hero.subhead}`,
}

export default function JohnsGoodLandscapingRussianPage() {
  return <UniversalCompanyPage config={siteConfigJohnsGoodLandscapingRu} />
}
