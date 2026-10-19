import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWaltersTreeServiceRu } from '../../../../siteConfig.walters-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWaltersTreeServiceRu.businessName} | ${siteConfigWaltersTreeServiceRu.tagline}`,
  description: `${siteConfigWaltersTreeServiceRu.tagline}. ${siteConfigWaltersTreeServiceRu.hero.subhead}`,
}

export default function WaltersTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigWaltersTreeServiceRu} />
}
