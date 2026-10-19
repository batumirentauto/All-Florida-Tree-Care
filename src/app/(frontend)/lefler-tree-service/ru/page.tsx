import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLeflerTreeServiceRu } from '../../../../siteConfig.lefler-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLeflerTreeServiceRu.businessName} | ${siteConfigLeflerTreeServiceRu.tagline}`,
  description: `${siteConfigLeflerTreeServiceRu.tagline}. ${siteConfigLeflerTreeServiceRu.hero.subhead}`,
}

export default function LeflerTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigLeflerTreeServiceRu} />
}
