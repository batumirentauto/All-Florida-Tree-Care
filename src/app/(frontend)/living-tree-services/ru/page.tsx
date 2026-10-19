import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLivingTreeServicesRu } from '../../../../siteConfig.living-tree-services.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLivingTreeServicesRu.businessName} | ${siteConfigLivingTreeServicesRu.tagline}`,
  description: `${siteConfigLivingTreeServicesRu.tagline}. ${siteConfigLivingTreeServicesRu.hero.subhead}`,
}

export default function LivingTreeServicesRussianPage() {
  return <UniversalCompanyPage config={siteConfigLivingTreeServicesRu} />
}
