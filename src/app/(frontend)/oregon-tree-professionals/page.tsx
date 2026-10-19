import React from 'react'
import type { Metadata } from 'next'
import { siteConfigOregonTreeProfessionalsEn } from '../../../siteConfig.oregon-tree-professionals.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigOregonTreeProfessionalsEn.businessName} | ${siteConfigOregonTreeProfessionalsEn.tagline}`,
  description: `${siteConfigOregonTreeProfessionalsEn.tagline}. ${siteConfigOregonTreeProfessionalsEn.hero.subhead}`,
  keywords: [
    "Oregon Tree Professionals LLC",
    "tree removal Lebanon OR",
    "tree service Lebanon",
    "stump grinding Lebanon",
    "emergency tree service 97355",
    "Jacob tree service",
  ],
}

export default function OregonTreeProfessionalsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigOregonTreeProfessionalsEn} />
}
