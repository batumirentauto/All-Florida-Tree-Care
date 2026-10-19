import React from 'react'
import type { Metadata } from 'next'
import { siteConfigFreedomStumpGrindingEn } from '../../../siteConfig.freedom-stump-grinding.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigFreedomStumpGrindingEn.businessName} | ${siteConfigFreedomStumpGrindingEn.tagline}`,
  description: `${siteConfigFreedomStumpGrindingEn.tagline}. ${siteConfigFreedomStumpGrindingEn.hero.subhead}`,
  keywords: [
    "Freedom Stump Grinding",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function FreedomStumpGrindingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigFreedomStumpGrindingEn} />
}
