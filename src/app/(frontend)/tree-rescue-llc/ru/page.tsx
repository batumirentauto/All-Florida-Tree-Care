import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeRescueLlcRu } from '../../../../siteConfig.tree-rescue-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeRescueLlcRu.businessName} | ${siteConfigTreeRescueLlcRu.tagline}`,
  description: `${siteConfigTreeRescueLlcRu.tagline}. ${siteConfigTreeRescueLlcRu.hero.subhead}`,
}

export default function TreeRescueLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreeRescueLlcRu} />
}
