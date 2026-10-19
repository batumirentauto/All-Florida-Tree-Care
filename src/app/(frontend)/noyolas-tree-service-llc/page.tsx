import React from 'react'
import type { Metadata } from 'next'
import { siteConfigNoyolasTreeServiceLlcEn } from '../../../siteConfig.noyolas-tree-service-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigNoyolasTreeServiceLlcEn.businessName} | ${siteConfigNoyolasTreeServiceLlcEn.tagline}`,
  description: `${siteConfigNoyolasTreeServiceLlcEn.tagline}. ${siteConfigNoyolasTreeServiceLlcEn.hero.subhead}`,
  keywords: [
    "Noyola's Tree Service, LLC",
    "tree removal Raleigh NC",
    "tree service Raleigh",
    "stump grinding Raleigh",
    "emergency tree service 27610",
    "Reinaldo tree service",
  ],
}

export default function NoyolasTreeServiceLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigNoyolasTreeServiceLlcEn} />
}
