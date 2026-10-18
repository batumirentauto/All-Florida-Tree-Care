import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBigfootRu } from '../../../../siteConfig.bigfoot.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBigfootRu.businessName} | ${siteConfigBigfootRu.tagline}`,
  description: `${siteConfigBigfootRu.tagline}. ${siteConfigBigfootRu.hero.subhead}`,
}

export default function BigfootRussianPage() {
  return <UniversalCompanyPage config={siteConfigBigfootRu} />
}
