import React from 'react'
import type { Metadata } from 'next'
import { siteConfigNoyolasTreeServiceLlcRu } from '../../../../siteConfig.noyolas-tree-service-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigNoyolasTreeServiceLlcRu.businessName} | ${siteConfigNoyolasTreeServiceLlcRu.tagline}`,
  description: `${siteConfigNoyolasTreeServiceLlcRu.tagline}. ${siteConfigNoyolasTreeServiceLlcRu.hero.subhead}`,
}

export default function NoyolasTreeServiceLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigNoyolasTreeServiceLlcRu} />
}
