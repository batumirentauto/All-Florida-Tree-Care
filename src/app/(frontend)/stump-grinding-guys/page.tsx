import React from 'react'
import type { Metadata } from 'next'
import { siteConfigStumpGrindingGuysEn } from '../../../siteConfig.stump-grinding-guys.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigStumpGrindingGuysEn.businessName} | ${siteConfigStumpGrindingGuysEn.tagline}`,
  description: `${siteConfigStumpGrindingGuysEn.tagline}. ${siteConfigStumpGrindingGuysEn.hero.subhead}`,
  keywords: [
    "Stump Grinding Guys",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function StumpGrindingGuysEnglishPage() {
  return <UniversalCompanyPage config={siteConfigStumpGrindingGuysEn} />
}
