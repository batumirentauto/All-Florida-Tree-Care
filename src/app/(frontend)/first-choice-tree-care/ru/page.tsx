import React from 'react'
import type { Metadata } from 'next'
import { siteConfigFirstChoiceTreeCareRu } from '../../../../siteConfig.first-choice-tree-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigFirstChoiceTreeCareRu.businessName} | ${siteConfigFirstChoiceTreeCareRu.tagline}`,
  description: `${siteConfigFirstChoiceTreeCareRu.tagline}. ${siteConfigFirstChoiceTreeCareRu.hero.subhead}`,
}

export default function FirstChoiceTreeCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigFirstChoiceTreeCareRu} />
}
