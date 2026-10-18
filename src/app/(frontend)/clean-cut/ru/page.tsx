import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCleanCutRu } from '../../../../siteConfig.clean-cut.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCleanCutRu.businessName} | ${siteConfigCleanCutRu.tagline}`,
  description: `${siteConfigCleanCutRu.tagline}. ${siteConfigCleanCutRu.hero.subhead}`,
}

export default function CleanCutRussianPage() {
  return <UniversalCompanyPage config={siteConfigCleanCutRu} />
}
