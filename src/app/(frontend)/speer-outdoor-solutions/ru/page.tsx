import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSpeerOutdoorSolutionsRu } from '../../../../siteConfig.speer-outdoor-solutions.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSpeerOutdoorSolutionsRu.businessName} | ${siteConfigSpeerOutdoorSolutionsRu.tagline}`,
  description: `${siteConfigSpeerOutdoorSolutionsRu.tagline}. ${siteConfigSpeerOutdoorSolutionsRu.hero.subhead}`,
}

export default function SpeerOutdoorSolutionsRussianPage() {
  return <UniversalCompanyPage config={siteConfigSpeerOutdoorSolutionsRu} />
}
