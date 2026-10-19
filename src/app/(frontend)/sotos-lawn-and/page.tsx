import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSotosLawnAndEn } from '../../../siteConfig.sotos-lawn-and.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSotosLawnAndEn.businessName} | ${siteConfigSotosLawnAndEn.tagline}`,
  description: `${siteConfigSotosLawnAndEn.tagline}. ${siteConfigSotosLawnAndEn.hero.subhead}`,
  keywords: [
    "Soto's Lawn and Tree Service",
    "tree removal San Antonio TX",
    "tree service San Antonio",
    "stump grinding San Antonio",
    "emergency tree service 78245",
    "Jose tree service",
  ],
}

export default function SotosLawnAndEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSotosLawnAndEn} />
}
