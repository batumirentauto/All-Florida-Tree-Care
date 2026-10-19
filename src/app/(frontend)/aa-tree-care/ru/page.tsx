import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAaTreeCareRu } from '../../../../siteConfig.aa-tree-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAaTreeCareRu.businessName} | ${siteConfigAaTreeCareRu.tagline}`,
  description: `${siteConfigAaTreeCareRu.tagline}. ${siteConfigAaTreeCareRu.hero.subhead}`,
}

export default function AaTreeCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigAaTreeCareRu} />
}
