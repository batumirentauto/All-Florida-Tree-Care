import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGutierrezSonsTreeServicesAndLandscapingEn } from '../../../siteConfig.gutierrez-sons-tree-services-and-landscaping.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGutierrezSonsTreeServicesAndLandscapingEn.businessName} | ${siteConfigGutierrezSonsTreeServicesAndLandscapingEn.tagline}`,
  description: `${siteConfigGutierrezSonsTreeServicesAndLandscapingEn.tagline}. ${siteConfigGutierrezSonsTreeServicesAndLandscapingEn.hero.subhead}`,
  keywords: [
    "Gutierrez & Sons Tree Services and Landscaping",
    "tree removal Gardena CA",
    "tree service Gardena",
    "stump grinding Gardena",
    "emergency tree service 90248",
    "Mark tree service",
  ],
}

export default function GutierrezSonsTreeServicesAndLandscapingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGutierrezSonsTreeServicesAndLandscapingEn} />
}
