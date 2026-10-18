import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGrowRu } from '../../../../siteConfig.grow.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGrowRu.businessName} | ${siteConfigGrowRu.tagline}`,
  description: `${siteConfigGrowRu.tagline}. ${siteConfigGrowRu.hero.subhead}`,
}

export default function GrowRussianPage() {
  return <UniversalCompanyPage config={siteConfigGrowRu} />
}
