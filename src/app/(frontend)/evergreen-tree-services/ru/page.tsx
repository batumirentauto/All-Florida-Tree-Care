import React from 'react'
import type { Metadata } from 'next'
import { siteConfigEvergreenTreeServicesRu } from '../../../../siteConfig.evergreen-tree-services.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigEvergreenTreeServicesRu.businessName} | ${siteConfigEvergreenTreeServicesRu.tagline}`,
  description: `${siteConfigEvergreenTreeServicesRu.tagline}. ${siteConfigEvergreenTreeServicesRu.hero.subhead}`,
}

export default function EvergreenTreeServicesRussianPage() {
  return <UniversalCompanyPage config={siteConfigEvergreenTreeServicesRu} />
}
