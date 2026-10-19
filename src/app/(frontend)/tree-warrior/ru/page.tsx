import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeWarriorRu } from '../../../../siteConfig.tree-warrior.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeWarriorRu.businessName} | ${siteConfigTreeWarriorRu.tagline}`,
  description: `${siteConfigTreeWarriorRu.tagline}. ${siteConfigTreeWarriorRu.hero.subhead}`,
}

export default function TreeWarriorRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreeWarriorRu} />
}
