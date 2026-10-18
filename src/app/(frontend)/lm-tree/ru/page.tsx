import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLmTreeRu } from '../../../../siteConfig.lm-tree.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLmTreeRu.businessName} | ${siteConfigLmTreeRu.tagline}`,
  description: `${siteConfigLmTreeRu.tagline}. ${siteConfigLmTreeRu.hero.subhead}`,
}

export default function LmTreeRussianPage() {
  return <UniversalCompanyPage config={siteConfigLmTreeRu} />
}
