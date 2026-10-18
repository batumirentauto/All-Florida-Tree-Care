import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTdTreeRu } from '../../../../siteConfig.td-tree.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTdTreeRu.businessName} | ${siteConfigTdTreeRu.tagline}`,
  description: `${siteConfigTdTreeRu.tagline}. ${siteConfigTdTreeRu.hero.subhead}`,
}

export default function TdTreeRussianPage() {
  return <UniversalCompanyPage config={siteConfigTdTreeRu} />
}
