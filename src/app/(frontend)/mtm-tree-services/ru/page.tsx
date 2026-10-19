import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMtmTreeServicesRu } from '../../../../siteConfig.mtm-tree-services.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMtmTreeServicesRu.businessName} | ${siteConfigMtmTreeServicesRu.tagline}`,
  description: `${siteConfigMtmTreeServicesRu.tagline}. ${siteConfigMtmTreeServicesRu.hero.subhead}`,
}

export default function MtmTreeServicesRussianPage() {
  return <UniversalCompanyPage config={siteConfigMtmTreeServicesRu} />
}
