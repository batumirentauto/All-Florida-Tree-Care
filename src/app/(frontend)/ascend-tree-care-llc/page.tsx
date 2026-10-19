import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAscendTreeCareLlcEn } from '../../../siteConfig.ascend-tree-care-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAscendTreeCareLlcEn.businessName} | ${siteConfigAscendTreeCareLlcEn.tagline}`,
  description: `${siteConfigAscendTreeCareLlcEn.tagline}. ${siteConfigAscendTreeCareLlcEn.hero.subhead}`,
  keywords: [
    "Ascend Tree Care LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Chris tree service",
  ],
}

export default function AscendTreeCareLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAscendTreeCareLlcEn} />
}
