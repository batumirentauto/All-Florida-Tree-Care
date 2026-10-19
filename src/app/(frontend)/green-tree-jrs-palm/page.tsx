import React from 'react'
import type { Metadata } from 'next'
import { siteConfigGreenTreeJrsPalmEn } from '../../../siteConfig.green-tree-jrs-palm.en.js'
import { UniversalCompanyPage } from '../../../components/universal/UniversalCompanyPage'

export const metadata: Metadata = {
  title: `${siteConfigGreenTreeJrsPalmEn.businessName} | ${siteConfigGreenTreeJrsPalmEn.tagline}`,
  description: `${siteConfigGreenTreeJrsPalmEn.tagline}. ${siteConfigGreenTreeJrsPalmEn.hero.subhead}`,
  keywords: [
    "GREEN TREE JRS PALM TREE SERVICE",
    "tree removal Local FL",
    "tree service Local",
    "stump grinding Local",
    "emergency tree service 33000",
    "Lead Arborist tree service",
  ],
}

export default function GreenTreeJrsPalmEnglishPage() {
  return <UniversalCompanyPage config={siteConfigGreenTreeJrsPalmEn} />
}
