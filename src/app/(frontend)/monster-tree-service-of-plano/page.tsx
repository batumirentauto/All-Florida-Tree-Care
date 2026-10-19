import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMonsterTreeServiceOfPlanoEn } from '../../../siteConfig.monster-tree-service-of-plano.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMonsterTreeServiceOfPlanoEn.businessName} | ${siteConfigMonsterTreeServiceOfPlanoEn.tagline}`,
  description: `${siteConfigMonsterTreeServiceOfPlanoEn.tagline}. ${siteConfigMonsterTreeServiceOfPlanoEn.hero.subhead}`,
  keywords: [
    "Monster Tree Service of Plano",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function MonsterTreeServiceOfPlanoEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMonsterTreeServiceOfPlanoEn} />
}
