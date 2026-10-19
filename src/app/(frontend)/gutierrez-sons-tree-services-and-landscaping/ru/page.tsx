import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGutierrezSonsTreeServicesAndLandscapingRu } from '../../../../siteConfig.gutierrez-sons-tree-services-and-landscaping.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGutierrezSonsTreeServicesAndLandscapingRu.businessName} | ${siteConfigGutierrezSonsTreeServicesAndLandscapingRu.tagline}`,
  description: `${siteConfigGutierrezSonsTreeServicesAndLandscapingRu.tagline}. ${siteConfigGutierrezSonsTreeServicesAndLandscapingRu.hero.subhead}`,
}

export default function GutierrezSonsTreeServicesAndLandscapingRussianPage() {
  return <UniversalCompanyPage config={siteConfigGutierrezSonsTreeServicesAndLandscapingRu} />
}
