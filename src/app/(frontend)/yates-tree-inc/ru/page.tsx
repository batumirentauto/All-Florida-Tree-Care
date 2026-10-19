import React from 'react'
import type { Metadata } from 'next'
import { siteConfigYatesTreeIncRu } from '../../../../siteConfig.yates-tree-inc.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigYatesTreeIncRu.businessName} | ${siteConfigYatesTreeIncRu.tagline}`,
  description: `${siteConfigYatesTreeIncRu.tagline}. ${siteConfigYatesTreeIncRu.hero.subhead}`,
}

export default function YatesTreeIncRussianPage() {
  return <UniversalCompanyPage config={siteConfigYatesTreeIncRu} />
}
