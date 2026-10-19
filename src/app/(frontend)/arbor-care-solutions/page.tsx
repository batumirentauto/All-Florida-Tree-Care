import React from 'react'
import type { Metadata } from 'next'
import { siteConfigArborCareSolutionsEn } from '../../../siteConfig.arbor-care-solutions.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigArborCareSolutionsEn.businessName} | ${siteConfigArborCareSolutionsEn.tagline}`,
  description: `${siteConfigArborCareSolutionsEn.tagline}. ${siteConfigArborCareSolutionsEn.hero.subhead}`,
  keywords: [
    "Arbor Care Solutions",
    "tree removal Greenville SC",
    "tree service Greenville",
    "stump grinding Greenville",
    "emergency tree service 29615",
    "Arbor tree service",
  ],
}

export default function ArborCareSolutionsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigArborCareSolutionsEn} />
}
