import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeTopFlyerClimbingEn } from '../../../siteConfig.tree-top-flyer-climbing.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeTopFlyerClimbingEn.businessName} | ${siteConfigTreeTopFlyerClimbingEn.tagline}`,
  description: `${siteConfigTreeTopFlyerClimbingEn.tagline}. ${siteConfigTreeTopFlyerClimbingEn.hero.subhead}`,
  keywords: [
    "Tree Top Flyer Climbing Services, LLC",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function TreeTopFlyerClimbingEnglishPage() {
  return <UniversalCompanyPage config={siteConfigTreeTopFlyerClimbingEn} />
}
