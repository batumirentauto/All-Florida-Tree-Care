import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPureTreeCareRu } from '../../../../siteConfig.pure-tree-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPureTreeCareRu.businessName} | ${siteConfigPureTreeCareRu.tagline}`,
  description: `${siteConfigPureTreeCareRu.tagline}. ${siteConfigPureTreeCareRu.hero.subhead}`,
}

export default function PureTreeCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigPureTreeCareRu} />
}
