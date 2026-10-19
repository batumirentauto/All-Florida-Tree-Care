import React from 'react'
import type { Metadata } from 'next'
import { siteConfigImbersTreeServiceLlcRu } from '../../../../siteConfig.imbers-tree-service-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigImbersTreeServiceLlcRu.businessName} | ${siteConfigImbersTreeServiceLlcRu.tagline}`,
  description: `${siteConfigImbersTreeServiceLlcRu.tagline}. ${siteConfigImbersTreeServiceLlcRu.hero.subhead}`,
}

export default function ImbersTreeServiceLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigImbersTreeServiceLlcRu} />
}
