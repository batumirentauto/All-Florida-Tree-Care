import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAffordableRu } from '../../../../siteConfig.affordable.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAffordableRu.businessName} | ${siteConfigAffordableRu.tagline}`,
  description: `${siteConfigAffordableRu.tagline}. ${siteConfigAffordableRu.hero.subhead}`,
}

export default function AffordableRussianPage() {
  return <UniversalCompanyPage config={siteConfigAffordableRu} />
}
