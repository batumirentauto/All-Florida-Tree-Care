import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGreenValleyTreeServiceRu } from '../../../../siteConfig.green-valley-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGreenValleyTreeServiceRu.businessName} | ${siteConfigGreenValleyTreeServiceRu.tagline}`,
  description: `${siteConfigGreenValleyTreeServiceRu.tagline}. ${siteConfigGreenValleyTreeServiceRu.hero.subhead}`,
}

export default function GreenValleyTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigGreenValleyTreeServiceRu} />
}
