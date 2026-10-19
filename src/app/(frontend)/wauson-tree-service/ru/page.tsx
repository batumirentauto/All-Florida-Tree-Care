import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWausonTreeServiceRu } from '../../../../siteConfig.wauson-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWausonTreeServiceRu.businessName} | ${siteConfigWausonTreeServiceRu.tagline}`,
  description: `${siteConfigWausonTreeServiceRu.tagline}. ${siteConfigWausonTreeServiceRu.hero.subhead}`,
}

export default function WausonTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigWausonTreeServiceRu} />
}
