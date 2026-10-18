import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSsTreeRu } from '../../../../siteConfig.ss-tree.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSsTreeRu.businessName} | ${siteConfigSsTreeRu.tagline}`,
  description: `${siteConfigSsTreeRu.tagline}. ${siteConfigSsTreeRu.hero.subhead}`,
}

export default function SsTreeRussianPage() {
  return <UniversalCompanyPage config={siteConfigSsTreeRu} />
}
