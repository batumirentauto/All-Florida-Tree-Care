import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSkyHighTreeRemovalRu } from '../../../../siteConfig.sky-high-tree-removal.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSkyHighTreeRemovalRu.businessName} | ${siteConfigSkyHighTreeRemovalRu.tagline}`,
  description: `${siteConfigSkyHighTreeRemovalRu.tagline}. ${siteConfigSkyHighTreeRemovalRu.hero.subhead}`,
}

export default function SkyHighTreeRemovalRussianPage() {
  return <UniversalCompanyPage config={siteConfigSkyHighTreeRemovalRu} />
}
