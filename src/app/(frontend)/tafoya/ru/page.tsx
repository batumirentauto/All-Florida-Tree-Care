import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTafoyaRu } from '../../../../siteConfig.tafoya.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTafoyaRu.businessName} | ${siteConfigTafoyaRu.tagline}`,
  description: `${siteConfigTafoyaRu.tagline}. ${siteConfigTafoyaRu.hero.subhead}`,
}

export default function TafoyaRussianPage() {
  return <UniversalCompanyPage config={siteConfigTafoyaRu} />
}
