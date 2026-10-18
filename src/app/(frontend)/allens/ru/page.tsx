import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAllensRu } from '../../../../siteConfig.allens.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAllensRu.businessName} | ${siteConfigAllensRu.tagline}`,
  description: `${siteConfigAllensRu.tagline}. ${siteConfigAllensRu.hero.subhead}`,
}

export default function AllensRussianPage() {
  return <UniversalCompanyPage config={siteConfigAllensRu} />
}
