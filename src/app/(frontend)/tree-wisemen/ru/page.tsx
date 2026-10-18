import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeWisemenRu } from '../../../../siteConfig.tree-wisemen.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeWisemenRu.businessName} | ${siteConfigTreeWisemenRu.tagline}`,
  description: `${siteConfigTreeWisemenRu.tagline}. ${siteConfigTreeWisemenRu.hero.subhead}`,
}

export default function TreeWisemenRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreeWisemenRu} />
}
