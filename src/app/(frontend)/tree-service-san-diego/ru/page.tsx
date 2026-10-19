import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeServiceSanDiegoRu } from '../../../../siteConfig.tree-service-san-diego.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeServiceSanDiegoRu.businessName} | ${siteConfigTreeServiceSanDiegoRu.tagline}`,
  description: `${siteConfigTreeServiceSanDiegoRu.tagline}. ${siteConfigTreeServiceSanDiegoRu.hero.subhead}`,
}

export default function TreeServiceSanDiegoRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreeServiceSanDiegoRu} />
}
