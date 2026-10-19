import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAffordableArborCareRu } from '../../../../siteConfig.affordable-arbor-care.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAffordableArborCareRu.businessName} | ${siteConfigAffordableArborCareRu.tagline}`,
  description: `${siteConfigAffordableArborCareRu.tagline}. ${siteConfigAffordableArborCareRu.hero.subhead}`,
}

export default function AffordableArborCareRussianPage() {
  return <UniversalCompanyPage config={siteConfigAffordableArborCareRu} />
}
