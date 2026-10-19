import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMonsterTreeServiceOfTexasGulfCoastEn } from '../../../siteConfig.monster-tree-service-of-texas-gulf-coast.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMonsterTreeServiceOfTexasGulfCoastEn.businessName} | ${siteConfigMonsterTreeServiceOfTexasGulfCoastEn.tagline}`,
  description: `${siteConfigMonsterTreeServiceOfTexasGulfCoastEn.tagline}. ${siteConfigMonsterTreeServiceOfTexasGulfCoastEn.hero.subhead}`,
  keywords: [
    "Monster Tree Service of Texas Gulf Coast",
    "tree removal Deer Park TX",
    "tree service Deer Park",
    "stump grinding Deer Park",
    "emergency tree service 77536",
    "Mike tree service",
  ],
}

export default function MonsterTreeServiceOfTexasGulfCoastEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMonsterTreeServiceOfTexasGulfCoastEn} />
}
