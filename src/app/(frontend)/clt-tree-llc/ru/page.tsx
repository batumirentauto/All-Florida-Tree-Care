import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCltTreeLlcRu } from '../../../../siteConfig.clt-tree-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCltTreeLlcRu.businessName} | ${siteConfigCltTreeLlcRu.tagline}`,
  description: `${siteConfigCltTreeLlcRu.tagline}. ${siteConfigCltTreeLlcRu.hero.subhead}`,
}

export default function CltTreeLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigCltTreeLlcRu} />
}
