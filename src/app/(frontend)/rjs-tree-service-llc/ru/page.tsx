import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRjsTreeServiceLlcRu } from '../../../../siteConfig.rjs-tree-service-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRjsTreeServiceLlcRu.businessName} | ${siteConfigRjsTreeServiceLlcRu.tagline}`,
  description: `${siteConfigRjsTreeServiceLlcRu.tagline}. ${siteConfigRjsTreeServiceLlcRu.hero.subhead}`,
}

export default function RjsTreeServiceLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigRjsTreeServiceLlcRu} />
}
