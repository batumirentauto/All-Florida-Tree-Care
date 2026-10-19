import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPacificTreeServicesRu } from '../../../../siteConfig.pacific-tree-services.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPacificTreeServicesRu.businessName} | ${siteConfigPacificTreeServicesRu.tagline}`,
  description: `${siteConfigPacificTreeServicesRu.tagline}. ${siteConfigPacificTreeServicesRu.hero.subhead}`,
}

export default function PacificTreeServicesRussianPage() {
  return <UniversalCompanyPage config={siteConfigPacificTreeServicesRu} />
}
