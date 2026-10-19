import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTrinityForestTreeCareServiceRu } from '../../../../siteConfig.trinity-forest-tree-care-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTrinityForestTreeCareServiceRu.businessName} | ${siteConfigTrinityForestTreeCareServiceRu.tagline}`,
  description: `${siteConfigTrinityForestTreeCareServiceRu.tagline}. ${siteConfigTrinityForestTreeCareServiceRu.hero.subhead}`,
}

export default function TrinityForestTreeCareServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigTrinityForestTreeCareServiceRu} />
}
