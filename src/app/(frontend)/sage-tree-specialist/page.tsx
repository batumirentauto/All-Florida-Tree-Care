import React from 'react'
import type { Metadata } from 'next'
import { siteConfigSageTreeSpecialistEn } from '../../../siteConfig.sage-tree-specialist.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigSageTreeSpecialistEn.businessName} | ${siteConfigSageTreeSpecialistEn.tagline}`,
  description: `${siteConfigSageTreeSpecialistEn.tagline}. ${siteConfigSageTreeSpecialistEn.hero.subhead}`,
  keywords: [
    "Sage Tree Specialist",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Matt tree service",
  ],
}

export default function SageTreeSpecialistEnglishPage() {
  return <UniversalCompanyPage config={siteConfigSageTreeSpecialistEn} />
}
