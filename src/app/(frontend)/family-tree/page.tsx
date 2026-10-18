import React from 'react'
import type { Metadata } from 'next'
import { siteConfigFamilyTreeEn } from '../../../siteConfig.family-tree.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigFamilyTreeEn.businessName} | ${siteConfigFamilyTreeEn.tagline}`,
  description: `${siteConfigFamilyTreeEn.tagline}. ${siteConfigFamilyTreeEn.hero.subhead}`,
  keywords: [
    "Family Tree Service LLC",
    "tree removal St Marys GA",
    "tree service St Marys",
    "stump grinding St Marys",
    "emergency tree service 31558",
    "Jacob tree service",
  ],
}

export default function FamilyTreeEnglishPage() {
  return <UniversalCompanyPage config={siteConfigFamilyTreeEn} />
}
