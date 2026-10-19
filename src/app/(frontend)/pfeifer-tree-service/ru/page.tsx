import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPfeiferTreeServiceRu } from '../../../../siteConfig.pfeifer-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPfeiferTreeServiceRu.businessName} | ${siteConfigPfeiferTreeServiceRu.tagline}`,
  description: `${siteConfigPfeiferTreeServiceRu.tagline}. ${siteConfigPfeiferTreeServiceRu.hero.subhead}`,
}

export default function PfeiferTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigPfeiferTreeServiceRu} />
}
