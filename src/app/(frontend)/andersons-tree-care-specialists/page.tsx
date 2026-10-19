import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAndersonsTreeCareSpecialistsEn } from '../../../siteConfig.andersons-tree-care-specialists.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAndersonsTreeCareSpecialistsEn.businessName} | ${siteConfigAndersonsTreeCareSpecialistsEn.tagline}`,
  description: `${siteConfigAndersonsTreeCareSpecialistsEn.tagline}. ${siteConfigAndersonsTreeCareSpecialistsEn.hero.subhead}`,
  keywords: [
    "Anderson's Tree Care Specialists",
    "tree removal San Jose CA",
    "tree service San Jose",
    "stump grinding San Jose",
    "emergency tree service 95116",
    "Christian tree service",
  ],
}

export default function AndersonsTreeCareSpecialistsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAndersonsTreeCareSpecialistsEn} />
}
