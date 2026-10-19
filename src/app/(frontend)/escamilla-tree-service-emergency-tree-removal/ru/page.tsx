import React from 'react'
import type { Metadata } from 'next'
import { siteConfigEscamillaTreeServiceEmergencyTreeRemovalRu } from '../../../../siteConfig.escamilla-tree-service-emergency-tree-removal.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigEscamillaTreeServiceEmergencyTreeRemovalRu.businessName} | ${siteConfigEscamillaTreeServiceEmergencyTreeRemovalRu.tagline}`,
  description: `${siteConfigEscamillaTreeServiceEmergencyTreeRemovalRu.tagline}. ${siteConfigEscamillaTreeServiceEmergencyTreeRemovalRu.hero.subhead}`,
}

export default function EscamillaTreeServiceEmergencyTreeRemovalRussianPage() {
  return <UniversalCompanyPage config={siteConfigEscamillaTreeServiceEmergencyTreeRemovalRu} />
}
