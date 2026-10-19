import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAcadiaTreeCareRu } from '../../../../siteConfig.acadia-tree-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAcadiaTreeCareRu.businessName} | ${siteConfigAcadiaTreeCareRu.tagline}`,
  description: `${siteConfigAcadiaTreeCareRu.tagline}. ${siteConfigAcadiaTreeCareRu.hero.subhead}`,
}

export default function AcadiaTreeCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigAcadiaTreeCareRu} />
}
