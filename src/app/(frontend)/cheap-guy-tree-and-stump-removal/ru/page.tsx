import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCheapGuyTreeAndStumpRemovalRu } from '../../../../siteConfig.cheap-guy-tree-and-stump-removal.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCheapGuyTreeAndStumpRemovalRu.businessName} | ${siteConfigCheapGuyTreeAndStumpRemovalRu.tagline}`,
  description: `${siteConfigCheapGuyTreeAndStumpRemovalRu.tagline}. ${siteConfigCheapGuyTreeAndStumpRemovalRu.hero.subhead}`,
}

export default function CheapGuyTreeAndStumpRemovalRussianPage() {
  return <UniversalCompanyPage config={siteConfigCheapGuyTreeAndStumpRemovalRu} />
}
