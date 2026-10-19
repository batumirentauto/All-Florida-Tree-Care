import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJimmisTreeServicesRu } from '../../../../siteConfig.jimmis-tree-services.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJimmisTreeServicesRu.businessName} | ${siteConfigJimmisTreeServicesRu.tagline}`,
  description: `${siteConfigJimmisTreeServicesRu.tagline}. ${siteConfigJimmisTreeServicesRu.hero.subhead}`,
}

export default function JimmisTreeServicesRussianPage() {
  return <UniversalCompanyPage config={siteConfigJimmisTreeServicesRu} />
}
