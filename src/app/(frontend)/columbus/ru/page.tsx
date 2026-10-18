import React from 'react'
import type { Metadata } from 'next'
import { siteConfigColumbusRu } from '../../../../siteConfig.columbus.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigColumbusRu.businessName} | ${siteConfigColumbusRu.tagline}`,
  description: `${siteConfigColumbusRu.tagline}. ${siteConfigColumbusRu.hero.subhead}`,
}

export default function ColumbusRussianPage() {
  return <UniversalCompanyPage config={siteConfigColumbusRu} />
}
