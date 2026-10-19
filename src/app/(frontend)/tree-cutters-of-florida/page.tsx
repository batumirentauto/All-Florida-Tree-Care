import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeCuttersOfFloridaEn } from '../../../siteConfig.tree-cutters-of-florida.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeCuttersOfFloridaEn.businessName} | ${siteConfigTreeCuttersOfFloridaEn.tagline}`,
  description: `${siteConfigTreeCuttersOfFloridaEn.tagline}. ${siteConfigTreeCuttersOfFloridaEn.hero.subhead}`,
  keywords: [
    "Tree Cutters of Florida",
    "tree removal Jacksonville FL",
    "tree service Jacksonville",
    "stump grinding Jacksonville",
    "emergency tree service 32258",
    "Scott tree service",
  ],
}

export default function TreeCuttersOfFloridaEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreeCuttersOfFloridaEn} />
}
