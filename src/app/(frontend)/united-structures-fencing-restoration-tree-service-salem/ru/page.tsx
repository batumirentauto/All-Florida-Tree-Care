import React from 'react'
import type { Metadata } from 'next'
import { siteConfigUnitedStructuresFencingRestorationTreeServiceSalemRu } from '../../../../siteConfig.united-structures-fencing-restoration-tree-service-salem.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigUnitedStructuresFencingRestorationTreeServiceSalemRu.businessName} | ${siteConfigUnitedStructuresFencingRestorationTreeServiceSalemRu.tagline}`,
  description: `${siteConfigUnitedStructuresFencingRestorationTreeServiceSalemRu.tagline}. ${siteConfigUnitedStructuresFencingRestorationTreeServiceSalemRu.hero.subhead}`,
}

export default function UnitedStructuresFencingRestorationTreeServiceSalemRussianPage() {
  return <UniversalCompanyPage config={siteConfigUnitedStructuresFencingRestorationTreeServiceSalemRu} />
}
