import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeDaddyRu } from '../../../../siteConfig.tree-daddy.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeDaddyRu.businessName} | ${siteConfigTreeDaddyRu.tagline}`,
  description: `${siteConfigTreeDaddyRu.tagline}. ${siteConfigTreeDaddyRu.hero.subhead}`,
}

export default function TreeDaddyRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreeDaddyRu} />
}
