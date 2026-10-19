import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTopTierTreeSpecialistRu } from '../../../../siteConfig.top-tier-tree-specialist.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTopTierTreeSpecialistRu.businessName} | ${siteConfigTopTierTreeSpecialistRu.tagline}`,
  description: `${siteConfigTopTierTreeSpecialistRu.tagline}. ${siteConfigTopTierTreeSpecialistRu.hero.subhead}`,
}

export default function TopTierTreeSpecialistRussianPage() {
  return <UniversalCompanyPage config={siteConfigTopTierTreeSpecialistRu} />
}
