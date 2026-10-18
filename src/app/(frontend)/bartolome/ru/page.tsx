import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBartolomeRu } from '../../../../siteConfig.bartolome.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBartolomeRu.businessName} | ${siteConfigBartolomeRu.tagline}`,
  description: `${siteConfigBartolomeRu.tagline}. ${siteConfigBartolomeRu.hero.subhead}`,
}

export default function BartolomeRussianPage() {
  return <UniversalCompanyPage config={siteConfigBartolomeRu} />
}
