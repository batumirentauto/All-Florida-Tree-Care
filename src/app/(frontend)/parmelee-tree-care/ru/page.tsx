import React from 'react'
import type { Metadata } from 'next'
import { siteConfigParmeleeTreeCareRu } from '../../../../siteConfig.parmelee-tree-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigParmeleeTreeCareRu.businessName} | ${siteConfigParmeleeTreeCareRu.tagline}`,
  description: `${siteConfigParmeleeTreeCareRu.tagline}. ${siteConfigParmeleeTreeCareRu.hero.subhead}`,
}

export default function ParmeleeTreeCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigParmeleeTreeCareRu} />
}
