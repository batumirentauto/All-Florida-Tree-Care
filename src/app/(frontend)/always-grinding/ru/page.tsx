import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAlwaysGrindingRu } from '../../../../siteConfig.always-grinding.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAlwaysGrindingRu.businessName} | ${siteConfigAlwaysGrindingRu.tagline}`,
  description: `${siteConfigAlwaysGrindingRu.tagline}. ${siteConfigAlwaysGrindingRu.hero.subhead}`,
}

export default function AlwaysGrindingRussianPage() {
  return <UniversalCompanyPage config={siteConfigAlwaysGrindingRu} />
}
