import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJbTreeCareRu } from '../../../../siteConfig.jb-tree-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJbTreeCareRu.businessName} | ${siteConfigJbTreeCareRu.tagline}`,
  description: `${siteConfigJbTreeCareRu.tagline}. ${siteConfigJbTreeCareRu.hero.subhead}`,
}

export default function JbTreeCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigJbTreeCareRu} />
}
