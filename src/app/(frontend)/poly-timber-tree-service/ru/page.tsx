import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPolyTimberTreeServiceRu } from '../../../../siteConfig.poly-timber-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPolyTimberTreeServiceRu.businessName} | ${siteConfigPolyTimberTreeServiceRu.tagline}`,
  description: `${siteConfigPolyTimberTreeServiceRu.tagline}. ${siteConfigPolyTimberTreeServiceRu.hero.subhead}`,
}

export default function PolyTimberTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigPolyTimberTreeServiceRu} />
}
