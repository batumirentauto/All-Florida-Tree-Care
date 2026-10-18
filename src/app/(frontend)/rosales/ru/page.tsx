import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRosalesRu } from '../../../../siteConfig.rosales.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRosalesRu.businessName} | ${siteConfigRosalesRu.tagline}`,
  description: `${siteConfigRosalesRu.tagline}. ${siteConfigRosalesRu.hero.subhead}`,
}

export default function RosalesRussianPage() {
  return <UniversalCompanyPage config={siteConfigRosalesRu} />
}
