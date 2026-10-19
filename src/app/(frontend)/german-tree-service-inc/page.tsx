import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGermanTreeServiceIncEn } from '../../../siteConfig.german-tree-service-inc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGermanTreeServiceIncEn.businessName} | ${siteConfigGermanTreeServiceIncEn.tagline}`,
  description: `${siteConfigGermanTreeServiceIncEn.tagline}. ${siteConfigGermanTreeServiceIncEn.hero.subhead}`,
  keywords: [
    "German Tree Service, Inc",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function GermanTreeServiceIncEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGermanTreeServiceIncEn} />
}
