import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCcTreeServiceRu } from '../../../../siteConfig.cc-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCcTreeServiceRu.businessName} | ${siteConfigCcTreeServiceRu.tagline}`,
  description: `${siteConfigCcTreeServiceRu.tagline}. ${siteConfigCcTreeServiceRu.hero.subhead}`,
}

export default function CcTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigCcTreeServiceRu} />
}
