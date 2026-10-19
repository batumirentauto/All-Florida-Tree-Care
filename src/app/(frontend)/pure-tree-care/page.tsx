import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPureTreeCareEn } from '../../../siteConfig.pure-tree-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPureTreeCareEn.businessName} | ${siteConfigPureTreeCareEn.tagline}`,
  description: `${siteConfigPureTreeCareEn.tagline}. ${siteConfigPureTreeCareEn.hero.subhead}`,
  keywords: [
    "Pure Tree Care",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Mark tree service",
  ],
}

export default function PureTreeCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigPureTreeCareEn} />
}
