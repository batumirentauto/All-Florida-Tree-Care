import React from 'react'
import type { Metadata } from 'next'
import { siteConfigArborBarberTreeServiceRu } from '../../../../siteConfig.arbor-barber-tree-service.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigArborBarberTreeServiceRu.businessName} | ${siteConfigArborBarberTreeServiceRu.tagline}`,
  description: `${siteConfigArborBarberTreeServiceRu.tagline}. ${siteConfigArborBarberTreeServiceRu.hero.subhead}`,
}

export default function ArborBarberTreeServiceRussianPage() {
  return <UniversalCompanyPage config={siteConfigArborBarberTreeServiceRu} />
}
