import React from 'react'
import type { Metadata } from 'next'
import { siteConfigTreeTopFlyerClimbingRu } from '../../../../siteConfig.tree-top-flyer-climbing.ru.js'
import { UniversalCompanyPage } from '../../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigTreeTopFlyerClimbingRu.businessName} | ${siteConfigTreeTopFlyerClimbingRu.tagline}`,
  description: `${siteConfigTreeTopFlyerClimbingRu.tagline}. ${siteConfigTreeTopFlyerClimbingRu.hero.subhead}`,
}

export default function TreeTopFlyerClimbingRussianPage() {
  return <UniversalCompanyPage config={siteConfigTreeTopFlyerClimbingRu} />
}
