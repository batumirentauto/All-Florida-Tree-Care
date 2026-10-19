import React from 'react'
import type { Metadata } from 'next'
import { siteConfigStumps2GoRu } from '../../../../siteConfig.stumps-2-go.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigStumps2GoRu.businessName} | ${siteConfigStumps2GoRu.tagline}`,
  description: `${siteConfigStumps2GoRu.tagline}. ${siteConfigStumps2GoRu.hero.subhead}`,
}

export default function Stumps2GoRussianPage() {
  return <UniversalCompanyPage config={siteConfigStumps2GoRu} />
}
