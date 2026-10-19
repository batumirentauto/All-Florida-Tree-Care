import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGreenlineTreeServiceEn } from '../../../siteConfig.greenline-tree-service.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGreenlineTreeServiceEn.businessName} | ${siteConfigGreenlineTreeServiceEn.tagline}`,
  description: `${siteConfigGreenlineTreeServiceEn.tagline}. ${siteConfigGreenlineTreeServiceEn.hero.subhead}`,
  keywords: [
    "Greenline Tree Service",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Omar tree service",
  ],
}

export default function GreenlineTreeServiceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGreenlineTreeServiceEn} />
}
