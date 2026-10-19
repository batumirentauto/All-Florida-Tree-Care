import React from 'react'
import type { Metadata } from 'next'
import { siteConfigKrTreeServiceProsEn } from '../../../siteConfig.kr-tree-service-pros.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigKrTreeServiceProsEn.businessName} | ${siteConfigKrTreeServiceProsEn.tagline}`,
  description: `${siteConfigKrTreeServiceProsEn.tagline}. ${siteConfigKrTreeServiceProsEn.hero.subhead}`,
  keywords: [
    "K&R TREE SERVICE PROS",
    "tree removal Houston TX",
    "tree service Houston",
    "stump grinding Houston",
    "emergency tree service 77093",
    "Lead Arborist tree service",
  ],
}

export default function KrTreeServiceProsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigKrTreeServiceProsEn} />
}
