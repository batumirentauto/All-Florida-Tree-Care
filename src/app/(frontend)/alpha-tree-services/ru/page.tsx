import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAlphaTreeServicesRu } from '../../../../siteConfig.alpha-tree-services.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAlphaTreeServicesRu.businessName} | ${siteConfigAlphaTreeServicesRu.tagline}`,
  description: `${siteConfigAlphaTreeServicesRu.tagline}. ${siteConfigAlphaTreeServicesRu.hero.subhead}`,
}

export default function AlphaTreeServicesRussianPage() {
  return <UniversalCompanyPage config={siteConfigAlphaTreeServicesRu} />
}
