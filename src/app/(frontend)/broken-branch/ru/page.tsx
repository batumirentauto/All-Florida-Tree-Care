import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBrokenBranchRu } from '../../../../siteConfig.broken-branch.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBrokenBranchRu.businessName} | ${siteConfigBrokenBranchRu.tagline}`,
  description: `${siteConfigBrokenBranchRu.tagline}. ${siteConfigBrokenBranchRu.hero.subhead}`,
}

export default function BrokenBranchRussianPage() {
  return <UniversalCompanyPage config={siteConfigBrokenBranchRu} />
}
