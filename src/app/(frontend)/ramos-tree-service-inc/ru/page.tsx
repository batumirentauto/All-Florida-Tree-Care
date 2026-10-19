import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRamosTreeServiceIncRu } from '../../../../siteConfig.ramos-tree-service-inc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRamosTreeServiceIncRu.businessName} | ${siteConfigRamosTreeServiceIncRu.tagline}`,
  description: `${siteConfigRamosTreeServiceIncRu.tagline}. ${siteConfigRamosTreeServiceIncRu.hero.subhead}`,
}

export default function RamosTreeServiceIncRussianPage() {
  return <UniversalCompanyPage config={siteConfigRamosTreeServiceIncRu} />
}
