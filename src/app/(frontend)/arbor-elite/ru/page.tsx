import React from 'react'
import type { Metadata } from 'next'
import { siteConfigArborEliteRu } from '../../../../siteConfig.arbor-elite.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigArborEliteRu.businessName} | ${siteConfigArborEliteRu.tagline}`,
  description: `${siteConfigArborEliteRu.tagline}. ${siteConfigArborEliteRu.hero.subhead}`,
}

export default function ArborEliteRussianPage() {
  return <UniversalCompanyPage config={siteConfigArborEliteRu} />
}
