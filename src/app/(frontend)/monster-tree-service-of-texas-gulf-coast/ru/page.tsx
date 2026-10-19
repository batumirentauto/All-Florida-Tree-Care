import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMonsterTreeServiceOfTexasGulfCoastRu } from '../../../../siteConfig.monster-tree-service-of-texas-gulf-coast.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMonsterTreeServiceOfTexasGulfCoastRu.businessName} | ${siteConfigMonsterTreeServiceOfTexasGulfCoastRu.tagline}`,
  description: `${siteConfigMonsterTreeServiceOfTexasGulfCoastRu.tagline}. ${siteConfigMonsterTreeServiceOfTexasGulfCoastRu.hero.subhead}`,
}

export default function MonsterTreeServiceOfTexasGulfCoastRussianPage() {
  return <UniversalCompanyPage config={siteConfigMonsterTreeServiceOfTexasGulfCoastRu} />
}
