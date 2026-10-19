import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTexasTreeAuthorityRu } from '../../../../siteConfig.texas-tree-authority.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTexasTreeAuthorityRu.businessName} | ${siteConfigTexasTreeAuthorityRu.tagline}`,
  description: `${siteConfigTexasTreeAuthorityRu.tagline}. ${siteConfigTexasTreeAuthorityRu.hero.subhead}`,
}

export default function TexasTreeAuthorityRussianPage() {
  return <UniversalCompanyPage config={siteConfigTexasTreeAuthorityRu} />
}
