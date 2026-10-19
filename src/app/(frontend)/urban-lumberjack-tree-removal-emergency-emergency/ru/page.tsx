import React from 'react'
import type { Metadata } from 'next'
import { siteConfigUrbanLumberjackTreeRemovalEmergencyEmergencyRu } from '../../../../siteConfig.urban-lumberjack-tree-removal-emergency-emergency.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigUrbanLumberjackTreeRemovalEmergencyEmergencyRu.businessName} | ${siteConfigUrbanLumberjackTreeRemovalEmergencyEmergencyRu.tagline}`,
  description: `${siteConfigUrbanLumberjackTreeRemovalEmergencyEmergencyRu.tagline}. ${siteConfigUrbanLumberjackTreeRemovalEmergencyEmergencyRu.hero.subhead}`,
}

export default function UrbanLumberjackTreeRemovalEmergencyEmergencyRussianPage() {
  return <UniversalCompanyPage config={siteConfigUrbanLumberjackTreeRemovalEmergencyEmergencyRu} />
}
