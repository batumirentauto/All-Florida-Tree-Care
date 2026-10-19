import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGeorgiaTreeRemovalRu } from '../../../../siteConfig.georgia-tree-removal.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGeorgiaTreeRemovalRu.businessName} | ${siteConfigGeorgiaTreeRemovalRu.tagline}`,
  description: `${siteConfigGeorgiaTreeRemovalRu.tagline}. ${siteConfigGeorgiaTreeRemovalRu.hero.subhead}`,
}

export default function GeorgiaTreeRemovalRussianPage() {
  return <UniversalCompanyPage config={siteConfigGeorgiaTreeRemovalRu} />
}
