import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTallyRu } from '../../../../siteConfig.tally.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTallyRu.businessName} | Спил сосен автокраном и вывоз погрузчиком CAT в Таллахасси`,
  description: `${siteConfigTallyRu.tagline}. ${siteConfigTallyRu.hero.subhead}`,
}

export default function TallyRussianPage() {
  return <UniversalCompanyPage config={siteConfigTallyRu} />
}
