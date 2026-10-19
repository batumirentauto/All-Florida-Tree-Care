import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPacificNwLandscapeTreeRu } from '../../../../siteConfig.pacific-nw-landscape-tree.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPacificNwLandscapeTreeRu.businessName} | ${siteConfigPacificNwLandscapeTreeRu.tagline}`,
  description: `${siteConfigPacificNwLandscapeTreeRu.tagline}. ${siteConfigPacificNwLandscapeTreeRu.hero.subhead}`,
}

export default function PacificNwLandscapeTreeRussianPage() {
  return <UniversalCompanyPage config={siteConfigPacificNwLandscapeTreeRu} />
}
