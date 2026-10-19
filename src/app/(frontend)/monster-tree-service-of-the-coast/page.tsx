import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMonsterTreeServiceOfTheCoastEn } from '../../../siteConfig.monster-tree-service-of-the-coast.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMonsterTreeServiceOfTheCoastEn.businessName} | ${siteConfigMonsterTreeServiceOfTheCoastEn.tagline}`,
  description: `${siteConfigMonsterTreeServiceOfTheCoastEn.tagline}. ${siteConfigMonsterTreeServiceOfTheCoastEn.hero.subhead}`,
  keywords: [
    "Monster Tree Service of the Coast",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Oscar tree service",
  ],
}

export default function MonsterTreeServiceOfTheCoastEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMonsterTreeServiceOfTheCoastEn} />
}
