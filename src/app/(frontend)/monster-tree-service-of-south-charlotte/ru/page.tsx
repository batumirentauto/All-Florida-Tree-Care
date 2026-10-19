import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMonsterTreeServiceOfSouthCharlotteRu } from '../../../../siteConfig.monster-tree-service-of-south-charlotte.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMonsterTreeServiceOfSouthCharlotteRu.businessName} | ${siteConfigMonsterTreeServiceOfSouthCharlotteRu.tagline}`,
  description: `${siteConfigMonsterTreeServiceOfSouthCharlotteRu.tagline}. ${siteConfigMonsterTreeServiceOfSouthCharlotteRu.hero.subhead}`,
}

export default function MonsterTreeServiceOfSouthCharlotteRussianPage() {
  return <UniversalCompanyPage config={siteConfigMonsterTreeServiceOfSouthCharlotteRu} />
}
