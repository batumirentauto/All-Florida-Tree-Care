import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJsiRu } from '../../../../siteConfig.jsi.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJsiRu.businessName} | ${siteConfigJsiRu.tagline}`,
  description: `${siteConfigJsiRu.tagline}. ${siteConfigJsiRu.hero.subhead}`,
}

export default function JsiRussianPage() {
  return <UniversalCompanyPage config={siteConfigJsiRu} />
}
