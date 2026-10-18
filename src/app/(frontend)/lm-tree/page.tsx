import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLmTreeEn } from '../../../siteConfig.lm-tree.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLmTreeEn.businessName} | ${siteConfigLmTreeEn.tagline}`,
  description: `${siteConfigLmTreeEn.tagline}. ${siteConfigLmTreeEn.hero.subhead}`,
  keywords: [
    "L&M Tree Service",
    "tree removal Muskogee OK",
    "tree service Muskogee",
    "stump grinding Muskogee",
    "emergency tree service 74403",
    "Logan & Tyler tree service",
  ],
}

export default function LmTreeEnglishPage() {
  return <UniversalCompanyPage config={siteConfigLmTreeEn} />
}
