import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDivineTreeCareEn } from '../../../siteConfig.divine-tree-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDivineTreeCareEn.businessName} | ${siteConfigDivineTreeCareEn.tagline}`,
  description: `${siteConfigDivineTreeCareEn.tagline}. ${siteConfigDivineTreeCareEn.hero.subhead}`,
  keywords: [
    "Divine Tree Care",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Chase tree service",
  ],
}

export default function DivineTreeCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigDivineTreeCareEn} />
}
