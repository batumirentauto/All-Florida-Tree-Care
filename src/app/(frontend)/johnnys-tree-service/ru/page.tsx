import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJohnnysTreeServiceRu } from '../../../../siteConfig.johnnys-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJohnnysTreeServiceRu.businessName} | ${siteConfigJohnnysTreeServiceRu.tagline}`,
  description: `${siteConfigJohnnysTreeServiceRu.tagline}. ${siteConfigJohnnysTreeServiceRu.hero.subhead}`,
}

export default function JohnnysTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigJohnnysTreeServiceRu} />
}
