import React from 'react'
import type { Metadata } from 'next'
import { siteConfigStarPrunersEn } from '../../../siteConfig.star-pruners.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigStarPrunersEn.businessName} | ${siteConfigStarPrunersEn.tagline}`,
  description: `${siteConfigStarPrunersEn.tagline}. ${siteConfigStarPrunersEn.hero.subhead}`,
  keywords: [
    "Star Pruners",
    "tree removal Spokane WA",
    "tree service Spokane",
    "stump grinding Spokane",
    "emergency tree service 99218",
    "Lead Arborist tree service",
  ],
}

export default function StarPrunersEnglishPage() {
  return <UniversalCompanyPage config={siteConfigStarPrunersEn} />
}
