import React from 'react'
import type { Metadata } from 'next'
import { siteConfigJbTreeCareEn } from '../../../siteConfig.jb-tree-care.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigJbTreeCareEn.businessName} | ${siteConfigJbTreeCareEn.tagline}`,
  description: `${siteConfigJbTreeCareEn.tagline}. ${siteConfigJbTreeCareEn.hero.subhead}`,
  keywords: [
    "JB Tree Care",
    "tree removal Geneva FL",
    "tree service Geneva",
    "stump grinding Geneva",
    "emergency tree service 32732",
    "Jeff tree service",
  ],
}

export default function JbTreeCareEnglishPage() {
  return <UniversalCompanyPage config={siteConfigJbTreeCareEn} />
}
