import React from 'react'
import type { Metadata } from 'next'
import { siteConfigShadeShiftersRu } from '../../../../siteConfig.shade-shifters.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigShadeShiftersRu.businessName} | ${siteConfigShadeShiftersRu.tagline}`,
  description: `${siteConfigShadeShiftersRu.tagline}. ${siteConfigShadeShiftersRu.hero.subhead}`,
}

export default function ShadeShiftersRussianPage() {
  return <UniversalCompanyPage config={siteConfigShadeShiftersRu} />
}
