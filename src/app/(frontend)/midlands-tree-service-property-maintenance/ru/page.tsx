import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMidlandsTreeServicePropertyMaintenanceRu } from '../../../../siteConfig.midlands-tree-service-property-maintenance.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMidlandsTreeServicePropertyMaintenanceRu.businessName} | ${siteConfigMidlandsTreeServicePropertyMaintenanceRu.tagline}`,
  description: `${siteConfigMidlandsTreeServicePropertyMaintenanceRu.tagline}. ${siteConfigMidlandsTreeServicePropertyMaintenanceRu.hero.subhead}`,
}

export default function MidlandsTreeServicePropertyMaintenanceRussianPage() {
  return <UniversalCompanyPage config={siteConfigMidlandsTreeServicePropertyMaintenanceRu} />
}
