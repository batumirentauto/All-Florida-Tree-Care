import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRaleighwoodTreeServicesRu } from '../../../../siteConfig.raleighwood-tree-services.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRaleighwoodTreeServicesRu.businessName} | ${siteConfigRaleighwoodTreeServicesRu.tagline}`,
  description: `${siteConfigRaleighwoodTreeServicesRu.tagline}. ${siteConfigRaleighwoodTreeServicesRu.hero.subhead}`,
}

export default function RaleighwoodTreeServicesRussianPage() {
  return <UniversalCompanyPage config={siteConfigRaleighwoodTreeServicesRu} />
}
