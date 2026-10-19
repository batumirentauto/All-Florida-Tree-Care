import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSotosLawnAndRu } from '../../../../siteConfig.sotos-lawn-and.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSotosLawnAndRu.businessName} | ${siteConfigSotosLawnAndRu.tagline}`,
  description: `${siteConfigSotosLawnAndRu.tagline}. ${siteConfigSotosLawnAndRu.hero.subhead}`,
}

export default function SotosLawnAndRussianPage() {
  return <UniversalCompanyPage config={siteConfigSotosLawnAndRu} />
}
