import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHeartwoodTreeCareAshevilleNcRu } from '../../../../siteConfig.heartwood-tree-care-asheville-nc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHeartwoodTreeCareAshevilleNcRu.businessName} | ${siteConfigHeartwoodTreeCareAshevilleNcRu.tagline}`,
  description: `${siteConfigHeartwoodTreeCareAshevilleNcRu.tagline}. ${siteConfigHeartwoodTreeCareAshevilleNcRu.hero.subhead}`,
}

export default function HeartwoodTreeCareAshevilleNcRussianPage() {
  return <UniversalCompanyPage config={siteConfigHeartwoodTreeCareAshevilleNcRu} />
}
