import React from 'react'
import type { Metadata } from 'next'
import { siteConfigEcoproOutdoorSolutionsTreeServiceProviderEn } from '../../../siteConfig.ecopro-outdoor-solutions-tree-service-provider.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigEcoproOutdoorSolutionsTreeServiceProviderEn.businessName} | ${siteConfigEcoproOutdoorSolutionsTreeServiceProviderEn.tagline}`,
  description: `${siteConfigEcoproOutdoorSolutionsTreeServiceProviderEn.tagline}. ${siteConfigEcoproOutdoorSolutionsTreeServiceProviderEn.hero.subhead}`,
  keywords: [
    "Ecopro Outdoor Solutions: Tree Service Provider",
    "tree removal Sarasota FL",
    "tree service Sarasota",
    "stump grinding Sarasota",
    "emergency tree service 34239",
    "Lead Arborist tree service",
  ],
}

export default function EcoproOutdoorSolutionsTreeServiceProviderEnglishPage() {
  return <UniversalCompanyPage config={siteConfigEcoproOutdoorSolutionsTreeServiceProviderEn} />
}
