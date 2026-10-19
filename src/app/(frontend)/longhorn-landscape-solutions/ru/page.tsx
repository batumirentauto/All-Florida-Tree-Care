import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLonghornLandscapeSolutionsRu } from '../../../../siteConfig.longhorn-landscape-solutions.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLonghornLandscapeSolutionsRu.businessName} | ${siteConfigLonghornLandscapeSolutionsRu.tagline}`,
  description: `${siteConfigLonghornLandscapeSolutionsRu.tagline}. ${siteConfigLonghornLandscapeSolutionsRu.hero.subhead}`,
}

export default function LonghornLandscapeSolutionsRussianPage() {
  return <UniversalCompanyPage config={siteConfigLonghornLandscapeSolutionsRu} />
}
