import React from 'react'
import type { Metadata } from 'next'
import { siteConfigProBeaverRu } from '../../../../siteConfig.pro-beaver.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigProBeaverRu.businessName} | ${siteConfigProBeaverRu.tagline}`,
  description: `${siteConfigProBeaverRu.tagline}. ${siteConfigProBeaverRu.hero.subhead}`,
}

export default function ProBeaverRussianPage() {
  return <UniversalCompanyPage config={siteConfigProBeaverRu} />
}
