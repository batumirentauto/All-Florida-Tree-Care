import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMonsterTreeServiceOfSouthCharlotteEn } from '../../../siteConfig.monster-tree-service-of-south-charlotte.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMonsterTreeServiceOfSouthCharlotteEn.businessName} | ${siteConfigMonsterTreeServiceOfSouthCharlotteEn.tagline}`,
  description: `${siteConfigMonsterTreeServiceOfSouthCharlotteEn.tagline}. ${siteConfigMonsterTreeServiceOfSouthCharlotteEn.hero.subhead}`,
  keywords: [
    "Monster Tree Service of South Charlotte",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Eric tree service",
  ],
}

export default function MonsterTreeServiceOfSouthCharlotteEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMonsterTreeServiceOfSouthCharlotteEn} />
}
