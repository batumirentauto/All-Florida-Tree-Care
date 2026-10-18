import React from 'react'
import type { Metadata } from 'next'
import { siteConfigMaldonadoRu } from '../../../../siteConfig.maldonado.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigMaldonadoRu.businessName} | ${siteConfigMaldonadoRu.tagline}`,
  description: `${siteConfigMaldonadoRu.tagline}. ${siteConfigMaldonadoRu.hero.subhead}`,
}

export default function MaldonadoRussianPage() {
  return <UniversalCompanyPage config={siteConfigMaldonadoRu} />
}
