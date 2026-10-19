import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSouthernParadisePalmAndTreeSalesRu } from '../../../../siteConfig.southern-paradise-palm-and-tree-sales.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSouthernParadisePalmAndTreeSalesRu.businessName} | ${siteConfigSouthernParadisePalmAndTreeSalesRu.tagline}`,
  description: `${siteConfigSouthernParadisePalmAndTreeSalesRu.tagline}. ${siteConfigSouthernParadisePalmAndTreeSalesRu.hero.subhead}`,
}

export default function SouthernParadisePalmAndTreeSalesRussianPage() {
  return <UniversalCompanyPage config={siteConfigSouthernParadisePalmAndTreeSalesRu} />
}
