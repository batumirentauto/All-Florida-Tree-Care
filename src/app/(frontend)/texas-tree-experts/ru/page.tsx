import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTexasTreeExpertsRu } from '../../../../siteConfig.texas-tree-experts.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTexasTreeExpertsRu.businessName} | ${siteConfigTexasTreeExpertsRu.tagline}`,
  description: `${siteConfigTexasTreeExpertsRu.tagline}. ${siteConfigTexasTreeExpertsRu.hero.subhead}`,
}

export default function TexasTreeExpertsRussianPage() {
  return <UniversalCompanyPage config={siteConfigTexasTreeExpertsRu} />
}
