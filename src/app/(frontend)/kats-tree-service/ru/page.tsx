import React from 'react'
import type { Metadata } from 'next'
import { siteConfigKatsTreeServiceRu } from '../../../../siteConfig.kats-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigKatsTreeServiceRu.businessName} | ${siteConfigKatsTreeServiceRu.tagline}`,
  description: `${siteConfigKatsTreeServiceRu.tagline}. ${siteConfigKatsTreeServiceRu.hero.subhead}`,
}

export default function KatsTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigKatsTreeServiceRu} />
}
