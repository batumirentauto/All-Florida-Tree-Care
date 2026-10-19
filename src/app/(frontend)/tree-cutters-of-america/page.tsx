import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeCuttersOfAmericaEn } from '../../../siteConfig.tree-cutters-of-america.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeCuttersOfAmericaEn.businessName} | ${siteConfigTreeCuttersOfAmericaEn.tagline}`,
  description: `${siteConfigTreeCuttersOfAmericaEn.tagline}. ${siteConfigTreeCuttersOfAmericaEn.hero.subhead}`,
  keywords: [
    "Tree Cutters of America",
    "tree removal Marietta GA",
    "tree service Marietta",
    "stump grinding Marietta",
    "emergency tree service 30062",
    "Lead Arborist tree service",
  ],
}

export default function TreeCuttersOfAmericaEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreeCuttersOfAmericaEn} />
}
