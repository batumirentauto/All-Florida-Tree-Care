import React from 'react'
import type { Metadata } from 'next'
import { siteConfigEcoproOutdoorSolutionsTreeServiceProviderRu } from '../../../../siteConfig.ecopro-outdoor-solutions-tree-service-provider.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigEcoproOutdoorSolutionsTreeServiceProviderRu.businessName} | ${siteConfigEcoproOutdoorSolutionsTreeServiceProviderRu.tagline}`,
  description: `${siteConfigEcoproOutdoorSolutionsTreeServiceProviderRu.tagline}. ${siteConfigEcoproOutdoorSolutionsTreeServiceProviderRu.hero.subhead}`,
}

export default function EcoproOutdoorSolutionsTreeServiceProviderRussianPage() {
  return <UniversalCompanyPage config={siteConfigEcoproOutdoorSolutionsTreeServiceProviderRu} />
}
