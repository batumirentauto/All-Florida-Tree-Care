import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGermanTreeServiceIncRu } from '../../../../siteConfig.german-tree-service-inc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGermanTreeServiceIncRu.businessName} | ${siteConfigGermanTreeServiceIncRu.tagline}`,
  description: `${siteConfigGermanTreeServiceIncRu.tagline}. ${siteConfigGermanTreeServiceIncRu.hero.subhead}`,
}

export default function GermanTreeServiceIncRussianPage() {
  return <UniversalCompanyPage config={siteConfigGermanTreeServiceIncRu} />
}
