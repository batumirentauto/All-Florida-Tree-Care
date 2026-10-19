import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJasonHamiltonRu } from '../../../../siteConfig.jason-hamilton.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJasonHamiltonRu.businessName} | ${siteConfigJasonHamiltonRu.tagline}`,
  description: `${siteConfigJasonHamiltonRu.tagline}. ${siteConfigJasonHamiltonRu.hero.subhead}`,
}

export default function JasonHamiltonRussianPage() {
  return <UniversalCompanyPage config={siteConfigJasonHamiltonRu} />
}
