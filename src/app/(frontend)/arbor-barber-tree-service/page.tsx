import React from 'react'
import type { Metadata } from 'next'
import { siteConfigArborBarberTreeServiceEn } from '../../../siteConfig.arbor-barber-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigArborBarberTreeServiceEn.businessName} | ${siteConfigArborBarberTreeServiceEn.tagline}`,
  description: `${siteConfigArborBarberTreeServiceEn.tagline}. ${siteConfigArborBarberTreeServiceEn.hero.subhead}`,
  keywords: [
    "Arbor Barber Tree Service",
    "tree removal Auburn WA",
    "tree service Auburn",
    "stump grinding Auburn",
    "emergency tree service 98092",
    "Devin tree service",
  ],
}

export default function ArborBarberTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigArborBarberTreeServiceEn} />
}
