import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMonsterTreeServiceOfRaleighDurhamRu } from '../../../../siteConfig.monster-tree-service-of-raleigh-durham.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMonsterTreeServiceOfRaleighDurhamRu.businessName} | ${siteConfigMonsterTreeServiceOfRaleighDurhamRu.tagline}`,
  description: `${siteConfigMonsterTreeServiceOfRaleighDurhamRu.tagline}. ${siteConfigMonsterTreeServiceOfRaleighDurhamRu.hero.subhead}`,
}

export default function MonsterTreeServiceOfRaleighDurhamRussianPage() {
  return <UniversalCompanyPage config={siteConfigMonsterTreeServiceOfRaleighDurhamRu} />
}
