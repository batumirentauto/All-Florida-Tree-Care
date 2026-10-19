import React from 'react'
import type { Metadata } from 'next'
import { siteConfigLeafItToUsRu } from '../../../../siteConfig.leaf-it-to-us.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigLeafItToUsRu.businessName} | ${siteConfigLeafItToUsRu.tagline}`,
  description: `${siteConfigLeafItToUsRu.tagline}. ${siteConfigLeafItToUsRu.hero.subhead}`,
}

export default function LeafItToUsRussianPage() {
  return <UniversalCompanyPage config={siteConfigLeafItToUsRu} />
}
