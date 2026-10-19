import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeDaddyEn } from '../../../siteConfig.tree-daddy.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeDaddyEn.businessName} | ${siteConfigTreeDaddyEn.tagline}`,
  description: `${siteConfigTreeDaddyEn.tagline}. ${siteConfigTreeDaddyEn.hero.subhead}`,
  keywords: [
    "Tree Daddy",
    "tree removal Orlando FL",
    "tree service Orlando",
    "stump grinding Orlando",
    "emergency tree service 32810",
    "Matt tree service",
  ],
}

export default function TreeDaddyEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreeDaddyEn} />
}
