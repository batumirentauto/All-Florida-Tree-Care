import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAkaTreeServiceRu } from '../../../../siteConfig.aka-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAkaTreeServiceRu.businessName} | ${siteConfigAkaTreeServiceRu.tagline}`,
  description: `${siteConfigAkaTreeServiceRu.tagline}. ${siteConfigAkaTreeServiceRu.hero.subhead}`,
}

export default function AkaTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigAkaTreeServiceRu} />
}
