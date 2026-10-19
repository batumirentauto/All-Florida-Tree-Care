import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTwistedTreeServiceRu } from '../../../../siteConfig.twisted-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTwistedTreeServiceRu.businessName} | ${siteConfigTwistedTreeServiceRu.tagline}`,
  description: `${siteConfigTwistedTreeServiceRu.tagline}. ${siteConfigTwistedTreeServiceRu.hero.subhead}`,
}

export default function TwistedTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigTwistedTreeServiceRu} />
}
