import React from 'react'
import type { Metadata } from 'next'
import { siteConfigEatonRu } from '../../../../siteConfig.eaton.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigEatonRu.businessName} | ${siteConfigEatonRu.tagline}`,
  description: `${siteConfigEatonRu.tagline}. ${siteConfigEatonRu.hero.subhead}`,
}

export default function EatonRussianPage() {
  return <UniversalCompanyPage config={siteConfigEatonRu} />
}
