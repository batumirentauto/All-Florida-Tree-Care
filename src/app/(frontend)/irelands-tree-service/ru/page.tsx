import React from 'react'
import type { Metadata } from 'next'
import { siteConfigIrelandsTreeServiceRu } from '../../../../siteConfig.irelands-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigIrelandsTreeServiceRu.businessName} | ${siteConfigIrelandsTreeServiceRu.tagline}`,
  description: `${siteConfigIrelandsTreeServiceRu.tagline}. ${siteConfigIrelandsTreeServiceRu.hero.subhead}`,
}

export default function IrelandsTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigIrelandsTreeServiceRu} />
}
