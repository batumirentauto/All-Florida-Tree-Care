import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDivineTreeCareRu } from '../../../../siteConfig.divine-tree-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDivineTreeCareRu.businessName} | ${siteConfigDivineTreeCareRu.tagline}`,
  description: `${siteConfigDivineTreeCareRu.tagline}. ${siteConfigDivineTreeCareRu.hero.subhead}`,
}

export default function DivineTreeCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigDivineTreeCareRu} />
}
