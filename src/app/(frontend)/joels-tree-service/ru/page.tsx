import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJoelsTreeServiceRu } from '../../../../siteConfig.joels-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJoelsTreeServiceRu.businessName} | ${siteConfigJoelsTreeServiceRu.tagline}`,
  description: `${siteConfigJoelsTreeServiceRu.tagline}. ${siteConfigJoelsTreeServiceRu.hero.subhead}`,
}

export default function JoelsTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigJoelsTreeServiceRu} />
}
