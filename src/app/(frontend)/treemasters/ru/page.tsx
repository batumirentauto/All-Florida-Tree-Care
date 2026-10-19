import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreemastersRu } from '../../../../siteConfig.treemasters.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreemastersRu.businessName} | ${siteConfigTreemastersRu.tagline}`,
  description: `${siteConfigTreemastersRu.tagline}. ${siteConfigTreemastersRu.hero.subhead}`,
}

export default function TreemastersRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreemastersRu} />
}
