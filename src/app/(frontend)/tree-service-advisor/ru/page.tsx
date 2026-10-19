import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeServiceAdvisorRu } from '../../../../siteConfig.tree-service-advisor.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeServiceAdvisorRu.businessName} | ${siteConfigTreeServiceAdvisorRu.tagline}`,
  description: `${siteConfigTreeServiceAdvisorRu.tagline}. ${siteConfigTreeServiceAdvisorRu.hero.subhead}`,
}

export default function TreeServiceAdvisorRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreeServiceAdvisorRu} />
}
