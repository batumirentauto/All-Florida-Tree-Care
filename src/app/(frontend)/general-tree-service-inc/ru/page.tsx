import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGeneralTreeServiceIncRu } from '../../../../siteConfig.general-tree-service-inc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGeneralTreeServiceIncRu.businessName} | ${siteConfigGeneralTreeServiceIncRu.tagline}`,
  description: `${siteConfigGeneralTreeServiceIncRu.tagline}. ${siteConfigGeneralTreeServiceIncRu.hero.subhead}`,
}

export default function GeneralTreeServiceIncRussianPage() {
  return <UniversalCompanyPage config={siteConfigGeneralTreeServiceIncRu} />
}
