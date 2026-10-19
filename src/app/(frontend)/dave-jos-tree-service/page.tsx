import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDaveJosTreeServiceEn } from '../../../siteConfig.dave-jos-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDaveJosTreeServiceEn.businessName} | ${siteConfigDaveJosTreeServiceEn.tagline}`,
  description: `${siteConfigDaveJosTreeServiceEn.tagline}. ${siteConfigDaveJosTreeServiceEn.hero.subhead}`,
  keywords: [
    "Dave & Jo's Tree Service",
    "tree removal St. Petersburg FL",
    "tree service St. Petersburg",
    "stump grinding St. Petersburg",
    "emergency tree service 33714",
    "Dave tree service",
  ],
}

export default function DaveJosTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigDaveJosTreeServiceEn} />
}
