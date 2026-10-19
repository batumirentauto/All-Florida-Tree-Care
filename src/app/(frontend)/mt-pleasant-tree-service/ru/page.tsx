import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMtPleasantTreeServiceRu } from '../../../../siteConfig.mt-pleasant-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMtPleasantTreeServiceRu.businessName} | ${siteConfigMtPleasantTreeServiceRu.tagline}`,
  description: `${siteConfigMtPleasantTreeServiceRu.tagline}. ${siteConfigMtPleasantTreeServiceRu.hero.subhead}`,
}

export default function MtPleasantTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigMtPleasantTreeServiceRu} />
}
