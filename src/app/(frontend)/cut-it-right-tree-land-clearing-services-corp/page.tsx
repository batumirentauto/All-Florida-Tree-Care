import React from 'react'
import type { Metadata } from 'next'
import { siteConfigCutItRightTreeLandClearingServicesCorpEn } from '../../../siteConfig.cut-it-right-tree-land-clearing-services-corp.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigCutItRightTreeLandClearingServicesCorpEn.businessName} | ${siteConfigCutItRightTreeLandClearingServicesCorpEn.tagline}`,
  description: `${siteConfigCutItRightTreeLandClearingServicesCorpEn.tagline}. ${siteConfigCutItRightTreeLandClearingServicesCorpEn.hero.subhead}`,
  keywords: [
    "Cut it Right Tree & Land Clearing Services, Corp",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Steve tree service",
  ],
}

export default function CutItRightTreeLandClearingServicesCorpEnglishPage() {
  return <UniversalCompanyPage config={siteConfigCutItRightTreeLandClearingServicesCorpEn} />
}
