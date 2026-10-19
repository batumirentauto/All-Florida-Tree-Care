import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJTreeServiceRu } from '../../../../siteConfig.j-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJTreeServiceRu.businessName} | ${siteConfigJTreeServiceRu.tagline}`,
  description: `${siteConfigJTreeServiceRu.tagline}. ${siteConfigJTreeServiceRu.hero.subhead}`,
}

export default function JTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigJTreeServiceRu} />
}
