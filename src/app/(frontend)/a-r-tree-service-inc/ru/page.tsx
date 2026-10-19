import React from 'react'
import type { Metadata } from 'next'
import { siteConfigARTreeServiceIncRu } from '../../../../siteConfig.a-r-tree-service-inc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigARTreeServiceIncRu.businessName} | ${siteConfigARTreeServiceIncRu.tagline}`,
  description: `${siteConfigARTreeServiceIncRu.tagline}. ${siteConfigARTreeServiceIncRu.hero.subhead}`,
}

export default function ARTreeServiceIncRussianPage() {
  return <UniversalCompanyPage config={siteConfigARTreeServiceIncRu} />
}
