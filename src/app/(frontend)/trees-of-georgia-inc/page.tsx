import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreesOfGeorgiaIncEn } from '../../../siteConfig.trees-of-georgia-inc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreesOfGeorgiaIncEn.businessName} | ${siteConfigTreesOfGeorgiaIncEn.tagline}`,
  description: `${siteConfigTreesOfGeorgiaIncEn.tagline}. ${siteConfigTreesOfGeorgiaIncEn.hero.subhead}`,
  keywords: [
    "Trees of Georgia, Inc.",
    "tree removal Roswell GA",
    "tree service Roswell",
    "stump grinding Roswell",
    "emergency tree service 30076",
    "Roy tree service",
  ],
}

export default function TreesOfGeorgiaIncEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreesOfGeorgiaIncEn} />
}
