import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBriansQualityRu } from '../../../../siteConfig.brians-quality.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBriansQualityRu.businessName} | ${siteConfigBriansQualityRu.tagline}`,
  description: `${siteConfigBriansQualityRu.tagline}. ${siteConfigBriansQualityRu.hero.subhead}`,
}

export default function BriansQualityRussianPage() {
  return <UniversalCompanyPage config={siteConfigBriansQualityRu} />
}
