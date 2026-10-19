import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMahaloTreeServiceRu } from '../../../../siteConfig.mahalo-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMahaloTreeServiceRu.businessName} | ${siteConfigMahaloTreeServiceRu.tagline}`,
  description: `${siteConfigMahaloTreeServiceRu.tagline}. ${siteConfigMahaloTreeServiceRu.hero.subhead}`,
}

export default function MahaloTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigMahaloTreeServiceRu} />
}
