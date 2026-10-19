import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGrahamTreeServicesIncRu } from '../../../../siteConfig.graham-tree-services-inc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGrahamTreeServicesIncRu.businessName} | ${siteConfigGrahamTreeServicesIncRu.tagline}`,
  description: `${siteConfigGrahamTreeServicesIncRu.tagline}. ${siteConfigGrahamTreeServicesIncRu.hero.subhead}`,
}

export default function GrahamTreeServicesIncRussianPage() {
  return <UniversalCompanyPage config={siteConfigGrahamTreeServicesIncRu} />
}
