import React from 'react'
import type { Metadata } from 'next'
import { siteConfigArborEliteEn } from '../../../siteConfig.arbor-elite.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigArborEliteEn.businessName} | ${siteConfigArborEliteEn.tagline}`,
  description: `${siteConfigArborEliteEn.tagline}. ${siteConfigArborEliteEn.hero.subhead}`,
  keywords: [
    "Arbor Elite",
    "tree removal Columbia SC",
    "tree service Columbia",
    "stump grinding Columbia",
    "emergency tree service 29203",
    "Lead Arborist tree service",
  ],
}

export default function ArborEliteEnglishPage() {
  return <UniversalCompanyPage config={siteConfigArborEliteEn} />
}
