import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMountainViewEn } from '../../../siteConfig.mountain-view.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMountainViewEn.businessName} | ${siteConfigMountainViewEn.tagline}`,
  description: `${siteConfigMountainViewEn.tagline}. ${siteConfigMountainViewEn.hero.subhead}`,
  keywords: [
    "Mountain View Tree Service",
    "tree removal Rathdrum ID",
    "tree service Rathdrum",
    "stump grinding Rathdrum",
    "emergency tree service 83858",
    "Lead Arborist tree service",
  ],
}

export default function MountainViewEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMountainViewEn} />
}
