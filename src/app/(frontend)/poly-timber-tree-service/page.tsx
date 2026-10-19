import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPolyTimberTreeServiceEn } from '../../../siteConfig.poly-timber-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPolyTimberTreeServiceEn.businessName} | ${siteConfigPolyTimberTreeServiceEn.tagline}`,
  description: `${siteConfigPolyTimberTreeServiceEn.tagline}. ${siteConfigPolyTimberTreeServiceEn.hero.subhead}`,
  keywords: [
    "Poly Timber Tree Service Inc.",
    "tree removal Pico Rivera CA",
    "tree service Pico Rivera",
    "stump grinding Pico Rivera",
    "emergency tree service 90660",
    "Oscar tree service",
  ],
}

export default function PolyTimberTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigPolyTimberTreeServiceEn} />
}
