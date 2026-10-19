import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGrizzlybearArborcareRu } from '../../../../siteConfig.grizzlybear-arborcare.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGrizzlybearArborcareRu.businessName} | ${siteConfigGrizzlybearArborcareRu.tagline}`,
  description: `${siteConfigGrizzlybearArborcareRu.tagline}. ${siteConfigGrizzlybearArborcareRu.hero.subhead}`,
}

export default function GrizzlybearArborcareRussianPage() {
  return <UniversalCompanyPage config={siteConfigGrizzlybearArborcareRu} />
}
