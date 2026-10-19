import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDaveJosTreeServiceRu } from '../../../../siteConfig.dave-jos-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDaveJosTreeServiceRu.businessName} | ${siteConfigDaveJosTreeServiceRu.tagline}`,
  description: `${siteConfigDaveJosTreeServiceRu.tagline}. ${siteConfigDaveJosTreeServiceRu.hero.subhead}`,
}

export default function DaveJosTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigDaveJosTreeServiceRu} />
}
