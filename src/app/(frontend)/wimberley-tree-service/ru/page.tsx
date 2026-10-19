import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWimberleyTreeServiceRu } from '../../../../siteConfig.wimberley-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWimberleyTreeServiceRu.businessName} | ${siteConfigWimberleyTreeServiceRu.tagline}`,
  description: `${siteConfigWimberleyTreeServiceRu.tagline}. ${siteConfigWimberleyTreeServiceRu.hero.subhead}`,
}

export default function WimberleyTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigWimberleyTreeServiceRu} />
}
