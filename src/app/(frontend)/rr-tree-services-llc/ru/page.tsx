import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRrTreeServicesLlcRu } from '../../../../siteConfig.rr-tree-services-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRrTreeServicesLlcRu.businessName} | ${siteConfigRrTreeServicesLlcRu.tagline}`,
  description: `${siteConfigRrTreeServicesLlcRu.tagline}. ${siteConfigRrTreeServicesLlcRu.hero.subhead}`,
}

export default function RrTreeServicesLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigRrTreeServicesLlcRu} />
}
