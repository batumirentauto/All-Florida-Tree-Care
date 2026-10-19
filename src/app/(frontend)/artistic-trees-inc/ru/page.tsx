import React from 'react'
import type { Metadata } from 'next'
import { siteConfigArtisticTreesIncRu } from '../../../../siteConfig.artistic-trees-inc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigArtisticTreesIncRu.businessName} | ${siteConfigArtisticTreesIncRu.tagline}`,
  description: `${siteConfigArtisticTreesIncRu.tagline}. ${siteConfigArtisticTreesIncRu.hero.subhead}`,
}

export default function ArtisticTreesIncRussianPage() {
  return <UniversalCompanyPage config={siteConfigArtisticTreesIncRu} />
}
