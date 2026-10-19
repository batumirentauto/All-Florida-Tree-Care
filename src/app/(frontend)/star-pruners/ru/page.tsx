import React from 'react'
import type { Metadata } from 'next'
import { siteConfigStarPrunersRu } from '../../../../siteConfig.star-pruners.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigStarPrunersRu.businessName} | ${siteConfigStarPrunersRu.tagline}`,
  description: `${siteConfigStarPrunersRu.tagline}. ${siteConfigStarPrunersRu.hero.subhead}`,
}

export default function StarPrunersRussianPage() {
  return <UniversalCompanyPage config={siteConfigStarPrunersRu} />
}
