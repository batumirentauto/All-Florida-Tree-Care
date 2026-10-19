import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeCuttersOfAmericaRu } from '../../../../siteConfig.tree-cutters-of-america.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeCuttersOfAmericaRu.businessName} | ${siteConfigTreeCuttersOfAmericaRu.tagline}`,
  description: `${siteConfigTreeCuttersOfAmericaRu.tagline}. ${siteConfigTreeCuttersOfAmericaRu.hero.subhead}`,
}

export default function TreeCuttersOfAmericaRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreeCuttersOfAmericaRu} />
}
