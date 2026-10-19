import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMendezBrothersRu } from '../../../../siteConfig.mendez-brothers.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMendezBrothersRu.businessName} | ${siteConfigMendezBrothersRu.tagline}`,
  description: `${siteConfigMendezBrothersRu.tagline}. ${siteConfigMendezBrothersRu.hero.subhead}`,
}

export default function MendezBrothersRussianPage() {
  return <UniversalCompanyPage config={siteConfigMendezBrothersRu} />
}
