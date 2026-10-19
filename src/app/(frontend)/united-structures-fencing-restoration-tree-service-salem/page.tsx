import React from 'react'
import type { Metadata } from 'next'
import { siteConfigUnitedStructuresFencingRestorationTreeServiceSalemEn } from '../../../siteConfig.united-structures-fencing-restoration-tree-service-salem.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigUnitedStructuresFencingRestorationTreeServiceSalemEn.businessName} | ${siteConfigUnitedStructuresFencingRestorationTreeServiceSalemEn.tagline}`,
  description: `${siteConfigUnitedStructuresFencingRestorationTreeServiceSalemEn.tagline}. ${siteConfigUnitedStructuresFencingRestorationTreeServiceSalemEn.hero.subhead}`,
  keywords: [
    "United Structures | Fencing | Restoration | Tree Service Salem",
    "tree removal Salem OR",
    "tree service Salem",
    "stump grinding Salem",
    "emergency tree service 97306",
    "Dominic tree service",
  ],
}

export default function UnitedStructuresFencingRestorationTreeServiceSalemEnglishPage() {
  return <UniversalCompanyPage config={siteConfigUnitedStructuresFencingRestorationTreeServiceSalemEn} />
}
