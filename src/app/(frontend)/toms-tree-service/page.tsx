import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTomsTreeServiceEn } from '../../../siteConfig.toms-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTomsTreeServiceEn.businessName} | ${siteConfigTomsTreeServiceEn.tagline}`,
  description: `${siteConfigTomsTreeServiceEn.tagline}. ${siteConfigTomsTreeServiceEn.hero.subhead}`,
  keywords: [
    "Tom\u2019s Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Curran tree service",
  ],
}

export default function TomsTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTomsTreeServiceEn} />
}
