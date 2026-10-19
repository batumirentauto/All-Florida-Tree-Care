import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCutchinsTreeServiceRu } from '../../../../siteConfig.cutchins-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCutchinsTreeServiceRu.businessName} | ${siteConfigCutchinsTreeServiceRu.tagline}`,
  description: `${siteConfigCutchinsTreeServiceRu.tagline}. ${siteConfigCutchinsTreeServiceRu.hero.subhead}`,
}

export default function CutchinsTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigCutchinsTreeServiceRu} />
}
