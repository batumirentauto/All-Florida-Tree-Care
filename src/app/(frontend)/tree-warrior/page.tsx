import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeWarriorEn } from '../../../siteConfig.tree-warrior.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeWarriorEn.businessName} | ${siteConfigTreeWarriorEn.tagline}`,
  description: `${siteConfigTreeWarriorEn.tagline}. ${siteConfigTreeWarriorEn.hero.subhead}`,
  keywords: [
    "TREE WARRIOR",
    "tree removal Washougal WA",
    "tree service Washougal",
    "stump grinding Washougal",
    "emergency tree service 98671",
    "Paul tree service",
  ],
}

export default function TreeWarriorEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreeWarriorEn} />
}
