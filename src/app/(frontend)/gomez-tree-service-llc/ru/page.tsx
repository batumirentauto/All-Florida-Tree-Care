import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGomezTreeServiceLlcRu } from '../../../../siteConfig.gomez-tree-service-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGomezTreeServiceLlcRu.businessName} | ${siteConfigGomezTreeServiceLlcRu.tagline}`,
  description: `${siteConfigGomezTreeServiceLlcRu.tagline}. ${siteConfigGomezTreeServiceLlcRu.hero.subhead}`,
}

export default function GomezTreeServiceLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigGomezTreeServiceLlcRu} />
}
