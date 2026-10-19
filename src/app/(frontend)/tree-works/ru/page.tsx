import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeWorksRu } from '../../../../siteConfig.tree-works.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeWorksRu.businessName} | ${siteConfigTreeWorksRu.tagline}`,
  description: `${siteConfigTreeWorksRu.tagline}. ${siteConfigTreeWorksRu.hero.subhead}`,
}

export default function TreeWorksRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreeWorksRu} />
}
