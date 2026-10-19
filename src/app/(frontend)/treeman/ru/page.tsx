import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreemanRu } from '../../../../siteConfig.treeman.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreemanRu.businessName} | ${siteConfigTreemanRu.tagline}`,
  description: `${siteConfigTreemanRu.tagline}. ${siteConfigTreemanRu.hero.subhead}`,
}

export default function TreemanRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreemanRu} />
}
