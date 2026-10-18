import React from 'react'
import type { Metadata } from 'next'
import { siteConfigStonesRu } from '../../../../siteConfig.stones.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigStonesRu.businessName} | ${siteConfigStonesRu.tagline}`,
  description: `${siteConfigStonesRu.tagline}. ${siteConfigStonesRu.hero.subhead}`,
}

export default function StonesRussianPage() {
  return <UniversalCompanyPage config={siteConfigStonesRu} />
}
