import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreesRUsRu } from '../../../../siteConfig.trees-r-us.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreesRUsRu.businessName} | ${siteConfigTreesRUsRu.tagline}`,
  description: `${siteConfigTreesRUsRu.tagline}. ${siteConfigTreesRUsRu.hero.subhead}`,
}

export default function TreesRUsRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreesRUsRu} />
}
