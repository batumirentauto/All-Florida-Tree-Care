import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDynamicTreeCareLlcEn } from '../../../siteConfig.dynamic-tree-care-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDynamicTreeCareLlcEn.businessName} | ${siteConfigDynamicTreeCareLlcEn.tagline}`,
  description: `${siteConfigDynamicTreeCareLlcEn.tagline}. ${siteConfigDynamicTreeCareLlcEn.hero.subhead}`,
  keywords: [
    "Dynamic Tree Care, LLC",
    "tree removal Corpus Christi TX",
    "tree service Corpus Christi",
    "stump grinding Corpus Christi",
    "emergency tree service 78418",
    "Ty tree service",
  ],
}

export default function DynamicTreeCareLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigDynamicTreeCareLlcEn} />
}
