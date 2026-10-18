import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAtEaseRu } from '../../../../siteConfig.at-ease.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAtEaseRu.businessName} | ${siteConfigAtEaseRu.tagline}`,
  description: `${siteConfigAtEaseRu.tagline}. ${siteConfigAtEaseRu.hero.subhead}`,
}

export default function AtEaseRussianPage() {
  return <UniversalCompanyPage config={siteConfigAtEaseRu} />
}
