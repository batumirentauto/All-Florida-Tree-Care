import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSpeerOutdoorSolutionsEn } from '../../../siteConfig.speer-outdoor-solutions.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSpeerOutdoorSolutionsEn.businessName} | ${siteConfigSpeerOutdoorSolutionsEn.tagline}`,
  description: `${siteConfigSpeerOutdoorSolutionsEn.tagline}. ${siteConfigSpeerOutdoorSolutionsEn.hero.subhead}`,
  keywords: [
    "Speer Outdoor Solutions",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "John tree service",
  ],
}

export default function SpeerOutdoorSolutionsEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSpeerOutdoorSolutionsEn} />
}
