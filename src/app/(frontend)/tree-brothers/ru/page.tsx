import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeBrothersRu } from '../../../../siteConfig.tree-brothers.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeBrothersRu.businessName} | ${siteConfigTreeBrothersRu.tagline}`,
  description: `${siteConfigTreeBrothersRu.tagline}. ${siteConfigTreeBrothersRu.hero.subhead}`,
}

export default function TreeBrothersRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreeBrothersRu} />
}
