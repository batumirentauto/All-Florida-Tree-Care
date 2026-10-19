import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMonsterTreeServiceOfTheCoastRu } from '../../../../siteConfig.monster-tree-service-of-the-coast.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMonsterTreeServiceOfTheCoastRu.businessName} | ${siteConfigMonsterTreeServiceOfTheCoastRu.tagline}`,
  description: `${siteConfigMonsterTreeServiceOfTheCoastRu.tagline}. ${siteConfigMonsterTreeServiceOfTheCoastRu.hero.subhead}`,
}

export default function MonsterTreeServiceOfTheCoastRussianPage() {
  return <UniversalCompanyPage config={siteConfigMonsterTreeServiceOfTheCoastRu} />
}
