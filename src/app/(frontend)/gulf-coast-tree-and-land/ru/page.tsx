import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGulfCoastTreeAndLandRu } from '../../../../siteConfig.gulf-coast-tree-and-land.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGulfCoastTreeAndLandRu.businessName} | ${siteConfigGulfCoastTreeAndLandRu.tagline}`,
  description: `${siteConfigGulfCoastTreeAndLandRu.tagline}. ${siteConfigGulfCoastTreeAndLandRu.hero.subhead}`,
}

export default function GulfCoastTreeAndLandRussianPage() {
  return <UniversalCompanyPage config={siteConfigGulfCoastTreeAndLandRu} />
}
