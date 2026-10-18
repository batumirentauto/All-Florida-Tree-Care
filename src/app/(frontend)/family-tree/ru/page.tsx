import React from 'react'
import type { Metadata } from 'next'
import { siteConfigFamilyTreeRu } from '../../../../siteConfig.family-tree.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigFamilyTreeRu.businessName} | ${siteConfigFamilyTreeRu.tagline}`,
  description: `${siteConfigFamilyTreeRu.tagline}. ${siteConfigFamilyTreeRu.hero.subhead}`,
}

export default function FamilyTreeRussianPage() {
  return <UniversalCompanyPage config={siteConfigFamilyTreeRu} />
}
