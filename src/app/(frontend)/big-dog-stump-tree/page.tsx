import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBigDogStumpTreeEn } from '../../../siteConfig.big-dog-stump-tree.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBigDogStumpTreeEn.businessName} | ${siteConfigBigDogStumpTreeEn.tagline}`,
  description: `${siteConfigBigDogStumpTreeEn.tagline}. ${siteConfigBigDogStumpTreeEn.hero.subhead}`,
  keywords: [
    "Big Dog Stump & Tree",
    "tree removal Martinez GA",
    "tree service Martinez",
    "stump grinding Martinez",
    "emergency tree service 30907",
    "Chris tree service",
  ],
}

export default function BigDogStumpTreeEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBigDogStumpTreeEn} />
}
