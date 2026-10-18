import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAIntegrityRu } from '../../../../siteConfig.a-integrity.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAIntegrityRu.businessName} | ${siteConfigAIntegrityRu.tagline}`,
  description: `${siteConfigAIntegrityRu.tagline}. ${siteConfigAIntegrityRu.hero.subhead}`,
}

export default function AIntegrityRussianPage() {
  return <UniversalCompanyPage config={siteConfigAIntegrityRu} />
}
