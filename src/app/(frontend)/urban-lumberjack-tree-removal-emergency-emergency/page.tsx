import React from 'react'
import type { Metadata } from 'next'
import { siteConfigUrbanLumberjackTreeRemovalEmergencyEmergencyEn } from '../../../siteConfig.urban-lumberjack-tree-removal-emergency-emergency.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigUrbanLumberjackTreeRemovalEmergencyEmergencyEn.businessName} | ${siteConfigUrbanLumberjackTreeRemovalEmergencyEmergencyEn.tagline}`,
  description: `${siteConfigUrbanLumberjackTreeRemovalEmergencyEmergencyEn.tagline}. ${siteConfigUrbanLumberjackTreeRemovalEmergencyEmergencyEn.hero.subhead}`,
  keywords: [
    "Urban Lumberjack | Tree Removal Emergency | Emergency Tree Service",
    "tree removal Tualatin OR",
    "tree service Tualatin",
    "stump grinding Tualatin",
    "emergency tree service 97062",
    "Nicky tree service",
  ],
}

export default function UrbanLumberjackTreeRemovalEmergencyEmergencyEnglishPage() {
  return <UniversalCompanyPage config={siteConfigUrbanLumberjackTreeRemovalEmergencyEmergencyEn} />
}
