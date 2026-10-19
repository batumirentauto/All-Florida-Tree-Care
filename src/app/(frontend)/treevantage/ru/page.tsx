import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreevantageRu } from '../../../../siteConfig.treevantage.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreevantageRu.businessName} | ${siteConfigTreevantageRu.tagline}`,
  description: `${siteConfigTreevantageRu.tagline}. ${siteConfigTreevantageRu.hero.subhead}`,
}

export default function TreevantageRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreevantageRu} />
}
