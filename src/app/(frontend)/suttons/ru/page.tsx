import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSuttonsRu } from '../../../../siteConfig.suttons.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSuttonsRu.businessName} | ${siteConfigSuttonsRu.tagline}`,
  description: `${siteConfigSuttonsRu.tagline}. ${siteConfigSuttonsRu.hero.subhead}`,
}

export default function SuttonsRussianPage() {
  return <UniversalCompanyPage config={siteConfigSuttonsRu} />
}
