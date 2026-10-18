import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSsTreeEn } from '../../../siteConfig.ss-tree.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSsTreeEn.businessName} | ${siteConfigSsTreeEn.tagline}`,
  description: `${siteConfigSsTreeEn.tagline}. ${siteConfigSsTreeEn.hero.subhead}`,
  keywords: [
    "S & S Tree Service",
    "tree removal Jacksonville FL",
    "tree service Jacksonville",
    "stump grinding Jacksonville",
    "emergency tree service 32258",
    "Scott tree service",
  ],
}

export default function SsTreeEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSsTreeEn} />
}
