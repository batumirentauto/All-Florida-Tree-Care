import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPuregreenTreeServiceRu } from '../../../../siteConfig.puregreen-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPuregreenTreeServiceRu.businessName} | ${siteConfigPuregreenTreeServiceRu.tagline}`,
  description: `${siteConfigPuregreenTreeServiceRu.tagline}. ${siteConfigPuregreenTreeServiceRu.hero.subhead}`,
}

export default function PuregreenTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigPuregreenTreeServiceRu} />
}
