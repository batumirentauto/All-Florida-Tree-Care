import React from 'react'
import type { Metadata } from 'next'
import { siteConfigA1TreeCareLlcRu } from '../../../../siteConfig.a1-tree-care-llc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigA1TreeCareLlcRu.businessName} | ${siteConfigA1TreeCareLlcRu.tagline}`,
  description: `${siteConfigA1TreeCareLlcRu.tagline}. ${siteConfigA1TreeCareLlcRu.hero.subhead}`,
}

export default function A1TreeCareLlcRussianPage() {
  return <UniversalCompanyPage config={siteConfigA1TreeCareLlcRu} />
}
