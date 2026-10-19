import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMonsterTreeServiceOfRaleighDurhamEn } from '../../../siteConfig.monster-tree-service-of-raleigh-durham.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMonsterTreeServiceOfRaleighDurhamEn.businessName} | ${siteConfigMonsterTreeServiceOfRaleighDurhamEn.tagline}`,
  description: `${siteConfigMonsterTreeServiceOfRaleighDurhamEn.tagline}. ${siteConfigMonsterTreeServiceOfRaleighDurhamEn.hero.subhead}`,
  keywords: [
    "Monster Tree Service of Raleigh Durham",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Jason tree service",
  ],
}

export default function MonsterTreeServiceOfRaleighDurhamEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMonsterTreeServiceOfRaleighDurhamEn} />
}
