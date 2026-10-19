import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMonsterTreeServiceOfWestValleyRu } from '../../../../siteConfig.monster-tree-service-of-west-valley.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMonsterTreeServiceOfWestValleyRu.businessName} | ${siteConfigMonsterTreeServiceOfWestValleyRu.tagline}`,
  description: `${siteConfigMonsterTreeServiceOfWestValleyRu.tagline}. ${siteConfigMonsterTreeServiceOfWestValleyRu.hero.subhead}`,
}

export default function MonsterTreeServiceOfWestValleyRussianPage() {
  return <UniversalCompanyPage config={siteConfigMonsterTreeServiceOfWestValleyRu} />
}
