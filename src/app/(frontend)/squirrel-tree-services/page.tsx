import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSquirrelTreeServicesEn } from '../../../siteConfig.squirrel-tree-services.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSquirrelTreeServicesEn.businessName} | ${siteConfigSquirrelTreeServicesEn.tagline}`,
  description: `${siteConfigSquirrelTreeServicesEn.tagline}. ${siteConfigSquirrelTreeServicesEn.hero.subhead}`,
  keywords: [
    "Squirrel Tree Services, Inc.",
    "tree removal Cumming GA",
    "tree service Cumming",
    "stump grinding Cumming",
    "emergency tree service 30041",
    "Jorge tree service",
  ],
}

export default function SquirrelTreeServicesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSquirrelTreeServicesEn} />
}
