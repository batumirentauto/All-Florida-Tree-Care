import React from 'react'
import type { Metadata } from 'next'
import { siteConfigEscamillaTreeServiceEmergencyTreeRemovalEn } from '../../../siteConfig.escamilla-tree-service-emergency-tree-removal.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigEscamillaTreeServiceEmergencyTreeRemovalEn.businessName} | ${siteConfigEscamillaTreeServiceEmergencyTreeRemovalEn.tagline}`,
  description: `${siteConfigEscamillaTreeServiceEmergencyTreeRemovalEn.tagline}. ${siteConfigEscamillaTreeServiceEmergencyTreeRemovalEn.hero.subhead}`,
  keywords: [
    "Escamilla Tree Service - Emergency Tree Removal",
    "tree removal Austell GA",
    "tree service Austell",
    "stump grinding Austell",
    "emergency tree service 30106",
    "Lead Arborist tree service",
  ],
}

export default function EscamillaTreeServiceEmergencyTreeRemovalEnglishPage() {
  return <UniversalCompanyPage config={siteConfigEscamillaTreeServiceEmergencyTreeRemovalEn} />
}
