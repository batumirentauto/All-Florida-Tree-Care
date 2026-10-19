import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMidlandsTreeServicePropertyMaintenanceEn } from '../../../siteConfig.midlands-tree-service-property-maintenance.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMidlandsTreeServicePropertyMaintenanceEn.businessName} | ${siteConfigMidlandsTreeServicePropertyMaintenanceEn.tagline}`,
  description: `${siteConfigMidlandsTreeServicePropertyMaintenanceEn.tagline}. ${siteConfigMidlandsTreeServicePropertyMaintenanceEn.hero.subhead}`,
  keywords: [
    "Midlands Tree Service & Property Maintenance",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Wesley tree service",
  ],
}

export default function MidlandsTreeServicePropertyMaintenanceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigMidlandsTreeServicePropertyMaintenanceEn} />
}
