import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJdTreeServiceRu } from '../../../../siteConfig.jd-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJdTreeServiceRu.businessName} | ${siteConfigJdTreeServiceRu.tagline}`,
  description: `${siteConfigJdTreeServiceRu.tagline}. ${siteConfigJdTreeServiceRu.hero.subhead}`,
}

export default function JdTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigJdTreeServiceRu} />
}
