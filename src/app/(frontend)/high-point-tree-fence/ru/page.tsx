import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHighPointTreeFenceRu } from '../../../../siteConfig.high-point-tree-fence.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHighPointTreeFenceRu.businessName} | ${siteConfigHighPointTreeFenceRu.tagline}`,
  description: `${siteConfigHighPointTreeFenceRu.tagline}. ${siteConfigHighPointTreeFenceRu.hero.subhead}`,
}

export default function HighPointTreeFenceRussianPage() {
  return <UniversalCompanyPage config={siteConfigHighPointTreeFenceRu} />
}
