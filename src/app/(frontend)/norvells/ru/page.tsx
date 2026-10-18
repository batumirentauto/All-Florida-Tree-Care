import React from 'react'
import type { Metadata } from 'next'
import { siteConfigNorvellsRu } from '../../../../siteConfig.norvells.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigNorvellsRu.businessName} | ${siteConfigNorvellsRu.tagline}`,
  description: `${siteConfigNorvellsRu.tagline}. ${siteConfigNorvellsRu.hero.subhead}`,
}

export default function NorvellsRussianPage() {
  return <UniversalCompanyPage config={siteConfigNorvellsRu} />
}
