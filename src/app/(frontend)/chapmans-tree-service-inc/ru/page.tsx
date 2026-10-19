import React from 'react'
import type { Metadata } from 'next'
import { siteConfigChapmansTreeServiceIncRu } from '../../../../siteConfig.chapmans-tree-service-inc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigChapmansTreeServiceIncRu.businessName} | ${siteConfigChapmansTreeServiceIncRu.tagline}`,
  description: `${siteConfigChapmansTreeServiceIncRu.tagline}. ${siteConfigChapmansTreeServiceIncRu.hero.subhead}`,
}

export default function ChapmansTreeServiceIncRussianPage() {
  return <UniversalCompanyPage config={siteConfigChapmansTreeServiceIncRu} />
}
