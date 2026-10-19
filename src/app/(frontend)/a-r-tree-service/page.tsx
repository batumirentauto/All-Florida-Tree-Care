import React from 'react'
import type { Metadata } from 'next'
import { siteConfigARTreeServiceEn } from '../../../siteConfig.a-r-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigARTreeServiceEn.businessName} | ${siteConfigARTreeServiceEn.tagline}`,
  description: `${siteConfigARTreeServiceEn.tagline}. ${siteConfigARTreeServiceEn.hero.subhead}`,
  keywords: [
    "A & R Tree Service",
    "tree removal Cayce SC",
    "tree service Cayce",
    "stump grinding Cayce",
    "emergency tree service 29033",
    "Anthony tree service",
  ],
}

export default function ARTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigARTreeServiceEn} />
}
