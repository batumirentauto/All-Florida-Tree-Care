import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAdvanceTreeRemovalLlcRu } from '../../../../siteConfig.advance-tree-removal-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAdvanceTreeRemovalLlcRu.businessName} | ${siteConfigAdvanceTreeRemovalLlcRu.tagline}`,
  description: `${siteConfigAdvanceTreeRemovalLlcRu.tagline}. ${siteConfigAdvanceTreeRemovalLlcRu.hero.subhead}`,
}

export default function AdvanceTreeRemovalLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigAdvanceTreeRemovalLlcRu} />
}
