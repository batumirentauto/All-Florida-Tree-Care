import React from 'react'
import type { Metadata } from 'next'
import { siteConfigDanesRu } from '../../../../siteConfig.danes.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigDanesRu.businessName} | Техническая валка леса и верхолазный спил в Омсвилле и Сейлеме`,
  description: `${siteConfigDanesRu.tagline}. ${siteConfigDanesRu.hero.subhead}`,
}

export default function DanesRussianPage() {
  return <UniversalCompanyPage config={siteConfigDanesRu} />
}
