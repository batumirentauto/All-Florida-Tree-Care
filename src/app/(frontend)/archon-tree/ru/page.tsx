import React from 'react'
import type { Metadata } from 'next'
import { siteConfigArchonTreeRu } from '../../../../siteConfig.archon-tree.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigArchonTreeRu.businessName} | ${siteConfigArchonTreeRu.tagline}`,
  description: `${siteConfigArchonTreeRu.tagline}. ${siteConfigArchonTreeRu.hero.subhead}`,
}

export default function ArchonTreeRussianPage() {
  return <UniversalCompanyPage config={siteConfigArchonTreeRu} />
}
