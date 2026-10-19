import React from 'react'
import type { Metadata } from 'next'
import { siteConfigArtisticTreesIncEn } from '../../../siteConfig.artistic-trees-inc.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigArtisticTreesIncEn.businessName} | ${siteConfigArtisticTreesIncEn.tagline}`,
  description: `${siteConfigArtisticTreesIncEn.tagline}. ${siteConfigArtisticTreesIncEn.hero.subhead}`,
  keywords: [
    "Artistic Trees Inc",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Rene tree service",
  ],
}

export default function ArtisticTreesIncEnglishPage() {
  return <UniversalCompanyPage config={siteConfigArtisticTreesIncEn} />
}
