import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTroncossLandRu } from '../../../../siteConfig.troncoss-land.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTroncossLandRu.businessName} | ${siteConfigTroncossLandRu.tagline}`,
  description: `${siteConfigTroncossLandRu.tagline}. ${siteConfigTroncossLandRu.hero.subhead}`,
}

export default function TroncossLandRussianPage() {
  return <UniversalCompanyPage config={siteConfigTroncossLandRu} />
}
