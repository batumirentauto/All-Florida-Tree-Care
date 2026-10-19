import React from 'react'
import type { Metadata } from 'next'
import { siteConfigRjsTreeServiceLlcEn } from '../../../siteConfig.rjs-tree-service-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigRjsTreeServiceLlcEn.businessName} | ${siteConfigRjsTreeServiceLlcEn.tagline}`,
  description: `${siteConfigRjsTreeServiceLlcEn.tagline}. ${siteConfigRjsTreeServiceLlcEn.hero.subhead}`,
  keywords: [
    "RJ's Tree Service, LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function RjsTreeServiceLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigRjsTreeServiceLlcEn} />
}
