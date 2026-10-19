import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreesOfGeorgiaIncRu } from '../../../../siteConfig.trees-of-georgia-inc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreesOfGeorgiaIncRu.businessName} | ${siteConfigTreesOfGeorgiaIncRu.tagline}`,
  description: `${siteConfigTreesOfGeorgiaIncRu.tagline}. ${siteConfigTreesOfGeorgiaIncRu.hero.subhead}`,
}

export default function TreesOfGeorgiaIncRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreesOfGeorgiaIncRu} />
}
