import React from 'react'
import type { Metadata } from 'next'
import { siteConfigKrTreeServiceProsRu } from '../../../../siteConfig.kr-tree-service-pros.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigKrTreeServiceProsRu.businessName} | ${siteConfigKrTreeServiceProsRu.tagline}`,
  description: `${siteConfigKrTreeServiceProsRu.tagline}. ${siteConfigKrTreeServiceProsRu.hero.subhead}`,
}

export default function KrTreeServiceProsRussianPage() {
  return <UniversalCompanyPage config={siteConfigKrTreeServiceProsRu} />
}
