import React from 'react'
import type { Metadata } from 'next'
import { siteConfigWillsTreeServiceEn } from '../../../siteConfig.wills-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigWillsTreeServiceEn.businessName} | ${siteConfigWillsTreeServiceEn.tagline}`,
  description: `${siteConfigWillsTreeServiceEn.tagline}. ${siteConfigWillsTreeServiceEn.hero.subhead}`,
  keywords: [
    "Wills Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function WillsTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigWillsTreeServiceEn} />
}
