import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGreenlineTreeServiceRu } from '../../../../siteConfig.greenline-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGreenlineTreeServiceRu.businessName} | ${siteConfigGreenlineTreeServiceRu.tagline}`,
  description: `${siteConfigGreenlineTreeServiceRu.tagline}. ${siteConfigGreenlineTreeServiceRu.hero.subhead}`,
}

export default function GreenlineTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigGreenlineTreeServiceRu} />
}
