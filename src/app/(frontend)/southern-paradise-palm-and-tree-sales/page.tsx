import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSouthernParadisePalmAndTreeSalesEn } from '../../../siteConfig.southern-paradise-palm-and-tree-sales.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSouthernParadisePalmAndTreeSalesEn.businessName} | ${siteConfigSouthernParadisePalmAndTreeSalesEn.tagline}`,
  description: `${siteConfigSouthernParadisePalmAndTreeSalesEn.tagline}. ${siteConfigSouthernParadisePalmAndTreeSalesEn.hero.subhead}`,
  keywords: [
    "Southern Paradise Palm and Tree Sales",
    "tree removal Corpus Christi TX",
    "tree service Corpus Christi",
    "stump grinding Corpus Christi",
    "emergency tree service 78415",
    "Lead Arborist tree service",
  ],
}

export default function SouthernParadisePalmAndTreeSalesEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSouthernParadisePalmAndTreeSalesEn} />
}
