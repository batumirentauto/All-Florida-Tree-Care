import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMonsterTreeServiceOfPlanoRu } from '../../../../siteConfig.monster-tree-service-of-plano.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMonsterTreeServiceOfPlanoRu.businessName} | ${siteConfigMonsterTreeServiceOfPlanoRu.tagline}`,
  description: `${siteConfigMonsterTreeServiceOfPlanoRu.tagline}. ${siteConfigMonsterTreeServiceOfPlanoRu.hero.subhead}`,
}

export default function MonsterTreeServiceOfPlanoRussianPage() {
  return <UniversalCompanyPage config={siteConfigMonsterTreeServiceOfPlanoRu} />
}
