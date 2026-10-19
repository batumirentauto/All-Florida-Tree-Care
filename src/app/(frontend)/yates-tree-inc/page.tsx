import React from 'react'
import type { Metadata } from 'next'
import { siteConfigYatesTreeIncEn } from '../../../siteConfig.yates-tree-inc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigYatesTreeIncEn.businessName} | ${siteConfigYatesTreeIncEn.tagline}`,
  description: `${siteConfigYatesTreeIncEn.tagline}. ${siteConfigYatesTreeIncEn.hero.subhead}`,
  keywords: [
    "Yates Tree Inc.",
    "tree removal San Antonio TX",
    "tree service San Antonio",
    "stump grinding San Antonio",
    "emergency tree service 78248",
    "Jim tree service",
  ],
}

export default function YatesTreeIncEnglishPage() {
  return <UniversalCompanyPage config={siteConfigYatesTreeIncEn} />
}
