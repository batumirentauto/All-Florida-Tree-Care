import React from 'react'
import type { Metadata } from 'next'
import { siteConfigReleafTreeServicesLlcRu } from '../../../../siteConfig.releaf-tree-services-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigReleafTreeServicesLlcRu.businessName} | ${siteConfigReleafTreeServicesLlcRu.tagline}`,
  description: `${siteConfigReleafTreeServicesLlcRu.tagline}. ${siteConfigReleafTreeServicesLlcRu.hero.subhead}`,
}

export default function ReleafTreeServicesLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigReleafTreeServicesLlcRu} />
}
