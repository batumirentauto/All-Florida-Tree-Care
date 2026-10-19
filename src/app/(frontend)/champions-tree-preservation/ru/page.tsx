import React from 'react'
import type { Metadata } from 'next'
import { siteConfigChampionsTreePreservationRu } from '../../../../siteConfig.champions-tree-preservation.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigChampionsTreePreservationRu.businessName} | ${siteConfigChampionsTreePreservationRu.tagline}`,
  description: `${siteConfigChampionsTreePreservationRu.tagline}. ${siteConfigChampionsTreePreservationRu.hero.subhead}`,
}

export default function ChampionsTreePreservationRussianPage() {
  return <UniversalCompanyPage config={siteConfigChampionsTreePreservationRu} />
}
