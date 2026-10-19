import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeCuttersOfFloridaRu } from '../../../../siteConfig.tree-cutters-of-florida.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeCuttersOfFloridaRu.businessName} | ${siteConfigTreeCuttersOfFloridaRu.tagline}`,
  description: `${siteConfigTreeCuttersOfFloridaRu.tagline}. ${siteConfigTreeCuttersOfFloridaRu.hero.subhead}`,
}

export default function TreeCuttersOfFloridaRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreeCuttersOfFloridaRu} />
}
