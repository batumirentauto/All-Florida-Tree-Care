import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAscendTreeCareLlcRu } from '../../../../siteConfig.ascend-tree-care-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAscendTreeCareLlcRu.businessName} | ${siteConfigAscendTreeCareLlcRu.tagline}`,
  description: `${siteConfigAscendTreeCareLlcRu.tagline}. ${siteConfigAscendTreeCareLlcRu.hero.subhead}`,
}

export default function AscendTreeCareLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigAscendTreeCareLlcRu} />
}
