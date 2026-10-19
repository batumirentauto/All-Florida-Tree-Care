import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMonsterTreeServiceOfWestValleyEn } from '../../../siteConfig.monster-tree-service-of-west-valley.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMonsterTreeServiceOfWestValleyEn.businessName} | ${siteConfigMonsterTreeServiceOfWestValleyEn.tagline}`,
  description: `${siteConfigMonsterTreeServiceOfWestValleyEn.tagline}. ${siteConfigMonsterTreeServiceOfWestValleyEn.hero.subhead}`,
  keywords: [
    "Monster Tree Service of West Valley",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Brad tree service",
  ],
}

export default function MonsterTreeServiceOfWestValleyEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMonsterTreeServiceOfWestValleyEn} />
}
