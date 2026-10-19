import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSouthernTreeRemovalEn } from '../../../siteConfig.southern-tree-removal.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSouthernTreeRemovalEn.businessName} | ${siteConfigSouthernTreeRemovalEn.tagline}`,
  description: `${siteConfigSouthernTreeRemovalEn.tagline}. ${siteConfigSouthernTreeRemovalEn.hero.subhead}`,
  keywords: [
    "Southern Tree Removal",
    "tree removal Clearwater SC",
    "tree service Clearwater",
    "stump grinding Clearwater",
    "emergency tree service 29842",
    "Elliott tree service",
  ],
}

export default function SouthernTreeRemovalEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSouthernTreeRemovalEn} />
}
