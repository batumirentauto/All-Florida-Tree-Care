import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPanhandleEn } from '../../../siteConfig.panhandle.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPanhandleEn.businessName} | ${siteConfigPanhandleEn.tagline}`,
  description: `${siteConfigPanhandleEn.tagline}. ${siteConfigPanhandleEn.hero.subhead}`,
  keywords: [
    "Panhandle Tree Pros LLC",
    "tree removal Chipley FL",
    "tree service Chipley",
    "stump grinding Chipley",
    "emergency tree service 32428",
    "Mike tree service",
  ],
}

export default function PanhandleEnglishPage() {
  return <UniversalCompanyPage config={siteConfigPanhandleEn} />
}
