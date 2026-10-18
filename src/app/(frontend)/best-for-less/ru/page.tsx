import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBestForLessRu } from '../../../../siteConfig.best-for-less.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBestForLessRu.businessName} | ${siteConfigBestForLessRu.tagline}`,
  description: `${siteConfigBestForLessRu.tagline}. ${siteConfigBestForLessRu.hero.subhead}`,
}

export default function BestForLessRussianPage() {
  return <UniversalCompanyPage config={siteConfigBestForLessRu} />
}
