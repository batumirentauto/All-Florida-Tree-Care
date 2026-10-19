import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAcadiaTreeCareEn } from '../../../siteConfig.acadia-tree-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAcadiaTreeCareEn.businessName} | ${siteConfigAcadiaTreeCareEn.tagline}`,
  description: `${siteConfigAcadiaTreeCareEn.tagline}. ${siteConfigAcadiaTreeCareEn.hero.subhead}`,
  keywords: [
    "Acadia Tree Care",
    "tree removal Garland TX",
    "tree service Garland",
    "stump grinding Garland",
    "emergency tree service 75041",
    "Acadia tree service",
  ],
}

export default function AcadiaTreeCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAcadiaTreeCareEn} />
}
