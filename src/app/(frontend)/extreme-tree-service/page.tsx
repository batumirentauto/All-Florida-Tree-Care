import React from 'react'
import type { Metadata } from 'next'
import { siteConfigExtremeTreeServiceEn } from '../../../siteConfig.extreme-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigExtremeTreeServiceEn.businessName} | ${siteConfigExtremeTreeServiceEn.tagline}`,
  description: `${siteConfigExtremeTreeServiceEn.tagline}. ${siteConfigExtremeTreeServiceEn.hero.subhead}`,
  keywords: [
    "Extreme Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function ExtremeTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigExtremeTreeServiceEn} />
}
