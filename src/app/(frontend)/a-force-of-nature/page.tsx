import React from 'react'
import type { Metadata } from 'next'
import { siteConfigAForceOfNatureEn } from '../../../siteConfig.a-force-of-nature.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigAForceOfNatureEn.businessName} | ${siteConfigAForceOfNatureEn.tagline}`,
  description: `${siteConfigAForceOfNatureEn.tagline}. ${siteConfigAForceOfNatureEn.hero.subhead}`,
  keywords: [
    "A Force of Nature Tree Service LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function AForceOfNatureEnglishPage() {
  return <UniversalCompanyPage config={siteConfigAForceOfNatureEn} />
}
