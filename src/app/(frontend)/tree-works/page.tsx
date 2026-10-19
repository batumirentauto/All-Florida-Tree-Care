import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeWorksEn } from '../../../siteConfig.tree-works.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeWorksEn.businessName} | ${siteConfigTreeWorksEn.tagline}`,
  description: `${siteConfigTreeWorksEn.tagline}. ${siteConfigTreeWorksEn.hero.subhead}`,
  keywords: [
    "Tree Works",
    "tree removal Matthews NC",
    "tree service Matthews",
    "stump grinding Matthews",
    "emergency tree service 28104",
    "Tripp tree service",
  ],
}

export default function TreeWorksEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreeWorksEn} />
}
