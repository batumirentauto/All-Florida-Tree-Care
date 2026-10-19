import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMtjTreeRemovalLlcRu } from '../../../../siteConfig.mtj-tree-removal-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMtjTreeRemovalLlcRu.businessName} | ${siteConfigMtjTreeRemovalLlcRu.tagline}`,
  description: `${siteConfigMtjTreeRemovalLlcRu.tagline}. ${siteConfigMtjTreeRemovalLlcRu.hero.subhead}`,
}

export default function MtjTreeRemovalLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigMtjTreeRemovalLlcRu} />
}
