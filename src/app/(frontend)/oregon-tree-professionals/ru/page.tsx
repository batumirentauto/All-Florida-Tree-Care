import React from 'react'
import type { Metadata } from 'next'
import { siteConfigOregonTreeProfessionalsRu } from '../../../../siteConfig.oregon-tree-professionals.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigOregonTreeProfessionalsRu.businessName} | ${siteConfigOregonTreeProfessionalsRu.tagline}`,
  description: `${siteConfigOregonTreeProfessionalsRu.tagline}. ${siteConfigOregonTreeProfessionalsRu.hero.subhead}`,
}

export default function OregonTreeProfessionalsRussianPage() {
  return <UniversalCompanyPage config={siteConfigOregonTreeProfessionalsRu} />
}
