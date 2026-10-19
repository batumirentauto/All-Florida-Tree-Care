import React from 'react'
import type { Metadata } from 'next'
import { siteConfigArborCareSolutionsRu } from '../../../../siteConfig.arbor-care-solutions.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigArborCareSolutionsRu.businessName} | ${siteConfigArborCareSolutionsRu.tagline}`,
  description: `${siteConfigArborCareSolutionsRu.tagline}. ${siteConfigArborCareSolutionsRu.hero.subhead}`,
}

export default function ArborCareSolutionsRussianPage() {
  return <UniversalCompanyPage config={siteConfigArborCareSolutionsRu} />
}
