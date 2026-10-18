import React from 'react'
import type { Metadata } from 'next'
import { siteConfigFurstieRu } from '../../../../siteConfig.furstie.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigFurstieRu.businessName} | ${siteConfigFurstieRu.tagline}`,
  description: `${siteConfigFurstieRu.tagline}. ${siteConfigFurstieRu.hero.subhead}`,
}

export default function FurstieRussianPage() {
  return <UniversalCompanyPage config={siteConfigFurstieRu} />
}
