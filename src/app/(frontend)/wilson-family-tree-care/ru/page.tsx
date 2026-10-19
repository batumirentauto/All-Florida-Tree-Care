import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWilsonFamilyTreeCareRu } from '../../../../siteConfig.wilson-family-tree-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWilsonFamilyTreeCareRu.businessName} | ${siteConfigWilsonFamilyTreeCareRu.tagline}`,
  description: `${siteConfigWilsonFamilyTreeCareRu.tagline}. ${siteConfigWilsonFamilyTreeCareRu.hero.subhead}`,
}

export default function WilsonFamilyTreeCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigWilsonFamilyTreeCareRu} />
}
