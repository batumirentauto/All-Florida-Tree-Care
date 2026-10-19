import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTampaTreeServiceRu } from '../../../../siteConfig.tampa-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTampaTreeServiceRu.businessName} | ${siteConfigTampaTreeServiceRu.tagline}`,
  description: `${siteConfigTampaTreeServiceRu.tagline}. ${siteConfigTampaTreeServiceRu.hero.subhead}`,
}

export default function TampaTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigTampaTreeServiceRu} />
}
