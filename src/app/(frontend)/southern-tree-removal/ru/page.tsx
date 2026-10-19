import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSouthernTreeRemovalRu } from '../../../../siteConfig.southern-tree-removal.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSouthernTreeRemovalRu.businessName} | ${siteConfigSouthernTreeRemovalRu.tagline}`,
  description: `${siteConfigSouthernTreeRemovalRu.tagline}. ${siteConfigSouthernTreeRemovalRu.hero.subhead}`,
}

export default function SouthernTreeRemovalRussianPage() {
  return <UniversalCompanyPage config={siteConfigSouthernTreeRemovalRu} />
}
