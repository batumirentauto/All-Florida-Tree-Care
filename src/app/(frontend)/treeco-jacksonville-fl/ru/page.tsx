import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreecoJacksonvilleFlRu } from '../../../../siteConfig.treeco-jacksonville-fl.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreecoJacksonvilleFlRu.businessName} | ${siteConfigTreecoJacksonvilleFlRu.tagline}`,
  description: `${siteConfigTreecoJacksonvilleFlRu.tagline}. ${siteConfigTreecoJacksonvilleFlRu.hero.subhead}`,
}

export default function TreecoJacksonvilleFlRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreecoJacksonvilleFlRu} />
}
