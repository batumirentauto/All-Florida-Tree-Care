import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGreenLimbTreeServiceRu } from '../../../../siteConfig.green-limb-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGreenLimbTreeServiceRu.businessName} | ${siteConfigGreenLimbTreeServiceRu.tagline}`,
  description: `${siteConfigGreenLimbTreeServiceRu.tagline}. ${siteConfigGreenLimbTreeServiceRu.hero.subhead}`,
}

export default function GreenLimbTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigGreenLimbTreeServiceRu} />
}
