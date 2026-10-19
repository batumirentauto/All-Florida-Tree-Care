import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreemanEn } from '../../../siteConfig.treeman.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreemanEn.businessName} | ${siteConfigTreemanEn.tagline}`,
  description: `${siteConfigTreemanEn.tagline}. ${siteConfigTreemanEn.hero.subhead}`,
  keywords: [
    "Treeman",
    "tree removal Athens GA",
    "tree service Athens",
    "stump grinding Athens",
    "emergency tree service 30606",
    "Lead Arborist tree service",
  ],
}

export default function TreemanEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreemanEn} />
}
