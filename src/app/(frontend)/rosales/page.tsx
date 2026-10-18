import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRosalesEn } from '../../../siteConfig.rosales.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRosalesEn.businessName} | ${siteConfigRosalesEn.tagline}`,
  description: `${siteConfigRosalesEn.tagline}. ${siteConfigRosalesEn.hero.subhead}`,
  keywords: [
    "M Rosales Tree Service",
    "tree removal Houston TX",
    "tree service Houston",
    "stump grinding Houston",
    "emergency tree service 77055",
    "Rodrigo tree service",
  ],
}

export default function RosalesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigRosalesEn} />
}
