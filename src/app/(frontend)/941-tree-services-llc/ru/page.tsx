import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCompany941TreeServicesLlcRu } from '../../../../siteConfig.941-tree-services-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCompany941TreeServicesLlcRu.businessName} | ${siteConfigCompany941TreeServicesLlcRu.tagline}`,
  description: `${siteConfigCompany941TreeServicesLlcRu.tagline}. ${siteConfigCompany941TreeServicesLlcRu.hero.subhead}`,
}

export default function Company941TreeServicesLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigCompany941TreeServicesLlcRu} />
}
