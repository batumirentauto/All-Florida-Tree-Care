import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDolleyTreeServiceRu } from '../../../../siteConfig.dolley-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDolleyTreeServiceRu.businessName} | ${siteConfigDolleyTreeServiceRu.tagline}`,
  description: `${siteConfigDolleyTreeServiceRu.tagline}. ${siteConfigDolleyTreeServiceRu.hero.subhead}`,
}

export default function DolleyTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigDolleyTreeServiceRu} />
}
