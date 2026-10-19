import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLjrTreeServicesIncRu } from '../../../../siteConfig.ljr-tree-services-inc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLjrTreeServicesIncRu.businessName} | ${siteConfigLjrTreeServicesIncRu.tagline}`,
  description: `${siteConfigLjrTreeServicesIncRu.tagline}. ${siteConfigLjrTreeServicesIncRu.hero.subhead}`,
}

export default function LjrTreeServicesIncRussianPage() {
  return <UniversalCompanyPage config={siteConfigLjrTreeServicesIncRu} />
}
