import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDmTreeAndLandServicesRu } from '../../../../siteConfig.dm-tree-and-land-services.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDmTreeAndLandServicesRu.businessName} | ${siteConfigDmTreeAndLandServicesRu.tagline}`,
  description: `${siteConfigDmTreeAndLandServicesRu.tagline}. ${siteConfigDmTreeAndLandServicesRu.hero.subhead}`,
}

export default function DmTreeAndLandServicesRussianPage() {
  return <UniversalCompanyPage config={siteConfigDmTreeAndLandServicesRu} />
}
