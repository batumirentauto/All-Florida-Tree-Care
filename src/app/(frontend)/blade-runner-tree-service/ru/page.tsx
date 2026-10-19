import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBladeRunnerTreeServiceRu } from '../../../../siteConfig.blade-runner-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBladeRunnerTreeServiceRu.businessName} | ${siteConfigBladeRunnerTreeServiceRu.tagline}`,
  description: `${siteConfigBladeRunnerTreeServiceRu.tagline}. ${siteConfigBladeRunnerTreeServiceRu.hero.subhead}`,
}

export default function BladeRunnerTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigBladeRunnerTreeServiceRu} />
}
