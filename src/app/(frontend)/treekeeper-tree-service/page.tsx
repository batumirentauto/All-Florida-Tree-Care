import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreekeeperTreeServiceEn } from '../../../siteConfig.treekeeper-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreekeeperTreeServiceEn.businessName} | ${siteConfigTreekeeperTreeServiceEn.tagline}`,
  description: `${siteConfigTreekeeperTreeServiceEn.tagline}. ${siteConfigTreekeeperTreeServiceEn.hero.subhead}`,
  keywords: [
    "Treekeeper Tree Service Inc.",
    "tree removal Damascus OR",
    "tree service Damascus",
    "stump grinding Damascus",
    "emergency tree service 97089",
    "Treekeeper tree service",
  ],
}

export default function TreekeeperTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreekeeperTreeServiceEn} />
}
