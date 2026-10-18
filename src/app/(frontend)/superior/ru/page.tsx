import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSuperiorRu } from '../../../../siteConfig.superior.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSuperiorRu.businessName} | ${siteConfigSuperiorRu.tagline}`,
  description: `${siteConfigSuperiorRu.tagline}. ${siteConfigSuperiorRu.hero.subhead}`,
}

export default function SuperiorRussianPage() {
  return <UniversalCompanyPage config={siteConfigSuperiorRu} />
}
