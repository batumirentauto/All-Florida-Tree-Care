import React from 'react'
import type { Metadata } from 'next'
import { siteConfigBigTreeExpertsLlcEn } from '../../../siteConfig.big-tree-experts-llc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigBigTreeExpertsLlcEn.businessName} | ${siteConfigBigTreeExpertsLlcEn.tagline}`,
  description: `${siteConfigBigTreeExpertsLlcEn.tagline}. ${siteConfigBigTreeExpertsLlcEn.hero.subhead}`,
  keywords: [
    "Big Tree Experts Llc",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Miguel tree service",
  ],
}

export default function BigTreeExpertsLlcEnglishPage() {
  return <UniversalCompanyPage config={siteConfigBigTreeExpertsLlcEn} />
}
