import React from 'react'
import type { Metadata } from 'next'
import { siteConfigUsTreeRu } from '../../../../siteConfig.us-tree.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigUsTreeRu.businessName} | ${siteConfigUsTreeRu.tagline}`,
  description: `${siteConfigUsTreeRu.tagline}. ${siteConfigUsTreeRu.hero.subhead}`,
}

export default function UsTreeRussianPage() {
  return <UniversalCompanyPage config={siteConfigUsTreeRu} />
}
