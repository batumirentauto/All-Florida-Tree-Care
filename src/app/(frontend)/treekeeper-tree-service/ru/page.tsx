import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreekeeperTreeServiceRu } from '../../../../siteConfig.treekeeper-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreekeeperTreeServiceRu.businessName} | ${siteConfigTreekeeperTreeServiceRu.tagline}`,
  description: `${siteConfigTreekeeperTreeServiceRu.tagline}. ${siteConfigTreekeeperTreeServiceRu.hero.subhead}`,
}

export default function TreekeeperTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreekeeperTreeServiceRu} />
}
