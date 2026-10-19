import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRealStumpBustersRu } from '../../../../siteConfig.real-stump-busters.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRealStumpBustersRu.businessName} | ${siteConfigRealStumpBustersRu.tagline}`,
  description: `${siteConfigRealStumpBustersRu.tagline}. ${siteConfigRealStumpBustersRu.hero.subhead}`,
}

export default function RealStumpBustersRussianPage() {
  return <UniversalCompanyPage config={siteConfigRealStumpBustersRu} />
}
