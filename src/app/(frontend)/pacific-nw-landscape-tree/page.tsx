import React from 'react'
import type { Metadata } from 'next'
import { siteConfigPacificNwLandscapeTreeEn } from '../../../siteConfig.pacific-nw-landscape-tree.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigPacificNwLandscapeTreeEn.businessName} | ${siteConfigPacificNwLandscapeTreeEn.tagline}`,
  description: `${siteConfigPacificNwLandscapeTreeEn.tagline}. ${siteConfigPacificNwLandscapeTreeEn.hero.subhead}`,
  keywords: [
    "Pacific NW Landscape & Tree Services",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function PacificNwLandscapeTreeEnglishPage() {
  return <UniversalCompanyPage config={siteConfigPacificNwLandscapeTreeEn} />
}
