import React from 'react'
import type { Metadata } from 'next'
import { siteConfigHighPointTreeFenceEn } from '../../../siteConfig.high-point-tree-fence.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigHighPointTreeFenceEn.businessName} | ${siteConfigHighPointTreeFenceEn.tagline}`,
  description: `${siteConfigHighPointTreeFenceEn.tagline}. ${siteConfigHighPointTreeFenceEn.hero.subhead}`,
  keywords: [
    "High Point Tree & Fence",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function HighPointTreeFenceEnglishPage() {
  return <UniversalCompanyPage config={siteConfigHighPointTreeFenceEn} />
}
