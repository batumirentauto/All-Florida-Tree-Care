import React from 'react'
import type { Metadata } from 'next'
import { siteConfigACutAboveLandscapingEn } from '../../../siteConfig.a-cut-above-landscaping.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigACutAboveLandscapingEn.businessName} | ${siteConfigACutAboveLandscapingEn.tagline}`,
  description: `${siteConfigACutAboveLandscapingEn.tagline}. ${siteConfigACutAboveLandscapingEn.hero.subhead}`,
  keywords: [
    "A Cut Above Landscaping",
    "tree removal Pensacola FL",
    "tree service Pensacola",
    "stump grinding Pensacola",
    "emergency tree service 32502",
    "Jason tree service",
  ],
}

export default function ACutAboveLandscapingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigACutAboveLandscapingEn} />
}
