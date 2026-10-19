import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTrinityForestTreeCareServiceEn } from '../../../siteConfig.trinity-forest-tree-care-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTrinityForestTreeCareServiceEn.businessName} | ${siteConfigTrinityForestTreeCareServiceEn.tagline}`,
  description: `${siteConfigTrinityForestTreeCareServiceEn.tagline}. ${siteConfigTrinityForestTreeCareServiceEn.hero.subhead}`,
  keywords: [
    "Trinity Forest Tree Care Service",
    "tree removal Fort Worth TX",
    "tree service Fort Worth",
    "stump grinding Fort Worth",
    "emergency tree service 76116",
    "Bud tree service",
  ],
}

export default function TrinityForestTreeCareServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTrinityForestTreeCareServiceEn} />
}
